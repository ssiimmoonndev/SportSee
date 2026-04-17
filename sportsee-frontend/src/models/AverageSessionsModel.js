export default class AverageSessionsModel {
  constructor(data) {
      this.userId = data.userId;
      
      const daysMap = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };
      
      this.sessions = data.sessions.map(session => ({
          day: daysMap[session.day], 
          sessionLength: session.sessionLength
      }));
  }
}