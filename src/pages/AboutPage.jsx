import React from 'react';
import { 
  Info, 
  Award, 
  ShieldAlert, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  Code,
  Users
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';

export default function AboutPage() {
  const { hackathonInfo, simulationNotice } = useDisaster();

  return (
    <div style={{ backgroundColor: '#080c14', minHeight: 'calc(100vh - 120px)', padding: '40px 24px', color: '#f8fafc' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#f87171',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '14px'
          }}>
            <Award size={14} />
            SMART INDIA HACKATHON
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            margin: '0 0 16px 0'
          }}>
            About ResQNova
          </h1>

          <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            AI-Powered Real-Time Disaster Intelligence & Response platform conceived and engineered for the Smart India Hackathon.
          </p>
        </div>

        {/* Hackathon Credentials Card (White Light Dashboard Card on Navy) */}
        <div style={{
          backgroundColor: '#ffffff',
          color: '#0f172a',
          borderRadius: '16px',
          padding: '32px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
          marginBottom: '36px'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#0f172a', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={22} color="#dc2626" />
            Hackathon Project Metadata
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Problem Statement ID</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#2563eb' }}>{hackathonInfo.problemId}</div>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Theme</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>{hackathonInfo.theme}</div>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Category</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>{hackathonInfo.category}</div>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Team Name</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#dc2626' }}>{hackathonInfo.teamName}</div>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Team Leader</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>{hackathonInfo.teamLeader}</div>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Institute</div>
              <div style={{ fontSize: '18px', fontWeight: 900, color: '#0f172a' }}>{hackathonInfo.institute}</div>
            </div>
          </div>
        </div>

        {/* Mission & Problem Statement */}
        <div style={{
          backgroundColor: '#0d1322',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '32px',
          marginBottom: '36px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            The Core Vision
          </h3>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#cbd5e1', marginBottom: '16px' }}>
            During major natural disasters across India—such as flash floods in Assam, landslides in Wayanad, coastal cyclones along the Bay of Bengal, or forest fires in Uttarakhand—critical information is fragmented across government bulletins, social media cries, weather radars, and news reports.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#cbd5e1', margin: 0 }}>
            <strong>ResQNova</strong> solves this critical challenge by automating the multi-modal collection, processing, AI verification, priority classification, GIS visualization, and multi-channel alerting of disaster intelligence. Our objective is to empower disaster response teams, authorities, and citizens with the speed and accuracy needed to protect lives and infrastructure.
          </p>
        </div>

        {/* Technology Stack Grid */}
        <div style={{
          backgroundColor: '#0d1322',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '32px',
          marginBottom: '36px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code size={20} color="#38bdf8" />
            Engineered Technology Stack
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>FRONTEND CORE</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>React 18 & Vite</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>High-performance client runtime</div>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>GEOSPATIAL GIS</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Leaflet.js & Carto</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Interactive vector situation mapping</div>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>AI TRIAGE ENGINE</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Multi-Modal NLP Triage</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>Entity extraction & cross-check</div>
            </div>

            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>ALERT PROTOCOL</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>CAP v1.2 Protocol</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>ITU-T X.1303 Alerting Standard</div>
            </div>
          </div>
        </div>

        {/* Prototype & Transparency Notice */}
        <div style={{
          backgroundColor: 'rgba(234, 179, 8, 0.08)',
          border: '1px solid rgba(234, 179, 8, 0.3)',
          borderRadius: '16px',
          padding: '24px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px'
        }}>
          <AlertTriangle size={24} color="#eab308" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#facc15', margin: '0 0 6px 0' }}>
              Hackathon Prototype Transparency Notice
            </h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
              This platform is presented as a working prototype for the Smart India Hackathon (SIH26206). In full compliance with evaluation guidelines, all incidents, sensor readings, and broadcast transmissions are generated within our controlled simulation engine. Production deployment requires formal bilateral API peering with NDMA, IMD, and state disaster communication authorities.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
