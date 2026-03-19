import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingOverlay({ onComplete, isDataReady = true }) {
    const [lightsSequence, setLightsSequence] = useState(0); // 0 to 5
    const [isLightsOut, setIsLightsOut] = useState(false);

    const playBeep = (type) => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            if (type === 'red') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                osc.start();
                osc.stop(ctx.currentTime + 0.15);
            } else if (type === 'go') {
                osc.type = 'square';
                osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                osc.start();
                osc.stop(ctx.currentTime + 0.5);
            }
        } catch (e) {
            console.warn("Audio not supported or disabled");
        }
    };

    useEffect(() => {
        let timer;
        if (lightsSequence < 5) {
            timer = setTimeout(() => {
                setLightsSequence((prev) => prev + 1);
                playBeep('red');
            }, 800);
        } else if (lightsSequence === 5 && !isLightsOut && isDataReady) {
            // Random delay between 1s and 2s before lights out, waiting for data to be ready
            const randomDelay = Math.random() * 1000 + 1000;
            timer = setTimeout(() => {
                setIsLightsOut(true);
                playBeep('go');

                // Let the fade out happen, then call onComplete
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 800); // 800ms fade out duration
            }, randomDelay);
        }

        return () => clearTimeout(timer);
    }, [lightsSequence, isLightsOut, onComplete, isDataReady]);

    return (
        <AnimatePresence>
            {!isLightsOut && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6"
                >
                    <div className="flex gap-8 bg-surface-container-highest/50 p-8 rounded-xl border border-outline-variant/30 shadow-2xl">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div key={index} className="flex flex-col items-center gap-4">
                                {/* Visual light casing */}
                                <div className="w-16 h-16 rounded-full bg-[#1b1b1b] p-2 shadow-inner border-2 border-[#131313]">
                                    {/* The actual light */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            backgroundColor: lightsSequence >= index && !isLightsOut ? '#dc2626' : '#2a2a2a', // Red 600 or dark gray
                                            boxShadow: lightsSequence >= index && !isLightsOut
                                                ? '0 0 30px 10px rgba(220, 38, 38, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.5)'
                                                : 'none'
                                        }}
                                        transition={{ duration: 0.1 }}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="mt-12 text-center"
                    >
                        <h2 className="text-primary font-headline text-2xl font-black tracking-widest uppercase mb-2">
                            INITIALIZING LIVE SESSION
                        </h2>
                        <p className="text-gray-500 font-mono text-sm tracking-[0.2em]">
                            PREPARING TRACK MAP AND TELEMETRY...
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
