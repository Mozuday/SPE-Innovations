import {
  ArrowRight,
  BookOpen,
  Clock3,
  Code2,
  Database,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "full-stack-web-development",
    icon: Code2,
    title: "Full Stack Web Development",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    description:
      "Learn frontend and backend development by building real-world web applications using modern technologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    id: "frontend-development",
    icon: Globe,
    title: "Frontend Development",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Master responsive user interface development and learn how to build modern websites and applications.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend-development",
    icon: Database,
    title: "Backend Development",
    duration: "8 Weeks",
    level: "Intermediate",
    description:
      "Learn how to build secure REST APIs, work with databases and create scalable backend applications.",
    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "Authentication",
    ],
  },
];

const Courses = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            Certification Courses
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Learn Skills That Build Careers
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Learn practical, industry-focused technology skills through
            structured courses designed for students, freshers and aspiring
            developers.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
              Available Courses
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              Choose Your Learning Path
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Start with the technology you want to learn and develop practical
              skills through project-based learning.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <article
                  key={course.id}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <Icon size={30} />
                  </div>

                  {/* Title */}
                  <h2 className="mt-7 text-2xl font-bold text-slate-900 dark:text-white">
                    {course.title}
                  </h2>

                  {/* Meta */}
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Clock3 size={17} />
                      {course.duration}
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {course.level}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                    {course.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {course.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/20 dark:text-green-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-green-600 transition-all group-hover:gap-3 dark:text-green-400"
                  >
                    View Course
                    <ArrowRight size={18} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <BookOpen size={30} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              Learn by Building
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Our courses focus on practical knowledge and real-world project
              experience instead of theory alone.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <span className="text-4xl font-black text-green-500">01</span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Learn
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Understand the fundamentals and concepts required to work with
                modern technologies.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <span className="text-4xl font-black text-green-500">02</span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Build
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Apply your knowledge by working on practical projects and
                developing real applications.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <span className="text-4xl font-black text-green-500">03</span>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Get Certified
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Complete the course requirements and receive your certificate
                after successful completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-500 p-10 text-center md:p-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Start Learning?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Choose a course, develop practical skills and take the next step
              toward your technology career.
            </p>

            <a
              href="#courses"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Explore Courses
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;