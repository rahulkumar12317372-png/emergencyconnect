import React, { createContext, useContext, useState, useEffect } from 'react';

const DisasterContext = createContext();

export const INITIAL_INCIDENTS = [
  {
    id: 'INC-2026-001',
    type: 'Flood',
    title: 'Brahmaputra River Overflows Embankment',
    location: 'Majuli & Dhubri, Assam',
    coordinates: [26.9535, 94.2173],
    severity: 'CRITICAL',
    priority: 'URGENT',
    status: 'NDRF Deployed',
    time: '8 mins ago',
    timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
    verificationStatus: 'Verified',
    source: 'CWC Water Gauge + Sentinel-1 Radar',
    affectedPeople: '54,000 residents',
    responseTeam: 'NDRF 1st Bn (Patgaon) & SDRF Assam',
    description: 'Heavy rainfall in upper catchment caused water level to surge 2.1m above danger mark. 6 villages inundated.',
    actionPlan: 'Air-drop food packets, deploy inflatable motorized boats to Chapor relief zone.',
    shelters: 18,
    duplicatesBlocked: 41
  },
  {
    id: 'INC-2026-002',
    type: 'Landslide',
    title: 'Debris Flow on Ghat Road Sector 4',
    location: 'Chooralmala & Meppadi, Wayanad, Kerala',
    coordinates: [11.5367, 76.1328],
    severity: 'CRITICAL',
    priority: 'URGENT',
    status: 'Search & Rescue Active',
    time: '19 mins ago',
    timestamp: new Date(Date.now() - 19 * 60 * 1000).toISOString(),
    verificationStatus: 'Verified',
    source: 'Citizen SOS + District Collectorate Drone',
    affectedPeople: '1,200 residents cut off',
    responseTeam: 'Indian Army Madras Regiment & NDRF 4th Bn',
    description: 'Hillside collapse blocked vehicular access. Bridge washed away, ground teams traversing via foot-patrol ropes.',
    actionPlan: 'Establish bailey bridge, thermal drone sweep for trapped survivors in estate quarters.',
    shelters: 8,
    duplicatesBlocked: 67
  },
  {
    id: 'INC-2026-003',
    type: 'Cyclone',
    title: 'Severe Cyclonic Storm Coastfall Warning',
    location: 'Paradip & Dhamra, Odisha Coast',
    coordinates: [20.3166, 86.6114],
    severity: 'HIGH',
    priority: 'HIGH',
    status: 'Pre-emptive Evacuation',
    time: '34 mins ago',
    timestamp: new Date(Date.now() - 34 * 60 * 1000).toISOString(),
    verificationStatus: 'Verified',
    source: 'IMD Doppler Radar Paradip + INCOIS Ocean Buoy',
    affectedPeople: '180,000 in coastal lowlands',
    responseTeam: 'ODRAF 7 Units & Coast Guard CG-803',
    description: 'Wind speeds gusting to 115 km/h with 1.5m storm surge. 45 shelter camps activated.',
    actionPlan: 'Enforce fishing bans, shift vulnerable populations to cyclone shelters, secure communication towers.',
    shelters: 42,
    duplicatesBlocked: 112
  },
  {
    id: 'INC-2026-004',
    type: 'Fire',
    title: 'Dry Pine Forest Canopy Fire',
    location: 'Chamoli & Joshimath Belt, Uttarakhand',
    coordinates: [30.5583, 79.5694],
    severity: 'HIGH',
    priority: 'HIGH',
    status: 'Fireline Trenching',
    time: '1 hr ago',
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    verificationStatus: 'Cross-Checking',
    source: 'MODIS/VIIRS Satellite Thermal Anomaly + Forest Guard GPS',
    affectedPeople: '3 Eco-sensitive hamlets',
    responseTeam: 'Uttarakhand Forest Fire Division & ITBP',
    description: 'Spreading northeast along slope driven by 35 km/h gusts. Fire lines being cut to protect electricity substation.',
    actionPlan: 'IAF Bambi bucket helicopter sortie scheduled from Sarsawa base.',
    shelters: 4,
    duplicatesBlocked: 23
  },
  {
    id: 'INC-2026-005',
    type: 'Earthquake',
    title: 'Magnitude 4.7 Seismic Tremor',
    location: 'Kangra Valley & Dharamshala, Himachal Pradesh',
    coordinates: [32.1024, 76.2691],
    severity: 'MODERATE',
    priority: 'MEDIUM',
    status: 'Structural Assessment',
    time: '2 hrs ago',
    timestamp: new Date(Date.now() - 120 * 60 * 1000).toISOString(),
    verificationStatus: 'Verified',
    source: 'National Center for Seismology (NCS) + IoT Accelerometers',
    affectedPeople: 'Felt across 45km radius',
    responseTeam: 'HP SDRF & PWD Engineers',
    description: 'Depth 10km. Minor wall cracks reported in older masonry structures. No casualties confirmed.',
    actionPlan: 'Bridge and dam safety inspections underway at Pong Reservoir.',
    shelters: 6,
    duplicatesBlocked: 89
  },
  {
    id: 'INC-2026-006',
    type: 'Flood',
    title: 'Urban Flash Waterlogging & Subway Submersion',
    location: 'Hebbal & Outer Ring Road, Bengaluru, Karnataka',
    coordinates: [13.0358, 77.5970],
    severity: 'MODERATE',
    priority: 'MEDIUM',
    status: 'Pump Drainage Active',
    time: '3 hrs ago',
    timestamp: new Date(Date.now() - 180 * 60 * 1000).toISOString(),
    verificationStatus: 'Verified',
    source: 'Civic IoT Flow Meters + Traffic Police Twitter Stream',
    affectedPeople: 'Key transit corridor blocked',
    responseTeam: 'BBMP Disaster Cell & Civil Defense volunteers',
    description: '108mm rain in 2 hours choked secondary storm water drains. 2 underpasses inundated under 4ft water.',
    actionPlan: 'High-capacity de-watering diesel pumps deployed at Bellandur outfall.',
    shelters: 2,
    duplicatesBlocked: 54
  }
];

export const INITIAL_ALERTS = [
  {
    id: 'ALT-109',
    severity: 'CRITICAL',
    title: 'RED ALERT: Evacuate Majuli River Islands Before 18:00',
    area: 'Assam Brahmaputra Basin',
    agency: 'NDMA / Assam State Disaster Management Authority',
    time: '3 mins ago',
    acknowledged: false,
    channel: 'Common Alerting Protocol (CAP) + Siren Mesh'
  },
  {
    id: 'ALT-108',
    severity: 'CRITICAL',
    title: 'FLASH LANDSLIDE WARNING: Meppadi Valley Sector Closed',
    area: 'Wayanad, Kerala',
    agency: 'Kerala SDMA & Geological Survey of India',
    time: '14 mins ago',
    acknowledged: true,
    channel: 'SMS Broadcast + Police VHF'
  },
  {
    id: 'ALT-107',
    severity: 'HIGH',
    title: 'CYCLONE PRE-ALERT: Gusts up to 115 km/h Anticipated',
    area: 'Jagatsinghpur & Kendrapara, Odisha',
    agency: 'India Meteorological Department (IMD)',
    time: '38 mins ago',
    acknowledged: true,
    channel: 'Coastal Radio & Doordarshan Crawl'
  },
  {
    id: 'ALT-106',
    severity: 'MODERATE',
    title: 'Forest Fire Wind Vector Advisory',
    area: 'Almora & Chamoli Hills, Uttarakhand',
    agency: 'Forest Survey of India',
    time: '1 hr ago',
    acknowledged: true,
    channel: 'Forest Ranger Network'
  }
];

export const INITIAL_REPORTS = [
  {
    id: 'REP-881',
    source: 'Citizen WhatsApp SOS',
    author: 'Ranjit Borgohain',
    location: 'Kamalabari Ghat, Majuli, Assam',
    timestamp: '5 mins ago',
    text: 'Water entered primary school building. 40 elders and children shifted to tin roof. Need rescue boat urgently.',
    status: 'Verified',
    confidence: 96,
    disasterType: 'Flood',
    severity: 'CRITICAL',
    hasMedia: true
  },
  {
    id: 'REP-880',
    source: 'IoT River Gauge S-04',
    author: 'Central Water Commission Telemetry',
    location: 'Brahmaputra Zero Point, Dhubri',
    timestamp: '11 mins ago',
    text: 'Water stage reading: 29.84 meters (Danger level: 28.00m). Discharge rate exceeding 34,200 cumec.',
    status: 'Verified',
    confidence: 99,
    disasterType: 'Flood',
    severity: 'CRITICAL',
    hasMedia: false
  },
  {
    id: 'REP-879',
    source: 'Social Media (X / Geotagged)',
    author: '@wayanad_updates',
    location: 'Chooralmala Town, Wayanad',
    timestamp: '22 mins ago',
    text: 'Huge landslide near church road. 3 tea estate line houses buried in silt. NDRF reached with sniffer dogs.',
    status: 'Verified',
    confidence: 91,
    disasterType: 'Landslide',
    severity: 'CRITICAL',
    hasMedia: true
  },
  {
    id: 'REP-878',
    source: 'News Agency Feed',
    author: 'PTI Disaster Desk',
    location: 'Bhubaneswar, Odisha',
    timestamp: '40 mins ago',
    text: 'Odisha government cancels all leaves of emergency staff. Special Relief Commissioner orders 24/7 control room.',
    status: 'Verified',
    confidence: 98,
    disasterType: 'Cyclone',
    severity: 'HIGH',
    hasMedia: false
  },
  {
    id: 'REP-877',
    source: 'Citizen Field Submission',
    author: 'Devendra Rawat',
    location: 'Gwaldam Pine Ridge, Chamoli',
    timestamp: '1 hr ago',
    text: 'Flames rising high on southern ridge near high-tension line. Smoke thick, visibility under 100 meters.',
    status: 'Cross-Checking',
    confidence: 84,
    disasterType: 'Fire',
    severity: 'HIGH',
    hasMedia: true
  },
  {
    id: 'REP-876',
    source: 'Unverified Citizen Web Post',
    author: 'Anonymous',
    location: 'Kangra Highway km 42',
    timestamp: '2 hrs ago',
    text: 'Minor rockfall noticed on hillside near petrol pump after tremor.',
    status: 'Unverified',
    confidence: 62,
    disasterType: 'Earthquake',
    severity: 'LOW',
    hasMedia: false
  }
];

export const DATA_SOURCES = [
  {
    id: 'src-1',
    name: 'Government Alerts',
    agency: 'NDMA / IMD / CWC / INCOIS',
    type: 'Official Emergency Broadcasts',
    status: 'Operational',
    reliability: '99.8%',
    latency: '120ms',
    feedSpeed: 'Real-time Push (CAP-v1.2)',
    icon: 'ShieldCheck',
    description: 'Official emergency bulletins, river danger level thresholds, and severe weather warnings direct from state disaster agencies.'
  },
  {
    id: 'src-2',
    name: 'Weather Systems',
    agency: 'Doppler Radar Mesh & INSAT-3DR',
    type: 'Meteorological Telemetry',
    status: 'Operational',
    reliability: '99.4%',
    latency: '450ms',
    feedSpeed: '5-min Satellite Scan Intervals',
    icon: 'CloudRain',
    description: 'Real-time precipitation radar, cyclone track projections, wind vectors, and convective cloud top temperature telemetry.'
  },
  {
    id: 'src-3',
    name: 'News Wire Feeds',
    agency: 'PTI / Regional Emergency Press',
    type: 'Broadcast Media Streams',
    status: 'Operational',
    reliability: '92.1%',
    latency: '2.1s',
    feedSpeed: 'Automated RSS & NLP Crawlers',
    icon: 'Radio',
    description: 'National and regional press bureaus reporting on-ground casualties, evacuation declarations, and relief camp locations.'
  },
  {
    id: 'src-4',
    name: 'Social Media Streams',
    agency: 'X / Community Geotagged Feeds',
    type: 'Crowdsourced Signals',
    status: 'Operational',
    reliability: '86.3%',
    latency: '850ms',
    feedSpeed: 'Real-time NLP Filtering Stream',
    icon: 'Share2',
    description: 'Geotagged citizen SOS cries, emergency photos, and community hashtags processed through deduplication and bot filters.'
  },
  {
    id: 'src-5',
    name: 'Sensors & IoT Telemetry',
    agency: 'CWC Gauges & NCS Seismometers',
    type: 'Physical Sensor Grids',
    status: 'Operational',
    reliability: '98.7%',
    latency: '80ms',
    feedSpeed: 'Sub-second MQTT & LoRaWAN',
    icon: 'Cpu',
    description: 'Automated telemetry from ultrasound water level sensors, 3-axis seismic accelerometers, and smoke optical sensors.'
  },
  {
    id: 'src-6',
    name: 'Citizen Field Reports',
    agency: 'ResQNova Web App & WhatsApp SOS',
    type: 'Ground Witness Submissions',
    status: 'Operational',
    reliability: '91.5%',
    latency: '1.2s',
    feedSpeed: 'Direct API Encrypted Pipeline',
    icon: 'Users',
    description: 'Verified mobile and web submissions from impacted citizens with GPS coordinates, situational description, and photo evidence.'
  }
];

export function DisasterProvider({ children }) {
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS);
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [reports, setReports] = useState(INITIAL_REPORTS);
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [filterType, setFilterType] = useState('ALL');
  const [filterSeverity, setFilterSeverity] = useState('ALL');
  const [lastUpdated, setLastUpdated] = useState('Just now');
  const [activeReportsCount, setActiveReportsCount] = useState(342);
  const [verifiedReportsCount, setVerifiedReportsCount] = useState(289);

  // Live relative timestamp ticker
  useEffect(() => {
    const timer = setInterval(() => {
      const seconds = Math.floor(Math.random() * 5) + 1;
      setLastUpdated(`${seconds}s ago`);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Web Audio emergency alert chime (no external mp3 dependency)
  const playAlertChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(880, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.35);
      
      gain1.gain.setValueAtTime(0.3, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      osc1.start();
      osc1.stop(ctx.currentTime + 0.4);
    } catch (e) {
      console.warn('Audio alert could not be synthesized:', e);
    }
  };

  // Dispatch / Acknowledge alert
  const acknowledgeAlert = (alertId) => {
    setAlerts(prev => prev.map(a => a.id === alertId ? { ...a, acknowledged: true } : a));
  };

  // Add new analyzed incident from AI analyzer or report form
  const addIncident = (newIncident) => {
    const formatted = {
      ...newIncident,
      id: newIncident.id || `INC-2026-${String(incidents.length + 1).padStart(3, '0')}`,
      time: 'Just now',
      timestamp: new Date().toISOString(),
      shelters: newIncident.shelters || 4,
      duplicatesBlocked: newIncident.duplicatesBlocked || 12
    };
    setIncidents(prev => [formatted, ...prev]);
    setSelectedIncident(formatted);
    playAlertChime();
    
    // Also trigger critical alert if severity is critical or high
    if (newIncident.severity === 'CRITICAL' || newIncident.severity === 'HIGH') {
      const newAlert = {
        id: `ALT-${Math.floor(Math.random() * 900 + 100)}`,
        severity: newIncident.severity,
        title: `${newIncident.severity} ALERT: ${newIncident.title}`,
        area: newIncident.location,
        agency: 'ResQNova AI Triage Engine',
        time: 'Just now',
        acknowledged: false,
        channel: 'Common Alerting Protocol (CAP) Multi-cast'
      };
      setAlerts(prev => [newAlert, ...prev]);
    }
  };

  // Add citizen report
  const addReport = (newReport) => {
    const reportItem = {
      ...newReport,
      id: `REP-${Math.floor(Math.random() * 900 + 100)}`,
      timestamp: 'Just now',
      confidence: newReport.confidence || 88,
      status: newReport.status || 'Cross-Checking'
    };
    setReports(prev => [reportItem, ...prev]);
    setActiveReportsCount(prev => prev + 1);
    if (reportItem.status === 'Verified') {
      setVerifiedReportsCount(prev => prev + 1);
    }
  };

  // Verify a report
  const toggleReportStatus = (reportId) => {
    setReports(prev => prev.map(r => {
      if (r.id === reportId) {
        const nextStatus = r.status === 'Verified' ? 'Unverified' : 'Verified';
        if (nextStatus === 'Verified') {
          setVerifiedReportsCount(c => c + 1);
        } else {
          setVerifiedReportsCount(c => Math.max(0, c - 1));
        }
        return { ...r, status: nextStatus };
      }
      return r;
    }));
  };

  // Filtered incidents
  const filteredIncidents = incidents.filter(inc => {
    const matchesType = filterType === 'ALL' || inc.type.toUpperCase() === filterType.toUpperCase();
    const matchesSeverity = filterSeverity === 'ALL' || inc.severity.toUpperCase() === filterSeverity.toUpperCase();
    return matchesType && matchesSeverity;
  });

  const criticalCount = incidents.filter(i => i.severity === 'CRITICAL').length;
  const activeCount = incidents.length;

  return (
    <DisasterContext.Provider value={{
      systemStatus: 'Demo Mode',
      simulationNotice: 'SIMULATED DATA',
      hackathonInfo: {
        problemId: 'SIH26206',
        theme: 'Disaster Management',
        category: 'Software',
        teamName: 'ResQNova',
        teamLeader: 'Ankit Kumar',
        institute: 'Vivekananda Global University'
      },
      lastUpdated,
      incidents,
      filteredIncidents,
      criticalCount,
      activeCount,
      activeReportsCount,
      verifiedReportsCount,
      alerts,
      reports,
      dataSources: DATA_SOURCES,
      selectedIncident,
      setSelectedIncident,
      soundEnabled,
      setSoundEnabled,
      playAlertChime,
      activeTab,
      setActiveTab,
      filterType,
      setFilterType,
      filterSeverity,
      setFilterSeverity,
      acknowledgeAlert,
      addIncident,
      addReport,
      toggleReportStatus
    }}>
      {children}
    </DisasterContext.Provider>
  );
}

export function useDisaster() {
  const context = useContext(DisasterContext);
  if (!context) {
    throw new Error('useDisaster must be used within a DisasterProvider');
  }
  return context;
}
