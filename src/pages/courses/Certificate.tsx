import { useState } from "react";
import {
  Award,
  CheckCircle,
  Search,
  ShieldCheck,
} from "lucide-react";

type CertificateData = {
  certificateId: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  status: "Valid" | "Invalid";
};

const certificates: CertificateData[] = [
  {
    certificateId: "SPE-FSWD-2026-001",
    studentName: "Demo Student",
    courseName: "Full Stack Web Development",
    issueDate: "24 July 2026",
    status: "Valid",
  },
];

const Certificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] =
    useState<CertificateData | null>(null);
  const [searched, setSearched] = useState(false);

  const handleVerify = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedId = certificateId.trim().toUpperCase();

    if (!normalizedId) {
      setCertificate(null);
      setSearched(false);
      return;
    }

    const result = certificates.find(
      (item) => item.certificateId.toUpperCase() === normalizedId
    );

    setCertificate(result ?? null);
    setSearched(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
            <Award size={40} />
          </div>

          <h1 className="mt-7 text-4xl font-bold text-slate-900 md:text-6xl dark:text-white">
            Certificate Verification
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Verify the authenticity of a certificate issued by SPE Visions
            using the unique certificate ID.
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-center">
              <ShieldCheck className="mx-auto text-green-500" size={42} />

              <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
                Verify Your Certificate
              </h2>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Enter the certificate ID printed on your certificate.
              </p>
            </div>

            <form
              onSubmit={handleVerify}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <input
                type="text"
                value={certificateId}
                onChange={(event) =>
                  setCertificateId(event.target.value)
                }
                placeholder="Example: SPE-FSWD-2026-001"
                className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <Search size={18} />
                Verify
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Result */}
      {searched && (
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-6">
            {certificate ? (
              <div className="overflow-hidden rounded-3xl border border-green-200 bg-white shadow-xl dark:border-green-900 dark:bg-slate-900">
                {/* Valid Header */}
                <div className="bg-green-600 px-8 py-6 text-center text-white">
                  <CheckCircle className="mx-auto" size={42} />

                  <h2 className="mt-3 text-2xl font-bold">
                    Certificate Verified
                  </h2>

                  <p className="mt-2 text-green-100">
                    This certificate is valid and was issued by SPE Visions.
                  </p>
                </div>

                {/* Certificate Details */}
                <div className="p-8 md:p-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Certificate ID
                      </p>

                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                        {certificate.certificateId}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Status
                      </p>

                      <p className="mt-2 font-semibold text-green-600 dark:text-green-400">
                        {certificate.status}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Student Name
                      </p>

                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                        {certificate.studentName}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Issue Date
                      </p>

                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                        {certificate.issueDate}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Course Completed
                    </p>

                    <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                      {certificate.courseName}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center dark:border-red-900 dark:bg-red-950/30">
                <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">
                  Certificate Not Found
                </h2>

                <p className="mt-3 text-red-600 dark:text-red-300">
                  We could not find a certificate matching the provided ID.
                  Please check the ID and try again.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Information */}
      <section className="bg-slate-50 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <ShieldCheck className="text-green-500" size={30} />

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Authentic Certificates
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Every certificate issued by SPE Visions can be verified
                using its unique certificate ID.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <Award className="text-green-500" size={30} />

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Course Completion
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Certificates are issued to eligible students after successfully
                completing the required course requirements.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <CheckCircle className="text-green-500" size={30} />

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                Easy Verification
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Employers, students and organizations can verify certificate
                details quickly using the certificate ID.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Certificate;