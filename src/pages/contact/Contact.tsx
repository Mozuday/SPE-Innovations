import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>
) => {
    event.preventDefault();

    setSubmitted(true);

    event.currentTarget.reset();
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Contact Us
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-bold text-slate-900 md:text-6xl dark:text-white">
            Let's Start a Conversation
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Have a project idea, need technical assistance, or want to learn
            more about our internships and courses? Get in touch with SPE
            Visions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Get In Touch
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
                We're Here to Help
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                Whether you're a business looking for a digital solution or a
                student interested in internships and courses, feel free to
                reach out to us.
              </p>

              <div className="mt-10 space-y-5">
                {/* Email */}
                <a
                  href="mailto:contact@speVisions.in"
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      contact@speVisions.in
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="#"
                  className="group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-green-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      Chat With Us
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Send Us a Message
                </h2>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  Tell us about your requirements and we'll get back to you.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  {/* Name + Email */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                    >
                      Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="website">
                        Website Development
                      </option>
                      <option value="app">
                        App Development
                      </option>
                      <option value="software">
                        Software Development
                      </option>
                      <option value="bug-fixing">
                        Bug Fixing
                      </option>
                      <option value="consulting">
                        Technical Consulting
                      </option>
                      <option value="internship">
                        Internship
                      </option>
                      <option value="courses">
                        Certification Courses
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your project or requirements..."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    />
                  </div>

                  {/* Success Message */}
                  {submitted && (
                    <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:border-green-900 dark:bg-green-950/30 dark:text-green-400">
                      Thank you! Your message has been submitted successfully.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-10 text-center md:p-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Have an Idea? Let's Build It.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Share your requirements with us and let's explore how technology
              can help turn your idea into a working solution.
            </p>

            <a
              href="mailto:contact@speVisions.in"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
            >
              Email Us
              <Mail size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;