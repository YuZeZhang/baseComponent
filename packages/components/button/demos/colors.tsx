import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div>
      <h3>Primary Colors</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="text" color="primary">Primary</Button>
      </div>
    </div>

    <div>
      <h3>Secondary Colors</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
      </div>
    </div>

    <div>
      <h3>Error Colors</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="text" color="error">Error</Button>
      </div>
    </div>

    <div>
      <h3>Success Colors</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="outlined" color="success">Success</Button>
        <Button variant="text" color="success">Success</Button>
      </div>
    </div>

    <div>
      <h3>Info Colors</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="text" color="info">Info</Button>
      </div>
    </div>

    <div>
      <h3>Warning Colors</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="text" color="warning">Warning</Button>
      </div>
    </div>

    <div>
      <h3>Inherit Color</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8, color: '#ff6b6b' }}>
        <Button variant="contained" color="inherit">Inherit</Button>
        <Button variant="outlined" color="inherit">Inherit</Button>
        <Button variant="text" color="inherit">Inherit</Button>
      </div>
    </div>
  </div>
);
