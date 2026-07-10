import hero from "../../assets/images/hero.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
      <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="container mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-600 dark:text-violet-300">
            SPE Innovations
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 dark:text-white md:text-7xl">
            Building
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              {" "}Digital Solutions
            </span>

            <br />

            For Modern Businesses
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We design websites, mobile applications, software solutions,
            professional internships and certification courses that help
            businesses and students grow together.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800">
              Explore Services
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="relative">

          <img
            src={hero}
            alt="SPE Innovations"
            className="mx-auto w-full max-w-lg"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;