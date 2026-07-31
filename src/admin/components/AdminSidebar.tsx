import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
  Video,
  Wrench,
  X,
} from "lucide-react";

type AdminSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigation = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Services",
    path: "/admin/services",
    icon: Wrench,
  },
  {
    name: "Courses",
    path: "/admin/courses",
    icon: GraduationCap,
  },
  {
    name: "Course Videos",
    path: "/admin/videos",
    icon: Video,
  },
  {
    name: "Internships",
    path: "/admin/internships",
    icon: BriefcaseBusiness,
  },
  {
    name: "Jobs",
    path: "/admin/jobs",
    icon: BriefcaseBusiness,
  },
  {
    name: "Blogs",
    path: "/admin/blogs",
    icon: FileText,
  },
];

const AdminSidebar = ({
  isOpen,
  onClose,
}: AdminSidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 lg:translate-x-0 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5 dark:border-slate-800">
          <NavLink
            to="/admin"
            onClick={onClose}
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            SPE{" "}
            <span className="text-cyan-500">
              Innovations
            </span>
          </NavLink>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Management
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    }`
                  }
                >
                  <Icon size={19} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Settings */}
          <div className="mt-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              System
            </p>

            <NavLink
              to="/admin/settings"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                }`
              }
            >
              <Settings size={19} />
              Settings
            </NavLink>
          </div>
        </nav>

        {/* Bottom */}
        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <button
            type="button"
            onClick={() => {
              // Add logout logic here later
              console.log("Logout clicked");
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <LogOut size={19} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;