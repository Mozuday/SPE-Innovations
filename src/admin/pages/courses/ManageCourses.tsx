import { useEffect, useState } from "react";
import {
  BookOpen,
  Eye,
  EyeOff,
  Pencil,
  Plus,
  Trash2,
  X,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../../../lib/supabase";
import type { Tables } from "../../../types/supabase";

type Course = Tables<"courses">;
type Level = "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ManageCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState<Level | "">("");
  const [price, setPrice] = useState("");
  const [published, setPublished] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  const loadCourses = async () => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      console.error("Failed to load courses:", fetchError);
      setError("Couldn't load courses. Please refresh and try again.");
    } else {
      setCourses(data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDuration("");
    setLevel("");
    setPrice("");
    setPublished(true);
    setEditingCourse(null);
    setFormError(null);
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (course: Course) => {
    setEditingCourse(course);
    setTitle(course.title);
    setDescription(course.description ?? "");
    setDuration(course.duration);
    setLevel((course.level as Level) ?? "");
    setPrice(course.price != null ? String(course.price) : "");
    setPublished(course.is_published);
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

    if (!title.trim() || !description.trim() || !duration.trim() || !level) {
      return;
    }

    setSaving(true);

    try {
      const parsedPrice = price.trim() ? Number(price) : null;

      if (editingCourse) {
        const slug =
          title.trim() === editingCourse.title
            ? editingCourse.slug
            : slugify(title);

        const { error: updateError } = await supabase
          .from("courses")
          .update({
            title: title.trim(),
            slug,
            description: description.trim(),
            duration: duration.trim(),
            level,
            price: parsedPrice,
            is_published: published,
          })
          .eq("id", editingCourse.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("courses").insert({
          title: title.trim(),
          slug: slugify(title),
          description: description.trim(),
          duration: duration.trim(),
          level,
          price: parsedPrice,
          is_published: published,
        });

        if (insertError) throw insertError;
      }

      await loadCourses();
      closeModal();
    } catch (err: any) {
      console.error("Failed to save course:", err);
      if (err?.code === "23505") {
        setFormError(
          "A course with a very similar title already exists. Try a slightly different title."
        );
      } else {
        setFormError("Something went wrong saving this course. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this course? This can't be undone."
    );

    if (!confirmed) return;

    const { error: deleteError } = await supabase
      .from("courses")
      .delete()
      .eq("id", id);

    if (deleteError) {
      console.error("Failed to delete course:", deleteError);
      window.alert(
        "Couldn't delete this course. If it has videos attached, remove those first."
      );
      return;
    }

    setCourses((current) => current.filter((course) => course.id !== id));
  };

  const togglePublished = async (course: Course) => {
    const nextValue = !course.is_published;

    // Optimistic update — flip it in the UI immediately, then confirm with
    // the server. If the server call fails, revert.
    setCourses((current) =>
      current.map((c) =>
        c.id === course.id ? { ...c, is_published: nextValue } : c
      )
    );

    const { error: toggleError } = await supabase
      .from("courses")
      .update({ is_published: nextValue })
      .eq("id", course.id);

    if (toggleError) {
      console.error("Failed to toggle published state:", toggleError);
      setCourses((current) =>
        current.map((c) =>
          c.id === course.id ? { ...c, is_published: course.is_published } : c
        )
      );
      window.alert("Couldn't update publish status. Please try again.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Manage Courses
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Create, edit and manage courses displayed on your website.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Course
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Course List */}
      <div className="grid gap-6">
        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">Loading courses...</p>
          </div>
        ) : courses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <BookOpen size={40} className="mx-auto text-slate-400" />

            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              No Courses Found
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Create your first course to get started.
            </p>
          </div>
        ) : (
          courses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                {/* Course Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {course.title}
                    </h2>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        course.is_published
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      {course.is_published ? "Published" : "Draft"}
                    </span>
                  </div>

                  <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                    {course.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
                      {course.duration}
                    </span>

                    <span className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-medium text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
                      {course.level}
                    </span>

                    <span className="rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700 dark:bg-green-950/50 dark:text-green-300">
                      ₹{course.price ?? "Free"}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => togglePublished(course)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {course.is_published ? (
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
                    onClick={() => openEditModal(course)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <Pencil size={17} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(course.id)}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingCourse ? "Edit Course" : "Add Course"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {editingCourse
                    ? "Update course information."
                    : "Create a new course."}
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
                  htmlFor="course-title"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Course Title
                </label>

                <input
                  id="course-title"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Full Stack Web Development"
                  required
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="course-description"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Description
                </label>

                <textarea
                  id="course-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the course..."
                  rows={4}
                  required
                  disabled={saving}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Duration + Level */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="course-duration"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Duration
                  </label>

                  <input
                    id="course-duration"
                    type="text"
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                    placeholder="12 Weeks"
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="course-level"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Level
                  </label>

                  <select
                    id="course-level"
                    value={level}
                    onChange={(event) => setLevel(event.target.value as Level)}
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Beginner to Advanced">
                      Beginner to Advanced
                    </option>
                  </select>
                </div>
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="course-price"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Price (₹)
                </label>

                <input
                  id="course-price"
                  type="number"
                  min="0"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="4999"
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Published */}
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
                    Publish Course
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Published courses will be visible on the public website.
                  </p>
                </div>
              </label>

              {/* Buttons */}
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
                  {saving
                    ? "Saving..."
                    : editingCourse
                      ? "Update Course"
                      : "Create Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;