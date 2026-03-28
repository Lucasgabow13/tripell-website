import FadeInUp from "./FadeInUp";

export default function About() {
  return (
    <section id="about" className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {/* Left — headline */}
        <FadeInUp type="left">
          <span className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium block mb-10">
            Why Sell To Us?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15]">
            Not private equity. Not a strategic. Just long-term owners who give a damn.
          </h2>
        </FadeInUp>

        {/* Right — body */}
        <FadeInUp delay={0.15} type="right" className="flex flex-col justify-end gap-5">
          <p className="text-sm text-neutral-500 leading-relaxed">
            We are not private equity. We buy great businesses and hold them —
            full stop. No mandated exit. No financial engineering. No new owners
            showing up in three years with different priorities.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Same customers, same team, same culture. Just better systems and
            more support behind the scenes.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] mt-4 group w-fit border-b border-[#0a0a0a] pb-0.5 hover:opacity-50 transition-opacity duration-300"
          >
            <span>More About Us</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
