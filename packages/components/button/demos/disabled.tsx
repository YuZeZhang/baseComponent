import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div>
      <h3>Contained Variants</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="contained" color="secondary" disabled>Disabled</Button>
        <Button variant="contained" color="error" disabled>Disabled</Button>
        <Button variant="contained" color="success" disabled>Disabled</Button>
      </div>
    </div>

    <div>
      <h3>Outlined Variants</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="outlined" disabled>Disabled</Button>
        <Button variant="outlined" color="secondary" disabled>Disabled</Button>
        <Button variant="outlined" color="error" disabled>Disabled</Button>
        <Button variant="outlined" color="success" disabled>Disabled</Button>
      </div>
    </div>

    <div>
      <h3>Text Variants</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="text" disabled>Disabled</Button>
        <Button variant="text" color="secondary" disabled>Disabled</Button>
        <Button variant="text" color="error" disabled>Disabled</Button>
        <Button variant="text" color="success" disabled>Disabled</Button>
      </div>
    </div>

    <div>
      <h3>Link Variant</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="link" disabled>Disabled Link</Button>
        <Button variant="link" color="error" disabled>Error Link</Button>
      </div>
    </div>

    <div>
      <h3>Icon Buttons</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button iconButton disabled>
          <span>🔍</span>
        </Button>
        <Button variant="outlined" iconButton disabled>
          <span>⚙️</span>
        </Button>
        <Button variant="text" iconButton disabled>
          <span>⭐</span>
        </Button>
      </div>
    </div>

    <div>
      <h3>Loading State</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button loading disabled>Disabled + Loading</Button>
      </div>
    </div>
  </div>
);
