"use client";

import { useState } from "react";

import Link from "next/link";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { NAV_ITEMS } from "@/constants";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <Popover onOpenChange={(open) => setOpen(open)} open={open}>
      <PopoverTrigger asChild>
        <button
          className="relative w-12 h-10 flex items-center justify-center hover:bg-transparent cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div
            className="absolute w-10 h-0.5 bg-cyellow transition-transform duration-300"
            style={{
              transform: open
                ? "rotate(45deg) translateY(0px)"
                : "translateY(-7px)",
            }}
          />
          <div
            className="absolute w-10 h-0.5 bg-cblue transition-transform duration-300"
            style={{
              transform: open
                ? "rotate(-45deg) translateY(0px)"
                : "translateY(7px)",
            }}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-100 bg-black mt-1.5 rounded-none p-0 border-1 border-white"
        align="end"
        side="bottom"
      >
        <nav className="flex flex-col divide-y divide-white w-full font-mono font-bold text-sm leading-11 tracking-normal text-white text-center">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group block text-center py-4 transition duration-300"
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
              <span className="inline-block relative">
                {item.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white" />
              </span>
            </Link>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
}
