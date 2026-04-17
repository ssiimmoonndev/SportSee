import ActivityTooltip from "./ActivityTooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ActivityChart({ data }) {
  if (!data || data.length === 0) return null; 

  return (
    <div style={{ backgroundColor: '#FBFBFB', borderRadius: '5px', padding: '24px', width: "100%", height: 320 }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        
        <h2 style={{ fontSize: '15px', fontWeight: '500', color: '#20253A', margin: 0 }}>
          Activité quotidienne
        </h2>

        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#74798C', fontWeight: '500' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#282D30' }}></div>
            Poids (kg)
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#E60000' }}></div>
            Calories brûlées (kCal)
          </div>

        </div>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          
          <XAxis 
            dataKey="day" 
            tickLine={false} 
            axisLine={false} 
            tick={{ fill: '#9B9EAC' }} 
            dy={15}
          />

          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#9B9EAC' }}
            dx={15}
          />

          <YAxis
            yAxisId="cal"
            dataKey="calories"
            hide
          />

          <Tooltip content={<ActivityTooltip />} />

          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30" 
            radius={[10, 10, 0, 0]}
            barSize={7}
          />

          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000" 
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;