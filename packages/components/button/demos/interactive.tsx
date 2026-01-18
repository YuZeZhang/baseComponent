import React, { useState } from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [variant, setVariant] = useState<'text' | 'contained' | 'outlined'>('contained');

  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span>Size:</span>
        <select value={size} onChange={e => setSize(e.target.value as any)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        
        <span>Variant:</span>
        <select value={variant} onChange={e => setVariant(e.target.value as any)}>
          <option value="text">Text</option>
          <option value="contained">Contained</option>
          <option value="outlined">Outlined</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant={variant} size={size}>Primary</Button>
        <Button variant={variant} size={size} color="secondary">Secondary</Button>
        <Button variant={variant} size={size} color="error">Error</Button>
        <Button variant={variant} size={size} color="success">Success</Button>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant={variant} size={size} loading={loading} onClick={enterLoading}>
          Click to Load
        </Button>
        <Button variant={variant} size={size} disabled>Disabled</Button>
      </div>
    </div>
  );
};
