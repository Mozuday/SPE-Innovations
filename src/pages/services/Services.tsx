import {
  Globe,
  Smartphone,
  Laptop,
  Bug,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional, responsive and SEO-friendly websites built for businesses, startups and personal brands.",
    features: [
      "Business Websites",
      "Portfolio Websites",
      "E-Commerce",
      "Landing Pages",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Cross-platform Android and iOS applications using modern technologies with excellent performance.",
    features: [
      "Android Apps",
      "iOS Apps",
      "React Native",
      "Flutter",
    ],
  },
  {
    icon: Laptop,
    title: "Software Development",
    description:
      "Custom software solutions designed to automate business operations and improve productivity.",
    features: [
      "ERP Systems",
      "CRM",
      "Desktop Software",
      "Automation",
    ],
  },
  {
    icon: Bug,
    title: "Bug Fixing",
    description:
      "Debugging, optimization and maintenance for existing websites and applications.",
    features: [
      "Performance Optimization",
      "Security Fixes",
      "Error Fixing",
      "Code Refactoring",
    ],
  },
  {
    icon: Wrench,
    title: "Technical Consulting",
    description:
      "Professional consultation to help choose the right technologies and architecture for your project.",
    features: [
      "System Architecture",
      "Deployment",
      "Code Review",
      "Technical Guidance",
    ],
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Our Services
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            Complete Digital Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We help startups, businesses and individuals transform ideas into
            modern digital products through reliable technology solutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10 lg:grid-cols-2 dark:border-slate-800 dark:bg-slate-900"
                >
                  {/* Service Information */}
                  <div>
                    <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      <Icon size={42} />
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400"
                    >
                      Discuss Your Project
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  {/* Features */}
                  <div className="rounded-2xl bg-slate-50 p-6 md:p-8 dark:bg-slate-950">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      What We Offer
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle
                            size={20}
                            className="shrink-0 text-green-500"
                          />

                          <span className="text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-10 text-center md:p-14">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Let's discuss your requirements and build a digital solution
              that helps your business grow.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;