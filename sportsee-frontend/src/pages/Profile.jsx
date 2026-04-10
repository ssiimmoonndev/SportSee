import { useState, useEffect } from 'react';
import { getUserActivity, getUserAverageSessions, getUserPerformance } from '../services/dataService';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceChart from '../components/PerformanceChart';

function Profile() {
    const [activityData, setActivityData] = useState(null);
    const [sessionsData, setSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null); // Le nouvel état !
    
    const userId = 12; 

    useEffect(() => {
        const fetchAllData = async () => {
            const activity = await getUserActivity(userId);
            setActivityData(activity);
            
            const sessions = await getUserAverageSessions(userId);
            setSessionsData(sessions);

            // On récupère les performances
            const performance = await getUserPerformance(userId);
            setPerformanceData(performance);
        };
        
        fetchAllData();
    }, [userId]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Profil</h1>
            
            {/* Graphique 1 : Activité */}
            <div style={{ marginBottom: '30px' }}>
                {activityData ? <ActivityChart data={activityData.sessions} /> : <p>Chargement activité...</p>}
            </div>

            {/* Conteneur Flex pour aligner les petits graphiques du bas côte à côte */}
            <div style={{ display: 'flex', gap: '30px' }}>
                
                {/* Graphique 2 : Sessions Moyennes */}
                <div>
                    {sessionsData ? <AverageSessionsChart data={sessionsData.sessions} /> : <p>Chargement sessions...</p>}
                </div>

                {/* Graphique 3 : Performances (Radar) */}
                <div>
                    {performanceData ? <PerformanceChart data={performanceData.data} /> : <p>Chargement performances...</p>}
                </div>
                
            </div>
        </div>
    );
}

export default Profile;