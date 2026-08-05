import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

type ApplicationForm = {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  education: string;
  domain: string;
  experience: string;
  message: string;
};

const initialForm: ApplicationForm = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  education: "",
  domain: "",
  experience: "",
  message: "",
};

const Apply = () => {
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Internship Application:", form);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-[80vh] bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm md:p-14 dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle size={42} />
            </div>

            <h1 className="mt-7 text-3xl font-bold text-slate-900 dark:text-white">
              Application Submitted
            </h1>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Thank you for applying to SPE Visions. We have received your
              application and will review your details.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/internships"
                className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Back to Internships
              </Link>

              <Link
                to="/"
                className="rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/internships"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-orange-500 dark:text-slate-300"
          >
            <ArrowLeft size={17} />
            Back to Internships
          </Link>

          <div className="mt-10 text-center">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              Internship Application
            </span>

            <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
              Start Your Internship Journey
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Fill in your details below. Our team will review your application
              and contact you regarding the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-6">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* College */}
              <div>
                <label
                  htmlFor="college"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  College / Institution
                </label>

                <input
                  id="college"
                  name="college"
                  type="text"
                  value={form.college}
                  onChange={handleChange}
                  placeholder="Enter your college or institution"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Education */}
              <div>
                <label
                  htmlFor="education"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Education *
                </label>

                <input
                  id="education"
                  name="education"
                  type="text"
                  value={form.education}
                  onChange={handleChange}
                  placeholder="B.Tech, BCA, MCA, etc."
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Domain */}
              <div>
                <label
                  htmlFor="domain"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Internship Domain *
                </label>

                <select
                  id="domain"
                  name="domain"
                  value={form.domain}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                >
                  <option value="">Select a domain</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Frontend Development">
                    Frontend Development
                  </option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                  <option value="App Development">
                    App Development
                  </option>
                </select>
              </div>

              {/* Experience */}
              <div className="md:col-span-2">
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Previous Experience
                </label>

                <input
                  id="experience"
                  name="experience"
                  type="text"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="Projects, skills, previous internships, etc."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                >
                  Tell Us About Yourself *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interests, goals and why you want to join this internship."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg sm:w-auto"
              >
                Submit Application
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Apply;