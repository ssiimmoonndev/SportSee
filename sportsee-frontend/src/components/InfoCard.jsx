function InfoCard({ icon, bgColor, value, unit, label }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      backgroundColor: '#FBFBFB', 
      padding: '30px', 
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Le carré de couleur avec l'icône */}
      <div style={{ 
        width: '60px', 
        height: '60px', 
        borderRadius: '10px', 
        backgroundColor: bgColor, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: '24px' 
      }}>
        {/* On affichera l'image de l'icône ici */}
        <img src={icon} alt={`${label} icon`} style={{ width: '20px' }} />
      </div>

      {/* Le texte (Valeur + Label) */}
      <div>
        <p style={{ fontWeight: '700', fontSize: '20px', margin: '0', color: '#282D30' }}>
          {value}{unit}
        </p>
        <p style={{ fontWeight: '500', fontSize: '14px', margin: '0', color: '#74798C', marginTop: '2px' }}>
          {label}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;