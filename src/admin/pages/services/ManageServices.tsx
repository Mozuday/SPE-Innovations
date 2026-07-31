import { useState } from "react";
import { Pencil, Plus, Trash2, X } from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  features: string[];
};

const initialServices: Service[] = [
  {
    id: 1,
    title: "Website Development",
    description:
      "Professional, responsive and SEO-friendly websites built for businesses, startups and personal brands.",
    features: [
      "Business Websites",
      "Portfolio Websites",
      "E-Commerce",
      "Landing Pages",
    ],
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Cross-platform Android and iOS applications using modern technologies.",
    features: [
      "Android Apps",
      "iOS Apps",
      "React Native",
      "Flutter",
    ],
  },
  {
    id: 3,
    title: "Software Development",
    description:
      "Custom software solutions designed to automate business operations and improve productivity.",
    features: [
      "ERP Systems",
      "CRM",
      "Desktop Software",
      "Automation",
    ],
  },
];

const ManageServices = () => {
  const [services, setServices] = useState<Service[]>(initialServices);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingService, setEditingService] =
    useState<Service | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");

  const openAddModal = () => {
    setEditingService(null);
    setTitle("");
    setDescription("");
    setFeatures("");
    setIsModalOpen(true);
  };

  const openEditModal = (service: Service) => {
    setEditingService(service);
    setTitle(service.title);
    setDescription(service.description);
    setFeatures(service.features.join(", "));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
    setTitle("");
    setDescription("");
    setFeatures("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const featureList = features
      .split(",")
      .map((feature) => feature.trim())
      .filter(Boolean);

    if (editingService) {
      setServices((currentServices) =>
        currentServices.map((service) =>
          service.id === editingService.id
            ? {
                ...service,
                title: title.trim(),
                description: description.trim(),
                features: featureList,
              }
            : service
        )
      );
    } else {
      const newService: Service = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        features: featureList,
      };

      setServices((currentServices) => [
        ...currentServices,
        newService,
      ]);
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmed) {
      return;
    }

    setServices((currentServices) =>
      currentServices.filter((service) => service.id !== id)
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Manage Services
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Add, edit and manage the services displayed on your website.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Service
        </button>
      </div>

      {/* Services List */}
      <div className="grid gap-6">
        {services.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              No Services Found
            </h2>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Add your first service to display it here.
            </p>
          </div>
        ) : (
          services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                {/* Service Information */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => openEditModal(service)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <Pencil size={17} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(service.id)}
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
          <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingService ? "Edit Service" : "Add Service"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {editingService
                    ? "Update the service information."
                    : "Create a new service for your website."}
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
                  htmlFor="service-title"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Service Title
                </label>

                <input
                  id="service-title"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="e.g. Website Development"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="service-description"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Description
                </label>

                <textarea
                  id="service-description"
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  placeholder="Describe your service..."
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Features */}
              <div>
                <label
                  htmlFor="service-features"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Features
                </label>

                <input
                  id="service-features"
                  type="text"
                  value={features}
                  onChange={(event) =>
                    setFeatures(event.target.value)
                  }
                  placeholder="Business Websites, E-Commerce, Landing Pages"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Separate multiple features using commas.
                </p>
              </div>

              {/* Buttons */}
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
                  {editingService
                    ? "Update Service"
                    : "Create Service"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageServices;