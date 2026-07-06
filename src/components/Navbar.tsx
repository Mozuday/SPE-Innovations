import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Internships", path: "/internships" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold text-slate-900 dark:text-white"
        >
          SPE Innovations
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 lg:flex">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-cyan-500"
                  : "text-slate-600 transition hover:text-cyan-500 dark:text-slate-300"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <ThemeToggle />

          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-700"
          >
            My Portfolio
          </a>

        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">

          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white"
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">

          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-cyan-500"
                    : "text-slate-700 dark:text-slate-300"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="https://your-portfolio-link.com"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-cyan-600 px-4 py-3 text-center text-white"
            >
              My Portfolio
            </a>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;