import { useState } from "react";
import { LockKeyhole, Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>
) => {
    event.preventDefault();

    // Temporary frontend login
    // We will replace this with secure backend authentication later.
    if (email && password) {
      localStorage.setItem("adminAuthenticated", "true");
      navigate("/admin");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            SPE <span className="text-cyan-500">Innovations</span>
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
              Sign in to manage your SPE Innovations website.
            </p>
          </div>

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
                  className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
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
                  className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 font-semibold text-white transition hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Notice */}
          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            This is currently a temporary frontend login. Secure authentication
            will be connected to the backend later.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;