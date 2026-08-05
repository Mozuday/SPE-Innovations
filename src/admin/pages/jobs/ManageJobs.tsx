import { useEffect, useState } from "react";
import {
  Briefcase,
  CalendarDays,
  ExternalLink,
  Eye,
  EyeOff,
  MapPin,
  Pencil,
  Plus,
  Trash2,
  X,
  AlertCircle,
} from "lucide-react";
import { supabase } from "../../../lib/supabase";
import type { Tables } from "../../../types/supabase";

type Job = Tables<"jobs">;

// Includes company in the slug since job titles like "Frontend Developer"
// are likely to repeat across different companies.
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ManageJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const [deadline, setDeadline] = useState("");
  const [published, setPublished] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  const loadJobs = async () => {
    setLoading(true);
    setError(null);

    const { data, error: fetchError } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (fetchError) {
      console.error("Failed to load jobs:", fetchError);
      setError("Couldn't load jobs. Please refresh and try again.");
    } else {
      setJobs(data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setLocation("");
    setJobType("");
    setWorkMode("");
    setExperience("");
    setSalary("");
    setSkills("");
    setDescription("");
    setApplicationLink("");
    setDeadline("");
    setPublished(true);
    setEditingJob(null);
    setFormError(null);
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (job: Job) => {
    setEditingJob(job);
    setTitle(job.title);
    setCompany(job.company ?? "");
    setLocation(job.location ?? "");
    setJobType(job.employment_type ?? "");
    setWorkMode(job.work_mode ?? "");
    setExperience(job.experience ?? "");
    setSalary(job.salary ?? "");
    setSkills(job.skills.join(", "));
    setDescription(job.description ?? "");
    setApplicationLink(job.application_link ?? "");
    setDeadline(job.deadline ?? "");
    setPublished(job.is_published);
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

    const skillList = skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    if (
      !title.trim() ||
      !company.trim() ||
      !location.trim() ||
      !jobType ||
      !workMode ||
      !experience.trim() ||
      !skillList.length ||
      !description.trim() ||
      !applicationLink.trim() ||
      !deadline
    ) {
      return;
    }

    setSaving(true);

    try {
      const payload = {
        title: title.trim(),
        company: company.trim(),
        location: location.trim(),
        employment_type: jobType as Job["employment_type"],
        work_mode: workMode as Job["work_mode"],
        experience: experience.trim(),
        salary: salary.trim() || null,
        skills: skillList,
        description: description.trim(),
        application_link: applicationLink.trim(),
        deadline,
        is_published: published,
      };

      if (editingJob) {
        const slug =
          title.trim() === editingJob.title && company.trim() === editingJob.company
            ? editingJob.slug
            : slugify(`${title}-${company}`);

        const { error: updateError } = await supabase
          .from("jobs")
          .update({ ...payload, slug })
          .eq("id", editingJob.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from("jobs").insert({
          ...payload,
          slug: slugify(`${title}-${company}`),
        });

        if (insertError) throw insertError;
      }

      await loadJobs();
      closeModal();
    } catch (err: any) {
      console.error("Failed to save job:", err);
      if (err?.code === "23505") {
        setFormError(
          "A job with this exact title and company already exists. Try adjusting one slightly."
        );
      } else {
        setFormError("Something went wrong saving this job. Please try again.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job? This can't be undone."
    );

    if (!confirmed) return;

    const { error: deleteError } = await supabase.from("jobs").delete().eq("id", id);

    if (deleteError) {
      console.error("Failed to delete job:", deleteError);
      window.alert(
        "Couldn't delete this job. If it has applications attached, review those first."
      );
      return;
    }

    setJobs((current) => current.filter((job) => job.id !== id));
  };

  const togglePublished = async (job: Job) => {
    const nextValue = !job.is_published;

    setJobs((current) =>
      current.map((j) => (j.id === job.id ? { ...j, is_published: nextValue } : j))
    );

    const { error: toggleError } = await supabase
      .from("jobs")
      .update({ is_published: nextValue })
      .eq("id", job.id);

    if (toggleError) {
      console.error("Failed to toggle published state:", toggleError);
      setJobs((current) =>
        current.map((j) => (j.id === job.id ? { ...j, is_published: job.is_published } : j))
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
            Manage Jobs
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Publish and manage daily job opportunities for visitors.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Job
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Jobs */}
      <div className="grid gap-6">
        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">Loading jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <Briefcase size={42} className="mx-auto text-slate-400" />

            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              No Jobs Found
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Add your first job update.
            </p>
          </div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
                {/* Job Information */}
                <div className="flex gap-5">
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 sm:flex">
                    <Briefcase size={28} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          job.is_published
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        }`}
                      >
                        {job.is_published ? "Published" : "Draft"}
                      </span>

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {job.employment_type}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                      {job.title}
                    </h2>

                    <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                      {job.company}
                    </p>

                    <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                      {job.description}
                    </p>

                    {/* Job Details */}
                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        <MapPin size={16} />
                        {job.location}
                      </span>

                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {job.work_mode}
                      </span>

                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {job.experience}
                      </span>

                      {job.salary && (
                        <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {job.salary}
                        </span>
                      )}

                      <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        <CalendarDays size={16} />
                        {job.deadline}
                      </span>
                    </div>

                    {/* Skills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => togglePublished(job)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {job.is_published ? (
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
                    onClick={() => openEditModal(job)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <Pencil size={17} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(job.id)}
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
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingJob ? "Edit Job" : "Add Job"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Add complete information about the job opportunity.
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

              {/* Job Title */}
              <div>
                <label
                  htmlFor="job-title"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Job Title
                </label>

                <input
                  id="job-title"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Frontend Developer"
                  required
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Company + Location */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="job-company"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Company
                  </label>

                  <input
                    id="job-company"
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    placeholder="Company Name"
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="job-location"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Location
                  </label>

                  <input
                    id="job-location"
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="Bengaluru, India"
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Job Type + Work Mode */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="job-type"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Job Type
                  </label>

                  <select
                    id="job-type"
                    value={jobType}
                    onChange={(event) => setJobType(event.target.value)}
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="">Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="job-mode"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Work Mode
                  </label>

                  <select
                    id="job-mode"
                    value={workMode}
                    onChange={(event) => setWorkMode(event.target.value)}
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="">Select Work Mode</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Experience + Salary */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="job-experience"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Experience
                  </label>

                  <input
                    id="job-experience"
                    type="text"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                    placeholder="0-2 Years"
                    required
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="job-salary"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Salary
                  </label>

                  <input
                    id="job-salary"
                    type="text"
                    value={salary}
                    onChange={(event) => setSalary(event.target.value)}
                    placeholder="₹4 LPA - ₹8 LPA"
                    disabled={saving}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Skills */}
              <div>
                <label
                  htmlFor="job-skills"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Required Skills
                </label>

                <input
                  id="job-skills"
                  type="text"
                  value={skills}
                  onChange={(event) => setSkills(event.target.value)}
                  placeholder="React, TypeScript, Git"
                  required
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />

                <p className="mt-2 text-xs text-slate-500">Separate skills with commas.</p>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="job-description"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Job Description
                </label>

                <textarea
                  id="job-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the job responsibilities and requirements..."
                  rows={5}
                  required
                  disabled={saving}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Application Link */}
              <div>
                <label
                  htmlFor="job-link"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Application URL
                </label>

                <input
                  id="job-link"
                  type="url"
                  value={applicationLink}
                  onChange={(event) => setApplicationLink(event.target.value)}
                  placeholder="https://company.com/careers"
                  required
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Deadline */}
              <div>
                <label
                  htmlFor="job-deadline"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Application Deadline
                </label>

                <input
                  id="job-deadline"
                  type="date"
                  value={deadline}
                  onChange={(event) => setDeadline(event.target.value)}
                  required
                  disabled={saving}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
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
                    Publish Job
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Published jobs will be visible on the public website.
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
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ExternalLink size={18} />
                  {saving ? "Saving..." : editingJob ? "Update Job" : "Publish Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageJobs;