export default class UserModel {
  constructor(data) {
      this.id = data.id;
      this.userInfos = data.userInfos;
      // Standardisation : on prend 'score', et s'il n'existe pas, on "fallback" sur 'todayScore'
      this.score = data.score || data.todayScore;
      this.keyData = data.keyData;
  }
}