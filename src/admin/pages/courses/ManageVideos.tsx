import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Pencil,
  PlayCircle,
  Plus,
  Trash2,
  X,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../../../lib/supabase";
import type { Tables } from "../../../types/supabase";

type Video = Tables<"course_videos">;

// course_videos.duration is stored in seconds. The UI collects "mm:ss"
// (or "h:mm:ss") for readability, so we convert both directions.
const parseDurationToSeconds = (value: string): number | null => {
  const parts = value.split(":").map((p) => p.trim());
  if (parts.length < 2 || parts.some((p) => p === "" || isNaN(Number(p)))) {
    return null;
  }
  const nums = parts.map(Number);
  if (nums.length === 2) {
    const [m, s] = nums;
    return m * 60 + s;
  }
  const [h, m, s] = nums;
  return h * 3600 + m * 60 + s;
};

const formatDuration = (totalSeconds: number | null): string => {
  if (totalSeconds == null) return "";
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
};

const ManageVideos = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const [courseTitle, setCourseTitle] = useState<string | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);

  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [orderIndex, setOrderIndex] = useState("");
  const [published, setPublished] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  const loadData = async () => {
    if (!courseId) return;

    setLoading(true);
    setError(null);

    const [courseRes, videosRes] = await Promise.all([
      supabase.from("courses").select("title").eq("id", courseId).single(),
      supabase
        .from("course_videos")
        .select("*")
        .eq("course_id", courseId)
        .order("order_index", { ascending: true }),
    ]);

    if (courseRes.error) {
      console.error("Failed to load course:", courseRes.error);
      setError("Couldn't find this course.");
    } else {
      setCourseTitle(courseRes.data.title);
    }

    if (videosRes.error) {
      console.error("Failed to load videos:", videosRes.error);
      setError("Couldn't load videos. Please refresh and try again.");
    } else {
      setVideos(videosRes.data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId]);

  const resetForm = () => {
    setTitle("");
    setVideoUrl("");
    setDuration("");
    setOrderIndex(String(videos.length + 1));
    setPublished(true);
    setEditingVideo(null);
    setFormError(null);
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (video: Video) => {
    setEditingVideo(video);
    setTitle(video.title);
    setVideoUrl(video.video_url ?? "");
    setDuration(formatDuration(video.duration));
    setOrderIndex(String(video.order_index));
    setPublished(video.is_published);
    setFormError(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!courseId || !title.trim() || !videoUrl.trim() || !duration.trim()) {
      return;
    }

    const durationSeconds = parseDurationToSeconds(duration.trim());
    if (durationSeconds === null) {
      setFormError('Duration must be in "mm:ss" format, e.g. 25:30');
      return;
    }

    setSaving(true);

    try {
      const payload = {
        course_id: courseId,
        title: title.trim(),
        video_url: videoUrl.trim(),
        provider: "external", // generic URL for now; formalize once Cloudinary is wired
        duration: durationSeconds,
        order_index: Number(orderIndex) || 0,
        is_published: published,
      };

      if (editingVideo) {
        const { error: updateError } = await supabase
          .from("course_videos")
          .update(payload)
          .eq("id", editingVideo.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from("course_videos")
          .insert(payload);

        if (insertError) throw insertError;
      }

      await loadData();
      closeModal();
    } catch (err) {
      console.error("Failed to save video:", err);
      setFormError("Something went wrong saving this video. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this video? This can't be undone."
    );

    if (!confirmed) return;

    const { error: deleteError } = await supabase
      .from("course_videos")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error("Failed to delete video:", deleteError);
      window.alert("Couldn't delete this video. Please try again.");
      return;
    }

    setVideos((current) => current.filter((video) => video.id !== id));
  };

  const togglePublished = async (video: Video) => {
    const nextValue = !video.is_published;

    setVideos((current) =>
      current.map((v) => (v.id === video.id ? { ...v, is_published: nextValue } : v))
    );

    const { error: toggleError } = await supabase
      .from("course_videos")
      .update({ is_published: nextValue })
      .eq("id", video.id);

    if (toggleError) {
      console.error("Failed to toggle published state:", toggleError);
      setVideos((current) =>
        current.map((v) =>
          v.id === video.id ? { ...v, is_published: video.is_published } : v
        )
      );
      window.alert("Couldn't update publish status. Please try again.");
    }
  };

  if (!courseId) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
        No course selected. Go back to Courses and choose one to manage its videos.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Back link */}
      <Link
        to="/admin/courses"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
      >
        <ArrowLeft size={16} />
        Back to Courses
      </Link>

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Manage Videos
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            {courseTitle
              ? `Lessons for "${courseTitle}"`
              : "Add and manage lessons for this course."}
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Video
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Videos */}
      <div className="grid gap-5">
        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">Loading videos...</p>
          </div>
        ) : videos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <PlayCircle size={40} className="mx-auto text-slate-400" />

            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              No Videos Found
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Add your first lesson video to get started.
            </p>
          </div>
        ) : (
          videos.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Video Info */}
                <div className="flex gap-5">
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 sm:flex">
                    <PlayCircle size={28} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        Lesson {video.order_index}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          video.is_published
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        }`}
                      >
                        {video.is_published ? "Published" : "Draft"}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                      {video.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <span>Duration: {formatDuration(video.duration)}</span>

                      {video.video_url && (
                        <a
                          href={video.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Open Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => togglePublished(video)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {video.is_published ? (
                      <>
                        <EyeOff size={17} />
                        Unpublish
                      </>
                    ) : (
                      <>
                        <Eye size={17} />
                        Publish
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => openEditModal(video)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <Pencil size={17} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(video.id)}
                    className="inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2 font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/30"
                  >
                    <Trash2 size={17} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingVideo ? "Edit Video" : "Add Video"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {courseTitle ? `Adding a lesson to "${courseTitle}"` : "Add a lesson"}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              {formError && (
                <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
                  <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Title */}
              <div>
                <label
                  htmlFor="video-title"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Video Title
                </label>

                <input
                  id="video-title"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Introduction to React"
                  required
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Video URL */}
              <div>
                <label
                  htmlFor="video-url"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Video URL
                </label>

                <input
                  id="video-url"
                  type="url"
                  value={videoUrl}
                  onChange={(event) => setVideoUrl(event.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Later, this can be replaced with secure Cloudinary or private video hosting.
                </p>
              </div>

              {/* Duration + Lesson Number */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="video-duration"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Duration (mm:ss)
                  </label>

                  <input
                    id="video-duration"
                    type="text"
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                    placeholder="25:30"
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lesson-number"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Lesson Number
                  </label>

                  <input
                    id="lesson-number"
                    type="number"
                    min="1"
                    value={orderIndex}
                    onChange={(event) => setOrderIndex(event.target.value)}
                    placeholder="1"
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Publish */}
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(event) => setPublished(event.target.checked)}
                  disabled={saving}
                  className="h-5 w-5 accent-blue-600"
                />

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Publish Video
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Published videos will be available to students.
                  </p>
                </div>
              </label>

              {/* Actions */}
              <div className="flex justify-end gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:opacity-60 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Saving..." : editingVideo ? "Update Video" : "Create Video"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageVideos;