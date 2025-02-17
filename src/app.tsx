import Hero from "@/sections/hero";
import About from "@/sections/about";
import RoadPath from "@/sections/road-path";
import Projects from "@/sections/projects";
import Contact from "@/sections/contact";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="container mx-auto px-8 z-10">
          <Header />
          <Hero />
          <About />
          <RoadPath />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
