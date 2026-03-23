import React from "react";

export default function Features() {
  return (
    <section className="py-40 px-8 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Feature */}
        <div className="md:col-span-8 bg-surface-container rounded-[2rem] p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
          <div className="relative z-10 max-w-md">
            <h3 className="font-headline text-4xl text-white mb-6">
              Cognitive Architecture
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              A spatial interface that mimics human thought. Organize
              information in multi-dimensional clusters that reveal hidden
              connections.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <span className="label-md text-primary font-bold">
              Explore Framework
            </span>
            <span className="material-symbols-outlined text-primary">
              trending_flat
            </span>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 group-hover:opacity-40 transition-opacity">
            <img
              className="w-full h-full object-cover"
              data-alt="Intricate glowing network grid abstract"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF2rSFx_npXmM3V3PHTtF7RAzXp0ui63-zZYBbDRKTOLBQrJ_FHY-eTREVEOD5_m0tA7SDK1F-PtJZj2SeuJmBqTxMoBKvduAtpnRhg7IrO582RK6N2MjtDZcFusGH8RVLSwFdgcq-bZU1hEpIuCELGnbFbLO0J4Mjtd426_NnZjVFBLrZXDk5zq6oWIWq3hF-g9WyqmZCpfvK7c5xrhbiKRpzpN60wwpi7z7kwQ2x-hKD1cjVfIJjKO2l4BMhE_CPZdd9kwhBxjE1"
              alt="Intricate glowing network grid abstract"
            />
          </div>
        </div>
        {/* Secondary Feature */}
        <div className="md:col-span-4 bg-surface-container-high rounded-[2rem] p-12 flex flex-col justify-between group">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">
              terminal
            </span>
          </div>
          <div>
            <h3 className="font-headline text-2xl text-white mb-4">
              Native Execution
            </h3>
            <p className="text-on-surface-variant">
              Low-latency processing for high-frequency operations.
            </p>
          </div>
        </div>
        {/* Small Features */}
        <div className="md:col-span-4 bg-surface-container-low rounded-[2rem] p-12 flex flex-col justify-between group">
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-secondary text-3xl">
              encrypted
            </span>
          </div>
          <div>
            <h3 className="font-headline text-2xl text-white mb-4">
              Zero-Trust Protocol
            </h3>
            <p className="text-on-surface-variant">
              Security baked into the very foundation of every byte.
            </p>
          </div>
        </div>
        <div className="md:col-span-8 bg-surface-container-lowest rounded-[2rem] p-12 flex flex-col md:flex-row gap-12 items-center border border-outline-variant/10">
          <div className="flex-1">
            <h3 className="font-headline text-3xl text-white mb-6">
              Synchronous Integration
            </h3>
            <p className="text-on-surface-variant text-lg mb-8">
              Fluidly connect your existing stack with our neural API layer. No
              friction, just flow.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-lg bg-surface-container text-xs font-mono text-outline uppercase tracking-widest">
                PostgreSQL
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container text-xs font-mono text-outline uppercase tracking-widest">
                Rust
              </div>
              <div className="px-4 py-2 rounded-lg bg-surface-container text-xs font-mono text-outline uppercase tracking-widest">
                Go
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-48 rounded-xl bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-surface-container-highest">
              hub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
