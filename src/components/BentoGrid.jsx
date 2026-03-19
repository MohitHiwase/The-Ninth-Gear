import React from "react";

export default function BentoGrid() {
    return (
        <section className="grid grid-cols-12 gap-6 flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Live Telemetry Card */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-5 flex flex-col gap-4 border border-outline-variant/10 rounded-sm">
                <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">LIVE TELEMETRY</h4>
                    <span className="material-symbols-outlined text-primary text-sm">settings_input_component</span>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between font-mono text-[10px]">
                            <span className="text-on-surface">RPM (x1000)</span>
                            <span className="text-primary font-bold">12,450</span>
                        </div>
                        {/* RPM Bars (Mock) */}
                        <div className="h-8 bg-surface-container-highest flex items-end gap-[1px] p-1">
                            {[0.5, 0.66, 0.75, 1, 1, 0.9, 0.66, 0.33, 0.2].map((height, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 w-full ${height > 0.8 ? 'bg-primary' : 'bg-primary/40'}`}
                                    style={{ height: `${height * 100}%` }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between font-mono text-[10px] items-center">
                            <span className="text-on-surface">GEAR SELECTOR</span>
                            <span className="text-primary text-2xl font-black leading-none">8</span>
                        </div>
                        {/* Gear Indicator Segments */}
                        <div className="grid grid-cols-8 gap-1">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                                <div key={g} className={`h-1.5 rounded-full ${g <= 8 ? 'bg-primary' : 'bg-primary/20'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Podium Predictor Card */}
            <div className="col-span-12 lg:col-span-5 bg-surface-container-low p-5 flex flex-col gap-4 border border-outline-variant/10 rounded-sm">
                <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">PODIUM PREDICTOR</h4>
                    <span className="material-symbols-outlined text-primary text-sm">leaderboard</span>
                </div>
                <div className="flex-1 flex flex-col justify-around gap-4">
                    {[
                        { tag: 'VER (P1)', prob: 98, val: '98% PROB' },
                        { tag: 'NOR (P2)', prob: 62, val: '62% PROB' },
                        { tag: 'HAM (P3)', prob: 41, val: '41% PROB' }
                    ].map((driver, idx) => (
                        <div key={idx} className="space-y-1.5">
                            <div className="flex justify-between font-mono text-[11px] mb-1">
                                <span className="text-white font-bold">{driver.tag}</span>
                                <span className="text-primary">{driver.val}</span>
                            </div>
                            <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary"
                                    style={{ width: `${driver.prob}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tow & Dirty Air Card */}
            <div className="col-span-12 lg:col-span-3 bg-surface-container-low p-5 flex flex-col gap-4 border border-outline-variant/10 rounded-sm">
                <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">AERO DYNAMICS</h4>
                    <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_5px_var(--color-accent-orange)]"></span>
                        <span className="text-[9px] text-accent-orange font-black">DRS ACTIVE</span>
                    </div>
                </div>

                <div className="relative flex-1 bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant/10 rounded-sm py-4">
                    <div className="absolute inset-0 opacity-40">
                        <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
                            <path className="animate-pulse" d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="var(--color-primary)" strokeWidth="0.5"></path>
                            <path d="M0,60 Q25,40 50,60 T100,60" fill="none" opacity="0.5" stroke="var(--color-primary)" strokeWidth="0.5"></path>
                            <path d="M0,40 Q25,20 50,40 T100,40" fill="none" stroke="var(--color-accent-orange)" strokeWidth="1"></path>
                        </svg>
                    </div>
                    <div className="z-10 text-center">
                        <p className="text-[10px] font-mono text-gray-400 mb-1">DIRTY AIR INTENSITY</p>
                        <p className="text-3xl font-mono text-white font-black leading-none">0.84<span className="text-xs text-primary font-normal">λ</span></p>
                    </div>
                </div>

                <div className="bg-accent-orange/10 border border-accent-orange/30 p-2 text-center rounded-sm">
                    <p className="text-[10px] font-bold text-accent-orange tracking-widest uppercase">
                        WEATHER ALERT: RAIN LAP 52
                    </p>
                </div>
            </div>

        </section>
    );
}
