import React from 'react';
import { ShieldAlert, AlertTriangle, ExternalLink, Heart, Award } from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';

export default function Footer({ setCurrentView }) {
  const { hackathonInfo } = useDisaster();

  return (
    <footer style={{
      backgroundColor: '#060910',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '48px 24px 32px',
      color: '#94a3b8',
      fontSize: '13px',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Prototype & Transparency Banner */}
        <div style={{
          backgroundColor: 'rgba(234, 179, 8, 0.08)',
          border: '1px solid rgba(234, 179, 8, 0.25)',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '36px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px'
        }}>
          <AlertTriangle size={20} color="#eab308" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 700, color: '#facc15', marginBottom: '4px', fontSize: '13px' }}>
              PROTOTYPE & SIMULATION DISCLAIMER (SMART INDIA HACKATHON)
            </div>
            <p style={{ color: '#cbd5e1', lineHeight: 1.5, margin: 0, fontSize: '12px' }}>
              <strong>IMPORTANT:</strong> This is a hackathon prototype/demo. All incidents, sensor telemetry, NDMA/IMD alerts, and citizen reports displayed are simulated for demonstration purposes. ResQNova does not falsely claim that government APIs, operational emergency dispatch lines, or real-time civil defense infrastructure are live unless certified integrations are officially connected.
            </p>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px',
          marginBottom: '40px'
        }}>
          {/* Col 1: Brand & SIH */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                backgroundColor: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldAlert size={16} color="#ffffff" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '18px', color: '#ffffff' }}>
                ResQ<span style={{ color: '#ef4444' }}>Nova</span>
              </span>
            </div>
            <p style={{ lineHeight: 1.6, color: '#64748b', fontSize: '12px', marginBottom: '16px' }}>
              AI-Powered Real-Time Disaster Intelligence & Response platform uniting scattered disaster signals into a high-confidence situational operating picture.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#0f172a',
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '12px',
              color: '#38bdf8'
            }}>
              <Award size={14} />
              <span>Smart India Hackathon Project</span>
            </div>
          </div>

          {/* Col 2: Hackathon Credentials */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '14px' }}>
              Project Information
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <li><strong style={{ color: '#cbd5e1' }}>Problem ID:</strong> {hackathonInfo.problemId}</li>
              <li><strong style={{ color: '#cbd5e1' }}>Theme:</strong> {hackathonInfo.theme}</li>
              <li><strong style={{ color: '#cbd5e1' }}>Category:</strong> {hackathonInfo.category}</li>
              <li><strong style={{ color: '#cbd5e1' }}>Team:</strong> {hackathonInfo.teamName}</li>
              <li><strong style={{ color: '#cbd5e1' }}>Team Leader:</strong> {hackathonInfo.teamLeader}</li>
              <li><strong style={{ color: '#cbd5e1' }}>Institute:</strong> {hackathonInfo.institute}</li>
            </ul>
          </div>

          {/* Col 3: Core Pipeline Workflow */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '14px' }}>
              6-Stage Intelligence Pipeline
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px' }}>
              <span style={{ color: '#38bdf8' }}>1. COLLECT (6 Multi-modal feeds)</span>
              <span style={{ color: '#818cf8' }}>2. PROCESS (Normalize & Deduplicate)</span>
              <span style={{ color: '#c084fc' }}>3. AI ANALYZE & VERIFY (NLP Triage)</span>
              <span style={{ color: '#f472b6' }}>4. CLASSIFY & PRIORITIZE (Matrix)</span>
              <span style={{ color: '#34d399' }}>5. VISUALIZE (Interactive GIS Map)</span>
              <span style={{ color: '#f87171' }}>6. ALERT (Multi-channel Broadcast)</span>
            </div>
          </div>

          {/* Col 4: Platform Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', marginBottom: '14px' }}>
              Platform Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <button 
                onClick={() => { setCurrentView('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: '#94a3b8', textAlign: 'left', cursor: 'pointer', padding: 0 }}
              >
                → ResQNova Command Center
              </button>
              <button 
                onClick={() => { setCurrentView('ai-analyzer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: '#94a3b8', textAlign: 'left', cursor: 'pointer', padding: 0 }}
              >
                → AI Disaster Report Analyzer
              </button>
              <button 
                onClick={() => { setCurrentView('map'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: '#94a3b8', textAlign: 'left', cursor: 'pointer', padding: 0 }}
              >
                → Live Disaster Situation Map
              </button>
              <button 
                onClick={() => { setCurrentView('datasources'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: '#94a3b8', textAlign: 'left', cursor: 'pointer', padding: 0 }}
              >
                → 6 Ingestion Data Sources
              </button>
              <button 
                onClick={() => { setCurrentView('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{ background: 'none', border: 'none', color: '#94a3b8', textAlign: 'left', cursor: 'pointer', padding: 0 }}
              >
                → Architecture & How It Works
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: '#64748b'
        }}>
          <div>
            © 2026 ResQNova • Built for Smart India Hackathon by Team ResQNova ({hackathonInfo.institute})
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Security Framework</span>
            <span>CAP Protocol v1.2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
