import React, { useState } from 'react';
import { 
  Radio, 
  ShieldAlert, 
  AlertCircle, 
  AlertTriangle, 
  Activity, 
  Sparkles, 
  FileText, 
  Bell, 
  Database, 
  Workflow, 
  Award, 
  Info, 
  Compass, 
  LayoutDashboard, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Send, 
  Filter, 
  Maximize2,
  ChevronRight,
  Flame,
  Waves,
  Wind,
  Mountain
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';
import SeverityBadge from '../components/SeverityBadge';
import DisasterMap from '../components/DisasterMap';
import IncidentDetailDrawer from '../components/IncidentDetailDrawer';

export default function CommandCenter({ currentView, setCurrentView }) {
  const { 
    systemStatus, 
    simulationNotice, 
    lastUpdated, 
    activeCount, 
    criticalCount, 
    activeReportsCount, 
    verifiedReportsCount, 
    incidents, 
    filteredIncidents, 
    selectedIncident, 
    setSelectedIncident, 
    alerts, 
    acknowledgeAlert,
    playAlertChime,
    filterType,
    setFilterType,
    filterSeverity,
    setFilterSeverity
  } = useDisaster();

  const [acknowledgedAlerts, setAcknowledgedAlerts] = useState({});

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'map', label: 'Live Map', icon: Activity },
    { id: 'reports', label: 'Reports', icon: FileText, badge: `${activeReportsCount}` },
    { id: 'ai-analyzer', label: 'AI Analysis', icon: Sparkles },
    { id: 'alerts', label: 'Alerts', icon: Bell, badge: `${alerts.length}` },
    { id: 'datasources', label: 'Data Sources', icon: Database },
    { id: 'how-it-works', label: 'How It Works', icon: Workflow },
    { id: 'impact', label: 'Impact', icon: Award },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleAcknowledge = (id) => {
    acknowledgeAlert(id);
    setAcknowledgedAlerts(prev => ({ ...prev, [id]: true }));
    playAlertChime();
  };

  return (
    <div style={{ backgroundColor: '#080c14', minHeight: 'calc(100vh - 120px)', padding: '20px 24px', color: '#f8fafc' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* TOP COMMAND CENTER HEADER & STATS BAR */}
        <div style={{
          backgroundColor: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '18px 24px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
        }}>
          {/* Title Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(239, 68, 68, 0.5)'
              }}>
                <Radio size={20} color="#ffffff" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h1 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                    ResQNova Command Center
                  </h1>
                  <span style={{
                    backgroundColor: 'rgba(234, 179, 8, 0.15)',
                    color: '#facc15',
                    border: '1px solid rgba(234, 179, 8, 0.3)',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {simulationNotice}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>System Status: <strong style={{ color: '#34d399' }}>{systemStatus}</strong></span>
                  <span>•</span>
                  <span>Last Updated: <strong style={{ color: '#cbd5e1' }}>{lastUpdated}</strong></span>
                  <span>•</span>
                  <span>Multi-Source AI Engine: <strong style={{ color: '#38bdf8' }}>ONLINE</strong></span>
                </div>
              </div>
            </div>

            {/* Quick action: Open AI Analyzer directly */}
            <button
              onClick={() => { setCurrentView('ai-analyzer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)'
              }}
            >
              <Sparkles size={16} />
              AI Report Analyzer
            </button>
          </div>

          {/* Metric Cards (White Light Dashboard Cards on Dark Navy Background) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px'
          }}>
            {/* Metric 1: Active Incidents */}
            <div style={{
              backgroundColor: '#ffffff',
              color: '#0f172a',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  Active Incidents
                </span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#facc15', backgroundColor: '#fefce8', padding: '2px 6px', borderRadius: '4px' }}>
                  SIMULATED
                </span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a' }}>
                {activeCount}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                Monitored in real-time
              </div>
            </div>

            {/* Metric 2: Critical Incidents */}
            <div style={{
              backgroundColor: '#ffffff',
              color: '#0f172a',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
              border: '1px solid #fecaca',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#b91c1c', textTransform: 'uppercase' }}>
                  Critical Incidents
                </span>
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  boxShadow: '0 0 8px #ef4444'
                }} />
              </div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#dc2626' }}>
                {criticalCount}
              </div>
              <div style={{ fontSize: '11px', color: '#dc2626', fontWeight: 600, marginTop: '4px' }}>
                Urgent Response Deployed
              </div>
            </div>

            {/* Metric 3: Reports Received */}
            <div style={{
              backgroundColor: '#ffffff',
              color: '#0f172a',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  Reports Received
                </span>
                <span style={{ fontSize: '10px', color: '#2563eb', fontWeight: 700 }}>6 FEEDS</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a' }}>
                {activeReportsCount}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                Citizen, Sensor & Media inputs
              </div>
            </div>

            {/* Metric 4: Reports Verified */}
            <div style={{
              backgroundColor: '#ffffff',
              color: '#0f172a',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
              border: '1px solid #a7f3d0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>
                  Reports Verified
                </span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#059669', backgroundColor: '#ecfdf5', padding: '2px 6px', borderRadius: '4px' }}>
                  84.5% RATE
                </span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#059669' }}>
                {verifiedReportsCount}
              </div>
              <div style={{ fontSize: '11px', color: '#047857', marginTop: '4px' }}>
                Confirmed authentic by AI triage
              </div>
            </div>
          </div>
        </div>

        {/* 3-COLUMN COMMAND CENTER LAYOUT */}
        <div className="command-center-layout">
          
          {/* COLUMN 1: LEFT NAVIGATION SIDEBAR */}
          <aside style={{
            backgroundColor: '#0a0f1d',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            height: 'fit-content'
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#64748b',
              padding: '4px 10px 10px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              marginBottom: '6px'
            }}>
              Command Modules
            </div>

            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#ffffff' : '#94a3b8',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#f8fafc';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#94a3b8';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={16} color={isActive ? '#ffffff' : 'currentColor'} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      color: isActive ? '#ffffff' : '#94a3b8'
                    }}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* SIH Team pill in sidebar */}
            <div style={{
              marginTop: '20px',
              padding: '14px',
              backgroundColor: '#0d1322',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '11px',
              color: '#94a3b8'
            }}>
              <div style={{ fontWeight: 700, color: '#cbd5e1', marginBottom: '4px' }}>
                Smart India Hackathon
              </div>
              <div>ID: <strong style={{ color: '#38bdf8' }}>SIH26206</strong></div>
              <div>Team: ResQNova</div>
              <div style={{ color: '#64748b', marginTop: '4px' }}>Vivekananda Global Univ.</div>
            </div>
          </aside>

          {/* COLUMN 2: CENTER - LIVE SITUATION OVERVIEW */}
          <main style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Live Disaster Situation Card */}
            <div style={{
              backgroundColor: '#0a0f1d',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '18px 20px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '14px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444', animation: 'critical-pulse 2s infinite' }} />
                    <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      Live Disaster Situation
                    </h2>
                  </div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '2px 0 0 0' }}>
                    Real-time geospatial intelligence mesh overlaying verified hazard telemetry
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => { setCurrentView('map'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#f8fafc',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Maximize2 size={13} />
                    Full Tactical Map
                  </button>
                </div>
              </div>

              {/* Interactive Leaflet Map */}
              <div style={{ height: '420px', borderRadius: '12px', overflow: 'hidden' }}>
                <DisasterMap height="420px" showControls={true} />
              </div>
            </div>

            {/* Active Incidents Table / Cards (White Light Dashboard Cards) */}
            <div style={{
              backgroundColor: '#0a0f1d',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Activity size={18} color="#38bdf8" />
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Active Incident Roster ({filteredIncidents.length})
                  </h3>
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  Click an incident to open the tactical intel drawer
                </div>
              </div>

              {/* Incidents Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '12px'
              }}>
                {filteredIncidents.map(inc => {
                  const isSelected = selectedIncident?.id === inc.id;
                  return (
                    <div
                      key={inc.id}
                      onClick={() => setSelectedIncident(inc)}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        borderRadius: '12px',
                        padding: '16px',
                        border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                        transition: 'transform 0.15s, box-shadow 0.15s',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#64748b' }}>
                            {inc.id} • {inc.type}
                          </span>
                          <SeverityBadge severity={inc.severity} priority={inc.priority} />
                        </div>

                        <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                          {inc.title}
                        </h4>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#475569', marginBottom: '8px' }}>
                          <MapPin size={13} color="#ef4444" />
                          <span>{inc.location}</span>
                        </div>

                        <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.4, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {inc.description}
                        </p>
                      </div>

                      <div style={{
                        marginTop: '14px',
                        paddingTop: '10px',
                        borderTop: '1px solid #f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '11px',
                        color: '#64748b'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={12} /> {inc.time}
                        </span>
                        <span style={{ fontWeight: 700, color: '#2563eb' }}>
                          Inspect Intel →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>

          {/* COLUMN 3: RIGHT - CRITICAL ALERTS */}
          <aside className="command-alerts-column" style={{
            backgroundColor: '#0a0f1d',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '18px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            height: 'fit-content'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <AlertTriangle size={16} color="#ef4444" />
                </div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Critical Alerts
                  </h3>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>CAP Protocol Multi-Cast</div>
                </div>
              </div>

              <span style={{
                fontSize: '10px',
                fontWeight: 800,
                color: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                padding: '2px 8px',
                borderRadius: '9999px',
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                LIVE STREAM
              </span>
            </div>

            {/* Alerts list (White Light Dashboard Cards on Navy) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {alerts.map(a => {
                const isAck = acknowledgedAlerts[a.id] || a.acknowledged;
                return (
                  <div
                    key={a.id}
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      borderRadius: '12px',
                      padding: '14px',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                      border: a.severity === 'CRITICAL' ? '1px solid #fecaca' : '1px solid #fed7aa'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <SeverityBadge severity={a.severity} />
                      <span style={{ fontSize: '11px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={11} /> {a.time}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                      {a.title}
                    </h4>

                    <div style={{ fontSize: '11px', color: '#475569', marginBottom: '4px' }}>
                      📍 <strong>Zone:</strong> {a.area}
                    </div>

                    <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '10px' }}>
                      🏛️ <strong>Issuing Agency:</strong> {a.agency}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {isAck ? (
                        <div style={{
                          flex: 1,
                          fontSize: '11px',
                          fontWeight: 700,
                          color: '#059669',
                          backgroundColor: '#ecfdf5',
                          borderRadius: '6px',
                          padding: '6px',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px'
                        }}>
                          <CheckCircle2 size={13} />
                          Acknowledged & Dispatched
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAcknowledge(a.id)}
                          style={{
                            flex: 1,
                            backgroundColor: a.severity === 'CRITICAL' ? '#ef4444' : '#f97316',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '7px 10px',
                            fontSize: '11px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px'
                          }}
                        >
                          <Send size={12} />
                          Acknowledge & Dispatch
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Broadcast Siren CTA */}
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '10px',
              padding: '12px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#fca5a5', marginBottom: '6px' }}>
                MULTI-CHANNEL BROADCAST READY
              </div>
              <p style={{ fontSize: '11px', color: '#cbd5e1', margin: '0 0 10px 0', lineHeight: 1.4 }}>
                Directly push Common Alerting Protocol (CAP) messages to citizen mobiles, coastal sirens, and NDRF terminals.
              </p>
              <button
                onClick={() => { setCurrentView('alerts'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{
                  width: '100%',
                  backgroundColor: '#0d1322',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '7px',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Open Alert Broadcast Suite →
              </button>
            </div>
          </aside>
        </div>

        {/* Selected Incident Drawer */}
        <IncidentDetailDrawer />
      </div>
    </div>
  );
}
