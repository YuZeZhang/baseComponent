import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <RadioGroup
      name="basic"
      value={value}
      onChange={(e, v) => setValue(v)}
      label="Basic Usage"
    >
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
};
