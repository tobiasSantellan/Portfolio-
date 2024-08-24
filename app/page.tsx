import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "./_components/Hero";

import Grid from "./_components/Grid";
import Projects from "./_components/Projects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        <Projects />
      </div>
    </main>
  );
}
