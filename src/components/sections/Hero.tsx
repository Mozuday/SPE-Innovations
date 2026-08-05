import hero from "../../assets/images/hero.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">

      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-40 dark:opacity-20">
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
            bg-[size:64px_64px]
            dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
          "
        />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">

        {/* Left Content */}
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-800 dark:bg-slate-900">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500" />

            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              SPE Visions
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Building digital
            <span className="block text-blue-600 dark:text-blue-500">
              solutions that matter.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-400">
            We design and develop modern websites, applications and software
            solutions that help businesses build a stronger digital presence.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <ButtonLink
              to="/contact"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Start a Project
              <ArrowRight size={17} />
            </ButtonLink>

            <ButtonLink
              to="/services"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Explore Services
            </ButtonLink>

          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-6">

            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2
                size={17}
                className="text-blue-600 dark:text-blue-500"
              />
              Business-focused solutions
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2
                size={17}
                className="text-blue-600 dark:text-blue-500"
              />
              Practical technical support
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center lg:justify-end">

          {/* Image Container */}
          <div className="relative w-full max-w-xl">

            {/* Subtle border frame */}
            <div className="absolute -inset-4 -z-10 rounded-3xl border border-slate-200 dark:border-slate-800" />

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-xl shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">

              <img
                src={hero}
                alt="SPE Visions digital solutions"
                className="h-auto w-full object-contain"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;