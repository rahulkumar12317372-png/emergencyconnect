import React from 'react';
import { 
  ShieldAlert, 
  Radio, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  Share2, 
  CloudRain, 
  Cpu, 
  Users, 
  FileText, 
  Layers, 
  Zap, 
  Clock, 
  Filter, 
  HelpCircle,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';
import SeverityBadge from '../components/SeverityBadge';
import DisasterMap from '../components/DisasterMap';

export default function LandingPage({ setCurrentView }) {
  const { 
    incidents, 
    criticalCount, 
    activeCount, 
    activeReportsCount, 
    verifiedReportsCount, 
    alerts, 
    dataSources,
    hackathonInfo 
  } = useDisaster();

  return (
    <div style={{ backgroundColor: '#080c14', color: '#f8fafc', overflow: 'hidden' }}>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '60px 24px 80px',
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {/* Glow backdrop */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, rgba(37, 99, 235, 0.12) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)'
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(239, 68, 68, 0.12)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#f87171',
          padding: '6px 16px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '24px',
          boxShadow: '0 0 20px rgba(239, 68, 68, 0.15)'
        }}>
          <Sparkles size={14} />
          AI-POWERED DISASTER INTELLIGENCE
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(36px, 5.5vw, 68px)',
          fontWeight: 900,
          letterSpacing: '-0.035em',
          lineHeight: 1.1,
          maxWidth: '960px',
          marginBottom: '20px',
          background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          From Scattered Reports to <br />
          <span style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #f97316 60%, #fbbf24 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Disaster Intelligence.
          </span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: 'clamp(16px, 1.8vw, 20px)',
          lineHeight: 1.6,
          color: '#94a3b8',
          maxWidth: '820px',
          marginBottom: '36px'
        }}>
          ResQNova combines information from multiple disaster sources, uses AI-assisted analysis to identify and prioritize important incidents, and creates a unified, location-aware view for faster disaster response.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '56px'
        }}>
          <button
            onClick={() => { setCurrentView('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 28px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 25px rgba(239, 68, 68, 0.45)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.backgroundColor = '#dc2626';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = '#ef4444';
            }}
          >
            <Radio size={18} />
            Open Command Center
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('why-resqnova');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              color: '#f8fafc',
              fontWeight: 600,
              fontSize: '15px',
              padding: '14px 26px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            }}
          >
            See How It Works
          </button>
        </div>

        {/* VISUAL DASHBOARD PREVIEW */}
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backgroundColor: '#0a0f1d',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(37, 99, 235, 0.15)',
          overflow: 'hidden',
          textAlign: 'left'
        }}>
          {/* Mock Window Top Bar */}
          <div style={{
            backgroundColor: '#0d1322',
            padding: '12px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#94a3b8', marginLeft: '12px' }}>
                ResQNova Intelligence Console • Live India Map & Multi-Feed Stream
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#facc15',
                backgroundColor: 'rgba(234, 179, 8, 0.15)',
                padding: '2px 8px',
                borderRadius: '4px'
              }}>
                SIMULATED DATA
              </span>
              <span style={{ fontSize: '11px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                6 Feeds Active
              </span>
            </div>
          </div>

          {/* Preview Content Grid */}
          <div style={{
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '16px'
          }}>
            {/* Top Stat Pills */}
            <div style={{ gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Active Incidents</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>{activeCount}</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>Across 5 disaster zones</div>
              </div>
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 700, textTransform: 'uppercase' }}>Critical Emergencies</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#dc2626' }}>{criticalCount}</div>
                <div style={{ fontSize: '11px', color: '#dc2626' }}>Immediate action required</div>
              </div>
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>Reports Ingested</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#2563eb' }}>{activeReportsCount}</div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>From 6 multi-modal feeds</div>
              </div>
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '14px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '11px', color: '#047857', fontWeight: 700, textTransform: 'uppercase' }}>AI Verified Rate</div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#059669' }}>84.5%</div>
                <div style={{ fontSize: '11px', color: '#059669' }}>{verifiedReportsCount} confirmed authentic</div>
              </div>
            </div>

            {/* Center: Live Disaster Map Preview */}
            <div style={{ gridColumn: 'span 8', minHeight: '380px' }} className="preview-map-col">
              <div style={{ backgroundColor: '#0f172a', borderRadius: '14px', overflow: 'hidden', height: '100%', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <DisasterMap height="380px" showControls={true} />
              </div>
            </div>

            {/* Right: Critical Alerts & AI Analysis Mini Feed */}
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '12px' }} className="preview-alerts-col">
              {/* Critical Alerts Card (White Light Dashboard Card on Navy) */}
              <div style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderRadius: '14px',
                padding: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                border: '1px solid #e2e8f0',
                flex: 1
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '14px' }}>
                    <AlertCircle size={16} color="#ef4444" />
                    Critical Incident Alerts
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#dc2626', backgroundColor: '#fef2f2', padding: '2px 6px', borderRadius: '4px' }}>
                    LIVE BROADCAST
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {alerts.slice(0, 2).map(a => (
                    <div key={a.id} style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '10px 12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <SeverityBadge severity={a.severity} />
                        <span style={{ fontSize: '10px', color: '#64748b' }}>{a.time}</span>
                      </div>
                      <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', margin: '0 0 2px 0' }}>
                        {a.title}
                      </h5>
                      <div style={{ fontSize: '11px', color: '#475569' }}>📍 {a.area}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Analysis Snapshot */}
              <div style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderRadius: '14px',
                padding: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '14px', marginBottom: '8px' }}>
                  <Sparkles size={16} color="#2563eb" />
                  AI Triangulation Engine
                </div>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4, margin: '0 0 10px 0' }}>
                  Automatically cross-references citizen distress calls against Doppler radar and river discharge sensors to eradicate duplicate rumors.
                </p>
                <button
                  onClick={() => { setCurrentView('ai-analyzer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{
                    width: '100%',
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Test AI Report Analyzer →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY RESQNOVA? */}
      <section id="why-resqnova" style={{
        padding: '90px 24px',
        maxWidth: '1440px',
        margin: '0 auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 60px' }}>
          <span style={{
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#ef4444',
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            padding: '4px 12px',
            borderRadius: '9999px'
          }}>
            THE PROBLEM & OUR SOLUTION
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 900,
            marginTop: '16px',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            “During a disaster, information is everywhere. Intelligence is not.”
          </h2>
          <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.6 }}>
            Multiple streams flood in simultaneously. Without an intelligent unified platform, emergency personnel and citizens are overwhelmed by conflicting, duplicated, and unverified data.
          </p>
        </div>

        {/* 6 SOURCE CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '64px'
        }}>
          {dataSources.map((source, index) => {
            const icons = {
              'src-1': ShieldAlert,
              'src-2': CloudRain,
              'src-3': Radio,
              'src-4': Share2,
              'src-5': Cpu,
              'src-6': Users
            };
            const Icon = icons[source.id] || ShieldAlert;

            return (
              <div
                key={source.id}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 35px -10px rgba(0, 0, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.25)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={22} color="#2563eb" />
                    </div>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {source.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    {source.name}
                  </h3>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb', marginBottom: '10px' }}>
                    {source.agency}
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                    {source.description}
                  </p>
                </div>

                <div style={{
                  marginTop: '20px',
                  paddingTop: '14px',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#64748b'
                }}>
                  <span>Reliability: <strong style={{ color: '#0f172a' }}>{source.reliability}</strong></span>
                  <span>Latency: <strong style={{ color: '#0f172a' }}>{source.latency}</strong></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* THE BREAKDOWN SEQUENCE vs RESQNOVA SOLUTION */}
        <div style={{
          backgroundColor: '#0e1526',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '48px 32px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Pain-Point Pipeline */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', color: '#f87171', textTransform: 'uppercase' }}>
              The Operational Bottleneck
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Why Disaster Response Fails in Conventional Systems
            </h3>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '48px'
          }}>
            {[
              { label: 'SCATTERED INFORMATION', desc: 'Siloed channels' },
              { label: 'DUPLICATES', desc: 'Hundreds of repeated SOS calls' },
              { label: 'CONFLICTING REPORTS', desc: 'Unchecked social rumors' },
              { label: 'DELAYED INFORMATION', desc: 'Human verification lag' },
              { label: 'DIFFICULT DECISION MAKING', desc: 'Resource misallocation' }
            ].map((step, idx) => (
              <React.Fragment key={step.label}>
                <div style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  minWidth: '180px',
                  flex: 1
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#fca5a5', letterSpacing: '0.04em' }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize: '11px', color: '#cbd5e1', marginTop: '4px' }}>
                    {step.desc}
                  </div>
                </div>
                {idx < 4 && (
                  <span style={{ color: '#ef4444', fontWeight: 900, fontSize: '18px' }}>
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ResQNova Solution Banner */}
          <div style={{
            backgroundColor: 'rgba(37, 99, 235, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '16px',
            padding: '24px 32px',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 900,
              color: '#60a5fa',
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}>
              “ResQNova turns scattered information into a unified disaster picture.”
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '15px', maxWidth: '750px', margin: '0 auto' }}>
              By orchestrating real-time entity extraction, spatial proximity clustering, and cross-source verification, ResQNova transforms chaotic data feeds into actionable tactical intelligence within seconds.
            </p>
          </div>

          {/* 6-Stage Core Workflow Visual */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                ResQNova 6-Stage Intelligence Workflow
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '12px'
            }}>
              {[
                { step: '01', name: 'COLLECT', desc: 'Govt, Weather, News, Social, IoT, Citizen' },
                { step: '02', name: 'PROCESS', desc: 'Normalize JSON/CAP, de-noise & clean' },
                { step: '03', name: 'AI ANALYZE & VERIFY', desc: 'NLP entity extraction & cross-check' },
                { step: '04', name: 'CLASSIFY & PRIORITIZE', desc: 'Severity matrix & priority ranking' },
                { step: '05', name: 'VISUALIZE', desc: 'Dynamic GIS map & incident console' },
                { step: '06', name: 'ALERT', desc: 'CAP multi-channel & responder dispatch' }
              ].map((w) => (
                <div key={w.name} style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#2563eb', fontFamily: 'var(--font-mono)' }}>
                    PHASE {w.step}
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '4px 0' }}>
                    {w.name}
                  </h4>
                  <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.4, margin: 0 }}>
                    {w.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .preview-map-col {
            grid-column: span 12 !important;
          }
          .preview-alerts-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
