export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-[1500px] mx-auto px-[3vw] py-6 flex items-center justify-between">
        <span className="text-xs text-neutral-300">
          &copy; {new Date().getFullYear()} Ironmark Capital
        </span>
      </div>
    </footer>
  );
}
