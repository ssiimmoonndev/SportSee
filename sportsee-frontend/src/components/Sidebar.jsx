import iconYoga from '../assets/Zen.svg';
import iconSwim from '../assets/Swim.svg';
import iconBike from '../assets/Vector.svg';
import iconWeight from '../assets/Vector1.svg';

function Sidebar() {

  const iconBtnStyle = {
      width: '64px',
      height: '64px',
      backgroundColor: 'white',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
  };

  return (
      <aside style={{ 
          backgroundColor: '#020203', 
          width: '117px', 
          minHeight: 'calc(100vh - 91px)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '30px 0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          zIndex: 5
      }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '100px' }}>
                
                <div style={iconBtnStyle}>
                    <img src={iconYoga} alt="Yoga" style={{ width: '32px' }} />
                </div>
                <div style={iconBtnStyle}>
                    <img src={iconSwim} alt="Natation" style={{ width: '32px' }} />
                </div>
                <div style={iconBtnStyle}>
                    <img src={iconBike} alt="Vélo" style={{ width: '32px' }} />
                </div>
                <div style={iconBtnStyle}>
                    <img src={iconWeight} alt="Musculation" style={{ width: '32px' }} />
                </div>

            </div>

          <p style={{ 
              color: 'white', 
              fontSize: '12px', 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)', 
              marginBottom: '40px' 
          }}>
              Copiryght, SportSee 2020
          </p>
      </aside>
  );
}

export default Sidebar;