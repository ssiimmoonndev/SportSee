import { useState, useEffect } from 'react';
import { getUserActivity } from '../services/dataService';
import ActivityChart from '../components/ActivityChart';

function Profile() {
    // On crée un état local pour stocker nos données d'activité
    const [activityData, setActivityData] = useState(null);
    
    // Pour l'instant, on met l'ID 12 "en dur". Plus tard, ça viendra de l'URL (avec React Router)
    const userId = 12; 

    // On va chercher les données au chargement du composant
    useEffect(() => {
        const fetchActivity = async () => {
            const data = await getUserActivity(userId);
            setActivityData(data);
        };
        
        fetchActivity();
    }, [userId]);

    return (
        <div>
            <h1>Profil</h1>
            {/* On s'assure que activityData n'est pas null avant d'afficher le graphique, 
                et on lui passe la propriété "sessions" formatée par notre Modèle ! */}
            {activityData ? (
                <ActivityChart data={activityData.sessions} />
            ) : (
                <p>Chargement des données...</p>
            )}
        </div>
    );
}

export default Profile;