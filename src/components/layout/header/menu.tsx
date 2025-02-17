import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NAV_ITEMS } from "@/constants";

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Popover onOpenChange={(open) => setOpen(open)} open={open}>
      <PopoverTrigger asChild>
        <Button
          className="relative w-12 h-8 flex items-center justify-center hover:bg-transparent cursor-pointer"
          variant="ghost"
          onClick={() => setOpen(!open)}
        >
          <div
            className="absolute w-10 h-[2px] bg-[#FFC100] transition-transform duration-300"
            style={{
              transform: open
                ? "rotate(45deg) translateY(0px)"
                : "translateY(-7px)",
            }}
          ></div>
          <div
            className="absolute w-10 h-[2px] bg-[#49DEFF] transition-transform duration-300"
            style={{
              transform: open
                ? "rotate(-45deg) translateY(0px)"
                : "translateY(7px)",
            }}
          ></div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 bg-black mt-1.5 rounded-none p-0"
        align="end"
        side="bottom"
      >
        <nav className="flex flex-col divide-y divide-white w-full font-mono font-bold text-sm leading-11 tracking-normal text-white text-center">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="py-4 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);

                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });

                  setOpen(false);

                  (e.currentTarget as HTMLElement).blur();
                }
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
}
