import React, { useState } from 'react';
import { 
  Bell, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  Radio, 
  Smartphone, 
  MessageSquare, 
  Volume2, 
  Clock, 
  ShieldCheck,
  Share2
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';
import SeverityBadge from '../components/SeverityBadge';

export default function AlertsPage() {
  const { alerts, acknowledgeAlert, playAlertChime, simulationNotice } = useDisaster();

  const [broadcastTarget, setBroadcastTarget] = useState('ALL_CHANNELS');
  const [broadcastTitle, setBroadcastTitle] = useState('URGENT FLOOD EVACUATION: Majuli Sector 3');
  const [broadcastMessage, setBroadcastMessage] = useState('Water levels rising dangerously above danger mark. Immediate evacuation to Kamalabari Relief Camp ordered by District Magistrate.');
  const [broadcastSent, setBroadcastSent] = useState(false);

  const handleBroadcast = (e) => {
    e.preventDefault();
    setBroadcastSent(true);
    playAlertChime();
    setTimeout(() => {
      setBroadcastSent(false);
    }, 4000);
  };

  return (
    <div style={{ backgroundColor: '#080c14', minHeight: 'calc(100vh - 120px)', padding: '32px 24px', color: '#f8fafc' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={18} color="#ffffff" />
            </div>
            <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', margin: 0 }}>
              Multi-Channel Emergency Alert Engine
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
            Common Alerting Protocol (CAP v1.2) compliant mass broadcast system pushing alerts via Cell Broadcast, WhatsApp, Coastal Sirens, and Police VHF
          </p>
        </div>

        {/* 2-Column Grid: Broadcast Form on Left, Active Stream on Right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '24px' }}>
          
          {/* Left: Broadcast Terminal (White Light Card on Navy) */}
          <div style={{
            backgroundColor: '#ffffff',
            color: '#0f172a',
            borderRadius: '16px',
            padding: '28px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
            height: 'fit-content'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Radio size={18} color="#dc2626" />
              <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#0f172a' }}>
                Initiate Emergency Public Broadcast
              </h3>
            </div>

            <form onSubmit={handleBroadcast} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                  Target Delivery Mesh
                </label>
                <select
                  value={broadcastTarget}
                  onChange={(e) => setBroadcastTarget(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    outline: 'none',
                    fontWeight: 600
                  }}
                >
                  <option value="ALL_CHANNELS">⚡ All Channels (Cell Broadcast + Siren Mesh + SMS)</option>
                  <option value="CELL_BROADCAST">📱 Cell Broadcast (Zero-lag GSM Geofence)</option>
                  <option value="WHATSAPP">💬 Citizen WhatsApp SOS Broadcast</option>
                  <option value="SIREN_MESH">🚨 Coastal / Riverside Acoustic Sirens</option>
                  <option value="POLICE_VHF">📻 Police & Disaster VHF Radio Repeaters</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                  Headline / Alert Banner
                </label>
                <input
                  type="text"
                  required
                  value={broadcastTitle}
                  onChange={(e) => setBroadcastTitle(e.target.value)}
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
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                  CAP Advisory Message (Plain Text & SMS Friendly)
                </label>
                <textarea
                  rows={4}
                  required
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
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

              {broadcastSent && (
                <div style={{
                  backgroundColor: '#ecfdf5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '13px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={16} />
                  Simulated Broadcast Pushed to 42,000 Terminals via CAP Protocol v1.2
                </div>
              )}

              <button
                type="submit"
                style={{
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(220, 38, 38, 0.4)'
                }}
              >
                <Send size={16} />
                Transmit CAP Emergency Broadcast
              </button>

              <div style={{ fontSize: '11px', color: '#64748b', textAlign: 'center' }}>
                Simulated Transmission • Complies with ITU-T X.1303 Common Alerting Protocol
              </div>
            </form>
          </div>

          {/* Right: Active Alerts Log (White Light Cards on Navy) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                Live Dispatched Alerts Stream ({alerts.length})
              </h3>
              <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 600 }}>● Network Active</span>
            </div>

            {alerts.map(a => (
              <div
                key={a.id}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '14px',
                  padding: '20px',
                  border: a.severity === 'CRITICAL' ? '1px solid #fecaca' : '1px solid #fed7aa',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <SeverityBadge severity={a.severity} />
                  <span style={{ fontSize: '11px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {a.time}
                  </span>
                </div>

                <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                  {a.title}
                </h4>

                <div style={{ fontSize: '12px', color: '#334155', marginBottom: '4px' }}>
                  <strong>Target Zone:</strong> {a.area}
                </div>
                <div style={{ fontSize: '12px', color: '#475569', marginBottom: '8px' }}>
                  <strong>Originating Agency:</strong> {a.agency}
                </div>

                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '11px',
                  color: '#2563eb',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Radio size={13} />
                  Mesh Channel: {a.channel}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
