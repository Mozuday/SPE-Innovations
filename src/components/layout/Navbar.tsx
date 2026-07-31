import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white transition group-hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
            SP
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              SPE
            </span>

            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Innovations
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                [
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-slate-950 dark:text-white"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          <ThemeToggle />

          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            Start a Project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white",
                    ].join(" ")
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;