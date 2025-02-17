import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const FloatingInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        placeholder=" "
        className={cn(
          "peer outline-none bg-transparent border-none focus:ring-0 focus:shadow-none rounded-none font-mono appearance-none h-12 py-2 text-base focus-visible:shadow-none focus-visible:outline-none focus-visible:outline-0 focus-visible:ring-0",
          className
        )}
        style={{
          borderBottom: "1px solid #E2E8F0",
        }}
        ref={ref}
        {...props}
      />
    );
  }
);
FloatingInput.displayName = "FloatingInput";

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-3 z-10 origin-[0] -translate-y-6 scale-100 transform px-2 text-base font-mono duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:scale-100 peer-focus:top-3 peer-focus:-translate-y-6 peer-focus:scale-100 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 cursor-text bg-transparent text-white opacity-30",
        className
      )}
      style={{}}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

type FloatingLabelInputProps = InputProps & { label?: string };

const FloatingLabelInput = React.forwardRef<
  React.ElementRef<typeof FloatingInput>,
  React.PropsWithoutRef<FloatingLabelInputProps>
>(({ id, label, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingInput ref={ref} id={id} {...props} />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingInput, FloatingLabel, FloatingLabelInput };
