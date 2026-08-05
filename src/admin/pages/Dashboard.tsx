import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Settings,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

type StatCounts = {
  services: number;
  courses: number;
  internships: number;
  blogs: number;
  users: number;
};

const quickActions = [
  {
    title: "Manage Services",
    description: "Add, edit or remove your services.",
    href: "/admin/services",
    icon: Wrench,
  },
  {
    title: "Manage Courses",
    description: "Manage courses and learning content.",
    href: "/admin/courses",
    icon: GraduationCap,
  },
  {
    title: "Manage Internships",
    description: "Manage internship programs and applications.",
    href: "/admin/internships",
    icon: BriefcaseBusiness,
  },
  {
    title: "Manage Blogs",
    description: "Publish and manage your latest articles.",
    href: "/admin/blogs",
    icon: FileText,
  },
];

const Dashboard = () => {
  const [counts, setCounts] = useState<StatCounts | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadCounts = async () => {
      try {
        // head: true + count: "exact" fetches only the row count,
        // not the actual rows — fast and cheap for dashboard stats.
        const [servicesRes, coursesRes, internshipsRes, blogsRes, usersRes] =
          await Promise.all([
            supabase
              .from("services")
              .select("*", { count: "exact", head: true })
              .eq("is_published", true),
            supabase
              .from("courses")
              .select("*", { count: "exact", head: true })
              .eq("is_published", true),
            supabase
              .from("internships")
              .select("*", { count: "exact", head: true })
              .eq("is_published", true),
            supabase
              .from("blogs")
              .select("*", { count: "exact", head: true })
              .eq("is_published", true),
            supabase.from("profiles").select("*", { count: "exact", head: true }),
          ]);

        if (!isMounted) return;

        setCounts({
          services: servicesRes.count ?? 0,
          courses: coursesRes.count ?? 0,
          internships: internshipsRes.count ?? 0,
          blogs: blogsRes.count ?? 0,
          users: usersRes.count ?? 0,
        });
      } catch (err) {
        console.error("Failed to load dashboard stats:", err);
        if (isMounted) setLoadError("Couldn't load live stats. Showing 0 for now.");
      }
    };

    loadCounts();

    return () => {
      isMounted = false;
    };
  }, []);

  const stats = [
    {
      title: "Total Services",
      value: counts?.services ?? "—",
      description: "Active services",
      icon: Wrench,
    },
    {
      title: "Total Courses",
      value: counts?.courses ?? "—",
      description: "Published courses",
      icon: GraduationCap,
    },
    {
      title: "Internships",
      value: counts?.internships ?? "—",
      description: "Active programs",
      icon: BriefcaseBusiness,
    },
    {
      title: "Blog Posts",
      value: counts?.blogs ?? "—",
      description: "Published articles",
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
            <LayoutDashboard size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Welcome back. Here's an overview of SPE Visions.
            </p>
          </div>
        </div>

        {loadError && (
          <p className="mt-3 text-sm text-red-600 dark:text-red-400">
            {loadError}
          </p>
        )}
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.title}
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {stat.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                  <Icon size={21} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 xl:col-span-2">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Quickly access the main content management sections.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  to={action.href}
                  className="group rounded-xl border border-slate-200 p-5 transition hover:border-cyan-500 hover:shadow-md dark:border-slate-800 dark:hover:border-cyan-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-cyan-50 group-hover:text-cyan-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-cyan-500/10 dark:group-hover:text-cyan-400">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {action.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Overview */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Platform Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Current platform status.
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                  <TrendingUp size={18} />
                </div>

                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Website
                </span>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-500/10 dark:text-green-400">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Users size={18} />
                </div>

                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Users
                </span>
              </div>

              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {counts?.users ?? "—"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <Settings size={18} />
                </div>

                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  System
                </span>
              </div>

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600 dark:bg-green-500/10 dark:text-green-400">
                Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;