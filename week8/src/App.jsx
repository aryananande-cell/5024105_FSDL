import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HooksPage from './HooksPage';
import RefsPage from './RefsPage';
import KeysPage from './KeysPage';
import './App.css';

// Navigation Component
function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>React Features Demo</h2>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/hooks" className={location.pathname === '/hooks' ? 'active' : ''}>
            Custom Hooks
          </Link>
        </li>
        <li>
          <Link to="/refs" className={location.pathname === '/refs' ? 'active' : ''}>
            Refs Demo
          </Link>
        </li>
        <li>
          <Link to="/keys" className={location.pathname === '/keys' ? 'active' : ''}>
            Keys & Lists
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Dashboard Page
function Dashboard() {
  const [stats, setStats] = useState({
    visitors: 0,
    conversions: 0,
    revenue: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 10),
        conversions: prev.conversions + Math.floor(Math.random() * 5),
        revenue: prev.revenue + Math.floor(Math.random() * 100)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Visitors</h3>
          <div className="stat-number">{stats.visitors}</div>
          <div className="stat-change">+12.5%</div>
        </div>
        <div className="stat-card">
          <h3>Conversions</h3>
          <div className="stat-number">{stats.conversions}</div>
          <div className="stat-change">+8.2%</div>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <div className="stat-number">${stats.revenue}</div>
          <div className="stat-change">+15.3%</div>
        </div>
      </div>
      <div className="features-preview">
        <h2>Explore React Features</h2>
        <p>Navigate through the menu to see demonstrations of React Router, Refs, Keys, and Custom Hooks.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hooks" element={<HooksPage />} />
            <Route path="/refs" element={<RefsPage />} />
            <Route path="/keys" element={<KeysPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
