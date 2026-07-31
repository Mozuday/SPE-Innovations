import { useState } from "react";
import {
  Eye,
  EyeOff,
  Pencil,
  PlayCircle,
  Plus,
  Trash2,
  X,
} from "lucide-react";

type Video = {
  id: number;
  courseId: number;
  title: string;
  videoUrl: string;
  duration: string;
  lessonNumber: number;
  published: boolean;
};

type Course = {
  id: number;
  title: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
  },
  {
    id: 2,
    title: "Frontend Development",
  },
  {
    id: 3,
    title: "Backend Development",
  },
];

const initialVideos: Video[] = [
  {
    id: 1,
    courseId: 1,
    title: "Introduction to Full Stack Development",
    videoUrl: "https://www.youtube.com/watch?v=example",
    duration: "15:30",
    lessonNumber: 1,
    published: true,
  },
  {
    id: 2,
    courseId: 1,
    title: "HTML Fundamentals",
    videoUrl: "https://www.youtube.com/watch?v=example",
    duration: "25:45",
    lessonNumber: 2,
    published: true,
  },
  {
    id: 3,
    courseId: 2,
    title: "Introduction to React",
    videoUrl: "https://www.youtube.com/watch?v=example",
    duration: "30:00",
    lessonNumber: 1,
    published: false,
  },
];

const ManageVideos = () => {
  const [videos, setVideos] = useState<Video[]>(initialVideos);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingVideo, setEditingVideo] =
    useState<Video | null>(null);

  const [courseId, setCourseId] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [duration, setDuration] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [published, setPublished] = useState(true);

  const resetForm = () => {
    setCourseId("");
    setTitle("");
    setVideoUrl("");
    setDuration("");
    setLessonNumber("");
    setPublished(true);
    setEditingVideo(null);
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (video: Video) => {
    setEditingVideo(video);

    setCourseId(String(video.courseId));
    setTitle(video.title);
    setVideoUrl(video.videoUrl);
    setDuration(video.duration);
    setLessonNumber(String(video.lessonNumber));
    setPublished(video.published);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const getCourseName = (id: number) => {
    return (
      courses.find((course) => course.id === id)?.title ||
      "Unknown Course"
    );
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !courseId ||
      !title.trim() ||
      !videoUrl.trim() ||
      !duration.trim() ||
      !lessonNumber
    ) {
      return;
    }

    const selectedCourseId = Number(courseId);
    const selectedLessonNumber = Number(lessonNumber);

    if (editingVideo) {
      setVideos((currentVideos) =>
        currentVideos.map((video) =>
          video.id === editingVideo.id
            ? {
                ...video,
                courseId: selectedCourseId,
                title: title.trim(),
                videoUrl: videoUrl.trim(),
                duration: duration.trim(),
                lessonNumber: selectedLessonNumber,
                published,
              }
            : video
        )
      );
    } else {
      const newVideo: Video = {
        id: Date.now(),
        courseId: selectedCourseId,
        title: title.trim(),
        videoUrl: videoUrl.trim(),
        duration: duration.trim(),
        lessonNumber: selectedLessonNumber,
        published,
      };

      setVideos((currentVideos) => [
        ...currentVideos,
        newVideo,
      ]);
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this video?"
    );

    if (!confirmed) {
      return;
    }

    setVideos((currentVideos) =>
      currentVideos.filter((video) => video.id !== id)
    );
  };

  const togglePublished = (id: number) => {
    setVideos((currentVideos) =>
      currentVideos.map((video) =>
        video.id === id
          ? {
              ...video,
              published: !video.published,
            }
          : video
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Manage Course Videos
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Add and manage lessons and videos inside your courses.
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

      {/* Videos */}

      <div className="grid gap-5">
        {videos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <PlayCircle
              size={40}
              className="mx-auto text-slate-400"
            />

            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              No Videos Found
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Add your first course video to get started.
            </p>
          </div>
        ) : (
          videos
            .sort(
              (a, b) =>
                a.courseId - b.courseId ||
                a.lessonNumber - b.lessonNumber
            )
            .map((video) => (
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
                          Lesson {video.lessonNumber}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            video.published
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                          }`}
                        >
                          {video.published
                            ? "Published"
                            : "Draft"}
                        </span>
                      </div>

                      <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                        {video.title}
                      </h2>

                      <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                        {getCourseName(video.courseId)}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <span>
                          Duration: {video.duration}
                        </span>

                        <a
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:underline"
                        >
                          Open Video
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        togglePublished(video.id)
                      }
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                    >
                      {video.published ? (
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
                      onClick={() =>
                        openEditModal(video)
                      }
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                    >
                      <Pencil size={17} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(video.id)
                      }
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
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingVideo
                    ? "Edit Video"
                    : "Add Video"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Add a lesson to one of your courses.
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

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6"
            >
              {/* Course */}

              <div>
                <label
                  htmlFor="video-course"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Course
                </label>

                <select
                  id="video-course"
                  value={courseId}
                  onChange={(event) =>
                    setCourseId(event.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                >
                  <option value="">
                    Select Course
                  </option>

                  {courses.map((course) => (
                    <option
                      key={course.id}
                      value={course.id}
                    >
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>

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
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="Introduction to React"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                  onChange={(event) =>
                    setVideoUrl(event.target.value)
                  }
                  placeholder="https://www.youtube.com/watch?v=..."
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Later, this can be replaced with secure Cloudinary or private video hosting.
                </p>
              </div>

              {/* Duration + Lesson */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="video-duration"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Duration
                  </label>

                  <input
                    id="video-duration"
                    type="text"
                    value={duration}
                    onChange={(event) =>
                      setDuration(event.target.value)
                    }
                    placeholder="25:30"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                    value={lessonNumber}
                    onChange={(event) =>
                      setLessonNumber(event.target.value)
                    }
                    placeholder="1"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Publish */}

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(event) =>
                    setPublished(event.target.checked)
                  }
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
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  {editingVideo
                    ? "Update Video"
                    : "Create Video"}
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