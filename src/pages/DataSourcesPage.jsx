import React, { useState } from 'react';
import { 
  Database, 
  ShieldCheck, 
  CloudRain, 
  Radio, 
  Share2, 
  Cpu, 
  Users, 
  CheckCircle2, 
  Activity, 
  Zap, 
  Clock, 
  Code,
  ArrowRight
} from 'lucide-react';
import { useDisaster } from '../context/DisasterContext';

export default function DataSourcesPage() {
  const { dataSources, simulationNotice } = useDisaster();
  const [selectedSource, setSelectedSource] = useState(dataSources[0]);

  const sourceSamplePackets = {
    'src-1': {
      protocol: 'CAP-v1.2 XML / JSON Payload',
      endpoint: 'https://ndma.gov.in/api/cap/v1/feed.json',
      sample: {
        identifier: 'NDMA-CAP-2026-AS-091',
        sender: 'ndma-operations@nic.in',
        sent: '2026-09-15T06:12:00+05:30',
        status: 'Actual',
        msgType: 'Alert',
        scope: 'Public',
        info: {
          category: 'Met',
          event: 'Flash Flood Watch',
          urgency: 'Immediate',
          severity: 'Severe',
          certainty: 'Observed',
          headline: 'Severe Inundation Risk for Majuli & Lower Assam',
          area: { areaDesc: 'Brahmaputra Sub-basin', circle: '26.95,94.21,45.0' }
        }
      }
    },
    'src-2': {
      protocol: 'NetCDF4 / GeoTIFF Gridded Telemetry',
      endpoint: 'https://mosdac.gov.in/insat3dr/precipitation.h5',
      sample: {
        satellite: 'INSAT-3DR',
        sensor: 'Imager + Sounder',
        scan_time: '2026-09-15T06:15:00Z',
        grid_resolution: '4km x 4km',
        rain_rate_max: '88.4 mm/hr',
        cloud_top_temp: '-78.2 degC (Deep Convection)',
        cyclone_vortex: {
          central_pressure: '984 hPa',
          estimated_max_sustained_winds: '65 knots (Severe Cyclone)'
        }
      }
    },
    'src-3': {
      protocol: 'RSS 2.0 / NLP News Stream API',
      endpoint: 'https://emergency-wires.gov.in/rss/disaster-news.xml',
      sample: {
        feed: 'Press Trust of India Disaster Bureau',
        pubDate: 'Tue, 15 Sep 2026 05:45:00 GMT',
        title: 'Assam CM conducts aerial survey of inundated Majuli river island',
        content: 'Relief distribution begun across 18 designated flood shelters. NDRF boats stationed at Kamalabari.',
        entities_extracted: ['Assam', 'Majuli', 'Brahmaputra', 'NDRF', '18 shelters']
      }
    },
    'src-4': {
      protocol: 'Webhook / Geotagged Streaming API',
      endpoint: 'wss://social-stream.resqnova.org/geo-disaster',
      sample: {
        platform: 'X / Geotagged Microblog',
        tweet_id: '183529104810293847',
        user_verification: 'Aadhaar Verified Citizen',
        text: 'Water entered primary school building in Majuli, 40 kids stranded on roof #AssamFloods #Help',
        geo: { lat: 26.9535, lng: 94.2173 },
        ai_triage: {
          sentiment: 'High Distress',
          duplicate_cluster_id: 'CLUSTER-MAJULI-FLOOD-01',
          bot_score: 0.02
        }
      }
    },
    'src-5': {
      protocol: 'MQTT / LoRaWAN IoT Telemetry',
      endpoint: 'mqtts://iot-mesh.cwc.gov.in:8883/gauges/telemetry',
      sample: {
        sensor_id: 'CWC-GAUGE-DHUBRI-04',
        measurement: 'water_surface_elevation',
        stage_meters: 29.84,
        danger_threshold_meters: 28.00,
        flow_velocity_m_s: 3.4,
        battery_volts: 12.8,
        firmware: 'CWC-IoT-v4.1',
        heartbeat_latency: '42ms'
      }
    },
    'src-6': {
      protocol: 'TLS 1.3 REST Citizen Submission',
      endpoint: 'https://api.resqnova.gov.in/v1/citizen-reports',
      sample: {
        report_uuid: 'REP-881',
        channel: 'WhatsApp Emergency Bot + Web App',
        gps_accuracy: '4.8 meters',
        timestamp: '2026-09-15T06:22:15+05:30',
        media_hash: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        cross_source_verified: true
      }
    }
  };

  const icons = {
    'src-1': ShieldCheck,
    'src-2': CloudRain,
    'src-3': Radio,
    'src-4': Share2,
    'src-5': Cpu,
    'src-6': Users
  };

  return (
    <div style={{ backgroundColor: '#080c14', minHeight: 'calc(100vh - 120px)', padding: '32px 24px', color: '#f8fafc' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Database size={18} color="#ffffff" />
            </div>
            <h1 style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', margin: 0 }}>
              6-Source Multi-Modal Ingestion Grid
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
            Telemetry feed health, ingestion protocols, throughput rates, and real-time schema packet inspector
          </p>
        </div>

        {/* 6 Source Selector Cards (White Light Cards on Navy) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          {dataSources.map(src => {
            const Icon = icons[src.id] || Database;
            const isSelected = selectedSource.id === src.id;

            return (
              <div
                key={src.id}
                onClick={() => setSelectedSource(src)}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '14px',
                  padding: '20px',
                  border: isSelected ? '2px solid #2563eb' : '1px solid #e2e8f0',
                  boxShadow: isSelected ? '0 8px 30px rgba(37, 99, 235, 0.25)' : '0 4px 14px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={20} color="#2563eb" />
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    {src.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0' }}>
                  {src.name}
                </h3>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb', marginBottom: '8px' }}>
                  {src.agency}
                </div>
                <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {src.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#64748b',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '10px'
                }}>
                  <span>Reliability: <strong style={{ color: '#0f172a' }}>{src.reliability}</strong></span>
                  <span>Latency: <strong style={{ color: '#0f172a' }}>{src.latency}</strong></span>
                  <span style={{ fontWeight: 700, color: '#2563eb' }}>Inspect →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Packet Inspector */}
        <div style={{
          backgroundColor: '#0d1322',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Code size={20} color="#38bdf8" />
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                  Live Data Ingestion Packet: {selectedSource.name}
                </h3>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  Protocol: <strong style={{ color: '#cbd5e1' }}>{sourceSamplePackets[selectedSource.id]?.protocol}</strong>
                </div>
              </div>
            </div>

            <div style={{ fontSize: '11px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              Stream Synchronized (Simulated Feed)
            </div>
          </div>

          <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
            ENDPOINT: {sourceSamplePackets[selectedSource.id]?.endpoint}
          </div>

          <pre style={{
            backgroundColor: '#080c14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '20px',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            color: '#38bdf8',
            lineHeight: 1.6,
            overflowX: 'auto'
          }}>
            {JSON.stringify(sourceSamplePackets[selectedSource.id]?.sample, null, 2)}
          </pre>
        </div>

      </div>
    </div>
  );
}
