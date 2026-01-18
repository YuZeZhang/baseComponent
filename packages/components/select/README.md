# Select

Selects allow users to select an option from a list.

## Usage

### Basic Select

```tsx
import React, { useState } from 'react';
import { Select } from '@enterprise-ui/select';

export default function BasicSelect() {
  const [value, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <Select
      label="Choose an option"
      value={value}
      onChange={(v) => setValue(v)}
      options={options}
    />
  );
};
```

### With Helper Text

```tsx
import React, { useState } from 'react';
import { Select } from '@enterprise-ui/select';

export default () => {
  const [value, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  return (
    <Select
      label="Choose an option"
      value={value}
      onChange={(v) => setValue(v)}
      options={options}
      helperText="Select your preferred option"
    />
  );
};
```

### Error State

```tsx
import React, { useState } from 'react';
import { Select } from '@enterprise-ui/select';

export default () => {
  const [value, setValue] = useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <Select
      label="Choose an option"
      value={value}
      onChange={(v) => setValue(v)}
      options={options}
      error={!value}
      helperText={!value ? 'Please select an option' : 'Selected: ' + value}
    />
  );
};
```

### Sizes

```tsx
import React, { useState } from 'react';
import { Select } from '@enterprise-ui/select';

export default () => {
  const [value, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Select
        label="Small"
        value={value}
        onChange={(v) => setValue(v)}
        options={options}
        size="small"
      />
      <Select
        label="Medium"
        value={value}
        onChange={(v) => setValue(v)}
        options={options}
        size="medium"
      />
      <Select
        label="Large"
        value={value}
        onChange={(v) => setValue(v)}
        options={options}
        size="large"
      />
    </div>
  );
};
```

### Full Width

```tsx
import React, { useState } from 'react';
import { Select } from '@enterprise-ui/select';

export default () => {
  const [value, setValue] = useState('option1');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  return (
    <div style={{ width: 300 }}>
      <Select
        label="Choose an option"
        value={value}
        onChange={(v) => setValue(v)}
        options={options}
        fullWidth
      />
    </div>
  );
};
```

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The value of the select | `string \| number` | - |
| onChange | Callback fired when a value is selected | `(value: string \| number) => void` | - |
| options | The options to display | `SelectOption[]` | - |
| label | The label of the select | `ReactNode` | - |
| disabled | If `true`, the select is disabled | `boolean` | `false` |
| size | The size of the select | `'small' \| 'medium' \| 'large'` | `'medium'` |
| error | If `true`, shows error state | `boolean` | `false` |
| helperText | The helper text to display | `ReactNode` | - |
| placeholder | Placeholder text when no value is selected | `string` | `'Select...'` |
| fullWidth | If `true`, takes up full width | `boolean` | `false` |
