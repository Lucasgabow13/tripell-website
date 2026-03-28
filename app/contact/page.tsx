import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main>
      <Nav />

      <section className="max-w-[1500px] mx-auto px-[3vw] pt-40 pb-24 lg:pt-52 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium block mb-6">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08]">
                Get in touch.
              </h1>
            </div>
            <div className="flex flex-col gap-4 max-w-sm">
              <p className="text-sm text-neutral-500 leading-relaxed">
                Whether you&apos;re actively exploring a sale or just starting to
                think about your options — we&apos;re happy to have the conversation.
                No pressure, no obligation.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We respond to every message and will always be straight with you
                about whether we&apos;re a fit.
              </p>
            </div>
            <div className="border-t border-neutral-100 pt-8 flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium">
                Prefer email?
              </p>
              <a
                href="mailto:info@ironmark.capital"
                className="text-sm text-black hover:opacity-50 transition-opacity duration-200"
              >
                info@ironmark.capital
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
