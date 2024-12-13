import React from "react";

type TextAreaProps = {
  label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ label, className = "", ...props }: TextAreaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-stone-400 mb-1">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-2 bg-stone-900 rounded-lg focus:ring-2 focus:ring-amber-600 outline-none resize-none ${className}`}
        {...props}
      />
    </div>
  );
}

