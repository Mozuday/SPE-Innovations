import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock3,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero */}

      <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto max-w-5xl px-6 text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold dark:text-white">
            Let's Build Something Amazing Together
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Have a project, internship query, course question or technical
            requirement? We'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact */}

      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* Contact Information */}

            <div className="space-y-6">

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                <Mail className="text-blue-600" size={36} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Email
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  support@speinnovations.com
                </p>

              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                <Phone className="text-green-600" size={36} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Phone
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  +91 XXXXX XXXXX
                </p>

              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                <MessageCircle className="text-sky-500" size={36} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Telegram
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Contact us directly on Telegram.
                </p>

              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                <Clock3 className="text-orange-500" size={36} />

                <h3 className="mt-5 text-xl font-bold dark:text-white">
                  Working Hours
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Monday - Saturday
                </p>

                <p className="text-slate-600 dark:text-slate-300">
                  9:00 AM - 7:00 PM
                </p>

              </div>

            </div>

            {/* Contact Form */}

            <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-slate-900">

              <h2 className="text-3xl font-bold dark:text-white">
                Send Us a Message
              </h2>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form className="mt-10 space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />

                <textarea
                  rows={7}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />

                <button
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Location */}

      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl px-6 text-center">

          <MapPin
            className="mx-auto text-red-500"
            size={52}
          />

          <h2 className="mt-6 text-4xl font-bold dark:text-white">
            Our Location
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
            India
          </p>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            We provide remote software development services across India and
            internationally.
          </p>

        </div>
      </section>
    </>
  );
};

export default Contact;