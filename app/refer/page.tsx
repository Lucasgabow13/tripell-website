import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ReferForm from "./ReferForm";
import FadeInUp from "@/components/FadeInUp";

const BENEFITS = [
  {
    num: "01",
    title: "Get paid at close.",
    desc: "If we close a deal you introduce us to, we pay you 1% of our equity check — typically $25K–$250K+ depending on deal size. No retainer, no catch.",
  },
  {
    num: "02",
    title: "A simple, low-friction process.",
    desc: "All we need is a name and a brief description. You don't need to know financials, have a signed NDA, or broker the relationship. Just make the introduction.",
  },
  {
    num: "03",
    title: "We do right by the people you refer.",
    desc: "Every introduction we receive gets treated with respect. We move carefully, communicate clearly, and never pressure owners. Your reputation matters to us.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Fill out the form below.",
    desc: "Tell us about the business and your connection to the owner. A few sentences is enough.",
  },
  {
    step: "02",
    title: "We reach out — carefully.",
    desc: "We'll contact the owner at the right time, in the right way. We always respect the sensitivity of these conversations.",
  },
  {
    step: "03",
    title: "If we close, you get paid.",
    desc: "We track every introduction. If the deal closes, we send you 1% of our equity check within 30 days.",
  },
];

export default function ReferPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative bg-neutral-900 text-white pt-40 pb-24 lg:pt-52 lg:pb-32 px-[3vw]">
        <div className="max-w-[1500px] mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 block mb-8">
            Refer a Deal
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.08] max-w-3xl mb-6">
            Know a great business?
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed">
            Some of the best companies we&apos;ll ever see will come through
            introductions. If you know a business owner who might be open to a
            conversation, we&apos;d love to hear about it.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <div className="flex items-center justify-between border-t border-neutral-200 pt-6 mb-12">
          <span className="text-xs uppercase tracking-[0.2em]">
            Why Refer
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {BENEFITS.map((item, i) => (
            <FadeInUp key={item.num} delay={i * 0.12}>
            <div
              className="bg-white p-8 md:p-10 flex flex-col gap-6"
            >
              <span className="text-xs text-neutral-300 tracking-[0.2em] font-mono">
                {item.num}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-neutral-50">
        <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-16">
            How It Works
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {HOW_IT_WORKS.map((item, i) => (
              <FadeInUp key={item.step} delay={i * 0.12}>
              <div className="flex flex-col gap-4">
                <span className="text-xs text-neutral-300 tracking-[0.2em] font-mono">
                  {item.step}
                </span>
                <h3 className="text-base font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* What makes a good referral */}
      <section className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-10">
              What We&apos;re Looking For
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15]">
              You don&apos;t need to be a broker to refer a deal.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-5">
            <p className="text-sm text-neutral-500 leading-relaxed">
              The best referrals come from people who simply know a great
              business owner — an old colleague, a family friend, someone in
              your network who&apos;s been talking about eventually stepping back.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We look for profitable, established businesses with $1M–$5M in
              EBITDA — home services, business services, specialty contracting,
              distribution, and similar industries. But if you&apos;re not sure
              whether it&apos;s a fit, send it anyway. We&apos;ll always give you an
              honest answer.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-neutral-50">
        <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-6">
                  Make an Introduction
                </span>
                <h2 className="text-3xl md:text-4xl font-medium leading-[1.15]">
                  Tell us about the business.
                </h2>
              </div>
              <div className="flex flex-col gap-4 max-w-sm">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Fill out what you know. You don&apos;t need to have all the
                  details — just enough for us to start a conversation.
                </p>
              </div>
              <div className="border-t border-neutral-200 pt-8 flex flex-col gap-3">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Prefer to reach out directly?
                </p>
                <a
                  href="mailto:info@tripellpartners.com"
                  className="text-sm text-black hover:opacity-50 transition-opacity duration-200"
                >
                  info@tripellpartners.com
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ReferForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
