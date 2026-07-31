import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionTitle = ({
  title,
  description,
  eyebrow,
  align = "center",
  children,
}: SectionTitleProps) => {
  const isCenter = align === "center";

  return (
    <div
      className={`
        max-w-3xl
        ${isCenter ? "mx-auto text-center" : "text-left"}
      `}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
          {description}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default SectionTitle;