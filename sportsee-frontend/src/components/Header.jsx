import logo from '../assets/logo.svg';

function Header() {
  return (
      <header style={{ 
          backgroundColor: '#020203', 
          height: '91px', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 80px',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          zIndex: 10
      }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <img src={logo} alt="SportSee" style={{ width: '178px' }} />
            </div>


          <nav style={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: 'space-around', 
              color: 'white', 
              fontSize: '24px', 
              fontWeight: '500' 
          }}>
              <a style={{ cursor: 'pointer' }}>Accueil</a>
              <a style={{ cursor: 'pointer' }}>Profil</a>
              <a style={{ cursor: 'pointer' }}>Réglage</a>
              <a style={{ cursor: 'pointer' }}>Communauté</a>
          </nav>
      </header>
  );
}

export default Header;