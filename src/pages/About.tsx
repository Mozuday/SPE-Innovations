const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">

          <h1 className="text-5xl font-bold md:text-7xl">
            About SPE Innovations
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            Building digital solutions for businesses while creating
            opportunities for students through internships and certification programs.
          </p>

        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-slate-400 leading-8">
            SPE Innovations was founded with a simple vision:
            to provide affordable, high-quality technology solutions
            for businesses while helping students gain practical
            industry experience.
          </p>

          <p className="mt-6 text-slate-400 leading-8">
            We specialize in website development, application development,
            bug fixing, internships, and certification courses that
            focus on real-world skills and outcomes.
          </p>

        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold">
            What We Do
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Website Development
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              App Development
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Bug Fixing
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Internships
            </div>

            <div className="rounded-2xl border border-slate-800 p-6 text-center">
              Courses
            </div>

          </div>

        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold">
            Our Values
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 p-8">
              <h3 className="text-xl font-semibold">
                Innovation
              </h3>

              <p className="mt-3 text-slate-400">
                Building modern solutions using current technologies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-8">
              <h3 className="text-xl font-semibold">
                Quality
              </h3>

              <p className="mt-3 text-slate-400">
                Delivering reliable and scalable digital products.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-8">
              <h3 className="text-xl font-semibold">
                Growth
              </h3>

              <p className="mt-3 text-slate-400">
                Helping businesses and students achieve their goals.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Let's Build Something Together
          </h2>

          <p className="mt-4 text-slate-400">
            Whether you're a business owner or a student,
            SPE Innovations is here to help.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-600 px-8 py-3 font-semibold hover:bg-cyan-700">
            Contact Us
          </button>

        </div>
      </section>

    </div>
  );
};

export default About;