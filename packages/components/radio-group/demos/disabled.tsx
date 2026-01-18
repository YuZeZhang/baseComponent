import React from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  return (
    <RadioGroup name="disabled" disabled>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" disabled />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  );
};
