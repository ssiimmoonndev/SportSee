export default class ActivityModel {
  constructor(data) {
      this.userId = data.userId;
      // On récupère exactement TA logique de formatage ici :
      this.sessions = data.sessions.map((session, index) => ({
          ...session,
          day: index + 1 // affichage 1 → 7 au lieu de la date
      }));
  }
}