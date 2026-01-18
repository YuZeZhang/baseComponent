import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="contained" loading>Loading</Button>
    <Button variant="outlined" loading>Loading</Button>
    <Button variant="text" loading>Loading</Button>
    <Button variant="contained" loading iconButton>
      <span>🔄</span>
    </Button>
  </div>
);
