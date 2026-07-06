import { Link } from "react-router-dom";

interface CTAButtonProps {
  text: string;
  link?: string;
  variant?: "primary" | "secondary";
}

const CTAButton = ({
  text,
  link = "/",
  variant = "primary",
}: CTAButtonProps) => {
  return (
    <Link
      to={link}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition ${
        variant === "primary"
          ? "bg-cyan-600 text-white hover:bg-cyan-700"
          : "border border-slate-700 text-white hover:bg-slate-800"
      }`}
    >
      {text}
    </Link>
  );
};

export default CTAButton;