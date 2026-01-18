# Alert

Alerts display important messages to users.

## Usage

### Severity Variants

```tsx
import React from 'react';
import { Alert } from '@enterprise-ui/alert';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert severity="success">This is a success alert.</Alert>
      <Alert severity="info">This is an info alert.</Alert>
      <Alert severity="warning">This is a warning alert.</Alert>
      <Alert severity="error">This is an error alert.</Alert>
    </div>
  );
};
```

### Variant Styles

```tsx
import React from 'react';
import { Alert } from '@enterprise-ui/alert';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert variant="filled">Filled Alert</Alert>
      <Alert variant="outlined">Outlined Alert</Alert>
      <Alert variant="standard">Standard Alert</Alert>
    </div>
  );
};
```

### With Action

```tsx
import React from 'react';
import { Alert } from '@enterprise-ui/alert';
import { Button } from '@enterprise-ui/button';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert
        severity="info"
        action={
          <Button size="small" variant="text">
            Dismiss
          </Button>
        }
      >
        This is an info alert with an action button.
      </Alert>
    </div>
  );
};
```

### With Icon

```tsx
import React from 'react';
import { Alert } from '@enterprise-ui/alert';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert severity="success" icon="✓">
        Success message with icon.
      </Alert>
      <Alert severity="error" icon="✕">
        Error message with icon.
      </Alert>
      <Alert severity="warning" icon="⚠️">
        Warning message with icon.
      </Alert>
    </div>
  );
};
```

### With Title

```tsx
import React from 'react';
import { Alert } from '@enterprise-ui/alert';

export default () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert
        severity="info"
        title="Important Notice"
      >
        This alert has a title to provide additional context.
      </Alert>
    </div>
  );
};
```

### Dismissible

```tsx
import React, { useState } from 'react';
import { Alert } from '@enterprise-ui/alert';

export default () => {
  const [open, setOpen] = useState(true);

  return (
    <Alert
      severity="info"
      open={open}
      onClose={() => setOpen(false)}
    >
      This alert can be dismissed by clicking the close button.
    </Alert>
  );
};
```

### Full Width

```tsx
import React from 'react';
import { Alert } from '@enterprise-ui/alert';

export default () => {
  return (
    <div style={{ width: '100%', maxWidth: 600 }}>
      <Alert severity="info" fullWidth>
        This is a full width alert that spans across the container.
      </Alert>
    </div>
  );
};
```

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| severity | The severity of the alert | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` |
| variant | The variant of the alert | `'filled' \| 'outlined' \| 'standard'` | `'standard'` |
| icon | The icon to display | `ReactNode` | - |
| action | The action to display | `ReactNode` | - |
| title | The title of the alert | `ReactNode` | - |
| disabled | If `true`, the alert is disabled | `boolean` | `false` |
| onClose | Callback fired when alert is closed | `() => void` | - |
| fullWidth | If `true`, takes up full width | `boolean` | `false` |
