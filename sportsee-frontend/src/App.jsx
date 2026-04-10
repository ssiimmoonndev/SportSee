import Profile from './pages/Profile';
import './App.css'; // Si tu as du CSS global

function App() {
  return (
    <div>
      {/* C'est la page Profile qui doit être affichée, car c'est elle qui va chercher les données */}
      <Profile />
    </div>
  );
}

export default App;