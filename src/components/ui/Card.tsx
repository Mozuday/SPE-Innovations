import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
} l

const Card = ({
  children,
  className = "",
  hover = true,
  ...props
}: CardProps) => {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        text-slate-900
        shadow-sm
        transition-all
        duration-300

        dark:border-slate-800
        dark:bg-slate-900
        dark:text-white

        ${hover
          ? "hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:hover:border-slate-700"
          : ""
        }

        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
