# Radio Group

Radio buttons allow the user to select one option from a set.

## Usage

### Basic Radio Group

```tsx
import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <div>
      <RadioGroup 
        name="demo" 
        value={value}
        onChange={(e, v) => setValue(v)}
        label="Select an option"
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    </div>
  );
};
```

### Row Layout

```tsx
import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <div>
      <RadioGroup 
        name="demo" 
        value={value}
        onChange={(e, v) => setValue(v)}
        row
        label="Select an option"
      >
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    </div>
  );
};
```

### Disabled

```tsx
import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <RadioGroup 
      name="demo" 
      value={value}
      onChange={(e, v) => setValue(v)}
      disabled
      label="Disabled Group"
    >
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" disabled />
      <Radio value="option3" label="Option 3" disabled />
    </RadioGroup>
  );
};
```

### Sizes

```tsx
import React, { useState } from 'react';
import { RadioGroup, Radio } from '@enterprise-ui/radio-group';

export default () => {
  const [value, setValue] = useState('option1');

  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <div>
        <RadioGroup name="demo" value={value} onChange={(e, v) => setValue(v)} size="small">
          <Radio value="option1" label="Small 1" />
          <Radio value="option2" label="Small 2" />
        </RadioGroup>
      </div>
      <div>
        <RadioGroup name="demo" value={value} onChange={(e, v) => setValue(v)} size="medium">
          <Radio value="option1" label="Medium 1" />
          <Radio value="option2" label="Medium 2" />
        </RadioGroup>
      </div>
    </div>
  );
};
```

## API

### Radio

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The value of the radio button | `string \| number` | - |
| label | The label to display | `ReactNode` | - |
| disabled | If `true`, the radio is disabled | `boolean` | `false` |
| size | The size of the radio button | `'small' \| 'medium'` | `'medium'` |

### RadioGroup

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | The name of the radio group | `string` | - |
| value | The value of currently selected radio | `string \| number` | - |
| onChange | Callback fired when a radio is selected | `(event: React.ChangeEvent, value: string \| number) => void` | - |
| disabled | If `true`, the entire group is disabled | `boolean` | `false` |
| size | The size of the radio buttons | `'small' \| 'medium'` | `'medium'` |
| row | If `true`, radio buttons are displayed in a row | `boolean` | `false` |
| label | The label of the radio group | `ReactNode` | - |
