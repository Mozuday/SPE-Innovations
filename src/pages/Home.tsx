import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    "Website Development",
    "App Development",
    "Bug Fixing",
    "Internships",
    "Certification Courses",
  ];

  const features = [
    {
      title: "Modern Technologies",
      description:
        "Built using React, Node.js, PostgreSQL and industry-standard tools.",
    },
    {
      title: "Affordable Solutions",
      description:
        "Professional digital services at startup-friendly pricing.",
    },
    {
      title: "Personal Support",
      description:
        "Direct communication without unnecessary middle layers.",
    },
    {
      title: "Practical Learning",
      description:
        "Internships and courses focused on real-world projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 h-full w-px bg-cyan-500" />
          <div className="absolute left-2/4 top-0 h-full w-px bg-cyan-500" />
          <div className="absolute left-3/4 top-0 h-full w-px bg-cyan-500" />
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl text-center">

          <span className="rounded-full border border-cyan-500/30 px-4 py-2 text-sm">
            SPE Innovations
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Connecting Ideas.
            <br />
            Building Digital Solutions.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            We help businesses grow through websites, mobile applications,
            software solutions and technical consulting while empowering
            students through internships and certification programs.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
            >
              Start A Project
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold dark:border-slate-700"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-bold">
            Our Services
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="font-semibold">
                  {service}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-bold">
            Why SPE Innovations
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">
              Featured Projects
            </h2>

            <Link
              to="/portfolio"
              className="text-cyan-500"
            >
              View All →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="h-52 bg-slate-200 dark:bg-slate-800" />

                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    Project Name
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-400">
                    React • Node.js • PostgreSQL
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Internships */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-bold">
            Internship Opportunities
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {[
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
            ].map((role) => (
              <div
                key={role}
                className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-xl font-semibold">
                  {role}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  Work on real projects and gain practical experience.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Courses */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-bold">
            Certification Courses
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">

            {[
              "Frontend Development",
              "Backend Development",
              "Full Stack Development",
            ].map((course) => (
              <div
                key={course}
                className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-xl font-semibold">
                  {course}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  Learn through projects and earn a certificate.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <h2 className="text-4xl font-bold">
            Ready To Build Something Great?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Whether you're a business owner looking for digital solutions
            or a student looking for opportunities, SPE Innovations is
            ready to help.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-block rounded-xl bg-cyan-600 px-8 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;