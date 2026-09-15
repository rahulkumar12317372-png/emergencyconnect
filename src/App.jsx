import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CommandCenter from './pages/CommandCenter';
import LiveMapPage from './pages/LiveMapPage';
import AIAnalyzerPage from './pages/AIAnalyzerPage';
import ReportsPage from './pages/ReportsPage';
import AlertsPage from './pages/AlertsPage';
import DataSourcesPage from './pages/DataSourcesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ImpactPage from './pages/ImpactPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  // Navigation State: 'landing' (default overview) | 'dashboard' | 'map' | 'ai-analyzer' | 'reports' | 'alerts' | 'datasources' | 'how-it-works' | 'impact' | 'about'
  const [currentView, setCurrentView] = useState('landing');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#080c14',
      color: '#f8fafc'
    }}>
      {/* Universal Command Center Navigation Header */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Content Area */}
      <div style={{ flex: 1 }}>
        {currentView === 'landing' && <LandingPage setCurrentView={setCurrentView} />}
        {currentView === 'dashboard' && <CommandCenter currentView={currentView} setCurrentView={setCurrentView} />}
        {currentView === 'map' && <LiveMapPage setCurrentView={setCurrentView} />}
        {currentView === 'ai-analyzer' && <AIAnalyzerPage setCurrentView={setCurrentView} />}
        {currentView === 'reports' && <ReportsPage setCurrentView={setCurrentView} />}
        {currentView === 'alerts' && <AlertsPage setCurrentView={setCurrentView} />}
        {currentView === 'datasources' && <DataSourcesPage setCurrentView={setCurrentView} />}
        {currentView === 'how-it-works' && <HowItWorksPage setCurrentView={setCurrentView} />}
        {currentView === 'impact' && <ImpactPage setCurrentView={setCurrentView} />}
        {currentView === 'about' && <AboutPage setCurrentView={setCurrentView} />}
      </div>

      {/* Universal Footer with SIH Hackathon Metadata & Simulation Transparency Disclaimer */}
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}
