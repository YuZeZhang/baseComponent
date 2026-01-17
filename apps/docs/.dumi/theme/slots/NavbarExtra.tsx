import React, { useContext, useState, useRef, useEffect } from 'react';
import { ConfigContext } from '@base-ui/config-provider';
import './NavbarExtra.css';

// Simple Icons
const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const MourningIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const RTLIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
    <path d="M9 7h6" />
    <path d="M9 12h6" />
    <path d="M9 17h6" />
  </svg>
);

const LangIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function NavbarExtra() {
  const ctx = useContext(ConfigContext);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  if (!ctx) return null;

  const { locale, setLocale, mourning, setMourning, direction, setDirection } = ctx;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navbar-extra-container" ref={dropdownRef}>
      <button 
        className={`navbar-icon-btn ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        title="Settings"
      >
        <SettingsIcon />
      </button>

      {open && (
        <div className="navbar-dropdown">
          <div className="navbar-dropdown-section">
            <div className="navbar-dropdown-title">Language</div>
            <div 
              className={`navbar-dropdown-item ${locale === 'zh-CN' ? 'active' : ''}`}
              onClick={() => setLocale('zh-CN')}
            >
              <LangIcon />
              <span>中文</span>
              {locale === 'zh-CN' && <CheckIcon />}
            </div>
            <div 
              className={`navbar-dropdown-item ${locale === 'en-US' ? 'active' : ''}`}
              onClick={() => setLocale('en-US')}
            >
              <LangIcon />
              <span>English</span>
              {locale === 'en-US' && <CheckIcon />}
            </div>
          </div>

          <div className="navbar-dropdown-divider" />

          <div className="navbar-dropdown-section">
            <div className="navbar-dropdown-title">Direction</div>
            <div 
              className={`navbar-dropdown-item ${direction === 'ltr' ? 'active' : ''}`}
              onClick={() => setDirection('ltr')}
            >
              <RTLIcon />
              <span>LTR</span>
              {direction === 'ltr' && <CheckIcon />}
            </div>
            <div 
              className={`navbar-dropdown-item ${direction === 'rtl' ? 'active' : ''}`}
              onClick={() => setDirection('rtl')}
            >
              <RTLIcon />
              <span>RTL</span>
              {direction === 'rtl' && <CheckIcon />}
            </div>
          </div>

          <div className="navbar-dropdown-divider" />

          <div className="navbar-dropdown-section">
             <div className="navbar-dropdown-title">Experimental</div>
            <div 
              className={`navbar-dropdown-item ${mourning ? 'active' : ''}`}
              onClick={() => setMourning(!mourning)}
            >
              <MourningIcon />
              <span>Mourning Mode</span>
              {mourning && <CheckIcon />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
