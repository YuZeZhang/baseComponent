import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button size="small" variant="contained">Small</Button>
    <Button size="medium" variant="contained">Medium</Button>
    <Button size="large" variant="contained">Large</Button>
  </div>
);
