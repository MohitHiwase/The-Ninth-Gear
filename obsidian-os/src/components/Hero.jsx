import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-8 text-center overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1b1b1b_0%,_#131313_100%)] z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <span className="label-md inline-block px-4 py-1.5 rounded-full bg-surface-container-high text-primary tracking-widest uppercase text-[0.75rem] font-medium">
          Intelligence Redefined
        </span>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Architecting the future of digital ecosystems.
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Experience a platform designed with editorial precision. ObsidianOS
          bridges the gap between raw data and professional intuition.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button className="signature-glow px-10 py-4 rounded-full text-on-primary font-bold text-lg hover:shadow-[0_0_30px_rgba(130,239,92,0.3)] transition-all active:scale-95">
            Start Building →
          </button>
          <button className="bg-surface-container-high px-10 py-4 rounded-full text-white font-semibold text-lg hover:bg-surface-bright transition-colors active:scale-95">
            View Documentation
          </button>
        </div>
      </div>
      {/* Hero Abstract Visual */}
      <div className="mt-24 w-full max-w-6xl aspect-video rounded-3xl overflow-hidden glass-panel relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <img
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-1000"
          data-alt="Abstract dark landscape with flowing neon green lines"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHx5VWbzNAIcHXHGP__1ryZqH9xbLLb8q16CiVs17UIoRqM15Gu2Mp9hh4F7CkhlrZcP6Eq4dK_UXDds2UWNtnt-kWgUm7_ZNyujvHFCyPkzcdI2Du91Lm_6GWBuw-zdzmdQPvtA_QXAvDE35Z3w4Uw0tFHvdZx59LzRlbTF5nzMrZ7pRBTiiBsgeDuwB0YnlG9bFs50SIM67wfNlTSbBobOexqYqdZcur-1WxCZU7a5QzTA7AnDZpmYEZreegpjgwAF_CxFVx2FV7"
          alt="Abstract dark landscape with flowing neon green lines"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span
              className="material-symbols-outlined text-white text-4xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
