import { useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle,
  Eye,
  EyeOff,
  Pencil,
  Plus,
  Trash2,
  Users,
  X,
} from "lucide-react";

type Internship = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  eligibility: string;
  skills: string[];
  seats: number;
  deadline: string;
  published: boolean;
};

const initialInternships: Internship[] = [
  {
    id: 1,
    title: "Frontend Development Internship",
    category: "Frontend Development",
    description:
      "Learn modern frontend development by working on responsive websites and real-world projects.",
    duration: "8 Weeks",
    eligibility: "Students and freshers with basic HTML, CSS and JavaScript knowledge.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    seats: 5,
    deadline: "2026-08-31",
    published: true,
  },
  {
    id: 2,
    title: "Backend Development Internship",
    category: "Backend Development",
    description:
      "Build APIs, authentication systems and database-driven applications using modern backend technologies.",
    duration: "8 Weeks",
    eligibility: "Students or developers with basic programming knowledge.",
    skills: ["Node.js", "Express", "PostgreSQL", "REST API"],
    seats: 5,
    deadline: "2026-08-31",
    published: true,
  },
];

const ManageInternships = () => {
  const [internships, setInternships] =
    useState<Internship[]>(initialInternships);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingInternship, setEditingInternship] =
    useState<Internship | null>(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [skills, setSkills] = useState("");
  const [seats, setSeats] = useState("");
  const [deadline, setDeadline] = useState("");
  const [published, setPublished] = useState(true);

  const resetForm = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    setDuration("");
    setEligibility("");
    setSkills("");
    setSeats("");
    setDeadline("");
    setPublished(true);
    setEditingInternship(null);
  };

  const openAddModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (internship: Internship) => {
    setEditingInternship(internship);

    setTitle(internship.title);
    setCategory(internship.category);
    setDescription(internship.description);
    setDuration(internship.duration);
    setEligibility(internship.eligibility);
    setSkills(internship.skills.join(", "));
    setSeats(String(internship.seats));
    setDeadline(internship.deadline);
    setPublished(internship.published);

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

    if (
      !title.trim() ||
      !category.trim() ||
      !description.trim() ||
      !duration.trim() ||
      !eligibility.trim() ||
      !skills.trim() ||
      !seats ||
      !deadline
    ) {
      return;
    }

    const internshipData = {
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      duration: duration.trim(),
      eligibility: eligibility.trim(),
      skills: skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
      seats: Number(seats),
      deadline,
      published,
    };

    if (editingInternship) {
      setInternships((currentInternships) =>
        currentInternships.map((internship) =>
          internship.id === editingInternship.id
            ? {
                ...internship,
                ...internshipData,
              }
            : internship
        )
      );
    } else {
      const newInternship: Internship = {
        id: Date.now(),
        ...internshipData,
      };

      setInternships((currentInternships) => [
        ...currentInternships,
        newInternship,
      ]);
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this internship?"
    );

    if (!confirmed) {
      return;
    }

    setInternships((currentInternships) =>
      currentInternships.filter(
        (internship) => internship.id !== id
      )
    );
  };

  const togglePublished = (id: number) => {
    setInternships((currentInternships) =>
      currentInternships.map((internship) =>
        internship.id === id
          ? {
              ...internship,
              published: !internship.published,
            }
          : internship
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Manage Internships
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Create and manage internship opportunities for students.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Internship
        </button>
      </div>

      {/* Internship List */}

      <div className="grid gap-6">
        {internships.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <BriefcaseBusiness
              size={42}
              className="mx-auto text-slate-400"
            />

            <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              No Internships Found
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Create your first internship opportunity.
            </p>
          </div>
        ) : (
          internships.map((internship) => (
            <div
              key={internship.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                {/* Information */}

                <div className="flex gap-5">
                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400 sm:flex">
                    <BriefcaseBusiness size={28} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {internship.category}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          internship.published
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        }`}
                      >
                        {internship.published
                          ? "Published"
                          : "Draft"}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
                      {internship.title}
                    </h2>

                    <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                      {internship.description}
                    </p>

                    {/* Details */}

                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        Duration: {internship.duration}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        <Users size={16} />
                        {internship.seats} Seats
                      </span>

                      <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        Deadline: {internship.deadline}
                      </span>
                    </div>

                    {/* Skills */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {internship.skills.map((skill) => (
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
                      togglePublished(internship.id)
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {internship.published ? (
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
                      openEditModal(internship)
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <Pencil size={17} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(internship.id)
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
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Modal Header */}

            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingInternship
                    ? "Edit Internship"
                    : "Add Internship"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Manage the internship details displayed to applicants.
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
              {/* Title */}

              <div>
                <label
                  htmlFor="internship-title"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Internship Title
                </label>

                <input
                  id="internship-title"
                  type="text"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                  placeholder="Frontend Development Internship"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Category + Duration */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="internship-category"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Category
                  </label>

                  <select
                    id="internship-category"
                    value={category}
                    onChange={(event) =>
                      setCategory(event.target.value)
                    }
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="">
                      Select Category
                    </option>

                    <option value="Web Design">
                      Web Design
                    </option>

                    <option value="Frontend Development">
                      Frontend Development
                    </option>

                    <option value="Backend Development">
                      Backend Development
                    </option>

                    <option value="App Development">
                      App Development
                    </option>

                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="internship-duration"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Duration
                  </label>

                  <input
                    id="internship-duration"
                    type="text"
                    value={duration}
                    onChange={(event) =>
                      setDuration(event.target.value)
                    }
                    placeholder="8 Weeks"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Description */}

              <div>
                <label
                  htmlFor="internship-description"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Description
                </label>

                <textarea
                  id="internship-description"
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="Describe the internship program..."
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Eligibility */}

              <div>
                <label
                  htmlFor="internship-eligibility"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Eligibility
                </label>

                <textarea
                  id="internship-eligibility"
                  value={eligibility}
                  onChange={(event) =>
                    setEligibility(event.target.value)
                  }
                  placeholder="Who can apply for this internship?"
                  rows={3}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Skills */}

              <div>
                <label
                  htmlFor="internship-skills"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Skills
                </label>

                <input
                  id="internship-skills"
                  type="text"
                  value={skills}
                  onChange={(event) =>
                    setSkills(event.target.value)
                  }
                  placeholder="React, JavaScript, Tailwind CSS"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Separate skills with commas.
                </p>
              </div>

              {/* Seats + Deadline */}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="internship-seats"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Available Seats
                  </label>

                  <input
                    id="internship-seats"
                    type="number"
                    min="1"
                    value={seats}
                    onChange={(event) =>
                      setSeats(event.target.value)
                    }
                    placeholder="5"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="internship-deadline"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Application Deadline
                  </label>

                  <input
                    id="internship-deadline"
                    type="date"
                    value={deadline}
                    onChange={(event) =>
                      setDeadline(event.target.value)
                    }
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

                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="text-green-500"
                  />

                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Publish Internship
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Published internships will be visible on the public website.
                    </p>
                  </div>
                </div>
              </label>

              {/* Form Actions */}

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
                  {editingInternship
                    ? "Update Internship"
                    : "Create Internship"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageInternships;