import React from 'react';
import { Button } from '@base-ui/button';

export default () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button loading>Loading</Button>
    <Button loading variant="outline">Loading</Button>
    <Button loading shape="circle" icon={<span>L</span>} />
  </div>
);
