import { Send, User, Mail, Phone, GraduationCap } from "lucide-react";

const Apply = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-4xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Internship Application
          </span>

          <h1 className="mt-6 text-5xl font-bold dark:text-white">
            Apply for an Internship
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            Fill in your details. Once submitted, our team will review your
            application and contact you shortly.
          </p>

        </div>
      </section>

      {/* Form */}

      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-6">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* Left */}

            <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

              <h2 className="mb-8 text-3xl font-bold dark:text-white">
                Application Form
              </h2>

              <form className="space-y-6">

                <div>
                  <label className="mb-2 block font-medium dark:text-white">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      className="absolute left-4 top-4 text-slate-400"
                      size={20}
                    />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block font-medium dark:text-white">
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-4 text-slate-400"
                        size={20}
                      />

                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-medium dark:text-white">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-4 text-slate-400"
                        size={20}
                      />

                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                </div>

                <div>
                  <label className="mb-2 block font-medium dark:text-white">
                    College / University
                  </label>

                  <div className="relative">
                    <GraduationCap
                      className="absolute left-4 top-4 text-slate-400"
                      size={20}
                    />

                    <input
                      type="text"
                      placeholder="Your College Name"
                      className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>

                  <label className="mb-2 block font-medium dark:text-white">
                    Internship Domain
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white">

                    <option>Web Design</option>
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>Full Stack Development</option>
                    <option>App Development</option>

                  </select>

                </div>

                <div>

                  <label className="mb-2 block font-medium dark:text-white">
                    Why do you want this internship?
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about yourself..."
                    className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
                >
                  <Send size={18} />
                  Submit Application
                </button>

              </form>

            </div>

            {/* Right */}

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-8 text-white">

              <h3 className="text-2xl font-bold">
                Before You Apply
              </h3>

              <ul className="mt-8 space-y-5">

                <li>✅ No prior experience required</li>

                <li>✅ Learn through real projects</li>

                <li>✅ Flexible working hours</li>

                <li>✅ Internship Certificate</li>

                <li>✅ Portfolio Building</li>

                <li>✅ Telegram updates after selection</li>

              </ul>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Apply;