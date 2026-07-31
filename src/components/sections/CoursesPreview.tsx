import { BookOpen, Clock3, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const courses = [
  {
    title: "Full Stack Web Development",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    description:
      "Learn modern frontend and backend development by building practical projects and understanding how complete web applications work.",
  },
  {
    title: "Frontend Development",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Learn to build responsive and accessible interfaces using HTML, CSS, JavaScript, Tailwind CSS and React.",
  },
  {
    title: "Backend Development",
    duration: "8 Weeks",
    level: "Intermediate",
    description:
      "Learn how to build REST APIs, work with databases and implement authentication using modern backend technologies.",
  },
];

const CoursesPreview = () => {
  return (
    <section className="border-b border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionTitle
          eyebrow="Learning"
          title="Build skills through practical learning"
          description="Courses designed to help students and aspiring developers understand real-world development through practical projects and industry-relevant technologies."
        />

        {/* Courses */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {courses.map((course) => (
            <Card
              key={course.title}
              className="group flex h-full flex-col p-7"
            >

              {/* Icon */}
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-blue-900 dark:group-hover:bg-blue-950/40 dark:group-hover:text-blue-400">
                <BookOpen size={22} strokeWidth={1.8} />
              </div>

              {/* Course Title */}
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {course.title}
              </h3>

              {/* Course Meta */}
              <div className="mt-5 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Clock3 size={16} />
                  {course.duration}
                </div>

                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />

                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {course.level}
                </span>

              </div>

              {/* Description */}
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {course.description}
              </p>

              {/* Course Link */}
              <Link
                to="/courses"
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                View course

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </Card>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">

          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
          >
            Explore all courses
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CoursesPreview;