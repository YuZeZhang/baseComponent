import React from 'react';
import { Button } from '@base-ui/button';

export default () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button variant="primary">Primary</Button>
    <Button variant="default">Default</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
  </div>
);
