import React from "react";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  icon: Icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white",
    secondary: "bg-stone-800 text-stone-400 hover:bg-stone-700",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}

