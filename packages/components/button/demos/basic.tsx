import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
  </div>
);
