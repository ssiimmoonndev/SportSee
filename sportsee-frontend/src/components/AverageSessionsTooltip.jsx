export default function AverageSessionsTooltip({ active, payload }) {

  if (active && payload && payload.length) {
    return (
      <div style={{ 
        backgroundColor: 'white', 
        padding: '5px 10px', 
        color: 'black', 
        fontSize: '12px',
        fontWeight: '500'
      }}>
        {`${payload[0].value} min`}
      </div>
    );
  }

  return null;
}