export default class UserModel {
  constructor(data) {
      this.id = data.id;
      this.firstName = data.userInfos.firstName; 
      
      const rawScore = data.score || data.todayScore || 0;
      this.score = rawScore * 100;
      
      this.keyData = data.keyData;
  }
}