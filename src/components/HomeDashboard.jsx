import React from 'react';
import { useF1Data } from '../hooks/useF1Data';

const getRankColor = (rank) => {
    if (rank === 1) return 'text-primary';
    if (rank === 2) return 'text-primary-container';
    if (rank === 3) return 'text-white';
    return 'text-gray-500';
};

export default function HomeDashboard() {
    const { standings, error } = useF1Data('home');

    if (error) {
        return <div className="text-error font-mono p-6">ERROR: {error}</div>;
    }

    if (!standings) {
        return (
            <div className="flex flex-col gap-6 animate-in fade-in duration-500 p-12 items-center justify-center">
                <span className="w-8 h-8 rounded-full border-4 border-surface-container-highest border-t-primary animate-spin"></span>
                <p className="text-primary font-mono tracking-widest text-xs">FETCHING CHAMPIONSHIP DATA...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-headline font-black text-white italic tracking-tight">HOME / STANDINGS</h2>
                    <p className="text-primary font-mono text-sm mt-1 tracking-widest">2024 CHAMPIONSHIP OVERVIEW</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Driver Standings */}
                <div className="glass-panel p-6 border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-8xl">sports_motorsports</span>
                    </div>
                    <h3 className="font-headline font-bold text-lg text-white mb-2 relative z-10 uppercase tracking-wider">
                        Driver Standings
                    </h3>

                    <div className="flex-1 overflow-x-auto relative z-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-surface-container-highest text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                    <th className="pb-3 px-2">Pos</th>
                                    <th className="pb-3 px-2">Driver</th>
                                    <th className="pb-3 px-2">Team</th>
                                    <th className="pb-3 px-2 text-right">Pts</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-sm">
                                {standings.drivers.slice(0, 10).map((driver) => (
                                    <tr key={driver.rank} className="border-b border-surface-container-high hover:bg-surface-container-highest/50 transition-colors">
                                        <td className={`py-4 px-2 font-black ${getRankColor(driver.rank)}`}>
                                            {driver.rank}
                                        </td>
                                        <td className="py-4 px-2 text-white font-bold">{driver.name}</td>
                                        <td className="py-4 px-2 text-gray-400 text-xs">{driver.team}</td>
                                        <td className="py-4 px-2 text-right text-primary font-bold">{driver.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Constructor Standings */}
                <div className="glass-panel p-6 border border-outline-variant/30 flex flex-col gap-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-8xl">handyman</span>
                    </div>
                    <h3 className="font-headline font-bold text-lg text-white mb-2 relative z-10 uppercase tracking-wider">
                        Constructor Standings
                    </h3>

                    <div className="flex-1 overflow-x-auto relative z-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-surface-container-highest text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                    <th className="pb-3 px-2">Pos</th>
                                    <th className="pb-3 px-2">Constructor</th>
                                    <th className="pb-3 px-2 text-right">Pts</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-sm">
                                {standings.constructors.slice(0, 5).map((team) => (
                                    <tr key={team.rank} className="border-b border-surface-container-high hover:bg-surface-container-highest/50 transition-colors">
                                        <td className={`py-4 px-2 font-black ${getRankColor(team.rank)}`}>
                                            {team.rank}
                                        </td>
                                        <td className="py-4 px-2 text-white font-bold uppercase">{team.team}</td>
                                        <td className="py-4 px-2 text-right text-primary font-bold">{team.points}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
