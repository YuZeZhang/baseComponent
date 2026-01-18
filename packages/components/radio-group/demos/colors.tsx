import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <RadioGroup name="colors" value={value} onChange={(e, v) => setValue(v)}>
        <Radio value="primary" color="primary" label="Primary" />
        <Radio value="secondary" color="secondary" label="Secondary" />
        <Radio value="error" color="error" label="Error" />
        <Radio value="success" color="success" label="Success" />
        <Radio value="info" color="info" label="Info" />
        <Radio value="warning" color="warning" label="Warning" />
      </RadioGroup>
    </div>
  );
};
