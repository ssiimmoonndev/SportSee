import { USER_ACTIVITY } from '../data/activity';
import { USER_AVERAGE_SESSIONS } from '../data/averageSessions';
import ActivityModel from '../models/ActivityModel';
import AverageSessionsModel from '../models/AverageSessionsModel';
import { USER_PERFORMANCE } from '../data/performance'; 
import PerformanceModel from '../models/PerformanceModel';

const USE_MOCK = true; 
const BASE_URL = 'http://localhost:3000';

export const getUserActivity = async (userId) => {
    if (USE_MOCK) {
        let activityData;

        // On vérifie si ton mock est un tableau (plusieurs utilisateurs) ou un objet simple (ton fichier actuel)
        if (Array.isArray(USER_ACTIVITY)) {
            activityData = USER_ACTIVITY.find(user => user.userId === parseInt(userId));
        } else {
            // Si c'est un objet direct comme maintenant, on le prend tel quel !
            activityData = USER_ACTIVITY;
        }

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

export const getUserAverageSessions = async (userId) => {
  if (USE_MOCK) {
      let sessionData;
      if (Array.isArray(USER_AVERAGE_SESSIONS)) {
          sessionData = USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(userId));
      } else {
          sessionData = USER_AVERAGE_SESSIONS;
      }
      return new AverageSessionsModel(sessionData);
  } else {
      try {
          const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
          const json = await response.json();
          return new AverageSessionsModel(json.data);
      } catch (error) {
          console.error("Erreur API Average Sessions :", error);
      }
  }
};

export const getUserPerformance = async (userId) => {
  if (USE_MOCK) {
      let performanceData;
      if (Array.isArray(USER_PERFORMANCE)) {
          performanceData = USER_PERFORMANCE.find(user => user.userId === parseInt(userId));
      } else {
          performanceData = USER_PERFORMANCE;
      }
      return new PerformanceModel(performanceData);
  } else {
      try {
          const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
          const json = await response.json();
          return new PerformanceModel(json.data);
      } catch (error) {
          console.error("Erreur API Performance :", error);
      }
  }
};