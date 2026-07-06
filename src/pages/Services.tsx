const Services = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive and SEO-friendly websites tailored for businesses, startups and organizations.",
      features: [
        "Business Websites",
        "Portfolio Websites",
        "Landing Pages",
        "E-Commerce Solutions",
      ],
    },
    {
      title: "App Development",
      description:
        "Scalable web applications built using modern technologies and best practices.",
      features: [
        "React Applications",
        "Admin Dashboards",
        "SaaS Platforms",
        "Custom Solutions",
      ],
    },
    {
      title: "Bug Fixing",
      description:
        "Performance optimization, debugging and maintenance for existing projects.",
      features: [
        "Frontend Bugs",
        "Backend Issues",
        "Database Problems",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="px-6 py-24 text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          Our Services
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-slate-400">
          Professional digital solutions designed to help
          businesses grow faster and smarter.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-cyan-500/20 bg-slate-900/50 p-8 backdrop-blur"
            >
              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>

              <p className="mt-4 text-slate-400">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature}>
                    • {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 rounded-xl bg-cyan-600 px-5 py-3">
                Get Started
              </button>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Services;