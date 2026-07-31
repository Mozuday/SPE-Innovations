import {
  Globe,
  Smartphone,
  Laptop,
  Bug,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Responsive and modern websites designed to help businesses build a professional online presence.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Practical mobile applications designed to provide reliable experiences across modern devices.",
  },
  {
    icon: Laptop,
    title: "Software Development",
    description:
      "Custom software solutions built to simplify workflows and solve specific business problems.",
  },
  {
    icon: Bug,
    title: "Bug Fixing",
    description:
      "Debugging, performance improvements and technical maintenance for existing applications.",
  },
  {
    icon: Wrench,
    title: "Technical Consulting",
    description:
      "Technical guidance for choosing technologies, improving architecture and planning digital products.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="border-b border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionTitle
          eyebrow="What We Do"
          title="Technology solutions built around your needs"
          description="From websites and applications to software development and technical support, we help turn ideas and business requirements into practical digital solutions."
        />

        {/* Services Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group flex h-full flex-col p-7"
              >
                {/* Icon */}
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:border-blue-900 dark:group-hover:bg-blue-950/40 dark:group-hover:text-blue-400">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to="/services"
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                >
                  Learn more

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </Card>
            );
          })}

          {/* View All Services */}
          <div className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-7 dark:border-slate-700 dark:bg-slate-900/50">

            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Have a project in mind?
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Let's discuss how we can help.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Tell us what you're trying to build or fix, and we'll help you
                find a practical way forward.
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;