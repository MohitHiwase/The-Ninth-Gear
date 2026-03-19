const navItems = [
    { icon: 'insights', label: 'LIVE TELEMETRY', view: 'home' },
    { icon: 'map', label: 'TRACK MAP', view: 'live' },
    { icon: 'speed', label: 'TIRE DEG', view: null },
    { icon: 'timer', label: 'PIT STRATEGY', view: null },
    { icon: 'air', label: 'AERO LOGIC', view: null },
    { icon: 'history', label: 'HISTORY', view: null },
];

export default function LeftSidebar({ activeView, setActiveView }) {
    return (
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-surface-container-low border-r border-outline-variant/20 flex flex-col pt-4 z-40">
            <div className="px-6 mb-8">
                <h2 className="text-primary font-headline text-lg font-bold tracking-tight">STRATEGY HUB</h2>
                <p className="text-[10px] text-gray-500 font-mono tracking-widest">V0.9.4 ACTIVE</p>
            </div>
            <nav className="flex-1">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const isActive =
                            (item.view === 'home' && activeView === 'home') ||
                            (item.view === 'live' && activeView === 'live');

                        return (
                            <li
                                key={item.label}
                                onClick={() => item.view && setActiveView(item.view)}
                                className={`py-3 px-6 flex items-center gap-4 cursor-pointer transition-all duration-150 ${isActive
                                        ? 'bg-surface-container-high text-primary border-l-4 border-primary'
                                        : 'text-gray-500 hover:text-gray-200 hover:bg-surface-container-high border-l-4 border-transparent'
                                    }`}
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <span className="font-body text-[12px] font-semibold uppercase tracking-tight">
                                    {item.label}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="p-4 mt-auto">
                <button className="w-full bg-accent-orange text-black font-black uppercase text-center py-3 rounded-sm text-xs tracking-tighter hover:scale-95 transition-transform">
                    DEPLOY UPDATE
                </button>
            </div>
        </aside>
    );
}
