export default function TopNav() {
    return (
        <header className="flex justify-between items-center px-6 h-16 w-full z-50 fixed top-0 bg-background border-b border-outline-variant/10">
            <div className="text-primary font-black italic tracking-tighter text-xl font-headline">
                THE NINTH GEAR
            </div>
            <nav className="hidden md:flex items-center gap-8">
                <a
                    className="font-headline uppercase tracking-wider text-sm font-bold text-primary border-b-2 border-primary pb-1 cursor-pointer"
                    href="#"
                >
                    DASHBOARD
                </a>
                <a
                    className="font-headline uppercase tracking-wider text-sm font-bold text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer"
                    href="#"
                >
                    RACE LOG
                </a>
                <a
                    className="font-headline uppercase tracking-wider text-sm font-bold text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer"
                    href="#"
                >
                    REPORTS
                </a>
                <div className="flex items-center gap-2 font-headline uppercase tracking-wider text-sm font-bold text-gray-400 cursor-pointer hover:text-primary">
                    <span>SESSION SELECTOR</span>
                    <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
                </div>
            </nav>
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">settings</span>
                <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">account_circle</span>
            </div>
        </header>
    );
}
