import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function PerformanceChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ backgroundColor: '#282D30', borderRadius: '5px', width: '258px', height: '263px' }}>
      <ResponsiveContainer width="100%" height="100%">

        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>

          <PolarGrid radialLines={false} />
          
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