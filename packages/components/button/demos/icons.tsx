import React from 'react';
import { Button } from '@enterprise-ui/button';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

export default () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button startIcon={<SearchIcon />}>Search</Button>
    <Button endIcon={<TrashIcon />} color="error">Delete</Button>
    <Button startIcon={<SearchIcon />} iconButton />
    <Button startIcon={<TrashIcon />} variant="outlined" iconButton />
  </div>
);
