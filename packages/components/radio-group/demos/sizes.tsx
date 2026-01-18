import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('small');

  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <div>
        <RadioGroup 
          name="sizes"
          value={value}
          onChange={(e, v) => setValue(v)}
          label="Sizes"
          size="small"
        >
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      </div>
      <div>
        <RadioGroup 
          name="sizes"
          value={value}
          onChange={(e, v) => setValue(v)}
          label="Sizes"
          size="medium"
        >
          <Radio value="small" label="Small" />
          <Radio value="medium" label="Medium" />
          <Radio value="large" label="Large" />
        </RadioGroup>
      </div>
    </div>
  );
};
