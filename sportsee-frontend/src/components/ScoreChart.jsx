import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function ScoreChart({ score }) {
  // On prépare les données : une part pour le score, une part pour le reste (vide)
  const data = [
    { value: score },
    { value: 100 - score },
  ];

  return (
    <div style={{ 
      backgroundColor: '#FBFBFB', 
      borderRadius: '5px', 
      width: '258px', 
      height: '263px', 
      position: 'relative' 
    }}>
      <h2 style={{ 
        position: 'absolute', 
        top: '24px', 
        left: '30px', 
        fontSize: '15px', 
        fontWeight: '500', 
        color: '#20253A' 
      }}>
        Score
      </h2>

      {/* Le texte au centre du cercle */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: '1'
      }}>
        <p style={{ fontSize: '26px', fontWeight: '700', margin: '0' }}>{score}%</p>
        <p style={{ fontSize: '16px', color: '#74798C', margin: '0' }}>de votre<br/>objectif</p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90} // Pour commencer en haut
            endAngle={450}
            cornerRadius={10}
          >
            <Cell fill="#FF0000" stroke="none" />
            <Cell fill="transparent" stroke="none" />
          </Pie>
          
          {/* Un deuxième cercle blanc en dessous pour faire le fond du trou */}
          <Pie
            data={[{ value: 1 }]}
            dataKey="value"
            innerRadius={0}
            outerRadius={70}
            fill="white"
            stroke="none"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScoreChart;