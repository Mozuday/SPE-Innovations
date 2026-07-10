import {
  Clock3,
  BookOpen,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    title: "Full Stack Web Development",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    price: "₹4,999",
    image: "Full Stack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Frontend Development",
    level: "Beginner",
    duration: "6 Weeks",
    price: "₹2,499",
    image: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    level: "Intermediate",
    duration: "8 Weeks",
    price: "₹2,999",
    image: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
  },
  {
    title: "React Development",
    level: "Intermediate",
    duration: "5 Weeks",
    price: "₹1,999",
    image: "React",
    skills: ["React", "Hooks", "Routing", "State Management"],
  },
];

const Courses = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            Certification Courses
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Learn From Real Projects
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Practical, industry-focused courses designed to help students,
            freshers and professionals build job-ready skills.
          </p>

        </div>
      </section>

      {/* Courses */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">

            {courses.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >

                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-green-500 via-blue-500 to-violet-600 text-4xl font-bold text-white">
                  {course.image}
                </div>

                <div className="p-8">

                  <h2 className="text-2xl font-bold dark:text-white">
                    {course.title}
                  </h2>

                  <div className="mt-5 flex flex-wrap gap-5 text-slate-600 dark:text-slate-300">

                    <div className="flex items-center gap-2">
                      <Clock3 size={18} />
                      {course.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} />
                      {course.level}
                    </div>

                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  <div className="mt-8 flex items-center justify-between">

                    <div>
                      <p className="text-sm text-slate-500">
                        Course Fee
                      </p>

                      <h3 className="text-3xl font-bold text-green-600">
                        {course.price}
                      </h3>
                    </div>

                    <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                      Enroll
                      <ArrowRight size={18} />
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose */}

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="text-center">

            <BookOpen
              className="mx-auto text-green-600"
              size={60}
            />

            <h2 className="mt-6 text-4xl font-bold dark:text-white">
              Why Learn With SPE Innovations?
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900">
              <h3 className="font-bold">Real Projects</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Build practical applications instead of only watching videos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900">
              <h3 className="font-bold">Certificate</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Receive a verified completion certificate after finishing the
                course.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900">
              <h3 className="font-bold">Affordable</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Quality education at student-friendly pricing.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900">
              <h3 className="font-bold">Lifetime Access</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Learn anytime with unlimited access after enrollment.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Courses;