export default function RightSidebar() {
    return (
        <aside className="fixed right-0 top-16 bottom-0 w-72 bg-surface-container-low border-l border-outline-variant/20 flex flex-col z-40">
            <div className="p-6 border-b border-outline-variant/10">
                <h2 className="text-primary font-headline text-sm font-black italic">AI STRATEGY CONSOLE</h2>
                <p className="text-[10px] text-gray-500 font-mono">NEURAL NET V2</p>
            </div>
            <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
                {/* Engineer Query */}
                <div className="space-y-2">
                    <label className="text-[10px] text-primary uppercase font-bold tracking-widest">
                        ENGINEER_QUERY
                    </label>
                    <div className="bg-surface-container-highest p-3 rounded-sm border-b-2 border-outline-variant/30 min-h-[80px] text-[12px] font-mono text-on-surface-variant">
                        SCANNING LAP 42 FOR OPTIMAL OVERCUT WINDOW... CALCULATE TYRE WEAR DELTA VS P2.
                    </div>
                </div>

                {/* Strategy AI Response */}
                <div className="space-y-2">
                    <label className="text-[10px] text-accent-orange uppercase font-bold tracking-widest">
                        STRATEGY_AI_RESPONSE
                    </label>
                    <div className="bg-surface-container p-4 rounded-sm border-l-2 border-accent-orange text-[11px] font-mono leading-relaxed">
                        <span className="text-accent-orange">&gt;&gt;&gt; MATCHING DETECTED</span>
                        <br />
                        OVERCUT PROBABILITY: <span className="text-primary">84.2%</span>
                        <br />
                        ESTIMATED GAIN: <span className="text-primary">+1.4s</span>
                        <br />
                        TYRE STATUS: <span className="text-error">DEGRADATION CRITICAL @ LAP 48</span>
                        <br /><br />
                        RECOMMENDATION: HOLD POSITION TILL LAP 45. DEPLOY ERS MODE 7.
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-auto pt-4 border-t border-outline-variant/10">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[10px] text-primary font-bold tracking-widest uppercase">
                            AI ENGINE ONLINE
                        </span>
                    </div>
                    <textarea
                        className="w-full bg-surface-container-low border border-outline-variant/20 p-2 text-xs font-mono text-on-surface focus:outline-none focus:border-primary resize-none"
                        placeholder="TYPE COMMAND..."
                        rows={2}
                    />
                </div>
            </div>
        </aside>
    );
}
