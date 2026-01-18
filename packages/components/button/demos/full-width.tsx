import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
    <div>
      <h3>Contained Full Width</h3>
      <div style={{ marginTop: 8 }}>
        <Button variant="contained" fullWidth>Full Width Button</Button>
      </div>
    </div>

    <div>
      <h3>Outlined Full Width</h3>
      <div style={{ marginTop: 8 }}>
        <Button variant="outlined" fullWidth>Full Width Outlined Button</Button>
      </div>
    </div>

    <div>
      <h3>Text Full Width</h3>
      <div style={{ marginTop: 8 }}>
        <Button variant="text" fullWidth>Full Width Text Button</Button>
      </div>
    </div>

    <div>
      <h3>Full Width with Icons</h3>
      <div style={{ marginTop: 8 }}>
        <Button variant="contained" fullWidth startIcon={<span>🚀</span>} endIcon={<span>→</span>}>
          Full Width with Icons
        </Button>
      </div>
    </div>

    <div>
      <h3>Full Width Colors</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="contained" fullWidth color="primary">Primary</Button>
        <Button variant="contained" fullWidth color="secondary">Secondary</Button>
        <Button variant="contained" fullWidth color="error">Error</Button>
        <Button variant="contained" fullWidth color="success">Success</Button>
        <Button variant="contained" fullWidth color="warning">Warning</Button>
      </div>
    </div>

    <div>
      <h3>Full Width Loading</h3>
      <div style={{ marginTop: 8 }}>
        <Button variant="contained" fullWidth loading>
          Full Width Loading
        </Button>
      </div>
    </div>

    <div>
      <h3>Full Width Disabled</h3>
      <div style={{ marginTop: 8 }}>
        <Button variant="contained" fullWidth disabled>
          Full Width Disabled
        </Button>
      </div>
    </div>
  </div>
);
