export default class ActivityModel {
  constructor(data) {
      this.userId = data.userId;

      this.sessions = data.sessions.map((session, index) => ({
          ...session,
          day: index + 1 
      }));
  }
}