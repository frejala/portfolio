"use client";

import { Logo } from "@/assets/logos/logo";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="flex items-center justify-between h-25">
      <Logo />
      <Nav />
    </header>
  );
}
