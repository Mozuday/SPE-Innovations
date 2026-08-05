import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">

          <div className="grid items-center gap-12 p-8 sm:p-10 md:p-14 lg:grid-cols-2 lg:p-16">

            {/* Left Content */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 dark:border-slate-700 dark:bg-slate-900">
                <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500" />

                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  SPE Visions
                </span>
              </div>

              <h2 className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
                Have an idea? Let's build it together.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
                Whether you need a website, application, software solution or
                technical assistance, we're here to help you turn your idea
                into a practical digital product.
              </p>

              {/* Actions */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
                >
                  Start a Conversation

                  <ArrowUpRight size={17} />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
                >
                  Explore Services
                </Link>

              </div>

            </div>

            {/* Contact Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">

              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Get in touch
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Let's talk about your project.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Share your requirements with us and we'll get back to you to
                discuss the next steps.
              </p>

              <div className="mt-8 space-y-5">

                {/* Email */}
                <a
                  href="mailto:contact@speVisions.in"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-950/40 dark:group-hover:text-blue-400">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      contact@speVisions.in
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-950/40 dark:group-hover:text-blue-400">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-500">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </a>

              </div>

              {/* Contact Link */}
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                View contact options

                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;