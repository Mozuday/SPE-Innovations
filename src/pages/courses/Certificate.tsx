import {
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react";

const Certificate = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-16 dark:bg-slate-950">

      <div className="mx-auto max-w-5xl rounded-3xl border-[10px] border-blue-600 bg-white p-16 shadow-2xl dark:border-blue-500 dark:bg-slate-900">

        {/* Header */}

        <div className="text-center">

          <Award
            className="mx-auto text-yellow-500"
            size={70}
          />

          <h1 className="mt-6 text-5xl font-bold text-slate-900 dark:text-white">
            Certificate of Completion
          </h1>

          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            SPE Innovations
          </p>

        </div>

        {/* Body */}

        <div className="mt-16 text-center">

          <p className="text-xl text-slate-600 dark:text-slate-300">
            This Certificate is Proudly Presented To
          </p>

          <h2 className="mt-8 border-b-2 border-dashed border-slate-400 pb-4 text-5xl font-bold text-blue-600">
            Uday Kumar
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-700 dark:text-slate-300">
            For successfully completing the
            <span className="font-bold text-blue-600">
              {" "}Full Stack Web Development{" "}
            </span>
            course at
            <span className="font-bold">
              {" "}SPE Innovations
            </span>
            and demonstrating excellent dedication,
            technical knowledge and practical skills.
          </p>

        </div>

        {/* Details */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="text-center">

            <Calendar
              className="mx-auto text-blue-600"
              size={34}
            />

            <h3 className="mt-3 font-semibold dark:text-white">
              Completion Date
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              15 July 2026
            </p>

          </div>

          <div className="text-center">

            <Award
              className="mx-auto text-violet-600"
              size={34}
            />

            <h3 className="mt-3 font-semibold dark:text-white">
              Certificate ID
            </h3>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              SPE-2026-0001
            </p>

          </div>

          <div className="text-center">

            <CheckCircle
              className="mx-auto text-green-600"
              size={34}
            />

            <h3 className="mt-3 font-semibold dark:text-white">
              Status
            </h3>

            <p className="mt-2 text-green-600 font-semibold">
              Verified
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-24 grid grid-cols-2 gap-16">

          <div className="text-center">

            <div className="mx-auto mb-3 h-px w-56 bg-slate-400"></div>

            <p className="font-semibold dark:text-white">
              Instructor
            </p>

          </div>

          <div className="text-center">

            <div className="mx-auto mb-3 h-px w-56 bg-slate-400"></div>

            <p className="font-semibold dark:text-white">
              SPE Innovations
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Certificate;