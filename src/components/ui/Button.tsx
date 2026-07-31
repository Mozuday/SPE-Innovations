import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonLinkProps {
  children: ReactNode;
  to: string;
  variant?: ButtonVariant;
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-500 dark:hover:text-white",

  secondary:
    "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400",

  outline:
    "border border-slate-300 bg-transparent text-slate-800 hover:border-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-900",

  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonLink = ({
  children,
  to,
  variant = "primary",
  className = "",
}: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;