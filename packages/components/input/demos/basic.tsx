import React, { useState } from 'react';
import { Input } from '@enterprise-ui/input';

export default () => {
  const [val, setVal] = useState('Controlled Value');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Input placeholder="Basic usage" />
      <Input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Controlled"
        allowClear
      />
    </div>
  );
};
