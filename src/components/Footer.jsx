export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-background border-t border-outline-variant/20 h-8 flex justify-between items-center px-6">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(130,239,92,0.6)]"></span>
                    <span className="font-body text-[10px] font-medium tracking-widest uppercase text-primary">
                        SYSTEM STATUS: NOMINAL
                    </span>
                </div>
                <span className="font-body text-[10px] font-medium tracking-widest uppercase text-gray-600">
                    LATENCY: 0.04ms
                </span>
            </div>
            <div className="flex gap-6">
                <a className="font-body text-[10px] font-medium tracking-widest uppercase text-gray-600 hover:text-white transition-colors" href="#">
                    ENCRYPTION: AES-256
                </a>
                <a className="font-body text-[10px] font-medium tracking-widest uppercase text-gray-600 hover:text-white transition-colors" href="#">
                    KERNEL: RACING-OS
                </a>
                <a className="font-body text-[10px] font-medium tracking-widest uppercase text-primary" href="#">
                    TELEMETRY LOCK
                </a>
            </div>
        </footer>
    );
}
