import React from "react";

export default function HeroZone() {
    return (
        <section className="relative w-full aspect-[21/9] bg-surface-container-low overflow-hidden group animate-in fade-in duration-500">
            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-outline-variant) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                }}
            />

            {/* The 3D Canvas element - ready for Three.js */}
            <canvas className="w-full h-full relative z-0" id="f1-track-canvas"></canvas>

            {/* Position Card Glass Overlay */}
            <div className="absolute top-6 left-6 glass-panel p-4 border border-outline-variant/20 w-64 z-10">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-headline font-black text-2xl text-white italic">VER P1</h3>
                        <p className="text-[10px] text-primary font-bold font-mono">RED BULL RACING</p>
                    </div>
                    <div className="bg-primary/20 px-2 py-1">
                        <span className="text-primary font-mono text-xs font-bold leading-none">LAP 42/57</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <p className="text-[9px] text-gray-500 font-bold uppercase">GAP TO P2</p>
                        <p className="font-mono text-lg text-white font-bold leading-none">+8.421</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[9px] text-gray-500 font-bold uppercase">TYRE COMP</p>
                        <p className="font-mono text-lg text-white font-bold leading-none flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span> M (12L)
                        </p>
                    </div>
                </div>
            </div>

            {/* Playback Controller Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-panel p-4 border border-outline-variant/20 flex flex-col gap-3 w-4/5 max-w-2xl z-10 rounded-sm">
                <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-primary">00:54:12</span>
                    <div className="flex-1 h-1 bg-surface-container-highest relative rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-[65%] bg-primary"></div>
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">01:28:44</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <button className="text-on-surface hover:text-primary transition-colors cursor-pointer">
                            <span className="material-symbols-outlined">fast_rewind</span>
                        </button>
                        <button className="text-on-surface hover:text-primary transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-3xl">play_circle</span>
                        </button>
                        <button className="text-on-surface hover:text-primary transition-colors cursor-pointer">
                            <span className="material-symbols-outlined">fast_forward</span>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-surface-container-highest font-mono text-[10px] text-gray-400 hover:text-white border border-transparent hover:border-primary/50 transition-all cursor-pointer">1X</button>
                        <button className="px-3 py-1 bg-surface-container-highest font-mono text-[10px] text-white border border-primary/50 cursor-pointer">2X</button>
                        <button className="px-3 py-1 bg-surface-container-highest font-mono text-[10px] text-gray-400 hover:text-white border border-transparent hover:border-primary/50 transition-all cursor-pointer">5X</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
