# Button

Buttons allow users to take actions, and make choices, with a single tap.

## Usage

### Basic Button

```tsx
import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="link">Link</Button>
    </div>
  );
};
```

### Colors

```tsx
import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="outlined" color="error">Error</Button>
      <Button variant="contained" color="warning">Warning</Button>
      <Button variant="contained" color="info">Info</Button>
    </div>
  );
};
```

### Sizes

```tsx
import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button size="small" variant="contained">Small</Button>
      <Button size="medium" variant="contained">Medium</Button>
      <Button size="large" variant="contained">Large</Button>
    </div>
  );
};
```

### Loading Button

```tsx
import React, { useState } from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button loading variant="contained">Loading</Button>
      <Button loading={loading} onClick={handleClick} variant="contained">
        Click to Load
      </Button>
    </div>
  );
};
```

### Icon Button

```tsx
import React from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button iconButton>
        <span>🔍</span>
      </Button>
      <Button variant="contained" startIcon={<span>👈</span>}>
        Start Icon
      </Button>
      <Button variant="outlined" endIcon={<span>👉</span>}>
        End Icon
      </Button>
    </div>
  );
};
```

### With Badge

```tsx
import React, { useState } from 'react';
import { Button } from '@enterprise-ui/button';

export default () => {
  const [count, setCount] = useState(1);

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <Button variant="contained" badge={count} onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <Button variant="outlined" badge={true}>
        Dot Badge
      </Button>
    </div>
  );
};
```

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| variant | The variant to use | `'text' \| 'contained' \| 'outlined' \| 'link'` | `'text'` |
| color | The color of the component | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning' \| 'inherit'` | `'primary'` |
| size | The size of the component | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | If `true`, the component is disabled | `boolean` | `false` |
| fullWidth | If `true`, the button will take up the full width of its container | `boolean` | `false` |
| startIcon | Element placed before the children | `ReactNode` | - |
| endIcon | Element placed after the children | `ReactNode` | - |
| loading | If `true`, the button will display a loading spinner | `boolean` | `false` |
| iconButton | If `true`, the button is an icon button (square with centered icon) | `boolean` | `false` |
| href | The URL to link to when the button is clicked. If provided, renders as an `<a>` tag | `string` | - |
| target | The target attribute for the link | `string` | - |
| badge | The badge to display on the button. Can be a number (count) or boolean (show dot) | `number \| boolean` | - |
| badgeAnchorOrigin | The anchor position of the badge | `{ vertical: 'top' \| 'bottom', horizontal: 'left' \| 'right' }` | - |
| component | The component used for the root node | `React.ElementType` | - |
