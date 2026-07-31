import { useState } from "react";
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
} from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: string;
  workMode: string;
  experience: string;
  salary: string;
  skills: string[];
  description: string;
  applicationLink: string;
  deadline: string;
  published: boolean;
};

const initialJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Example Technologies",
    location: "Bengaluru, India",
    jobType: "Full Time",
    workMode: "Hybrid",
    experience: "0-2 Years",
    salary: "₹4 LPA - ₹8 LPA",
    skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    description:
      "Looking for a frontend developer to build modern and scalable web applications.",
    applicationLink: "https://example.com/apply",
    deadline: "2026-08-31",
    published: true,
  },
];

const ManageJobs = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

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
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (job: Job) => {
    setEditingJob(job);

    setTitle(job.title);
    setCompany(job.company);
    setLocation(job.location);
    setJobType(job.jobType);
    setWorkMode(job.workMode);
    setExperience(job.experience);
    setSalary(job.salary);
    setSkills(job.skills.join(", "));
    setDescription(job.description);
    setApplicationLink(job.applicationLink);
    setDeadline(job.deadline);
    setPublished(job.published);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const jobData = {
      title: title.trim(),
      company: company.trim(),
      location: location.trim(),
      jobType,
      workMode,
      experience: experience.trim(),
      salary: salary.trim(),
      skills: skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      description: description.trim(),
      applicationLink: applicationLink.trim(),
      deadline,
      published,
    };

    if (
      !jobData.title ||
      !jobData.company ||
      !jobData.location ||
      !jobData.jobType ||
      !jobData.workMode ||
      !jobData.experience ||
      !jobData.skills.length ||
      !jobData.description ||
      !jobData.applicationLink ||
      !jobData.deadline
    ) {
      return;
    }

    if (editingJob) {
      setJobs((currentJobs) =>
        currentJobs.map((job) =>
          job.id === editingJob.id
            ? {
                ...job,
                ...jobData,
              }
            : job
        )
      );
    } else {
      const newJob: Job = {
        id: Date.now(),
        ...jobData,
      };

      setJobs((currentJobs) => [
        newJob,
        ...currentJobs,
      ]);
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmed) {
      return;
    }

    setJobs((currentJobs) =>
      currentJobs.filter((job) => job.id !== id)
    );
  };

  const togglePublished = (id: number) => {
    setJobs((currentJobs) =>
      currentJobs.map((job) =>
        job.id === id
          ? {
              ...job,
              published: !job.published,
            }
          : job
      )
    );
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

      {/* Jobs */}

      <div className="grid gap-6">
        {jobs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <Briefcase
              size={42}
              className="mx-auto text-slate-400"
            />

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
                          job.published
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        }`}
                      >
                        {job.published
                          ? "Published"
                          : "Draft"}
                      </span>

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {job.jobType}
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
                        {job.workMode}
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
                    onClick={() =>
                      togglePublished(job.id)
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {job.published ? (
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
                      openEditModal(job)
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <Pencil size={17} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(job.id)
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

      {/* Modal */}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Modal Header */}

            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingJob
                    ? "Edit Job"
                    : "Add Job"}
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

            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6"
            >
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
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="Frontend Developer"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                    onChange={(event) =>
                      setCompany(event.target.value)
                    }
                    placeholder="Company Name"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                    onChange={(event) =>
                      setLocation(event.target.value)
                    }
                    placeholder="Bengaluru, India"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                    onChange={(event) =>
                      setJobType(event.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="">
                      Select Job Type
                    </option>

                    <option value="Full Time">
                      Full Time
                    </option>

                    <option value="Part Time">
                      Part Time
                    </option>

                    <option value="Internship">
                      Internship
                    </option>

                    <option value="Contract">
                      Contract
                    </option>

                    <option value="Freelance">
                      Freelance
                    </option>
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
                    onChange={(event) =>
                      setWorkMode(event.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="">
                      Select Work Mode
                    </option>

                    <option value="Remote">
                      Remote
                    </option>

                    <option value="On-site">
                      On-site
                    </option>

                    <option value="Hybrid">
                      Hybrid
                    </option>
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
                    onChange={(event) =>
                      setExperience(event.target.value)
                    }
                    placeholder="0-2 Years"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                    onChange={(event) =>
                      setSalary(event.target.value)
                    }
                    placeholder="₹4 LPA - ₹8 LPA"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                  onChange={(event) =>
                    setSkills(event.target.value)
                  }
                  placeholder="React, TypeScript, Git"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Separate skills with commas.
                </p>
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
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="Describe the job responsibilities and requirements..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                  onChange={(event) =>
                    setApplicationLink(event.target.value)
                  }
                  placeholder="https://company.com/careers"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
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
                  onChange={(event) =>
                    setDeadline(event.target.value)
                  }
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
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
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  <ExternalLink size={18} />

                  {editingJob
                    ? "Update Job"
                    : "Publish Job"}
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