import React from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('primary');

  const allOptions = ['primary', 'secondary', 'error', 'success', 'info', 'warning', 'default'];

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 16 }}>
        Radio Group Colors:
      </p>
      {allOptions.map((color) => (
        <RadioGroup 
          key={color}
          name={color}
          value={value}
          onChange={(e, v) => setValue(v)}
          label={`${color.charAt(0).toUpperCase()}${color.slice(1)}`}
          color={color}
        >
          <Radio value={color} label={`${color.charAt(0).toUpperCase()}${color.slice(1)}`} />
        </RadioGroup>
      ))}
    </div>
  );
};
