import {
  Building2,
  Target,
  Eye,
  Rocket,
  Users,
  ShieldCheck,
  Lightbulb,
  Code2,
} from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-6xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            About SPE Innovations
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Building Technology That Creates Opportunities
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            SPE Innovations is a technology company focused on delivering
            modern digital solutions while helping students and businesses
            grow through practical learning, software development and
            technical consulting.
          </p>

        </div>
      </section>

      {/* Story */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <div className="flex h-[420px] items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-5xl font-bold text-white">
                SPE
              </div>

            </div>

            <div>

              <h2 className="text-4xl font-bold dark:text-white">
                Our Journey
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                SPE Innovations was started with a simple goal—to provide
                affordable, high-quality software solutions and create
                opportunities for students to gain practical industry
                experience.
              </p>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                We believe learning should happen through real projects,
                businesses should have access to quality technology, and
                innovation should be practical rather than complicated.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Mission Vision */}

      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 shadow dark:bg-slate-900">

              <Target className="text-blue-600" size={40} />

              <h3 className="mt-6 text-2xl font-bold dark:text-white">
                Mission
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                Deliver reliable digital solutions while empowering students
                with practical technical education.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow dark:bg-slate-900">

              <Eye className="text-violet-600" size={40} />

              <h3 className="mt-6 text-2xl font-bold dark:text-white">
                Vision
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                Become a trusted technology company known for innovation,
                quality and skill development.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow dark:bg-slate-900">

              <Rocket className="text-cyan-600" size={40} />

              <h3 className="mt-6 text-2xl font-bold dark:text-white">
                Goal
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                Build software that solves real problems while creating
                career opportunities for aspiring developers.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Values */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold dark:text-white">
              Our Core Values
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 p-8 dark:border-slate-700">

              <Code2 className="text-blue-600" size={36} />

              <h3 className="mt-5 text-xl font-bold dark:text-white">
                Innovation
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Building modern technology solutions.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 p-8 dark:border-slate-700">

              <ShieldCheck className="text-green-600" size={36} />

              <h3 className="mt-5 text-xl font-bold dark:text-white">
                Quality
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Clean, scalable and reliable software.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 p-8 dark:border-slate-700">

              <Users className="text-violet-600" size={36} />

              <h3 className="mt-5 text-xl font-bold dark:text-white">
                Collaboration
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Working together to achieve better outcomes.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-200 p-8 dark:border-slate-700">

              <Lightbulb className="text-orange-600" size={36} />

              <h3 className="mt-5 text-xl font-bold dark:text-white">
                Learning
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                Continuous improvement through practical experience.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="container mx-auto max-w-5xl px-6">

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-12 text-center text-white">

            <Building2 className="mx-auto" size={60} />

            <h2 className="mt-6 text-4xl font-bold">
              Let's Build Something Great Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Whether you're a business looking for technology solutions or a
              student seeking practical learning, SPE Innovations is ready to
              help you grow.
            </p>

            <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:scale-105">
              Contact Us
            </button>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;