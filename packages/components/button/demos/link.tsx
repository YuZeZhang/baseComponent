import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div>
      <h3>Basic Links</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="link" href="https://example.com">Primary Link</Button>
        <Button variant="link" color="secondary" href="https://example.com">Secondary Link</Button>
        <Button variant="link" color="error" href="https://example.com">Error Link</Button>
        <Button variant="link" color="success" href="https://example.com">Success Link</Button>
      </div>
    </div>

    <div>
      <h3>Links with Target</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="link" href="https://example.com" target="_blank">Open in New Tab</Button>
        <Button variant="link" href="https://example.com" target="_self">Open in Same Tab</Button>
      </div>
    </div>

    <div>
      <h3>Links with Icons</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="link" href="https://example.com" startIcon={<span>🔗</span>}>With Start Icon</Button>
        <Button variant="link" href="https://example.com" endIcon={<span>→</span>}>With End Icon</Button>
        <Button variant="link" href="https://example.com" startIcon={<span>🔗</span>} endIcon={<span>→</span>}>
          Both Icons
        </Button>
      </div>
    </div>

    <div>
      <h3>Disabled Links</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="link" href="https://example.com" disabled>Disabled Link</Button>
        <Button variant="link" href="https://example.com" color="error" disabled>Error Link Disabled</Button>
      </div>
    </div>

    <div>
      <h3>Loading Links</h3>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <Button variant="link" href="https://example.com" loading>Loading Link</Button>
      </div>
    </div>
  </div>
);
