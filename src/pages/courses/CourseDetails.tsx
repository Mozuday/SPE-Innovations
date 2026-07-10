import {
  BookOpen,
  Clock3,
  GraduationCap,
  CheckCircle,
  PlayCircle,
  Award,
} from "lucide-react";

const CourseDetails = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                Full Stack Web Development
              </span>

              <h1 className="mt-6 text-5xl font-bold dark:text-white">
                Become a Professional Full Stack Developer
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Learn modern web development by building real-world projects
                using HTML, CSS, JavaScript, React, Node.js, Express and
                MongoDB.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">

                <div className="flex items-center gap-2">
                  <Clock3 size={18} />
                  <span>12 Weeks</span>
                </div>

                <div className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  <span>Beginner to Advanced</span>
                </div>

                <div className="flex items-center gap-2">
                  <BookOpen size={18} />
                  <span>25+ Lessons</span>
                </div>

              </div>

              <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
                Enroll Now • ₹4,999
              </button>

            </div>

            <div>

              <div className="flex h-[380px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-5xl font-bold text-white">
                Course Preview
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Skills */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold dark:text-white">
            Skills You Will Learn
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "REST API",
              "Git",
              "Deployment",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-100 px-5 py-2 font-medium text-blue-700 dark:bg-slate-800 dark:text-white"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* Curriculum */}

      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold dark:text-white">
            Course Curriculum
          </h2>

          <div className="mt-12 space-y-5">

            {[
              "Introduction to Web Development",
              "HTML & CSS Fundamentals",
              "JavaScript Essentials",
              "React.js",
              "Backend with Node.js",
              "Express.js APIs",
              "MongoDB Database",
              "Authentication",
              "Deployment",
              "Final Industry Project",
            ].map((lesson, index) => (
              <div
                key={lesson}
                className="flex items-center justify-between rounded-2xl bg-white p-6 shadow dark:bg-slate-900"
              >

                <div className="flex items-center gap-4">

                  <PlayCircle
                    className="text-blue-600"
                    size={28}
                  />

                  <div>

                    <h3 className="font-semibold dark:text-white">
                      Module {index + 1}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300">
                      {lesson}
                    </p>

                  </div>

                </div>

                <span className="text-sm text-slate-500">
                  Included
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <h2 className="text-4xl font-bold dark:text-white">
            What You'll Get
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {[
              "Industry-oriented curriculum",
              "Hands-on projects",
              "Source code access",
              "Lifetime course access",
              "Certificate of completion",
              "Placement guidance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow dark:bg-slate-900"
              >

                <CheckCircle
                  className="text-green-600"
                  size={26}
                />

                <span className="text-lg dark:text-white">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Certificate */}

      <section className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 py-24 text-white">
        <div className="container mx-auto max-w-5xl px-6 text-center">

          <Award
            className="mx-auto"
            size={70}
          />

          <h2 className="mt-8 text-4xl font-bold">
            Earn Your Certificate
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            Successfully complete the course and receive a professionally
            designed certificate from SPE Innovations to showcase your skills.
          </p>

          <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:scale-105">
            Enroll Now
          </button>

        </div>
      </section>
    </>
  );
};

export default CourseDetails;