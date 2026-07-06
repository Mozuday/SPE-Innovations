const Portfolio = () => {
  const projects = [
    {
      title: "Political Campaign Website",
      description:
        "A responsive political campaign website focused on public outreach and engagement.",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Business Dashboard",
      description:
        "Admin dashboard for managing business operations and analytics.",
      tech: ["React", "Express", "PostgreSQL"],
    },
    {
      title: "Developer Portfolio",
      description:
        "Modern portfolio website showcasing projects and skills.",
      tech: ["React", "Tailwind CSS"],
    },
    {
      title: "E-Commerce Platform",
      description:
        "Online store with product management and secure checkout.",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Learning Platform",
      description:
        "Platform for managing courses and certifications.",
      tech: ["React", "Express", "PostgreSQL"],
    },
    {
      title: "Business Website",
      description:
        "Professional website for improving online visibility.",
      tech: ["React", "Tailwind CSS"],
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Tailwind CSS",
    "Cloudinary",
    "GitHub",
    "Vercel",
    "Railway",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-bold md:text-7xl">
            Our Portfolio
          </h1>

          <p className="mt-6 text-lg text-slate-400">
            A showcase of projects built using modern technologies and
            industry best practices.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-500 transition"
              >
                <div className="h-48 rounded-xl bg-slate-800"></div>

                <h2 className="mt-6 text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="rounded-lg bg-cyan-600 px-4 py-2 hover:bg-cyan-700">
                    Live Demo
                  </button>

                  <button className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800">
                    GitHub
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold">
            Technologies We Use
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center">

          <h2 className="text-4xl font-bold">
            Have a Project in Mind?
          </h2>

          <p className="mt-4 text-slate-400">
            Let's build a modern digital solution together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-cyan-600 px-6 py-3 hover:bg-cyan-700">
              Contact Us
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-3 hover:bg-slate-800">
              WhatsApp
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Portfolio;