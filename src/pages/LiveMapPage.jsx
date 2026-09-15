import React from 'react';
import { Activity, ShieldAlert, Layers, MapPin, Filter, Search } from 'lucide-react';
import DisasterMap from '../components/DisasterMap';
import IncidentDetailDrawer from '../components/IncidentDetailDrawer';
import { useDisaster } from '../context/DisasterContext';

export default function LiveMapPage({ setCurrentView }) {
  const { filteredIncidents, incidents, setSelectedIncident, simulationNotice } = useDisaster();

  return (
    <div style={{ backgroundColor: '#080c14', minHeight: 'calc(100vh - 120px)', padding: '24px', color: '#f8fafc' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* Top Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={18} color="#ffffff" />
              </div>
              <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                Live Disaster Situation Map
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
              Interactive pan-India disaster surveillance map with live multi-hazard positioning and radar sweep
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => { setCurrentView('dashboard'); }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#f8fafc',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              ← Back to Command Center
            </button>
          </div>
        </div>

        {/* Tactical Map Container */}
        <div style={{
          backgroundColor: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '12px',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
          marginBottom: '24px'
        }}>
          <DisasterMap height="640px" showControls={true} />
        </div>

        {/* Quick Select Grid of All Hazards (White Light Dashboard Cards on Navy) */}
        <div>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Active Geospatial Incident Catalog ({filteredIncidents.length})
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px'
          }}>
            {filteredIncidents.map(inc => (
              <div
                key={inc.id}
                onClick={() => setSelectedIncident(inc)}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748b' }}>{inc.id} • {inc.type}</span>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: inc.severity === 'CRITICAL' ? '#fef2f2' : inc.severity === 'HIGH' ? '#fff7ed' : '#fefce8',
                    color: inc.severity === 'CRITICAL' ? '#b91c1c' : inc.severity === 'HIGH' ? '#c2410c' : '#a16207'
                  }}>
                    {inc.severity}
                  </span>
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
                  {inc.title}
                </h4>
                <div style={{ fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} color="#ef4444" />
                  <span>{inc.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Incident Drawer */}
        <IncidentDetailDrawer />
      </div>
    </div>
  );
}
