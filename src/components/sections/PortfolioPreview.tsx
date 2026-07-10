import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    category: "Personal Branding",
    description:
      "A modern portfolio showcasing projects, skills, and experience with a responsive UI.",
  },
  {
    title: "SPE Innovations",
    category: "Company Website",
    description:
      "A professional business website offering web development, internships and courses.",
  },
  {
    title: "Custom Web Application",
    category: "Business Solution",
    description:
      "A scalable web application built to simplify workflows and improve productivity.",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Recent Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Every project is built with performance, scalability and user
            experience in mind. Here are a few examples of our work.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >

              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 text-5xl font-bold text-white">
                Project
              </div>

              <div className="p-8">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 hover:text-violet-600">
                  View Project
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;