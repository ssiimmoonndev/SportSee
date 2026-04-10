import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AverageSessionsTooltip from './AverageSessionsTooltip';

function AverageSessionsChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div style={{ 
      backgroundColor: '#FF0000', 
      borderRadius: '5px', 
      width: '258px', 
      height: '263px', 
      padding: '20px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <h2 style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '15px', marginLeft: '20px', marginTop: '0' }}>
        Durée moyenne des<br/>sessions
      </h2>

      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data} margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
          />
          {/* On cache l'axe Y car il n'apparaît pas sur la maquette */}
          <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
          <Tooltip 
            content={<AverageSessionsTooltip />} 
            cursor={false} 
          />
          <Line 
            type="monotone" 
            dataKey="sessionLength" 
            stroke="rgba(255, 255, 255, 0.6)" 
            strokeWidth={2} 
            dot={false} 
            activeDot={{ r: 4, strokeWidth: 2, fill: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessionsChart;