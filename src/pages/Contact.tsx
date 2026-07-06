const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">

          <h1 className="text-5xl font-bold md:text-7xl">
            Contact Us
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            Have a project, internship query, or course-related question?
            We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-bold">
              Email
            </h2>

            <p className="mt-4 text-slate-400">
              contact@speinnovations.in
            </p>

            <a
              href="mailto:contact@speinnovations.in"
              className="mt-6 inline-block rounded-xl bg-cyan-600 px-5 py-3"
            >
              Send Email
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-bold">
              WhatsApp
            </h2>

            <p className="mt-4 text-slate-400">
              Chat directly with us.
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-green-600 px-5 py-3"
            >
              WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-bold">
              Instagram
            </h2>

            <p className="mt-4 text-slate-400">
              Follow SPE Innovations.
            </p>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-xl bg-pink-600 px-5 py-3"
            >
              Instagram
            </a>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-bold">
            We Can Help With
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

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Let's Build Something Great
          </h2>

          <p className="mt-4 text-slate-400">
            Reach out today and let's discuss your requirements.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-cyan-600 px-8 py-3 font-semibold"
          >
            Get In Touch
          </a>

        </div>
      </section>

    </div>
  );
};

export default Contact;