export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t-[2px] border-[#E84A27] py-12 px-6 flex flex-col items-center gap-8 relative overflow-hidden">
      
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 mb-4">
        {['About', 'Work', 'Services', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-[family-name:--font-space-mono] text-xs text-[#737373] hover:text-[#E84A27] transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Decorative Dots */}
      <div className="flex gap-2 items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#E84A27] animate-[pulse_1.5s_ease-in-out_infinite]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#E84A27] animate-[pulse_1.5s_ease-in-out_0.5s_infinite]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#E84A27] animate-[pulse_1.5s_ease-in-out_1s_infinite]" />
      </div>

      {/* Credits */}
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="font-[family-name:--font-space-mono] text-[10px] uppercase tracking-[0.3em] text-[#737373]">
          DESIGNED & BUILT WITH CODE AND COFFEE
        </p>
        <p className="font-[family-name:--font-space-mono] text-[10px] uppercase tracking-[0.3em] text-[#737373]">
          © 2026 Portfolio. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
