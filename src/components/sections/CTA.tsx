import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-10 md:p-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                SPE Innovations
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                Let's Build Something Amazing Together
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
                Whether you're looking for a professional website, a custom
                application, technical guidance, internship opportunities or
                practical courses, we're here to help you achieve your goals.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/services"
                  className="rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">

              <h3 className="text-2xl font-bold text-white">
                Get Started Today
              </h3>

              <p className="mt-4 leading-7 text-white/80">
                Have an idea or a project in mind? Reach out and let's discuss
                how SPE Innovations can help bring it to life.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-white/20 p-3">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="font-semibold">
                      contact@speinnovations.com
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-white/20 p-3">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <p className="font-semibold">
                      +91 XXXXX XXXXX
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;