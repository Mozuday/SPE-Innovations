import {
  Globe,
  Smartphone,
  Laptop,
  Bug,
  Wrench,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={42} />,
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
    icon: <Smartphone size={42} />,
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
    icon: <Laptop size={42} />,
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
    icon: <Bug size={42} />,
    title: "Bug Fixing",
    description:
      "Debugging, optimization and maintenance for existing websites and applications.",
    features: [
      "Performance",
      "Security",
      "Error Fixing",
      "Code Refactoring",
    ],
  },
  {
    icon: <Wrench size={42} />,
    title: "Technical Consulting",
    description:
      "Professional consultation to help choose the right technologies and architecture.",
    features: [
      "Architecture",
      "Deployment",
      "Code Review",
      "Mentoring",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Our Services
          </span>

          <h1 className="mt-6 text-5xl font-bold dark:text-white">
            Complete Digital Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We help startups, businesses and individuals transform ideas into
            modern digital products through innovative technology solutions.
          </p>

        </div>
      </section>

      {/* Services */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid gap-10">

            {services.map((service) => (
              <div
                key={service.title}
                className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 lg:grid-cols-2"
              >

                {/* Left */}

                <div>

                  <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {service.icon}
                  </div>

                  <h2 className="text-3xl font-bold dark:text-white">
                    {service.title}
                  </h2>

                  <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>

                </div>

                {/* Right */}

                <div>

                  <h3 className="mb-6 text-xl font-semibold dark:text-white">
                    What We Offer
                  </h3>

                  <div className="space-y-5">

                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-4"
                      >
                        <CheckCircle
                          className="text-green-500"
                          size={22}
                        />

                        <span className="text-lg dark:text-slate-200">
                          {feature}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-12 text-center text-white">

            <h2 className="text-4xl font-bold">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Let's discuss your requirements and build a solution that helps
              your business grow.
            </p>

            <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
              Request a Quote
            </button>

          </div>

        </div>
      </section>
    </>
  );
};

export default Services;