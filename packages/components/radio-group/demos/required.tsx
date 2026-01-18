import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <RadioGroup 
        name="required"
        label="Required Field"
        value={value}
        onChange={(e, v) => setValue(v)}
        required
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    </div>
  );
};
