"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/FadeInUp";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const PARAMETERS = [
  { value: "$1M–$5M", label: "Target EBITDA" },
  { value: "Lower Middle", label: "Market Focus" },
  { value: "Long-Term", label: "Hold Period" },
  { value: "Operators", label: "Who We Are" },
];

const CRITERIA = [
  {
    num: "01",
    title: "Recurring revenue",
    tagline: "Customers come back without being chased.",
    desc: "Businesses built on contracts, subscriptions, or strong repeat purchase patterns. Revenue that doesn't start from zero each year.",
  },
  {
    num: "02",
    title: "A simple business model",
    tagline: "You can explain it in one sentence.",
    desc: "We're not looking for complexity. The best businesses we've seen are clear about what they do, who they serve, and how they get paid.",
  },
  {
    num: "03",
    title: "Real profitability",
    tagline: "$1M–$5M in EBITDA with clean financials.",
    desc: "We target businesses generating $1M–$5M in EBITDA. Clean books, no surprises. Financial clarity is the foundation of a good deal.",
  },
  {
    num: "04",
    title: "Healthy margins",
    tagline: "Strong unit economics that hold up over time.",
    desc: "Core economics that are sound — not dependent on volume to mask thin margins, and not relying on a single customer to stay afloat.",
  },
  {
    num: "05",
    title: "Recession resilient demand",
    tagline: "Needed in good times and bad.",
    desc: "Businesses that serve essential needs. When budgets tighten, your customers still need what you provide.",
  },
  {
    num: "06",
    title: "A team worth keeping",
    tagline: "Operators who care and want to keep building.",
    desc: "A strong second tier of management signals a well-run business — and is what makes a smooth transition possible. We invest in teams, not just assets.",
  },
];

const INDUSTRIES = [
  "Home & Field Services",
  "Business Services",
  "Light Manufacturing",
  "Specialty Contracting",
  "Distribution",
  "Healthcare & Wellness",
];

const NOT_A_FIT = [
  "Pre-revenue or early-stage companies",
  "Real estate or asset-heavy deals",
  "Technology or software businesses",
  "Turnarounds or distressed situations",
  "Businesses with no management team beyond the owner",
  "Deals requiring significant capital investment upfront",
];

export default function InvestmentCriteriaPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative bg-neutral-900 text-white pt-40 pb-24 lg:pt-52 lg:pb-32 px-[3vw]">
        <div className="max-w-[1500px] mx-auto">
          <span className="text-sm uppercase tracking-[0.2em] text-white/60 font-medium block mb-8">
            Investment Criteria
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.08] max-w-3xl mb-6">
            We know what we&apos;re looking for.
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed">
            Lower middle-market businesses with durable economics, good teams,
            and owners ready for what comes next.
          </p>
        </div>
      </section>

      {/* Deal Parameters */}
      <section className="bg-black text-white">
        <div className="max-w-[1500px] mx-auto px-[3vw] py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {PARAMETERS.map((p, i) => (
              <div key={i} className="bg-black px-8 py-10 flex flex-col gap-2">
                <span className="text-3xl md:text-4xl font-medium tracking-tight">
                  {p.value}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-white/40">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 6 Criteria */}
      <section className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <div className="flex items-center justify-between border-t border-neutral-200 pt-6 mb-12">
          <span className="text-sm uppercase tracking-[0.2em] font-medium">
            What We Look For
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {CRITERIA.map((item, i) => (
            <FadeInUp key={item.num} delay={i * 0.08}>
            <div
              className="bg-white p-8 md:p-10 flex flex-col gap-6 group hover:bg-neutral-50 transition-all duration-300 relative overflow-hidden border border-neutral-100"
            >
              {/* Black accent bar — reveals on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0a0a0a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

              <span className="text-xs text-neutral-300 tracking-[0.2em] font-mono group-hover:text-[#0a0a0a] transition-colors duration-300">
                {item.num}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed italic">
                  {item.tagline}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Industries + Not a Fit */}
      <section className="bg-neutral-50">
        <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">

            {/* Industries */}
            <div>
              <h3 className="text-lg font-medium mb-6 pb-6 border-b border-neutral-200">
                Industries We Focus On
              </h3>
              <ul className="flex flex-col gap-4">
                {INDUSTRIES.map((industry) => (
                  <li
                    key={industry}
                    className="flex items-center gap-4 text-sm text-neutral-500 leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                    {industry}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-neutral-400 mt-8 leading-relaxed">
                We&apos;re not rigidly sector-specific. If the fundamentals are
                right, we&apos;re open to the conversation.
              </p>
            </div>

            {/* Not a Fit */}
            <div>
              <h3 className="text-lg font-medium mb-6 pb-6 border-b border-neutral-200">
                What&apos;s Not a Fit
              </h3>
              <ul className="flex flex-col gap-4">
                {NOT_A_FIT.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-sm text-neutral-400 leading-snug"
                  >
                    <span className="text-neutral-300 mt-px shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <span className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium block mb-16">
          Why It Matters
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <div className="flex flex-col gap-5">
            <p className="text-sm text-neutral-500 leading-relaxed">
              These criteria aren&apos;t just a checklist. They reflect the kind of
              business we&apos;re built to own and operate for the long term.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We&apos;re not a fund with a five-year exit mandate. We&apos;re not looking
              for a turnaround project. We&apos;re looking for a business that&apos;s
              already working — one where better ownership and a more focused
              operator can make something good into something great.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-sm text-neutral-500 leading-relaxed">
              When we find a business that meets these criteria, we move quickly
              and transparently. No committee layers. No deal fatigue. Just a
              direct conversation about whether we&apos;re the right fit for each
              other.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              If your business doesn&apos;t check every box, reach out anyway. The
              right fundamentals matter more than a perfect profile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
          <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] max-w-2xl">
              Tell us about your business.
            </h2>
            <HoverBorderGradient
              as="a"
              containerClassName="cursor-pointer"
              className="text-xs uppercase tracking-[0.15em] px-8 py-4 bg-[#0a0a0a] text-white"
              onClick={() => { window.location.href = '/contact'; }}
            >
              Get In Touch
            </HoverBorderGradient>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
