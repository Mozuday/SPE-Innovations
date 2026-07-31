import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const projects = [
  {
    title: "Portfolio Website",
    category: "Personal Branding",
    description:
      "A modern portfolio designed to showcase projects, skills and professional experience with a clean, responsive interface.",
  },
  {
    title: "SPE Innovations",
    category: "Company Website",
    description:
      "A professional digital platform for presenting technology services, internships and practical learning opportunities.",
  },
  {
    title: "Custom Web Application",
    category: "Business Solution",
    description:
      "A scalable web application designed to simplify workflows, improve productivity and solve specific business requirements.",
  },
];

const PortfolioPreview = () => {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionTitle
          eyebrow="Selected Work"
          title="Projects built with purpose"
          description="We focus on creating reliable digital products that combine thoughtful user experiences with practical technology."
        />

        {/* Projects */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden p-0"
            >

              {/* Project Preview */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">

                {/* Abstract Project Preview */}
                <div className="absolute inset-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

                  <div className="flex h-10 items-center gap-2 border-b border-slate-100 px-4 dark:border-slate-800">

                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />

                  </div>

                  <div className="space-y-3 p-5">

                    <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />

                    <div className="h-2 w-full rounded bg-slate-100 dark:bg-slate-800" />

                    <div className="h-2 w-4/5 rounded bg-slate-100 dark:bg-slate-800" />

                    <div className="mt-5 flex gap-3">

                      <div className="h-12 flex-1 rounded-lg bg-slate-100 dark:bg-slate-800" />

                      <div className="h-12 flex-1 rounded-lg bg-blue-50 dark:bg-blue-950/40" />

                    </div>

                  </div>

                </div>

              </div>

              {/* Project Information */}
              <div className="p-7">

                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {project.category}
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <Link
                  to="/portfolio"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  View project

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

              </div>

            </Card>
          ))}

        </div>

        {/* View All */}
        <div className="mt-12 text-center">

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
          >
            Explore all projects

            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default PortfolioPreview;