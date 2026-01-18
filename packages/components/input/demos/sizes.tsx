import React from 'react';
import { Input } from '@enterprise-ui/input';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
    <Input size="sm" placeholder="Small size" />
    <Input size="md" placeholder="Medium size (default)" />
    <Input size="lg" placeholder="Large size" />
  </div>
);
