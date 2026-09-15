import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Users, 
  Radio, 
  CheckCircle2, 
  AlertTriangle, 
  Send, 
  Home, 
  Filter, 
  Share2, 
  FileText 
} from 'lucide-react';
import SeverityBadge from './SeverityBadge';
import { useDisaster } from '../context/DisasterContext';

export default function IncidentDetailDrawer() {
  const { selectedIncident, setSelectedIncident, playAlertChime } = useDisaster();
  const [dispatchStatus, setDispatchStatus] = useState(null);

  if (!selectedIncident) return null;

  const handleDispatch = () => {
    setDispatchStatus('DISPATCHED');
    playAlertChime();
    setTimeout(() => {
      setDispatchStatus('CONFIRMED');
    }, 1500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: '460px',
      backgroundColor: '#ffffff',
      color: '#0f172a',
      zIndex: 2000,
      boxShadow: '-10px 0 35px rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid #cbd5e1',
      animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '12px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '11px', 
              fontWeight: 800, 
              color: '#64748b',
              backgroundColor: '#e2e8f0',
              padding: '2px 6px',
              borderRadius: '4px'
            }}>
              {selectedIncident.id}
            </span>
            <SeverityBadge severity={selectedIncident.severity} priority={selectedIncident.priority} />
            <span style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#059669',
              backgroundColor: '#ecfdf5',
              padding: '2px 8px',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <ShieldCheck size={13} />
              {selectedIncident.verificationStatus || 'Verified'}
            </span>
          </div>

          <h3 style={{
            fontSize: '17px',
            fontWeight: 800,
            lineHeight: 1.3,
            color: '#0f172a',
            margin: 0
          }}>
            {selectedIncident.title}
          </h3>
        </div>

        <button
          onClick={() => setSelectedIncident(null)}
          style={{
            padding: '6px',
            borderRadius: '8px',
            backgroundColor: '#e2e8f0',
            border: 'none',
            color: '#475569',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Close details"
        >
          <X size={18} />
        </button>
      </div>

      {/* Body Content */}
      <div style={{ padding: '20px 24px', overflowY: 'auto', flex: 1 }}>
        {/* Geolocation & Source */}
        <div style={{
          backgroundColor: '#f1f5f9',
          borderRadius: '12px',
          padding: '14px 16px',
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>
            <MapPin size={16} color="#ef4444" />
            <span>{selectedIncident.location}</span>
          </div>
          {selectedIncident.coordinates && (
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b', paddingLeft: '24px' }}>
              GPS: {selectedIncident.coordinates[0].toFixed(4)}° N, {selectedIncident.coordinates[1].toFixed(4)}° E
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569', paddingLeft: '24px' }}>
            <Clock size={13} />
            <span>Reported {selectedIncident.time}</span>
          </div>
        </div>

        {/* Intelligence Statistics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '12px'
          }}>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
              Impacted Population
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Users size={16} color="#2563eb" />
              {selectedIncident.affectedPeople || '3,400+'}
            </div>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '12px'
          }}>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
              Relief Camps
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Home size={16} color="#059669" />
              {selectedIncident.shelters || 6} Active
            </div>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '12px'
          }}>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
              Assigned Teams
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
              {selectedIncident.responseTeam || 'NDRF Unit'}
            </div>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '12px'
          }}>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
              Duplicates Filtered
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#7c3aed', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Filter size={16} />
              {selectedIncident.duplicatesBlocked || 24} reports
            </div>
          </div>
        </div>

        {/* AI Situational Brief */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#475569',
            marginBottom: '8px'
          }}>
            AI Synthesized Incident Brief
          </h4>
          <p style={{
            fontSize: '13px',
            lineHeight: 1.6,
            color: '#334155',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '10px',
            padding: '14px'
          }}>
            {selectedIncident.description}
          </p>
        </div>

        {/* Action Recommendation */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            color: '#475569',
            marginBottom: '8px'
          }}>
            Recommended Tactical Action
          </h4>
          <div style={{
            backgroundColor: '#fff7ed',
            border: '1px solid #fed7aa',
            borderRadius: '10px',
            padding: '14px',
            fontSize: '13px',
            color: '#9a3412',
            lineHeight: 1.5,
            fontWeight: 500
          }}>
            {selectedIncident.actionPlan || 'Dispatch emergency aerial survey, activate municipal transit diversions.'}
          </div>
        </div>

        {/* Source Attribution */}
        <div style={{
          fontSize: '12px',
          color: '#64748b',
          borderTop: '1px solid #e2e8f0',
          paddingTop: '12px',
          marginBottom: '16px'
        }}>
          <strong>Verified Feeds:</strong> {selectedIncident.source}
        </div>
      </div>

      {/* Footer Actions */}
      <div style={{
        padding: '16px 24px',
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {dispatchStatus === 'CONFIRMED' ? (
          <div style={{
            backgroundColor: '#ecfdf5',
            color: '#065f46',
            border: '1px solid #a7f3d0',
            borderRadius: '8px',
            padding: '10px',
            fontSize: '13px',
            fontWeight: 700,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <CheckCircle2 size={16} />
            Tactical Units Dispatched to Coordinates
          </div>
        ) : (
          <button
            onClick={handleDispatch}
            style={{
              backgroundColor: '#ef4444',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '13px',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.35)'
            }}
          >
            <Send size={15} />
            {dispatchStatus === 'DISPATCHED' ? 'Notifying Response Battalions...' : 'Authorize Tactical Deployment'}
          </button>
        )}

        <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
          SIH Prototype Demo Mode • Simulated Tactical Dispatch
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
