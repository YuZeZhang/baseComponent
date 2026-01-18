import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <RadioGroup 
        name="controlled"
        label="Selected: {value || 'None'}"
        onChange={handleChange}
      >
        <Radio value="apple" label="Apple" />
        <Radio value="banana" label="Banana" />
        <Radio value="orange" label="Orange" />
        <Radio value="" label="None" />
      </RadioGroup>
    </div>
  );
};
