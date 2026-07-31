import { useState } from "react";
import { Edit, Eye, EyeOff, Plus, Trash2, X } from "lucide-react";

type Blog = {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  published: boolean;
  createdAt: string;
};

const initialBlogs: Blog[] = [
  {
    id: 1,
    title: "Why Every Business Needs a Professional Website",
    category: "Web Development",
    excerpt:
      "A professional website helps businesses establish credibility and reach more customers.",
    content:
      "A professional website is one of the most important digital assets for a modern business.",
    author: "SPE Innovations",
    published: true,
    createdAt: "2026-07-24",
  },
];

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    excerpt: "",
    content: "",
    author: "SPE Innovations",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      excerpt: "",
      content: "",
      author: "SPE Innovations",
    });

    setEditingId(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      return;
    }

    if (editingId !== null) {
      setBlogs((currentBlogs) =>
        currentBlogs.map((blog) =>
          blog.id === editingId
            ? {
                ...blog,
                ...formData,
              }
            : blog
        )
      );
    } else {
      const newBlog: Blog = {
        id: Date.now(),
        ...formData,
        published: false,
        createdAt: new Date().toISOString().split("T")[0],
      };

      setBlogs((currentBlogs) => [newBlog, ...currentBlogs]);
    }

    resetForm();
  };

  const handleEdit = (blog: Blog) => {
    setEditingId(blog.id);

    setFormData({
      title: blog.title,
      category: blog.category,
      excerpt: blog.excerpt,
      content: blog.content,
      author: blog.author,
    });

    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) {
      return;
    }

    setBlogs((currentBlogs) =>
      currentBlogs.filter((blog) => blog.id !== id)
    );
  };

  const togglePublished = (id: number) => {
    setBlogs((currentBlogs) =>
      currentBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              published: !blog.published,
            }
          : blog
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Manage Blogs
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Create, edit and manage your company blog posts.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingId(null);
            setFormData({
              title: "",
              category: "",
              excerpt: "",
              content: "",
              author: "SPE Innovations",
            });
            setIsModalOpen(true);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          Create Blog
        </button>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Blogs
          </p>

          <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {blogs.length}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Published
          </p>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {blogs.filter((blog) => blog.published).length}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Drafts
          </p>

          <p className="mt-2 text-3xl font-bold text-orange-500">
            {blogs.filter((blog) => !blog.published).length}
          </p>
        </div>
      </div>

      {/* Blog List */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        {blogs.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              No blogs found
            </p>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Create your first blog post to get started.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Blog
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Author
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-6 py-5">
                      <div className="max-w-md">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {blog.title}
                        </p>

                        <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                          {blog.excerpt}
                        </p>

                        <p className="mt-2 text-xs text-slate-400">
                          {blog.createdAt}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                        {blog.category || "Uncategorized"}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-300">
                      {blog.author}
                    </td>

                    <td className="px-6 py-5">
                      <button
                        type="button"
                        onClick={() => togglePublished(blog.id)}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          blog.published
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </button>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => togglePublished(blog.id)}
                          title={
                            blog.published
                              ? "Unpublish Blog"
                              : "Publish Blog"
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800"
                        >
                          {blog.published ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleEdit(blog)}
                          title="Edit Blog"
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20"
                        >
                          <Edit size={18} />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(blog.id)}
                          title="Delete Blog"
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingId !== null ? "Edit Blog" : "Create Blog"}
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Add content that will appear on your website.
                </p>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X size={22} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Blog Title
                  </label>

                  <input
                    type="text"
                    value={formData.title}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        title: event.target.value,
                      })
                    }
                    placeholder="Enter blog title"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Category
                  </label>

                  <input
                    type="text"
                    value={formData.category}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        category: event.target.value,
                      })
                    }
                    placeholder="e.g. Web Development"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Author
                  </label>

                  <input
                    type="text"
                    value={formData.author}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        author: event.target.value,
                      })
                    }
                    placeholder="Author name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                {/* Excerpt */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Short Description
                  </label>

                  <textarea
                    value={formData.excerpt}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        excerpt: event.target.value,
                      })
                    }
                    placeholder="Write a short description for the blog..."
                    rows={3}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Blog Content
                  </label>

                  <textarea
                    value={formData.content}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        content: event.target.value,
                      })
                    }
                    placeholder="Write your complete blog content..."
                    rows={10}
                    className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  {editingId !== null ? "Update Blog" : "Create Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlogs;