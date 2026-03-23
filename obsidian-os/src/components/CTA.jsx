import React from "react";

export default function CTA() {
  return (
    <section className="py-40 px-8 text-center bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="font-headline text-5xl md:text-7xl text-white">
          Ready to ascend?
        </h2>
        <p className="text-xl text-on-surface-variant max-w-xl mx-auto">
          Join the elite circle of architects building the next generation of
          digital infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="signature-glow px-12 py-5 rounded-full text-on-primary font-bold text-xl active:scale-95 transition-transform">
            Join the Waitlist
          </button>
          <button className="text-white label-md tracking-widest flex items-center gap-2 group">
            EXPLORE THE MANIFESTO
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
              east
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
