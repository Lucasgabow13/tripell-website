"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function CompaniesPage() {
  return (
    <main>
      <Nav />

      <section className="min-h-screen bg-neutral-900 text-white flex items-center px-[3vw]">
        <div className="max-w-[1500px] mx-auto w-full">
          <span className="text-sm uppercase tracking-[0.2em] text-white/60 font-medium block mb-8">
            Our Companies
          </span>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] max-w-2xl mb-4">
            We are selective by design.
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] max-w-2xl text-white/40 mb-12">
            We&apos;d rather wait for the right business than move fast on the wrong one.
          </p>
          <p className="text-sm text-white/50 leading-relaxed max-w-md mb-12">
            Our first acquisition is underway. Check back soon.
          </p>
          <HoverBorderGradient
            as="a"
            containerClassName="cursor-pointer"
            className="text-xs uppercase tracking-[0.15em] px-8 py-4 bg-[#0a0a0a] text-white"
            onClick={() => { window.location.href = '/contact'; }}
          >
            Get In Touch
          </HoverBorderGradient>
        </div>
      </section>

      <Footer />
    </main>
  );
}
