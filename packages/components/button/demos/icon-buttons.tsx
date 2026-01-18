import React from 'react';
import { Button } from '@enterprise-ui/button';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div>
      <h3>Icon Buttons by Variant</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" iconButton>
          <SearchIcon />
        </Button>
        <Button variant="outlined" iconButton>
          <SettingsIcon />
        </Button>
        <Button variant="text" iconButton>
          <TrashIcon />
        </Button>
      </div>
    </div>

    <div>
      <h3>Icon Buttons by Color</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" color="primary" iconButton>
          <SearchIcon />
        </Button>
        <Button variant="contained" color="secondary" iconButton>
          <SettingsIcon />
        </Button>
        <Button variant="contained" color="error" iconButton>
          <TrashIcon />
        </Button>
        <Button variant="contained" color="success" iconButton>
          <span>✓</span>
        </Button>
        <Button variant="contained" color="warning" iconButton>
          <span>!</span>
        </Button>
      </div>
    </div>

    <div>
      <h3>Icon Buttons by Size</h3>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
        <Button variant="contained" size="small" iconButton>
          <SearchIcon />
        </Button>
        <Button variant="contained" size="medium" iconButton>
          <SettingsIcon />
        </Button>
        <Button variant="contained" size="large" iconButton>
          <TrashIcon />
        </Button>
      </div>
    </div>

    <div>
      <h3>Disabled Icon Buttons</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" iconButton disabled>
          <SearchIcon />
        </Button>
        <Button variant="outlined" iconButton disabled>
          <SettingsIcon />
        </Button>
        <Button variant="text" iconButton disabled>
          <TrashIcon />
        </Button>
      </div>
    </div>

    <div>
      <h3>Button with Both Start and End Icons</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" startIcon={<SearchIcon />} endIcon={<span>→</span>}>
          Search
        </Button>
        <Button variant="outlined" startIcon={<SettingsIcon />} endIcon={<span>↓</span>}>
          Settings
        </Button>
        <Button variant="text" startIcon={<TrashIcon />} endIcon={<span>🗑️</span>}>
          Delete
        </Button>
      </div>
    </div>

    <div>
      <h3>Icon Button Loading</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" loading iconButton>
          <span>🔄</span>
        </Button>
        <Button variant="outlined" loading iconButton>
          <span>⚙️</span>
        </Button>
        <Button variant="text" loading iconButton>
          <span>✨</span>
        </Button>
      </div>
    </div>

    <div>
      <h3>Emoji Icon Buttons</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" iconButton>
          <span>❤️</span>
        </Button>
        <Button variant="outlined" iconButton>
          <span>⭐</span>
        </Button>
        <Button variant="text" iconButton>
          <span>🔥</span>
        </Button>
      </div>
    </div>
  </div>
);
