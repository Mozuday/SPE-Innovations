import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                SP
              </div>

              <div>
                <p className="text-lg font-bold leading-none text-slate-900 dark:text-white">
                  SPE
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Innovations
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">
              We build practical digital solutions for businesses and
              individuals, from modern websites and applications to custom
              software and technical support.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">

            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Company
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                to="/courses"
                className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Courses
              </Link>

              <Link
                to="/internships"
                className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Internships
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                Contact
              </Link>

            </nav>

          </div>

          {/* Services */}
          <div className="lg:col-span-2">

            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Services
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <span className="text-sm text-slate-600 dark:text-slate-400">
                Website Development
              </span>

              <span className="text-sm text-slate-600 dark:text-slate-400">
                App Development
              </span>

              <span className="text-sm text-slate-600 dark:text-slate-400">
                Software Development
              </span>

              <span className="text-sm text-slate-600 dark:text-slate-400">
                Bug Fixing
              </span>

              <span className="text-sm text-slate-600 dark:text-slate-400">
                Technical Consulting
              </span>

            </div>

          </div>

          {/* Contact */}
          <div className="lg:col-span-3">

            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:contact@speinnovations.in"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                <Mail size={17} />
                contact@speinnovations.in
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                <Phone size={17} />
                +91 XXXXX XXXXX
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin size={17} />
                India
              </div>

            </div>

            {/* Telegram */}
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              <Send size={16} />
              Contact us on Telegram
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} SPE Innovations. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/about"
              className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;