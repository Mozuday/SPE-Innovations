import {
  BriefcaseBusiness,
  Monitor,
  Code2,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const internships = [
  {
    icon: Monitor,
    title: "Web Design",
    description:
      "Learn modern UI/UX principles and build responsive websites using professional design and development practices.",
    skills: [
      "UI/UX Fundamentals",
      "Responsive Design",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Build modern and interactive user interfaces using React, TypeScript and modern frontend technologies.",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "TypeScript",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Learn how to build secure APIs, work with databases and develop scalable server-side applications.",
    skills: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Authentication",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Build modern mobile applications and learn the fundamentals of mobile application development.",
    skills: [
      "Mobile UI",
      "API Integration",
      "Application Development",
      "Deployment",
    ],
  },
];

const Internships = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            Internship Program
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Build Skills Through Real Experience
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Gain practical experience by working on real-world projects,
            strengthen your technical skills and build a professional portfolio
            with SPE Visions.
          </p>

          <Link
            to="/internships/apply"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg"
          >
            Apply for Internship
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Internship Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Available Domains
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              Choose Your Learning Path
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Select an area that matches your interests and start developing
              practical industry-ready skills.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {internships.map((internship) => {
              const Icon = internship.icon;

              return (
                <article
                  key={internship.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl md:p-10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-900"
                >
                  <div className="flex flex-col gap-6 sm:flex-row">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300">
                      <Icon size={30} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {internship.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                        {internship.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Skills You Will Work With
                    </h4>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {internship.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle
                            size={17}
                            className="shrink-0 text-green-500"
                          />

                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/internships/apply"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all group-hover:gap-3 dark:text-orange-400"
                  >
                    Apply for This Internship
                    <ArrowRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              How the Internship Works
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              A simple process designed to help you move from learning to
              practical experience.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <span className="text-4xl font-black text-orange-500">01</span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Apply
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Submit your application and select the internship domain that
                matches your interests.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <span className="text-4xl font-black text-orange-500">02</span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Learn & Build
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Work on practical assignments and projects to improve your
                technical and professional skills.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <span className="text-4xl font-black text-orange-500">03</span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Complete & Get Certified
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Successfully complete the internship requirements and receive
                your internship completion certificate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-violet-600 p-10 text-center md:p-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white">
              <BriefcaseBusiness size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your Journey?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Take the next step toward building practical skills, gaining
              experience and strengthening your professional portfolio.
            </p>

            <Link
              to="/internships/apply"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Internships;