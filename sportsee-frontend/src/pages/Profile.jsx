import { useState, useEffect } from 'react';
// 1. AJOUT de getUserMainData ici :
import { getUserActivity, getUserAverageSessions, getUserPerformance, getUserMainData } from '../services/dataService';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';

function Profile() {
    const [mainData, setMainData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [sessionsData, setSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    
    const userId = 12; 

    useEffect(() => {
        const fetchAllData = async () => {
            // 2. ON VA CHERCHER LES DONNÉES PRINCIPALES (Prénom, Score...)
            const main = await getUserMainData(userId);
            setMainData(main);

            const activity = await getUserActivity(userId);
            setActivityData(activity);
            
            const sessions = await getUserAverageSessions(userId);
            setSessionsData(sessions);

            const performance = await getUserPerformance(userId);
            setPerformanceData(performance);
        };
        
        fetchAllData();
    }, [userId]);

    // 3. SÉCURITÉ : On attend que mainData soit là avant de dessiner la page
    if (!mainData) return <p>Chargement des données du profil...</p>;

    return (
        <div style={{ padding: '40px' }}>
            {/* 4. LE NOUVEAU TITRE DYNAMIQUE */}
            <h1 style={{ fontSize: '48px', marginBottom: '10px', marginTop: '0' }}>
                Bonjour <span style={{ color: '#FF0101' }}>{mainData.firstName}</span>
            </h1>
            <p style={{ fontSize: '18px', marginBottom: '40px' }}>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
            
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

                {/* Graphique 4 : Score */}
                <ScoreChart score={mainData.score} />
                
            </div>
        </div>
    );
}

export default Profile;