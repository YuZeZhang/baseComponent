import React from 'react';
import { Input } from '@base-ui/input';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
    <Input defaultValue="Uncontrolled Default" placeholder="Uncontrolled" />
    <Input 
        placeholder="With Clear" 
        allowClear 
        onChange={(e) => console.log('change:', e.target.value)} 
        onClear={() => console.log('cleared')}
    />
  </div>
);
