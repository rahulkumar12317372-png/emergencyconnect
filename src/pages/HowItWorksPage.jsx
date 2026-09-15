import React from 'react';
import { 
  Workflow, 
  Layers, 
  Database, 
  Filter, 
  Sparkles, 
  Activity, 
  Bell, 
  ArrowDown, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';

export default function HowItWorksPage({ setCurrentView }) {
  const { simulationNotice } = useDisaster();

  const pipelineStages = [
    {
      num: '01',
      title: 'COLLECT',
      badge: 'MULTI-MODAL INGESTION',
      icon: Database,
      color: '#2563eb',
      desc: 'Ingests real-time raw feeds across 6 diverse channels: Government CAP alerts (NDMA/IMD), Weather Doppler radar & satellite grids, News agency crawls, Social media geotagged posts, IoT physical sensors (river gauges & seismometers), and Citizen mobile/WhatsApp SOS submissions.',
      highlights: ['CAP v1.2 Protocol', 'Doppler Radar Scan Mesh', 'Sub-second IoT MQTT Streams', 'Citizen Geotagged Media']
    },
    {
      num: '02',
      title: 'PROCESS',
      badge: 'NORMALIZATION & DEDUP',
      icon: Filter,
      color: '#7c3aed',
      desc: 'Normalizes unstructured formats into a standardized disaster event schema. Applies spatial-temporal clustering algorithms to detect duplicate reports originating from the same physical coordinate and suppress repetitive spam.',
      highlights: ['Schema Harmonization', 'Spatial Proximity Clustering', 'Deduplication Engine (84% noise reduction)', 'Bot & Rumor Filtering']
    },
    {
      num: '03',
      title: 'AI ANALYZE & VERIFY',
      badge: 'NLP TRIAGE & CROSS-CHECK',
      icon: Sparkles,
      color: '#c026d3',
      desc: 'Natural Language Processing models extract named entities (locations, landmarks, casualty numbers, stranded populations). The verification subsystem cross-checks citizen cries against physical sensors (e.g. verifying an urban flood report against nearby CWC water gauges and radar precipitation).',
      highlights: ['Named Entity Recognition (NER)', 'Cross-Source Triangulation', 'Confidence Scoring (0-100%)', 'Automated Verification Tagging']
    },
    {
      num: '04',
      title: 'CLASSIFY & PRIORITIZE',
      badge: 'SEVERITY MATRIX',
      icon: ShieldCheck,
      color: '#ea580c',
      desc: 'Computes multi-dimensional risk scores combining population density, infrastructure vulnerability, rate of water/fire rise, and rescue urgency. Assigns strict semantic severity indicators (CRITICAL, HIGH, MODERATE, LOW) and response priority (URGENT, HIGH, MEDIUM, LOW).',
      highlights: ['Dynamic Risk Scoring Matrix', 'Critical Life-Safety Ranking', 'Resource Allocation Index', 'NDRF / SDRF Team Matching']
    },
    {
      num: '05',
      title: 'VISUALIZE',
      badge: 'TACTICAL COMMAND GIS',
      icon: Activity,
      color: '#0284c7',
      desc: 'Projects all verified incidents onto a high-performance interactive Leaflet GIS situation map with tactical overlays, danger contour perimeters, shelter locations, and evacuation corridor statuses.',
      highlights: ['Dark Tactical GIS Rendering', 'Pulsing Radar Hazard Rings', 'Instant Incident Intel Drawer', 'Search & Geo-filtering']
    },
    {
      num: '06',
      title: 'ALERT',
      badge: 'TARGETED MULTI-CAST',
      icon: Bell,
      color: '#dc2626',
      desc: 'Dispatches targeted emergency notifications across multiple redundant transmission rails: Cell Broadcast geofenced alarms, citizen WhatsApp alerts, acoustic coastal sirens, and direct responder terminals.',
      highlights: ['Cell Broadcast (No internet required)', 'Citizen WhatsApp Gateway', 'Coastal & River Acoustic Sirens', 'Emergency Service VHF Dispatch']
    }
  ];

  return (
    <div style={{ backgroundColor: '#080c14', minHeight: 'calc(100vh - 120px)', padding: '40px 24px', color: '#f8fafc' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(37, 99, 235, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            color: '#60a5fa',
            padding: '4px 14px',
            borderRadius: '9999px',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '14px'
          }}>
            <Workflow size={14} />
            END-TO-END SYSTEM ARCHITECTURE
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            margin: '0 0 16px 0'
          }}>
            How ResQNova Works
          </h1>

          <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            From raw, chaotic multi-source data ingestion to real-time tactical responder dispatch: Explore the 6-stage algorithmic workflow powering ResQNova.
          </p>
        </div>

        {/* 6 Stage Vertical Sequence (White Light Cards on Dark Navy Background) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {pipelineStages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <React.Fragment key={stage.num}>
                <div style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '24px',
                  alignItems: 'start'
                }} className="how-stage-card">
                  {/* Step Number & Icon */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      backgroundColor: `${stage.color}15`,
                      border: `2px solid ${stage.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stage.color
                    }}>
                      <Icon size={26} />
                    </div>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 900, color: '#64748b' }}>
                      STEP {stage.num}
                    </span>
                  </div>

                  {/* Stage Details */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0f172a', margin: 0 }}>
                        {stage.title}
                      </h3>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        backgroundColor: '#f1f5f9',
                        color: stage.color,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0'
                      }}>
                        {stage.badge}
                      </span>
                    </div>

                    <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                      {stage.desc}
                    </p>

                    {/* Highlights Pills */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {stage.highlights.map(h => (
                        <span key={h} style={{
                          backgroundColor: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          color: '#334155',
                          fontSize: '12px',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <CheckCircle2 size={13} color="#10b981" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {idx < pipelineStages.length - 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', margin: '-10px 0' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#0d1322',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8'
                    }}>
                      <ArrowDown size={16} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* CTA to Command Center */}
        <div style={{
          backgroundColor: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
            Experience the Unified Disaster Intelligence Mesh in Action
          </h3>
          <p style={{ fontSize: '14px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 20px' }}>
            Open the live command dashboard or test our natural language report analyzer with real-world disaster scenarios.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => { setCurrentView('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                backgroundColor: '#ef4444',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Open Command Center →
            </button>
            <button
              onClick={() => { setCurrentView('ai-analyzer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Try AI Analyzer →
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .how-stage-card {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
