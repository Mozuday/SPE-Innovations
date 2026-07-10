import {
  Globe,
  Smartphone,
  Laptop,
  Bug,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={34} />,
    title: "Website Development",
    description:
      "Responsive, modern and SEO-friendly websites for businesses and startups.",
  },
  {
    icon: <Smartphone size={34} />,
    title: "App Development",
    description:
      "Cross-platform Android and iOS applications built with modern technologies.",
  },
  {
    icon: <Laptop size={34} />,
    title: "Software Development",
    description:
      "Custom software solutions designed to automate and simplify business operations.",
  },
  {
    icon: <Bug size={34} />,
    title: "Bug Fixing",
    description:
      "Performance optimization, debugging and maintenance for existing applications.",
  },
  {
    icon: <Wrench size={34} />,
    title: "Technical Consulting",
    description:
      "Professional guidance for architecture, deployment and technology decisions.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Everything Your Business Needs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            From websites and mobile apps to software development, technical
            consulting and bug fixing, SPE Innovations delivers reliable digital
            solutions for businesses of every size.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
                {service.title}
              </h3>

              <p className="leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>

              <button className="mt-8 font-semibold text-blue-600 transition group-hover:translate-x-2">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;