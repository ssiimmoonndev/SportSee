import { useState, useEffect } from 'react';
import { 
    getUserActivity, 
    getUserAverageSessions, 
    getUserPerformance, 
    getUserMainData 
} from '../services/dataService';

import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import InfoCard from '../components/InfoCard';

import calorieIcon from '../assets/energy.svg';
import proteinIcon from '../assets/chicken.svg';
import glucidIcon from '../assets/apple.svg';
import lipidIcon from '../assets/cheeseburger.svg';

function Profile() {
    const [mainData, setMainData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [sessionsData, setSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    
    const userId = 12; 

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [main, activity, sessions, performance] = await Promise.all([
                    getUserMainData(userId),
                    getUserActivity(userId),
                    getUserAverageSessions(userId),
                    getUserPerformance(userId)
                ]);

                setMainData(main);
                setActivityData(activity);
                setSessionsData(sessions);
                setPerformanceData(performance);
            } catch (error) {
                console.error("Erreur lors du chargement des données :", error);
            }
        };
        
        fetchAllData();
    }, [userId]);

    if (!mainData) return <div style={{ padding: '40px' }}>Chargement du profil...</div>;

    return (
        <main style={{ padding: '40px 80px' }}>
            <header style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', fontWeight: '500', margin: '0 0 25px 0' }}>
                    Bonjour <span style={{ color: '#FF0101' }}>{mainData.firstName}</span>
                </h1>
                <p style={{ fontSize: '18px', margin: '0' }}>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            </header>

            <section style={{ display: 'flex', gap: '30px' }}>
                
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    
                    <div style={{ width: '100%' }}>
                        {activityData && <ActivityChart data={activityData.sessions} />}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px' }}>
                        <AverageSessionsChart data={sessionsData?.sessions} />
                        <PerformanceChart data={performanceData?.data} />
                        <ScoreChart score={mainData.score} />
                    </div>
                </div>

                <aside style={{ 
                    width: '258px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between' 
                }}>
                    <InfoCard 
                        icon={calorieIcon} 
                        bgColor="rgba(255, 0, 0, 0.1)" 
                        value={mainData.keyData.calorieCount.toLocaleString('en-US')} 
                        unit="kCal" 
                        label="Calories" 
                    />
                    
                    <InfoCard 
                        icon={proteinIcon}
                        bgColor="rgba(74, 184, 255, 0.1)" 
                        value={mainData.keyData.proteinCount} 
                        unit="g" 
                        label="Protéines" 
                    />
                    
                    <InfoCard 
                        icon={glucidIcon}
                        bgColor="rgba(249, 206, 35, 0.1)" 
                        value={mainData.keyData.carbohydrateCount} 
                        unit="g" 
                        label="Glucides" 
                    />
                    
                    <InfoCard 
                        icon={lipidIcon}
                        bgColor="rgba(253, 81, 129, 0.1)" 
                        value={mainData.keyData.lipidCount} 
                        unit="g" 
                        label="Lipides" 
                    />
                </aside>

            </section>
        </main>
    );
}

export default Profile;