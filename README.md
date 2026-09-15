# ResQNova

### AI-Powered Real-Time Disaster Intelligence & Response

A flagship Smart India Hackathon project:
- **Problem Statement ID:** SIH26206
- **Theme:** Disaster Management
- **Category:** Software
- **Team Name:** ResQNova
- **Team Leader:** Ankit Kumar
- **Institute:** Vivekananda Global University

---

## 1. Core Idea

ResQNova is an AI-powered disaster intelligence platform designed to bring scattered disaster information from multiple sources into one unified platform.

Disaster information originates across disparate sources:
1. **Government Alerts** (NDMA, IMD, CWC, INCOIS)
2. **Weather Systems** (Doppler Radars, INSAT-3DR, Satellite grids)
3. **News** (National & regional emergency wire feeds)
4. **Social Media** (Geotagged citizen SOS tweets & community reports)
5. **Sensors** (IoT river level gauges & seismic accelerometers)
6. **Citizen Reports** (Crowdsourced field submissions & WhatsApp hotline)

During a disaster, information is scattered, duplicated, delayed, conflicting, or unverified, which paralyzes decision making.

### ResQNova 6-Stage Intelligence Pipeline:
```
COLLECT
   ↓
PROCESS
   ↓
AI ANALYZE & VERIFY
   ↓
CLASSIFY & PRIORITIZE
   ↓
VISUALIZE
   ↓
ALERT
```

> **IMPORTANT PROTOCOL & TRANSPARENCY NOTICE:**  
> This application is a hackathon prototype/demo. All incidents, sensor telemetry, and broadcast alerts are clearly labeled as **"SIMULATED DATA"** in **"DEMO MODE"**. The platform strictly complies with hackathon transparency guidelines and does not claim official operational connection with national emergency dispatch centers unless formally peered.

---

## 2. Design Direction & Aesthetic Standards

Engineered as a high-end **Emergency Command Center**:
- **Background:** Dark navy / black canvas (`#080C14`, `#0B1120`, `#0D1322`).
- **Dashboard Cards:** Crisp white / light high-contrast cards (`#FFFFFF` / `#F8FAFC`) with soft shadows, subtle glassmorphism, and tactical borders.
- **Strict Semantic Severity Indicators:**
  - `CRITICAL` (Red `#ef4444` / `#dc2626`)
  - `HIGH` (Orange `#f97316` / `#ea580c`)
  - `MODERATE` (Yellow `#eab308` / `#ca8a04`)
  - `VERIFIED` / `NORMAL` (Green `#10b981` / `#059669`)
- **Typography:** `Inter` (UI), `Outfit` (Headings), and `JetBrains Mono` (Coordinates & Telemetry).

---

## 3. Platform Modules & Features

### A. Landing Page
- **Hero:**
  - Headline: *"From Scattered Reports to Disaster Intelligence."*
  - Subheading: *"ResQNova combines information from multiple disaster sources, uses AI-assisted analysis to identify and prioritize important incidents, and creates a unified, location-aware view for faster disaster response."*
  - Primary CTA: *"Open Command Center"* & Secondary CTA: *"See How It Works"*
  - Badge: `AI-POWERED DISASTER INTELLIGENCE`
  - Interactive visual dashboard preview with live metrics, active incident ticker, and map.
- **Why ResQNova? Section:**
  - Heading: *"During a disaster, information is everywhere. Intelligence is not."*
  - 6 Source Cards for Government Alerts, Weather Data, News, Social Media, Sensors, and Citizen Reports.
  - The Breakdown Chain: `SCATTERED INFORMATION` → `DUPLICATES` → `CONFLICTING REPORTS` → `DELAYED INFORMATION` → `DIFFICULT DECISION MAKING`.
  - The Solution: *"ResQNova turns scattered information into a unified disaster picture."*

### B. Command Center Dashboard
- **Top Stats Bar:**
  - System Status: `Demo Mode`
  - Disclaimer Label: `SIMULATED DATA`
  - Live Ticking Timestamp: `Updated Just now`
  - `Active Incidents` (18 across 5 hazard categories)
  - `Critical Incidents` (4 with immediate tactical units required)
  - `Reports Received` (342 multi-modal inputs)
  - `Reports Verified` (289 verified, 84.5% verification rate)
- **3-Column Tactical Layout:**
  - **Left:** Navigation sidebar (Dashboard, Live Map, Reports, AI Analysis, Alerts, Data Sources, How It Works, Impact, About).
  - **Center:** Live Situation Overview (Interactive Leaflet map with colored hazard pins, type filters, and incident detail drawer).
  - **Right:** Critical Alerts stream with one-click dispatch and priority audio chimes.

### C. AI Disaster Report Analyzer
- Dedicated NLP summarizer and entity extraction engine.
- Large input text box: *"Paste disaster report here..."*
- **5 One-Click Hackathon Evaluation Presets:**
  - *Assam Flood Breach*
  - *Wayanad Landslide*
  - *Odisha Cyclone Surge*
  - *Chamoli Forest Fire*
  - *Bengaluru Urban Flood*
- Multi-step realistic AI triage simulation.
- Structured output cards:
  - **AI SUMMARY**
  - **INCIDENT TYPE** (Flood / Fire / Cyclone / Earthquake / Landslide)
  - **LOCATION** (Landmark name + GPS coordinates)
  - **SEVERITY** (CRITICAL / HIGH / MODERATE / LOW)
  - **PRIORITY** (URGENT / HIGH / MEDIUM / LOW)
  - **VERIFICATION STATUS** (Verified with confidence score)
  - **EXTRACTED ENTITIES & ACTION PLAN**
  - **"Add to Live Command Map"** button to promote incident directly into the live situation map.

### D. Full Dedicated Views
- **Live Map:** Pan-India GIS situational map with layer switching, radar sweeps, and incident filters.
- **Reports:** Citizen and field report intake with photo evidence flags and "Submit Disaster Report" modal.
- **Alerts:** Common Alerting Protocol (CAP v1.2) multi-cast broadcast suite (Cell Broadcast, WhatsApp, Siren mesh, Police VHF).
- **Data Sources:** Real-time telemetry inspector for the 6 feeds with sample JSON/CAP packet views.
- **How It Works:** In-depth interactive walkthrough of the 6-stage pipeline.
- **Impact:** Quantified metrics for NDRF, SDMA, and citizen safety (Response time reduced from 45 min to 3.8 min, 84.5% duplicate reduction).
- **About:** SIH26206 credentials, Team ResQNova, Leader Ankit Kumar, Vivekananda Global University.

---

## 4. Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation & Launch
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (Leaflet, Lucide-react, React 18, Vite)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000/` in your browser.

### Production Build
```bash
cd frontend
npm run build
```

---

## 5. Team Credentials (SIH26206)

- **Problem Statement ID:** SIH26206
- **Theme:** Disaster Management
- **Category:** Software
- **Team Name:** ResQNova
- **Team Leader:** Ankit Kumar
- **Institute:** Vivekananda Global University
