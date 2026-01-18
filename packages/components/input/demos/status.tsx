import React from 'react';
import { Input } from '@enterprise-ui/input';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
    <Input status="error" placeholder="Error status" />
    <Input status="warning" placeholder="Warning status" />
    <Input disabled placeholder="Disabled input" value="Disabled" />
  </div>
);
