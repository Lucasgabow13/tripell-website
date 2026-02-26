const STATS = [
  { value: "X", label: "Years of operating experience" },
  { value: "X", label: "Businesses evaluated" },
  { value: "Committed", label: "Capital" },
  { value: "Operators", label: "Built by" },
];

export default function Clients() {
  return (
    <section id="stats" className="bg-black text-white">
      <div className="max-w-[1500px] mx-auto px-[3vw] py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-black px-8 py-10 flex flex-col gap-2"
            >
              <span className="text-3xl md:text-4xl font-medium tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.15em] text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/30 tracking-[0.1em] mt-8 text-center">
          Built by operators. Backed by conviction.
        </p>
      </div>
    </section>
  );
}
