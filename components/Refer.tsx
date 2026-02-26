import FadeInUp from "./FadeInUp";

export default function Refer() {
  return (
    <section id="refer" className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        {/* Left — headline */}
        <FadeInUp>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-10">
            Refer a Deal
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15]">
            Refer a business. Get paid.
          </h2>
        </FadeInUp>

        {/* Right — body */}
        <FadeInUp delay={0.15} className="flex flex-col justify-end gap-5">
          <p className="text-sm text-neutral-500 leading-relaxed">
            Some of the best businesses we&apos;ve ever seen come through friends and
            introductions. Everyone knows a great business owner, and one day
            that owner may want to explore a sale.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed">
            If we close a deal you introduce us to, we&apos;ll pay you 1% of our
            equity check at close — typically $25K–$250K+ depending on deal
            size.
          </p>
          <a
            href="/refer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] mt-4 group w-fit border-b border-black pb-0.5 hover:opacity-50 transition-opacity duration-200"
          >
            <span>Make an Introduction</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
