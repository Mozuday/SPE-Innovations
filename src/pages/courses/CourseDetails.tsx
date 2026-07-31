import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock3,
  Code2,
  Database,
  Globe,
  Lock,
} from "lucide-react";

const courses = [
  {
    id: "full-stack-web-development",
    icon: Code2,
    title: "Full Stack Web Development",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    price: "₹4,999",
    description:
      "Learn frontend and backend development by building real-world web applications using modern technologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
    ],
    modules: [
      "HTML and CSS Fundamentals",
      "JavaScript Programming",
      "React and TypeScript",
      "Frontend Application Development",
      "Node.js and Express",
      "REST API Development",
      "PostgreSQL and Database Design",
      "Authentication and Security",
      "Deployment and Production",
      "Final Full Stack Project",
    ],
  },
  {
    id: "frontend-development",
    icon: Globe,
    title: "Frontend Development",
    duration: "6 Weeks",
    level: "Beginner",
    price: "₹2,499",
    description:
      "Master responsive user interface development and learn how to build modern websites and applications.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    modules: [
      "HTML Fundamentals",
      "CSS and Responsive Design",
      "JavaScript Fundamentals",
      "Modern JavaScript",
      "React Fundamentals",
      "React Components and State",
      "TypeScript Basics",
      "Tailwind CSS",
      "API Integration",
      "Final Frontend Project",
    ],
  },
  {
    id: "backend-development",
    icon: Database,
    title: "Backend Development",
    duration: "8 Weeks",
    level: "Intermediate",
    price: "₹3,499",
    description:
      "Learn how to build secure REST APIs, work with databases and create scalable backend applications.",
    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "Authentication",
    ],
    modules: [
      "Node.js Fundamentals",
      "Express.js",
      "REST API Architecture",
      "PostgreSQL",
      "Database Relationships",
      "Authentication",
      "Authorization",
      "API Security",
      "Deployment",
      "Final Backend Project",
    ],
  },
];

const CourseDetails = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const course = useMemo(
    () => courses.find((item) => item.id === courseId),
    [courseId]
  );

  if (!course) {
    return (
      <main className="min-h-[80vh] bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Course Not Found
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              The course you are looking for does not exist or may have been
              removed.
            </p>

            <Link
              to="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <ArrowLeft size={18} />
              Back to Courses
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const Icon = course.icon;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-green-600 dark:text-slate-300 dark:hover:text-green-400"
          >
            <ArrowLeft size={17} />
            Back to Courses
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_380px]">
            {/* Course Information */}
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <Icon size={32} />
              </div>

              <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
                {course.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {course.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                  <Clock3 size={17} />
                  {course.duration}
                </div>

                <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
                  {course.level}
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Course Fee
              </p>

              <p className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
                {course.price}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Get access to the complete course content after enrollment.
              </p>

              <button
                type="button"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Enroll Now
                <ArrowRight size={18} />
              </button>

              <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
                Secure payment and course access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            {/* Modules */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Course Curriculum
              </h2>

              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Follow a structured learning path from fundamentals to
                practical project development.
              </p>

              <div className="mt-10 space-y-4">
                {course.modules.map((module, index) => (
                  <div
                    key={module}
                    className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {module}
                      </h3>
                    </div>

                    <Lock
                      size={18}
                      className="text-slate-400"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                What You Get
              </h2>

              <div className="mt-7 space-y-5">
                <div className="flex gap-3">
                  <CheckCircle
                    className="shrink-0 text-green-500"
                    size={21}
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    Complete course content
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle
                    className="shrink-0 text-green-500"
                    size={21}
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    Practical project-based learning
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle
                    className="shrink-0 text-green-500"
                    size={21}
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    Access to course videos
                  </span>
                </div>

                <div className="flex gap-3">
                  <CheckCircle
                    className="shrink-0 text-green-500"
                    size={21}
                  />

                  <span className="text-slate-700 dark:text-slate-300">
                    Course completion certificate
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Technologies You Will Learn
          </h2>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
            {course.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-500 p-10 text-center md:p-16">
            <BookOpen
              size={42}
              className="mx-auto text-white"
            />

            <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
              Start Learning Today
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Enroll in this course and start building practical skills that
              can help you grow your technology career.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Enroll Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;