import React from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <RadioGroup 
        name="error"
        error
        label="Error States"
      >
        <Radio value="option1" label="Valid" />
        <Radio value="option2" label="Error Selected" error />
      </RadioGroup>
    </div>
  );
};
