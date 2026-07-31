import {
  ArrowRight,
  CheckCircle,
  Code2,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide practical, reliable and accessible digital solutions that help businesses grow and help students build real-world technology skills.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore modern technologies and practical approaches to create solutions that solve real problems.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    description:
      "We focus on clean development, reliable solutions, security and a professional experience for every client and learner.",
  },
  {
    icon: Users,
    title: "People First",
    description:
      "We believe technology should serve people. Our solutions are designed around the needs of businesses, students and users.",
  },
];

const services = [
  "Website Development",
  "Application Development",
  "Software Development",
  "Bug Fixing and Maintenance",
  "Technical Consulting",
  "Industry-Focused Internships",
  "Certification Courses",
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            About SPE Innovations
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Building Technology.
            <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Creating Opportunities.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            SPE Innovations is a technology-focused company providing digital
            solutions for businesses and practical learning opportunities for
            students and aspiring developers.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Who We Are
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
                Technology That Creates Real Impact
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                SPE Innovations was created with a simple goal: to combine
                technology, practical development and learning opportunities
                into one ecosystem.
              </p>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                We work with businesses and individuals to build websites,
                applications and software solutions while also helping students
                gain practical exposure through internships and certification
                courses.
              </p>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Our approach is focused on practical execution. Instead of
                building technology for the sake of technology, we aim to create
                solutions that are useful, scalable and aligned with real-world
                requirements.
              </p>

              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-8 text-white">
                  <Code2 size={48} />

                  <h3 className="mt-8 text-3xl font-bold">
                    Digital Solutions
                  </h3>

                  <p className="mt-5 leading-7 text-white/90">
                    From an idea to a working product, we focus on building
                    technology that is practical, scalable and ready for the
                    real world.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                      <p className="text-3xl font-bold">01</p>
                      <p className="mt-2 text-sm text-white/80">
                        Understand
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                      <p className="text-3xl font-bold">02</p>
                      <p className="mt-2 text-sm text-white/80">
                        Build
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                      <p className="text-3xl font-bold">03</p>
                      <p className="mt-2 text-sm text-white/80">
                        Improve
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                      <p className="text-3xl font-bold">04</p>
                      <p className="mt-2 text-sm text-white/80">
                        Deliver
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <Target size={28} />
              </div>

              <h2 className="mt-7 text-3xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Our mission is to make technology more accessible and useful by
                delivering quality digital solutions for businesses and
                practical opportunities for students.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-10 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                <Zap size={28} />
              </div>

              <h2 className="mt-7 text-3xl font-bold text-slate-900 dark:text-white">
                Our Vision
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Our vision is to build a technology ecosystem where businesses
                can access reliable digital solutions and aspiring developers
                can gain the practical skills needed to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
              Our Values
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
              What We Stand For
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Our work is guided by principles that help us build better
              products, stronger relationships and meaningful opportunities.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                What We Do
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
                From Digital Products to Career Opportunities
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                We operate across multiple areas of the technology ecosystem,
                helping clients build digital products while helping students
                develop industry-relevant skills.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700"
                >
                  Work With Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="space-y-5">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0 dark:border-slate-800"
                  >
                    <CheckCircle
                      size={22}
                      className="shrink-0 text-green-500"
                    />

                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-10 text-center md:p-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Let's Build the Future Together
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Whether you need a digital solution for your business or want to
              develop your technology career, SPE Innovations is here to help.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/internships"
                className="rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Internships
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;