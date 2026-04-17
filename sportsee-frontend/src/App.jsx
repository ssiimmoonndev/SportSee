import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Roboto, sans-serif' }}>

      <Header />

      <div style={{ display: 'flex' }}>
        
        <Sidebar />

        <div style={{ flex: 1, overflowX: 'hidden' }}>
          <Profile />
        </div>

      </div>
    </div>
  );
}

export default App;