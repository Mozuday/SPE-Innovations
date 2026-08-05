import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Portfolio Website",
    category: "Personal Branding",
    description:
      "A modern and responsive portfolio website designed to showcase projects, technical skills and professional experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "SPE Visions",
    category: "Company Website",
    description:
      "A professional digital platform for software services, internships, certification courses and technology solutions.",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    title: "Custom Web Application",
    category: "Business Solution",
    description:
      "A scalable web application designed to simplify business workflows, improve productivity and provide a better user experience.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
];

const Portfolio = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            Our Portfolio
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Projects Built With Purpose
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Explore some of our projects and digital solutions. We focus on
            performance, scalability, usability and modern technology.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Project Preview */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500">
                  <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                  <span className="relative text-3xl font-bold text-white">
                    Project
                  </span>

                  <div className="absolute right-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3 dark:text-blue-400"
                  >
                    View Project
                    <ExternalLink size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-slate-900 p-10 text-center dark:bg-slate-800 md:p-14">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Have an Idea for Your Next Project?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Let's discuss your requirements and create a reliable digital
              solution designed around your goals.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;