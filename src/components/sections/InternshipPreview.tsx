import {
  BriefcaseBusiness,
  Monitor,
  Code2,
  Database,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const internships = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Learn modern UI and UX principles while working on responsive and user-friendly digital experiences.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Build practical interfaces using HTML, CSS, JavaScript, React and modern frontend tools.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Learn how APIs, databases, authentication and server-side applications work together.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Explore mobile application development and learn how modern apps are designed and built.",
  },
];

const InternshipPreview = () => {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-24 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionTitle
          eyebrow="Internship Program"
          title="Learn by building real projects"
          description="Our internship program is designed to help students and aspiring developers gain practical experience, improve their technical skills and build meaningful projects."
        />

        {/* Internship Areas */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {internships.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group p-7"
              >

                {/* Icon */}
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-blue-900 dark:group-hover:bg-blue-950/40 dark:group-hover:text-blue-400">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

              </Card>
            );
          })}

        </div>

        {/* Internship CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">

          <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">

            {/* Content */}
            <div className="flex gap-5">

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white sm:flex dark:bg-white dark:text-slate-950">
                <BriefcaseBusiness size={22} />
              </div>

              <div>

                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Start your journey
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                  Ready to gain practical experience?
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Apply for an internship and work on practical projects that
                  can help strengthen your technical skills and portfolio.
                </p>

              </div>

            </div>

            {/* CTA */}
            <Link
              to="/internships/apply"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              Apply for Internship

              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InternshipPreview;