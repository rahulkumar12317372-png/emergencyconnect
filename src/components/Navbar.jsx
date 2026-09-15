import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Radio, 
  Volume2, 
  VolumeX, 
  Activity, 
  Compass, 
  FileText, 
  Sparkles, 
  Bell, 
  Database, 
  Workflow, 
  Award, 
  Info, 
  LayoutDashboard,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';

export default function Navbar({ currentView, setCurrentView }) {
  const { 
    systemStatus, 
    simulationNotice, 
    lastUpdated, 
    criticalCount, 
    soundEnabled, 
    setSoundEnabled, 
    playAlertChime,
    hackathonInfo 
  } = useDisaster();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'landing', label: 'Overview', icon: Compass },
    { id: 'dashboard', label: 'Command Center', icon: LayoutDashboard, badge: criticalCount > 0 ? `${criticalCount} Crit` : null },
    { id: 'map', label: 'Live Map', icon: Activity },
    { id: 'ai-analyzer', label: 'AI Analyzer', icon: Sparkles },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'alerts', label: 'Alerts', icon: Bell },
    { id: 'datasources', label: 'Data Sources', icon: Database },
    { id: 'how-it-works', label: 'How It Works', icon: Workflow },
    { id: 'impact', label: 'Impact', icon: Award },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (id) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) {
      playAlertChime();
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#080c14',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.6)'
    }}>
      {/* Top Hackathon & Simulation Banner */}
      <div style={{
        backgroundColor: '#0d1322',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '4px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '11px',
        color: '#94a3b8'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ 
            backgroundColor: '#1e293b', 
            color: '#f8fafc', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontWeight: 700, 
            letterSpacing: '0.05em' 
          }}>
            SIH: {hackathonInfo.problemId}
          </span>
          <span>Theme: <strong style={{ color: '#cbd5e1' }}>{hackathonInfo.theme}</strong></span>
          <span style={{ display: 'none', md: 'inline' }}>|</span>
          <span style={{ color: '#94a3b8' }}>
            Team: <strong style={{ color: '#38bdf8' }}>{hackathonInfo.teamName}</strong> ({hackathonInfo.institute})
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }} />
            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>System: {systemStatus}</span>
          </div>

          <span style={{
            backgroundColor: 'rgba(234, 179, 8, 0.15)',
            color: '#facc15',
            border: '1px solid rgba(234, 179, 8, 0.3)',
            padding: '2px 8px',
            borderRadius: '4px',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}>
            {simulationNotice}
          </span>

          <span style={{ color: '#64748b' }}>Updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('landing')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #ef4444, #991b1b)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(239, 68, 68, 0.45)',
            position: 'relative'
          }}>
            <ShieldAlert size={22} color="#ffffff" />
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              border: '2px solid #080c14'
            }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '20px',
                letterSpacing: '-0.03em',
                color: '#ffffff'
              }}>
                ResQ<span style={{ color: '#ef4444' }}>Nova</span>
              </span>
              <span style={{
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 6px',
                borderRadius: '4px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                letterSpacing: '0.04em'
              }}>
                v2.6 SIH
              </span>
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', letterSpacing: '0.02em' }}>
              AI-Powered Real-Time Disaster Intelligence
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          padding: '4px 6px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }} className="desktop-nav">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#ffffff' : '#94a3b8',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#f8fafc';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <Icon size={15} color={isActive ? '#38bdf8' : 'currentColor'} />
                {link.label}
                {link.badge && (
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    backgroundColor: '#dc2626',
                    color: '#ffffff',
                    padding: '1px 5px',
                    borderRadius: '10px',
                    marginLeft: '2px'
                  }}>
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Audio Chime Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute emergency alert audio' : 'Enable emergency alert audio'}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              backgroundColor: soundEnabled ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${soundEnabled ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
              color: soundEnabled ? '#34d399' : '#64748b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 600
            }}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span style={{ display: 'none', lg: 'inline' }}>{soundEnabled ? 'Audio On' : 'Muted'}</span>
          </button>

          {/* Quick CTA to Command Center or Landing */}
          {currentView !== 'dashboard' ? (
            <button
              onClick={() => handleNavClick('dashboard')}
              style={{
                backgroundColor: '#ef4444',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '13px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dc2626';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ef4444';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <Radio size={15} />
              Command Center
            </button>
          ) : (
            <button
              onClick={() => handleNavClick('ai-analyzer')}
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '13px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
              }}
            >
              <Sparkles size={15} />
              AI Analyzer
            </button>
          )}

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#0a0f1d',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '16px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px'
        }}>
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: isActive ? '#38bdf8' : '#cbd5e1',
                  backgroundColor: isActive ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
