import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <RadioGroup 
      row
      name="horizontal"
      value={value}
      onChange={(e, v) => setValue(v)}
      label="Horizontal Layout"
    >
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  );
};
