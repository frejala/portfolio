"use client";

import { useState } from "react";

import { Header } from "@/components/layout/header";
import { WelcomeAnimation } from "@/components/layout/welcome-animation";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: React.ReactNode;
};

export default function PortfolioLayout({ children }: Props) {
  const [animDone, setAnimDone] = useState(false);

  if (!animDone) {
    return <WelcomeAnimation setAnimDone={setAnimDone} />;
  }

  return (
    <div className="mx-auto overflow-hidden px-10 lg:px-25 xl:px-45">
      <Header />
      <main className="mt-20">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
