import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <RadioGroup 
        name="label-placement"
        value={value}
        onChange={(e, v) => setValue(v)}
        label="Label Placement"
      >
        <Radio value="option1" label="Top Placement">
          <span>With label</span>
        </Radio>
        <Radio value="option2" labelPlacement="start">
          <span>Start Placement</span>
        </Radio>
        <Radio value="option3" labelPlacement="end">
          <span>End Placement</span>
        </Radio>
        <Radio value="option4" labelPlacement="bottom">
          <span>Bottom Placement</span>
        </Radio>
      </RadioGroup>
    </div>
  );
};
