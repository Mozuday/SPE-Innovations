import {
  Briefcase,
  Code2,
  Monitor,
  Database,
  Smartphone,
  Award,
  Users,
  Clock3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const domains = [
  {
    icon: <Monitor size={36} />,
    title: "Web Design",
    description: "Design responsive and modern user interfaces."
  },
  {
    icon: <Code2 size={36} />,
    title: "Frontend Development",
    description: "Build professional React applications."
  },
  {
    icon: <Database size={36} />,
    title: "Backend Development",
    description: "Develop APIs and scalable server applications."
  },
  {
    icon: <Smartphone size={36} />,
    title: "App Development",
    description: "Create Android & Cross-platform mobile apps."
  },
];

const benefits = [
  "Work on Real Projects",
  "Mentorship from Developers",
  "Internship Certificate",
  "Resume Building",
  "Project Guidance",
  "Placement Assistance",
];

const Internships = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            Internship Program
          </span>

          <h1 className="mt-6 text-5xl font-bold dark:text-white">
            Launch Your Career With Real Experience
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Gain practical industry experience by working on live projects,
            learning modern technologies, and building a strong portfolio.
          </p>

          <Link
            to="/internships/apply"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
          >
            Apply Now
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* Domains */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold dark:text-white">
            Internship Domains
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {domains.map((domain) => (
              <div
                key={domain.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/30">
                  {domain.icon}
                </div>

                <h3 className="text-2xl font-bold dark:text-white">
                  {domain.title}
                </h3>

                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  {domain.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="bg-slate-50 py-24 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold dark:text-white">
            Why Join SPE Innovations?
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow dark:bg-slate-900"
              >
                <CheckCircle
                  className="text-green-600"
                  size={24}
                />

                <span className="font-medium dark:text-white">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Highlights */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900 text-center">
              <Briefcase className="mx-auto text-blue-600" size={40} />
              <h3 className="mt-5 text-3xl font-bold dark:text-white">
                Live Projects
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900 text-center">
              <Users className="mx-auto text-violet-600" size={40} />
              <h3 className="mt-5 text-3xl font-bold dark:text-white">
                Team Learning
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900 text-center">
              <Clock3 className="mx-auto text-orange-600" size={40} />
              <h3 className="mt-5 text-3xl font-bold dark:text-white">
                Flexible Schedule
              </h3>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow dark:bg-slate-900 text-center">
              <Award className="mx-auto text-green-600" size={40} />
              <h3 className="mt-5 text-3xl font-bold dark:text-white">
                Certificate
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="container mx-auto max-w-5xl px-6">

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Apply today and start learning through real-world projects with
              SPE Innovations.
            </p>

            <Link
              to="/internships/apply"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:scale-105"
            >
              Apply for Internship
            </Link>

          </div>

        </div>
      </section>
    </>
  );
};

export default Internships;