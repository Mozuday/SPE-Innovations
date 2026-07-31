import type { TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = ({
  label,
  error,
  id,
  className = "",
  ...props
}: TextareaProps) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        className={`
          min-h-32
          w-full
          resize-y
          rounded-lg
          border
          bg-white
          px-4
          py-3
          text-sm
          text-slate-900
          outline-none
          transition
          placeholder:text-slate-400

          border-slate-300

          hover:border-slate-400

          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:placeholder:text-slate-500

          dark:hover:border-slate-600

          dark:focus:border-blue-500
          dark:focus:ring-blue-500/20

          disabled:cursor-not-allowed
          disabled:opacity-50

          ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}

          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;