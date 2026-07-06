const Internships = () => {
  const internships = [
    {
      title: "Frontend Developer Intern",
      duration: "1 Month",
      mode: "Remote",
      type: "Unpaid",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend Developer Intern",
      duration: "1 Month",
      mode: "Remote",
      type: "Unpaid",
      skills: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer Intern",
      duration: "2 Months",
      mode: "Remote",
      type: "Paid / Unpaid",
      skills: ["React", "Node.js", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">

          <h1 className="text-5xl font-bold md:text-7xl">
            Internship Programs
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            Gain real-world experience, work on live projects,
            strengthen your portfolio, and receive an internship certificate.
          </p>

        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold">
            What You'll Get
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Real Projects
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Industry Experience
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Portfolio Building
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Certificate
            </div>

          </div>

        </div>
      </section>

      {/* Open Positions */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-bold">
            Open Positions
          </h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {internships.map((internship) => (
              <div
                key={internship.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-2xl font-bold">
                  {internship.title}
                </h3>

                <div className="mt-4 space-y-2 text-slate-400">
                  <p>Duration: {internship.duration}</p>
                  <p>Mode: {internship.mode}</p>
                  <p>Type: {internship.type}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full rounded-xl bg-cyan-600 py-3 font-semibold hover:bg-cyan-700">
                  Apply Now
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <h2 className="text-center text-4xl font-bold">
            Selection Process
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              1. Apply
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              2. Interview
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              3. Selection
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              4. Start Internship
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Ready To Start Your Journey?
          </h2>

          <p className="mt-4 text-slate-400">
            Apply today and gain practical experience with SPE Innovations.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-600 px-8 py-3 font-semibold hover:bg-cyan-700">
            Apply Now
          </button>

        </div>
      </section>

    </div>
  );
};

export default Internships;