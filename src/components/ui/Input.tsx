import React from "react";

type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-stone-400 mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 bg-stone-900 rounded-lg focus:ring-2 focus:ring-amber-600 outline-none ${className}`}
        {...props}
      />
    </div>
  );
}

