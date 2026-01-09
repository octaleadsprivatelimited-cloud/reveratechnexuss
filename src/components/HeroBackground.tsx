export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[hsl(174,100%,29%)]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[hsl(174,100%,29%)]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-[15%] w-4 h-4 border-2 border-white/20 rotate-45" />
      <div className="absolute top-32 left-[10%] w-3 h-3 bg-[hsl(174,100%,29%)]/30 rounded-full" />
      <div className="absolute bottom-20 right-[20%] w-2 h-2 bg-white/20 rounded-full" />
      <div className="absolute bottom-32 left-[25%] w-5 h-5 border border-white/10 rounded-full" />
      
      {/* Diagonal accent lines */}
      <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="heroLines" patternUnits="userSpaceOnUse" width="20" height="20">
          <path d="M0,20 L20,0" stroke="white" strokeWidth="0.5" fill="none" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#heroLines)" />
      </svg>
      
      {/* Bottom wave */}
      <svg className="absolute bottom-0 left-0 w-full h-16 text-white/5" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" fill="currentColor" />
      </svg>
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2">
        <div className="w-32 h-32 border border-white/10 rounded-full" />
        <div className="absolute inset-4 border border-white/5 rounded-full" />
      </div>
    </div>
  );
}
