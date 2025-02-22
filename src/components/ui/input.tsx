"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends React.ComponentProps<"input"> {
  label: string;
  error?: string;
}

export const Input = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, type = "text", label, id, error, ...props }, ref) => {
  const [displayError, setDisplayError] = React.useState<string | undefined>(
    error
  );
  const [exiting, setExiting] = React.useState(false);
  const [entering, setEntering] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setDisplayError(error);
      setExiting(false);
      setEntering(true);
      requestAnimationFrame(() => {
        setEntering(false);
      });
    } else if (displayError) {
      setExiting(true);
      const timer = setTimeout(() => {
        setDisplayError(undefined);
        setExiting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [error, displayError]);

  return (
    <div className="relative z-0 pb-2">
      <input
        ref={ref}
        type={type}
        id={id}
        placeholder=" "
        className={cn(
          "peer block w-full border-0 border-b-1 bg-transparent px-2 py-2.5 text-sm text-white font-mono",
          "focus:outline-none focus:ring-0",
          error ? "border-red-400" : "border-[#E2E8F0]",
          className
        )}
        {...props}
      />

      <label
        htmlFor={id}
        className={cn(
          "absolute top-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-white opacity-30 font-mono duration-300 px-2",
          "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100",
          "peer-focus:-translate-y-6 peer-focus:scale-75",
          error ? "text-red-400" : "text-[#E2E8F0]"
        )}
      >
        {label}
      </label>

      {displayError && (
        <p
          className={cn(
            "absolute left-0 top-full mt-1 text-sm text-red-400",
            "transition-all duration-300 ease-in-out",
            entering && "opacity-0 -translate-y-1",
            exiting && "opacity-0 -translate-y-1",
            !entering && !exiting && "opacity-100 translate-y-0"
          )}
        >
          {displayError}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";
