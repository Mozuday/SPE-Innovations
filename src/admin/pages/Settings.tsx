import { useEffect, useState } from "react";
import { Settings as SettingsIcon, Mail, ShieldCheck } from "lucide-react";
import { supabase } from "../../lib/supabase";

const Settings = () => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setEmail(user?.email ?? null);
    };

    loadUser();
  }, []);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Manage your admin account and platform preferences.
        </p>
      </div>

      <div className="space-y-6">
        {/* Account Info */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Account
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Your admin login details
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-950">
            <Mail size={16} className="text-slate-400" />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {email ?? "Loading..."}
            </span>
          </div>
        </div>

        {/* Placeholder for future settings */}
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900">
          <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-400 dark:bg-slate-800">
            <SettingsIcon size={20} />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            More settings coming soon
          </h3>
          <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            Notification preferences, password change, and team member
            management will appear here in a future update.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;