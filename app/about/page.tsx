import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import FadeInUp from "@/components/FadeInUp";

const TEAM = [
  {
    name: "Lucas Gabow",
    role: "Managing Partner, Founder",
    photo: "/36e307532_PNGimage.png",
    bio: "Lucas Gabow is a New York-based entrepreneur and operator with a background in storytelling, media, and high-impact digital growth. He began his career building and scaling digital platforms for founders and creators, helping shape brand narratives that reached millions and translated attention into durable businesses. More recently, Lucas has moved into hands-on operations and ownership — including as a partner at Protocol Health, a modern longevity clinic. He is driven by a simple philosophy: buy and build businesses the right way, with care for people, respect for legacy, and a commitment to long-term value creation.",
  },
  {
    name: "Carl Wolf",
    role: "Managing Partner, Head of Operations",
    photo: "/14634b280_image.png",
    bio: "Carl Wolf is a seasoned operator, investor, and consultant with experience in scaling high-growth technology companies. He has held executive roles overseeing marketing, business development, sales, and operations — including COO of LanzaTech (IPO 2023) and Chief Commercial & COO of Newlab. His commercial experience spans capital raising, licensing, and complex deal structures. Earlier in his career, Carl worked as a management consultant in Washington, DC. He holds a BA from UMBC, an MS from NYIT, and an MBA from Northwestern's Kellogg School of Management. He lives in Westchester, New York with his wife and two children.",
  },
  {
    name: "Brian Cinelli",
    role: "Managing Partner, Head of Capital Markets",
    photo: "/d4a973afa_IMG_57452.jpg",
    bio: "Brian Cinelli is an operator and investor with experience building and scaling multi-location operating businesses. He is currently a co-owner and operator of multi-location companies, directly involved in scaling operations, building management teams, and driving revenue growth. Previously, Brian served as a Vice President at Eastcom Associates, a distributor in the underground utility sector, where he led product development, sales, and growth strategy. He brings a hands-on operating background and a disciplined, execution-focused approach to sourcing and building platform businesses.",
  },
  {
    name: "Joseph Garvey",
    role: "Managing Partner",
    photo: "/cd0edaeb2_Profile.jpg",
    bio: "Joseph Garvey is a founder-operator building scalable, service-based businesses. He is the founder of Protocol Health, a physician-led, multi-state longevity and health-optimization platform operating through a hybrid in-clinic and telehealth model. His background spans healthcare, civic technology, and digital media. He brings deep operational rigor, data-driven growth strategy, and a long-term ownership mindset to every business he builds and partners with.",
  },
];


export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative bg-neutral-900 text-white pt-40 pb-24 lg:pt-52 lg:pb-32 px-[3vw]">
        <div className="max-w-[1500px] mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] font-medium leading-[1.08] max-w-3xl mb-6">
            Built by operators. Backed by conviction.
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl leading-relaxed">
            A different kind of buyer — built by people who know what it takes
            to build something real.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <FadeInUp>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-16">
            Our Story
          </span>
        </FadeInUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          <FadeInUp delay={0.1} className="flex flex-col gap-5">
            <p className="text-sm text-neutral-500 leading-relaxed">
              TriPell was built on a simple frustration.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We kept seeing what happened when great businesses got sold to the
              wrong buyers. The culture changed. The team left. The founder
              regretted it. A business that took decades to build got turned
              into a line item on someone&apos;s portfolio spreadsheet.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We started TriPell because we wanted to be a different kind of
              buyer. Not a fund with an exit mandate. Not a strategic acquirer
              looking to absorb your brand into something bigger. Just a group
              of operators who genuinely believe that great businesses deserve
              great owners — and who are willing to do the work to earn that
              title.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.2} className="flex flex-col gap-5">
            <p className="text-sm text-neutral-500 leading-relaxed">
              Our inspiration is straightforward. We asked ourselves one
              question: if we were selling a business we&apos;d spent years building,
              what kind of buyer would we actually want?
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              The answer shaped everything about how TriPell operates.
              Long-term ownership. Hands-on operations. Founder-friendly
              transitions. Decisions made for the health of the business — not
              for a quarterly report or an eventual exit.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              We are entrepreneurs first. We respect what it takes to build
              something real. And we built TriPell to be the company we&apos;d be
              proud to sell to ourselves.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* How We Operate */}
      <section className="bg-neutral-50">
        <div className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
          <FadeInUp>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-16">
              How We Operate
            </span>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            <FadeInUp delay={0.1}>
              <h3 className="text-lg font-medium mb-6 pb-6 border-b border-neutral-200">
                Inside the Business
              </h3>
              <div className="flex flex-col gap-5">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  When we acquire a business, the first thing we do is listen.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  We spend the first 90 days learning — talking to your team,
                  understanding your systems, identifying what&apos;s working and
                  what&apos;s quietly holding the business back. We don&apos;t arrive with
                  a predetermined playbook. We show up with questions.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  From there we focus on three things: stabilizing operations,
                  strengthening the team, and building systems that let the
                  business grow without depending on any single person. Better
                  processes. Cleaner financials. Clearer ownership of decisions
                  at every level.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  We are not a passive holding company. We are active operators
                  who take what&apos;s already good and make it more durable.
                </p>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h3 className="text-lg font-medium mb-6 pb-6 border-b border-neutral-200">
                Working With the Founder
              </h3>
              <div className="flex flex-col gap-5">
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Founders sell for different reasons. Retirement. Burnout. No
                  clear successor. Whatever your reason for exploring a sale, we
                  approach every conversation with patience and without pressure.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  We&apos;re flexible on structure. Full acquisition, majority
                  buyout, phased transition — we build the deal around your
                  situation, not ours. If you want to stay involved, we&apos;ll find
                  the right role. If you&apos;re ready to step back completely,
                  we&apos;ll make sure the business is in good hands before you do.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  What we won&apos;t do is promise one thing and deliver another.
                  Every commitment we make in the LOI, we honor at close.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Your business took decades to build. We treat it that way.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-[1500px] mx-auto px-[3vw] py-24 lg:py-32">
        <FadeInUp>
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 block mb-16">
            Our Team
          </span>
        </FadeInUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {TEAM.map((member, i) => (
            <FadeInUp key={member.name} delay={i * 0.1}>
              <TeamCard
                name={member.name}
                role={member.role}
                photo={member.photo}
                bio={member.bio}
              />
            </FadeInUp>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
