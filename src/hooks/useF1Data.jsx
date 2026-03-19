import { useState, useEffect, useRef } from 'react';

const globalCache = {
    standings: null,
    telemetry: null,
};

export function useF1Data(activeView) {
    const [standings, setStandings] = useState(globalCache.standings);
    const [telemetry, setTelemetry] = useState(globalCache.telemetry);

    // Track specifically the telemetry loading state since that dictates the Live Session
    const [isTelemetryLoading, setIsTelemetryLoading] = useState(!globalCache.telemetry && activeView === 'live');
    const [error, setError] = useState(null);

    const hasFetchedStandings = useRef(!!globalCache.standings);
    const hasFetchedTelemetry = useRef(!!globalCache.telemetry);

    useEffect(() => {
        const fetchStandings = async () => {
            if (globalCache.standings) return;
            hasFetchedStandings.current = true;

            try {
                const [driversRes, constructorsRes] = await Promise.all([
                    fetch('https://api.jolpi.ca/ergast/f1/current/driverStandings.json'),
                    fetch('https://api.jolpi.ca/ergast/f1/current/constructorStandings.json')
                ]);

                const driversData = await driversRes.json();
                const constructorsData = await constructorsRes.json();

                const driverStandings = driversData.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
                const constructorStandings = constructorsData.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];

                const formattedStandings = {
                    drivers: driverStandings.map(d => ({
                        rank: parseInt(d.position),
                        name: `${d.Driver.givenName} ${d.Driver.familyName}`.toUpperCase(),
                        team: d.Constructors[0]?.name.toUpperCase() || 'UNKNOWN',
                        points: parseFloat(d.points)
                    })),
                    constructors: constructorStandings.map(c => ({
                        rank: parseInt(c.position),
                        team: c.Constructor.name.toUpperCase(),
                        points: parseFloat(c.points)
                    }))
                };

                globalCache.standings = formattedStandings;
                setStandings(formattedStandings);
            } catch (err) {
                console.error("Failed to fetch standings:", err);
                setError("Failed to fetch driver/constructor standings.");
            }
        };

        const fetchTelemetry = async () => {
            if (globalCache.telemetry) {
                setIsTelemetryLoading(false);
                return;
            }

            setIsTelemetryLoading(true);
            hasFetchedTelemetry.current = true;

            try {
                // Fetch baseline telemetry/session data
                // For robust testing without overloading, we fetch the latest session details.
                // We simulate a slightly longer load if the API responds instantly to showcase the lights animation.
                const [sessionRes] = await Promise.all([
                    fetch('https://api.openf1.org/v1/sessions?session_key=latest'),
                    new Promise(r => setTimeout(r, 1500)) // Force at least 1.5s delay to assure the lights animation sequence plays out visually
                ]);

                const sessionData = await sessionRes.json();
                const telemetryResult = { ready: true, session: sessionData[0] || {} };

                globalCache.telemetry = telemetryResult;
                setTelemetry(telemetryResult);
            } catch (err) {
                console.error("Failed to fetch telemetry:", err);
            } finally {
                setIsTelemetryLoading(false);
            }
        };

        if (!hasFetchedStandings.current) {
            fetchStandings();
        }

        if (activeView === 'live' && !hasFetchedTelemetry.current) {
            fetchTelemetry();
        }

    }, [activeView]);

    return {
        standings,
        telemetry,
        isLoading: isTelemetryLoading,
        error
    };
}
