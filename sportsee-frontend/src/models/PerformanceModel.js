export default class PerformanceModel {
  constructor(data) {
      this.userId = data.userId;
      
      // Notre dictionnaire pour traduire les chiffres de l'API en mots français
      const kindMapping = {
          1: 'Cardio',
          2: 'Energie',
          3: 'Endurance',
          4: 'Force',
          5: 'Vitesse',
          6: 'Intensité'
      };

      // On formate les données pour le graphique
      this.data = data.data.map(item => ({
          value: item.value,
          // On remplace le chiffre par le mot correspondant
          kind: kindMapping[item.kind] 
      }));
      
      // Petite astuce : on inverse souvent l'ordre du tableau pour que 
      // "Intensité" se retrouve en haut du graphique comme sur la maquette Figma !
      this.data.reverse(); 
  }
}