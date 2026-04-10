import { USER_ACTIVITY } from '../data/activity';
import ActivityModel from '../models/ActivityModel';

// Notre "interrupteur" pour passer des mocks à l'API plus tard
const USE_MOCK = true; 
const BASE_URL = 'http://localhost:3000';

export const getUserActivity = async (userId) => {
    if (USE_MOCK) {
        // On cherche les données du bon utilisateur dans le mock
        // (On suppose que ton mock est un tableau contenant les users 12 et 18)
        let activityData = USER_ACTIVITY.find(user => user.userId === parseInt(userId));
        
        // Sécurité au cas où ton fichier activity.js serait exporté différemment
        if (!activityData && USER_ACTIVITY.sessions) {
            activityData = USER_ACTIVITY;
        }

        // On retourne la donnée formatée par notre Modèle !
        return new ActivityModel(activityData);
    } else {
        try {
            const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
            const json = await response.json();
            return new ActivityModel(json.data);
        } catch (error) {
            console.error("Erreur lors de l'appel API Activity :", error);
        }
    }
};