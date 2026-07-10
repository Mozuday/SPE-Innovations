import {
  BriefcaseBusiness,
  Monitor,
  Code2,
  Database,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const internships = [
  {
    icon: <Monitor size={30} />,
    title: "Web Design",
    description:
      "Learn modern UI/UX principles and build responsive websites using industry standards.",
  },
  {
    icon: <Code2 size={30} />,
    title: "Frontend Development",
    description:
      "Work with HTML, CSS, JavaScript, React and Tailwind CSS on real client projects.",
  },
  {
    icon: <Database size={30} />,
    title: "Backend Development",
    description:
      "Develop REST APIs, databases, authentication systems and scalable server applications.",
  },
  {
    icon: <Smartphone size={30} />,
    title: "App Development",
    description:
      "Build Android and cross-platform mobile applications with modern frameworks.",
  },
];

const InternshipPreview = () => {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
            Internship Program
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Gain Real Industry Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Work on practical projects under experienced developers, improve
            your technical skills, and receive an internship certificate after
            successful completion.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {internships.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-10 text-center text-white">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
            <BriefcaseBusiness size={36} />
          </div>

          <h3 className="mt-6 text-3xl font-bold">
            Kickstart Your Career with SPE Innovations
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Learn by building real-world applications, collaborate with a
            professional team and strengthen your portfolio through practical
            experience.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Apply for Internship
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default InternshipPreview;