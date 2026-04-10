export default function AverageSessionsTooltip({ active, payload }) {
  // Si le tooltip est actif et qu'il y a des données à afficher
  if (active && payload && payload.length) {
    return (
      <div style={{ 
        backgroundColor: 'white', 
        padding: '5px 10px', 
        color: 'black', 
        fontSize: '12px',
        fontWeight: '500'
      }}>
        {/* On récupère la valeur (la durée) et on ajoute " min" */}
        {`${payload[0].value} min`}
      </div>
    );
  }

  return null;
}