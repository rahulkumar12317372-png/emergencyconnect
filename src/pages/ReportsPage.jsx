import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Share2, 
  Filter, 
  X,
  Send,
  Upload,
  Sparkles
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';
import SeverityBadge from '../components/SeverityBadge';

export default function ReportsPage() {
  const { 
    reports, 
    addReport, 
    toggleReportStatus, 
    activeReportsCount, 
    verifiedReportsCount, 
    simulationNotice,
    playAlertChime 
  } = useDisaster();

  const [filterStatus, setFilterStatus] = useState('ALL');
  const [modalOpen, setModalOpen] = useState(false);

  // New report form state
  const [formData, setFormData] = useState({
    author: '',
    source: 'Citizen Mobile App',
    location: '',
    disasterType: 'Flood',
    severity: 'HIGH',
    text: '',
    hasMedia: true
  });

  const filteredReports = reports.filter(r => {
    if (filterStatus === 'ALL') return true;
    return r.status.toUpperCase() === filterStatus.toUpperCase();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.location || !formData.text) return;

    addReport({
      author: formData.author || 'Anonymous Citizen',
      source: formData.source,
      location: formData.location,
      disasterType: formData.disasterType,
      severity: formData.severity,
      text: formData.text,
      hasMedia: formData.hasMedia,
      status: 'Verified',
      confidence: 92
    });

    playAlertChime();
    setModalOpen(false);
    setFormData({
      author: '',
      source: 'Citizen Mobile App',
      location: '',
      disasterType: 'Flood',
      severity: 'HIGH',
      text: '',
      hasMedia: true
    });
  };

  return (
    <div style={{ backgroundColor: '#080c14', minHeight: 'calc(100vh - 120px)', padding: '32px 24px', color: '#f8fafc' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '28px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FileText size={18} color="#ffffff" />
              </div>
              <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                Citizen & Field Reports Intake
              </h1>
              <span style={{
                backgroundColor: 'rgba(234, 179, 8, 0.15)',
                color: '#facc15',
                border: '1px solid rgba(234, 179, 8, 0.3)',
                fontSize: '11px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '4px'
              }}>
                {simulationNotice}
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>
              Crowdsourced eyewitness reports, IoT sensor pings, and emergency call logs triaged through AI duplicate detection
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '13px',
              padding: '10px 20px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(239, 68, 68, 0.4)'
            }}
          >
            <Plus size={16} />
            Submit Disaster Report
          </button>
        </div>

        {/* Stats Row (White Light Dashboard Cards on Navy) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginBottom: '28px'
        }}>
          <div style={{ backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '12px', padding: '16px 20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Total Ingested</div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#0f172a' }}>{activeReportsCount}</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>Across 6 ingestion channels</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '12px', padding: '16px 20px', border: '1px solid #a7f3d0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>AI Verified</div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#059669' }}>{verifiedReportsCount}</div>
            <div style={{ fontSize: '11px', color: '#059669' }}>Triangulated & cross-checked</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '12px', padding: '16px 20px', border: '1px solid #fed7aa', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#c2410c', textTransform: 'uppercase' }}>Under Cross-Check</div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#ea580c' }}>42</div>
            <div style={{ fontSize: '11px', color: '#ea580c' }}>Awaiting sensor confirmation</div>
          </div>
          <div style={{ backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '12px', padding: '16px 20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Duplicates Blocked</div>
            <div style={{ fontSize: '26px', fontWeight: 900, color: '#7c3aed' }}>189</div>
            <div style={{ fontSize: '11px', color: '#64748b' }}>Spam & repetitive rumors suppressed</div>
          </div>
        </div>

        {/* Filter Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '20px',
          backgroundColor: '#0d1322',
          padding: '8px 12px',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          width: 'fit-content'
        }}>
          <Filter size={14} color="#94a3b8" />
          <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Filter by Status:</span>
          {['ALL', 'VERIFIED', 'CROSS-CHECKING', 'UNVERIFIED'].map(st => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              style={{
                backgroundColor: filterStatus === st ? '#2563eb' : 'transparent',
                color: filterStatus === st ? '#ffffff' : '#94a3b8',
                border: 'none',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Reports Feed Grid (White Light Dashboard Cards on Navy) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '16px'
        }}>
          {filteredReports.map(rep => (
            <div
              key={rep.id}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                borderRadius: '14px',
                padding: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#64748b' }}>
                    {rep.id} • {rep.disasterType}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <SeverityBadge severity={rep.severity} />
                    <button
                      onClick={() => toggleReportStatus(rep.id)}
                      title="Click to toggle verification status"
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        backgroundColor: rep.status === 'Verified' ? '#ecfdf5' : '#fff7ed',
                        color: rep.status === 'Verified' ? '#059669' : '#c2410c',
                        border: `1px solid ${rep.status === 'Verified' ? '#a7f3d0' : '#fed7aa'}`,
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <ShieldCheck size={12} />
                      {rep.status}
                    </button>
                  </div>
                </div>

                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} color="#ef4444" />
                  {rep.location}
                </div>

                <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '10px' }}>
                  <strong>Source:</strong> {rep.source} ({rep.author}) • Confidence: <strong style={{ color: '#059669' }}>{rep.confidence}%</strong>
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#334155',
                  lineHeight: 1.5,
                  margin: '0 0 14px 0',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px'
                }}>
                  "{rep.text}"
                </p>
              </div>

              <div style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: '#64748b'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> {rep.timestamp}
                </span>
                {rep.hasMedia && (
                  <span style={{ color: '#2563eb', fontWeight: 600 }}>
                    📷 Photo Evidence Attached
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Submit Disaster Report */}
        {modalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 3000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              color: '#0f172a',
              borderRadius: '16px',
              maxWidth: '520px',
              width: '100%',
              padding: '28px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                  Submit Citizen / Field Disaster Report
                </h3>
                <button
                  onClick={() => setModalOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Reporter Name / Identifier
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="e.g. Ramesh Chandra (Field Volunteer)"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      Disaster Hazard Type
                    </label>
                    <select
                      value={formData.disasterType}
                      onChange={(e) => setFormData({ ...formData, disasterType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    >
                      <option value="Flood">Flood</option>
                      <option value="Fire">Fire</option>
                      <option value="Cyclone">Cyclone</option>
                      <option value="Earthquake">Earthquake</option>
                      <option value="Landslide">Landslide</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                      Severity Level
                    </label>
                    <select
                      value={formData.severity}
                      onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    >
                      <option value="CRITICAL">Critical (Immediate danger to life)</option>
                      <option value="HIGH">High (Major property/structural threat)</option>
                      <option value="MODERATE">Moderate (Partial disruption)</option>
                      <option value="LOW">Low (Observation)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Precise Location / Landmark
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Near Majuli Ghat, Chapor Village, Assam"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '4px' }}>
                    Situational Observations & Trapped Persons Count
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    placeholder="Describe what is happening on the ground, flood level, blocked roads, or required supplies..."
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13px',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <div style={{
                  padding: '10px 12px',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#1e40af',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Sparkles size={16} />
                  ResQNova AI will automatically cross-check against Doppler & Sensor telemetry upon submission.
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#ef4444',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Send size={14} />
                    Submit to AI Triage
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
