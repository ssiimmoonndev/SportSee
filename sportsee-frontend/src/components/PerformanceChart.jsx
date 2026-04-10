import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function PerformanceChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ backgroundColor: '#282D30', borderRadius: '5px', width: '258px', height: '263px' }}>
      <ResponsiveContainer width="100%" height="100%">
        {/* outerRadius permet de gérer la taille de l'hexagone pour qu'il ne touche pas les bords */}
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          {/* radialLines={false} enlève les lignes qui partent du centre vers les coins */}
          <PolarGrid radialLines={false} />
          
          {/* dataKey="kind" utilise nos mots traduits (Cardio, Force, etc.) */}
          <PolarAngleAxis 
            dataKey="kind" 
            tickLine={false} 
            tick={{ fontSize: 12, fill: 'white' }} 
          />
          
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;