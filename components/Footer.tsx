export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-[1500px] mx-auto px-[3vw] h-14 flex items-center justify-between">
        <span className="text-xs tracking-[0.2em] uppercase font-medium">
          TriPell Partners
        </span>
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-black transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
        <span className="text-xs text-neutral-400">
          © {new Date().getFullYear()} TriPell Partners
        </span>
      </div>
    </footer>
  );
}
