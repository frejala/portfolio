"use client";

import { useState } from "react";

import { Header } from "@/components/layout/header";
import { WelcomeAnimation } from "@/components/layout/welcome-animation";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ScrollDots } from "@/components/layout/scroll-dots";

type Props = {
  children: React.ReactNode;
};

export default function PortfolioLayout({ children }: Props) {
  const [animDone, setAnimDone] = useState(false);

  if (!animDone) {
    return <WelcomeAnimation setAnimDone={setAnimDone} />;
  }

  return (
    <div className="mx-auto overflow-hidden px-10 lg:px-25 xl:px-45 selection:bg-cyan-300">
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster />
      <ScrollDots />
    </div>
  );
}
