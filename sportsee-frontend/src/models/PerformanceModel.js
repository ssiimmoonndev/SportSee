export default class PerformanceModel {
  constructor(data) {
      this.userId = data.userId;
      
      const kindMapping = {
          1: 'Cardio',
          2: 'Energie',
          3: 'Endurance',
          4: 'Force',
          5: 'Vitesse',
          6: 'Intensité'
      };

      this.data = data.data.map(item => ({
          value: item.value,
          kind: kindMapping[item.kind] 
      }));
      
      this.data.reverse(); 
  }
}