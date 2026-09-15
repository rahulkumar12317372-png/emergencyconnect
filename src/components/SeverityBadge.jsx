import React from 'react';
import { AlertCircle, AlertTriangle, ShieldCheck, Info } from 'lucide-react';

export default function SeverityBadge({ severity, priority, size = 'sm' }) {
  const sev = (severity || '').toUpperCase();
  
  let bgClass = 'bg-slate-800 text-slate-300 border-slate-700';
  let dotColor = '#94a3b8';
  let Icon = Info;

  if (sev === 'CRITICAL') {
    bgClass = 'badge-critical';
    dotColor = '#ef4444';
    Icon = AlertCircle;
  } else if (sev === 'HIGH') {
    bgClass = 'badge-high';
    dotColor = '#f97316';
    Icon = AlertTriangle;
  } else if (sev === 'MODERATE') {
    bgClass = 'badge-moderate';
    dotColor = '#eab308';
    Icon = AlertTriangle;
  } else if (sev === 'LOW' || sev === 'VERIFIED' || sev === 'NORMAL') {
    bgClass = 'badge-verified';
    dotColor = '#10b981';
    Icon = ShieldCheck;
  }

  const paddingClass = size === 'lg' ? 'px-3.5 py-1.5 text-xs' : size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider font-semibold font-mono ${paddingClass} ${bgClass}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        borderRadius: '9999px',
        letterSpacing: '0.04em'
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: dotColor,
          display: 'inline-block'
        }}
      />
      {sev || 'UNKNOWN'}
      {priority && (
        <span style={{ opacity: 0.8, fontSize: '0.85em', marginLeft: '2px' }}>
          • {priority}
        </span>
      )}
    </span>
  );
}
