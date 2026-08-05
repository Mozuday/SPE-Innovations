import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

type AuthStatus = "checking" | "authorized" | "unauthorized";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [status, setStatus] = useState<AuthStatus>("checking");

  useEffect(() => {
    let isMounted = true;

    const checkAdminAccess = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        if (isMounted) setStatus("unauthorized");
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();

      if (error || profile?.role !== "admin") {
        if (isMounted) setStatus("unauthorized");
        return;
      }

      if (isMounted) setStatus("authorized");
    };

    checkAdminAccess();

    // Re-check if the session changes elsewhere (e.g. sign out in another tab)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      checkAdminAccess();
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-950">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Checking admin access...
        </p>
      </div>
    );
  }

  if (status === "unauthorized") {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;