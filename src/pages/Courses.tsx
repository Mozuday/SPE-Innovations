const Courses = () => {
  const courses = [
    {
      title: "Frontend Development",
      duration: "4 Weeks",
      level: "Beginner",
      price: "₹499",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend Development",
      duration: "4 Weeks",
      level: "Intermediate",
      price: "₹699",
      skills: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Full Stack Development",
      duration: "8 Weeks",
      level: "Advanced",
      price: "₹999",
      skills: ["React", "Node.js", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">

          <h1 className="text-5xl font-bold md:text-7xl">
            Certification Courses
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            Practical, affordable and industry-focused courses designed
            to help students build real-world skills.
          </p>

        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold">
            Why Join Our Courses?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Practical Learning
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Project Based
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Affordable Pricing
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Certificate
            </div>

          </div>

        </div>
      </section>

      {/* Courses */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-bold">
            Available Courses
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {courses.map((course) => (
              <div
                key={course.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-2xl font-bold">
                  {course.title}
                </h3>

                <div className="mt-4 space-y-2 text-slate-400">
                  <p>Duration: {course.duration}</p>
                  <p>Level: {course.level}</p>
                  <p>Price: {course.price}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-xl bg-cyan-600 py-3 font-semibold hover:bg-cyan-700">
                  Enroll Now
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Certificate */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Earn A Certificate
          </h2>

          <p className="mt-4 text-slate-400">
            Successfully complete the course and receive a certificate
            from SPE Innovations.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold">
            Start Learning Today
          </h2>

          <p className="mt-4 text-slate-400">
            Build skills, complete projects and strengthen your portfolio.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-600 px-8 py-3 font-semibold hover:bg-cyan-700">
            Explore Courses
          </button>

        </div>
      </section>

    </div>
  );
};

export default Courses;