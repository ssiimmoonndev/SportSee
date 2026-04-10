export default class AverageSessionsModel {
  constructor(data) {
      this.userId = data.userId;
      
      // Notre dictionnaire de traduction pour les jours de la semaine
      const daysMap = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
      
      this.sessions = data.sessions.map(session => ({
          day: daysMap[session.day], // On remplace le 1 par 'L', le 2 par 'M', etc.
          sessionLength: session.sessionLength
      }));
  }
}