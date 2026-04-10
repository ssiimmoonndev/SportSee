import { useState, useEffect } from 'react';
import { getUserActivity, getUserAverageSessions } from '../services/dataService';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';

function Profile() {
    const [activityData, setActivityData] = useState(null);
    const [sessionsData, setSessionsData] = useState(null); // Nouvel état !
    
    const userId = 12; 

    useEffect(() => {
        const fetchAllData = async () => {
            // On récupère l'activité (BarChart)
            const activity = await getUserActivity(userId);
            setActivityData(activity);
            
            // On récupère les sessions moyennes (LineChart)
            const sessions = await getUserAverageSessions(userId);
            setSessionsData(sessions);
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

            {/* Graphique 2 : Sessions Moyennes */}
            <div>
                {sessionsData ? <AverageSessionsChart data={sessionsData.sessions} /> : <p>Chargement sessions...</p>}
            </div>
        </div>
    );
}

export default Profile;