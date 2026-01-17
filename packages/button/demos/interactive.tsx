import React, { useState } from 'react';
import { Button } from '@base-ui/button';

export default () => {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [shape, setShape] = useState<'default' | 'round' | 'circle'>('default');

  const enterLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span>Size:</span>
        <select value={size} onChange={e => setSize(e.target.value as any)}>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
        
        <span>Shape:</span>
        <select value={shape} onChange={e => setShape(e.target.value as any)}>
          <option value="default">Default</option>
          <option value="round">Round</option>
          <option value="circle">Circle</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" size={size} shape={shape}>Primary</Button>
        <Button variant="default" size={size} shape={shape}>Default</Button>
        <Button variant="outline" size={size} shape={shape}>Outline</Button>
        <Button variant="ghost" size={size} shape={shape}>Ghost</Button>
        <Button variant="danger" size={size} shape={shape}>Danger</Button>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" loading>Loading</Button>
        <Button variant="primary" size={size} loading={loading} onClick={enterLoading}>
          Click to Load
        </Button>
        <Button variant="outline" size={size} disabled>Disabled</Button>
      </div>

       <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" size={size} shape="circle"><span>🔍</span></Button>
        <Button variant="primary" size={size}><span>🔍</span> Search</Button>
        <Button variant="outline" size={size}>Next <span>👉</span></Button>
      </div>
    </div>
  );
};
