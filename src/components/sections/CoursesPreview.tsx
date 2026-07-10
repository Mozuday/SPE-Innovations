import { BookOpen, Clock3, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Full Stack Web Development",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, Express and MongoDB by building real-world projects.",
  },
  {
    title: "Frontend Development",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Master responsive UI development using HTML, CSS, JavaScript, Tailwind CSS and React.",
  },
  {
    title: "Backend Development",
    duration: "8 Weeks",
    level: "Intermediate",
    description:
      "Build secure REST APIs using Node.js, Express, MongoDB and authentication.",
  },
];

const CoursesPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Learn Industry Skills
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Practical courses designed for students, freshers and developers
            who want real project experience instead of only theory.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300">
                <BookOpen size={30} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {course.title}
              </h3>

              <div className="mt-5 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Clock3 size={18} />
                {course.duration}
              </div>

              <div className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium dark:bg-slate-800">
                {course.level}
              </div>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
                {course.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-green-600 hover:text-green-700">
                View Course
                <ArrowRight size={18} />
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoursesPreview;