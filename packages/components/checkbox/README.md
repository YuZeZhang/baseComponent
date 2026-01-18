# Checkbox

Checkboxes allow users to select one or more items from a set.

## Usage

### Basic Checkbox

```tsx
import Checkbox from '@enterprise-ui/checkbox';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Checkbox label="Option 1" defaultChecked />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" disabled />
    </div>
  );
};
```

### Controlled Checkbox

```tsx
import React, { useState } from 'react';
import { Checkbox } from '@enterprise-ui/checkbox';

export default () => {
  const [checked, setChecked] = useState(false);

  return <Checkbox label="Controlled" checked={checked} onChange={() => setChecked(!checked)} />;
};
```

### Colors

```tsx
import React from 'react';
import { Checkbox } from '@enterprise-ui/checkbox';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Checkbox label="Primary" color="primary" defaultChecked />
      <Checkbox label="Secondary" color="secondary" defaultChecked />
      <Checkbox label="Error" color="error" defaultChecked />
      <Checkbox label="Success" color="success" defaultChecked />
      <Checkbox label="Info" color="info" defaultChecked />
      <Checkbox label="Warning" color="warning" defaultChecked />
    </div>
  );
};
```

### Indeterminate

```tsx
import React, { useState } from 'react';
import { Checkbox } from '@enterprise-ui/checkbox';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  const indeterminate = checked1 !== checked2 || checked2 !== checked3;

  return (
    <div>
      <Checkbox
        label="Parent"
        checked={checked1 && checked2 && checked3}
        indeterminate={indeterminate}
        onChange={(e, checked) => {
          setChecked1(checked);
          setChecked2(checked);
          setChecked3(checked);
        }}
      />
    </div>
  );
};
```

### Sizes

```tsx
import React from 'react';
import { Checkbox } from '@enterprise-ui/checkbox';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Checkbox label="Small" size="small" defaultChecked />
      <Checkbox label="Medium" size="medium" defaultChecked />
    </div>
  );
};
```

### Full Width

```tsx
import React from 'react';
import { Checkbox } from '@enterprise-ui/checkbox';

export default () => {
  return (
    <div style={{ width: 300 }}>
      <Checkbox label="Full Width Checkbox" fullWidth defaultChecked />
    </div>
  );
};
```

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | The color of the component | `'primary' \| 'secondary' \| 'error' \| 'success' \| 'info' \| 'warning' \| 'default'` | `'primary'` |
| checked | If `true`, the component is checked | `boolean` | `false` |
| defaultChecked | If `true`, the component is checked | `boolean` | `false` |
| disabled | If `true`, the component is disabled | `boolean` | `false` |
| indeterminate | If `true`, the component is indeterminate | `boolean` | `false` |
| size | The size of the checkbox | `'small' \| 'medium'` | `'medium'` |
| icon | The icon to display when unchecked | `ReactNode` | - |
| checkedIcon | The icon to display when checked | `ReactNode` | - |
| fullWidth | If `true`, takes up full width | `boolean` | `false` |
| label | The label element | `ReactNode` | - |
