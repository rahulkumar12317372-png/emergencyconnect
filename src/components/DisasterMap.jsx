import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  Waves, 
  Flame, 
  Wind, 
  Activity, 
  Mountain, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  ShieldAlert,
  Radio,
  Eye
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';

// Helper to create distinctive SVG Leaflet DivIcons
function createDisasterIcon(incident) {
  const { type, severity } = incident;
  let bg = '#0284c7';
  let iconEmoji = '🌊';

  if (type === 'Fire') {
    bg = '#ea580c';
    iconEmoji = '🔥';
  } else if (type === 'Cyclone') {
    bg = '#7c3aed';
    iconEmoji = '🌀';
  } else if (type === 'Earthquake') {
    bg = '#d97706';
    iconEmoji = '⚡';
  } else if (type === 'Landslide') {
    bg = '#059669';
    iconEmoji = '⛰️';
  }

  const isCritical = severity === 'CRITICAL';
  const pulseHtml = isCritical ? `
    <div style="
      position: absolute;
      top: -6px;
      left: -6px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 2px solid #ef4444;
      animation: critical-pulse 1.8s infinite;
      pointer-events: none;
    "></div>
  ` : '';

  return L.divIcon({
    className: 'custom-disaster-marker',
    html: `
      <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">
        ${pulseHtml}
        <div style="
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${bg};
          border: 2px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          transition: transform 0.2s;
        ">
          ${iconEmoji}
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -18]
  });
}

export default function DisasterMap({ height = '480px', showControls = true }) {
  const { 
    filteredIncidents, 
    selectedIncident, 
    setSelectedIncident,
    filterType,
    setFilterType,
    filterSeverity,
    setFilterSeverity,
    incidents
  } = useDisaster();

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const radarCircleRef = useRef(null);

  const [mapLayer, setMapLayer] = useState('DARK'); // 'DARK' | 'SATELLITE' | 'STREETS'
  const [showRadar, setShowRadar] = useState(true);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [22.8, 80.5], // Center of India
        zoom: 5,
        zoomControl: false,
        attributionControl: false
      });

      // Default Dark Carto tiles for tactical command look
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        subdomains: 'abcd'
      }).addTo(map);

      markersGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    return () => {
      // Cleanup on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Tile Layer
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const map = mapInstanceRef.current;

    // Remove existing tile layers
    map.eachLayer(layer => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    let tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
    if (mapLayer === 'SATELLITE') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    } else if (mapLayer === 'STREETS') {
      tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    }

    L.tileLayer(tileUrl, { maxZoom: 18, subdomains: 'abcd' }).addTo(map);
  }, [mapLayer]);

  // Render Incident Markers on Map
  useEffect(() => {
    if (!mapInstanceRef.current || !markersGroupRef.current) return;
    const markersGroup = markersGroupRef.current;
    markersGroup.clearLayers();

    filteredIncidents.forEach(inc => {
      if (!inc.coordinates || inc.coordinates.length < 2) return;
      const marker = L.marker(inc.coordinates, {
        icon: createDisasterIcon(inc),
        title: inc.title
      });

      const popupHtml = `
        <div style="font-family: var(--font-sans); min-width: 220px; padding: 4px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
            <span style="font-size: 10px; font-weight: 800; color: #64748b; font-family: var(--font-mono);">${inc.id}</span>
            <span style="font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; background: ${inc.severity === 'CRITICAL' ? '#fef2f2; color: #b91c1c;' : '#fff7ed; color: #c2410c;'}">
              ${inc.severity}
            </span>
          </div>
          <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin: 0 0 4px 0; line-height: 1.3;">
            ${inc.title}
          </h4>
          <p style="font-size: 11px; color: #475569; margin: 0 0 6px 0;">📍 ${inc.location}</p>
          <div style="display: flex; align-items: center; justify-content: space-between; font-size: 10px; color: #64748b; margin-bottom: 8px;">
            <span>👥 ${inc.affectedPeople || 'Unknown'}</span>
            <span>⏱️ ${inc.time}</span>
          </div>
          <button id="view-incident-btn-${inc.id}" style="
            width: 100%;
            background: #2563eb;
            color: #ffffff;
            font-size: 11px;
            font-weight: 600;
            padding: 6px 10px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
          ">
            Open Full Incident Intel →
          </button>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`view-incident-btn-${inc.id}`);
        if (btn) {
          btn.onclick = () => {
            setSelectedIncident(inc);
            marker.closePopup();
          };
        }
      });

      marker.on('click', () => {
        setSelectedIncident(inc);
      });

      markersGroup.addLayer(marker);

      // Radar pulse zone around critical items
      if (showRadar && inc.severity === 'CRITICAL') {
        const circle = L.circle(inc.coordinates, {
          radius: 45000,
          color: '#ef4444',
          fillColor: '#ef4444',
          fillOpacity: 0.08,
          weight: 1,
          dashArray: '4, 8'
        });
        markersGroup.addLayer(circle);
      }
    });
  }, [filteredIncidents, showRadar, setSelectedIncident]);

  // Center map on selected incident if changed
  useEffect(() => {
    if (selectedIncident && selectedIncident.coordinates && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(selectedIncident.coordinates, 8, {
        duration: 1.2
      });
    }
  }, [selectedIncident]);

  const resetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([22.8, 80.5], 5, { duration: 1 });
    }
  };

  const disasterTypes = ['ALL', 'Flood', 'Fire', 'Cyclone', 'Earthquake', 'Landslide'];
  const severities = ['ALL', 'CRITICAL', 'HIGH', 'MODERATE'];

  return (
    <div style={{ position: 'relative', width: '100%', height, borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      {/* Top Floating Filter Bar */}
      {showControls && (
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          zIndex: 500,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          flexWrap: 'wrap',
          pointerEvents: 'none'
        }}>
          {/* Disaster Type Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'rgba(10, 15, 26, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '4px 6px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            pointerEvents: 'auto'
          }}>
            {disasterTypes.map(t => {
              const isActive = filterType === t;
              const count = t === 'ALL' 
                ? incidents.length 
                : incidents.filter(i => i.type.toUpperCase() === t.toUpperCase()).length;
              return (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: isActive ? '#2563eb' : 'transparent',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    transition: 'all 0.15s'
                  }}
                >
                  {t} <span style={{ opacity: 0.7, fontSize: '10px' }}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Severity & Layer Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'rgba(10, 15, 26, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '4px 8px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            pointerEvents: 'auto'
          }}>
            <select
              value={filterSeverity}
              onChange={(e) => setFilterSeverity(e.target.value)}
              style={{
                backgroundColor: '#1e293b',
                color: '#f8fafc',
                border: '1px solid #334155',
                borderRadius: '6px',
                padding: '4px 8px',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              <option value="ALL">Severity: All</option>
              <option value="CRITICAL">🔴 Critical Only</option>
              <option value="HIGH">🟠 High Only</option>
              <option value="MODERATE">🟡 Moderate Only</option>
            </select>

            <button
              onClick={() => setMapLayer(prev => prev === 'DARK' ? 'SATELLITE' : prev === 'SATELLITE' ? 'STREETS' : 'DARK')}
              title={`Toggle map base: ${mapLayer}`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer'
              }}
            >
              <Layers size={13} />
              <span>{mapLayer}</span>
            </button>
          </div>
        </div>
      )}

      {/* Map DOM Container */}
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />

      {/* Bottom Floating Map Action Tools */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        zIndex: 500,
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <button
          onClick={() => mapInstanceRef.current && mapInstanceRef.current.zoomIn()}
          title="Zoom in"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: '#0a0f1d',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
          }}
        >
          <ZoomIn size={16} />
        </button>
        <button
          onClick={() => mapInstanceRef.current && mapInstanceRef.current.zoomOut()}
          title="Zoom out"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: '#0a0f1d',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
          }}
        >
          <ZoomOut size={16} />
        </button>
        <button
          onClick={resetView}
          title="Reset national overview"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            backgroundColor: '#0a0f1d',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#38bdf8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
          }}
        >
          <RotateCcw size={15} />
        </button>
      </div>

      {/* Bottom Left Legend */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        zIndex: 500,
        backgroundColor: 'rgba(8, 12, 20, 0.88)',
        backdropFilter: 'blur(8px)',
        padding: '6px 12px',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontSize: '11px',
        color: '#94a3b8'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          Critical ({incidents.filter(i => i.severity === 'CRITICAL').length})
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f97316' }} />
          High ({incidents.filter(i => i.severity === 'HIGH').length})
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }} />
          Moderate ({incidents.filter(i => i.severity === 'MODERATE').length})
        </span>
      </div>
    </div>
  );
}
