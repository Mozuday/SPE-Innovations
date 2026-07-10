import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Courses", path: "/courses" },
  { name: "Internships", path: "/internships" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          SPE <span className="text-cyan-500">Innovations</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:hover:border-cyan-400"
          >
            Portfolio
          </a>

          <Link
            to="/contact"
            className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-500 text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-xl border border-slate-300 px-4 py-3 text-center font-medium dark:border-slate-700"
            >
              Portfolio
            </a>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-white hover:bg-cyan-600"
            >
              Get Started
            </Link>

            <div className="mt-4 flex justify-center">
              <ThemeToggle />
            </div>
          </nav>

        </div>
      )}
    </header>
  );
};

export default Navbar;