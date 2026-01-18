# Modal

Modal dialogs.

## Usage

```tsx
import { Modal } from '@enterprise-ui/modal';
import { Button } from '@enterprise-ui/button';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal 
        open={open} 
        onClose={() => setOpen(false)}
        title="Basic Modal"
        onOk={() => setOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
```

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the modal is visible | `boolean` | - |
| onClose | Callback when close | `() => void` | - |
| title | Title of the modal | `ReactNode` | - |
| footer | Footer of the modal | `ReactNode` | - |
| width | Width of the modal | `string | number` | `520` |
| closable | Whether to show close button | `boolean` | `true` |
| maskClosable | Whether to close when clicking mask | `boolean` | `true` |
| onOk | Callback when clicking OK button | `() => void` | - |
