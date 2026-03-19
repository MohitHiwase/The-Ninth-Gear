import { useState } from 'react';
import TopNav from './components/TopNav.jsx';
import LeftSidebar from './components/LeftSidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import Footer from './components/Footer.jsx';
import HomeDashboard from './components/HomeDashboard.jsx';
import HeroZone from './components/HeroZone.jsx';
import BentoGrid from './components/BentoGrid.jsx';
import LoadingOverlay from './components/LoadingOverlay.jsx';
import { useF1Data } from './hooks/useF1Data.jsx';

function App() {
    const [activeView, setActiveView] = useState('home');
    const [isTransitioning, setIsTransitioning] = useState(false);

    // The hook derives telemetry/standings data based on the target activeView
    const targetView = isTransitioning ? 'live' : activeView;
    const { isLoading, error } = useF1Data(targetView);

    const handleNavigation = (view) => {
        if (view === activeView) return;

        if (view === 'live') {
            setIsTransitioning(true);
            // Wait to render the live view underneath the loading screen
            setActiveView('live');
        } else {
            setActiveView(view);
        }
    };

    const handleTransitionComplete = () => {
        setIsTransitioning(false);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-on-background selection:bg-primary selection:text-on-primary">
            {/* Loading Overlay transitions activeView seamlessly and waits for data */}
            {isTransitioning && (
                <LoadingOverlay onComplete={handleTransitionComplete} isDataReady={!isLoading} />
            )}

            <TopNav />

            <LeftSidebar
                activeView={targetView}
                setActiveView={handleNavigation}
            />

            <RightSidebar />

            <main className="ml-64 mr-72 pt-22 px-6 min-h-[calc(100vh-2rem)] pb-12 flex flex-col gap-6 relative z-10 w-[calc(100%-34rem)]">

                {activeView === 'home' && !isTransitioning ? (
                    <HomeDashboard />
                ) : activeView === 'live' || isTransitioning ? (
                    <div className="flex flex-col gap-6 w-full flex-1">
                        <HeroZone />
                        <BentoGrid />
                    </div>
                ) : null}
            </main>

            <Footer />

            {/* Decorative */}
            <div
                className="fixed top-20 right-[18.5rem] pointer-events-none text-[8px] font-mono text-outline-variant uppercase opacity-40 z-0"
                style={{ writingMode: 'vertical-rl' }}
            >
                DATA_STREAM_0092 // ENCRYPTED_TUNNEL // PACKET_STABILITY: 99.9%
            </div>
        </div>
    );
}

export default App;
