import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <div style={{ margin: 0, padding: 0, fontFamily: 'Roboto, sans-serif' }}>
        <Header />

        <div style={{ display: 'flex' }}>
          <Sidebar />

          <div style={{ flex: 1, overflowX: 'hidden' }}>
            <Routes>
              {/* Redirection par défaut vers Thomas (12) si on est à la racine */}
              <Route path="/" element={<Navigate to="/user/12" />} />
              
              <Route path="/user/:id" element={<Profile />} />
            </Routes>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;