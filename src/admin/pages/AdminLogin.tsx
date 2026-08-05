import { useState } from "react";
import { LockKeyhole, Mail, ArrowRight, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. Authenticate against Supabase Auth
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({ email, password });

      if (authError || !authData.user) {
        setError("Invalid email or password.");
        return;
      }

      // 2. Confirm this user's role is 'admin' in profiles.
      // This matters because ANY registered user (e.g. a future student
      // account) can pass step 1 — only role='admin' should reach /admin.
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", authData.user.id)
        .single();

      if (profileError || profile?.role !== "admin") {
        // Not an admin — do not leave them signed in with a live session
        await supabase.auth.signOut();
        setError("This account does not have admin access.");
        return;
      }

      // 3. Authenticated AND authorized — proceed
      navigate("/admin", { replace: true });
    } catch (err) {
      console.error("Admin login error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            SPE <span className="text-cyan-500">Visions</span>
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Admin Panel
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
              <LockKeyhole size={26} />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Sign in to manage your SPE Visions website.
            </p>
          </div>

          {error && (
            <div className="mb-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
              <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="admin@example.com"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 font-semibold text-white transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-slate-900"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;