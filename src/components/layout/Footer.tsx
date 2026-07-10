import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">
              SPE <span className="text-cyan-500">Innovations</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Building modern websites, mobile applications, software solutions,
              internships and certification courses for businesses and students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link to="/" className="hover:text-cyan-500">
                Home
              </Link>

              <Link to="/services" className="hover:text-cyan-500">
                Services
              </Link>

              <Link to="/courses" className="hover:text-cyan-500">
                Courses
              </Link>

              <Link to="/internships" className="hover:text-cyan-500">
                Internships
              </Link>

              <Link to="/about" className="hover:text-cyan-500">
                About
              </Link>

              <Link to="/contact" className="hover:text-cyan-500">
                Contact
              </Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Our Services
            </h3>

            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">

              <p>Website Development</p>
              <p>Application Development</p>
              <p>Bug Fixing</p>
              <p>Internships</p>
              <p>Certification Courses</p>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-500" />
                <span>contact@speinnovations.in</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-500" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-500" />
                <span>India</span>
              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-6 flex gap-4 text-xl">

              <a
                href="#"
                className="transition hover:text-cyan-500"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="transition hover:text-cyan-500"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="transition hover:text-cyan-500"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="transition hover:text-cyan-500"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800">

          © {new Date().getFullYear()} SPE Innovations. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
};

export default Footer;