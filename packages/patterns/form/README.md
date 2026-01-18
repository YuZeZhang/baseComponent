# Form

High performance Form component with data scope management.

## Usage

```tsx
import { Form, FormItem } from '@enterprise-ui/form';
import { TextField } from '@enterprise-ui/text-field';
import { Button } from '@enterprise-ui/button';

export default () => {
  return (
    <Form>
      <FormItem label="Username" required>
        <TextField placeholder="Enter username" fullWidth />
      </FormItem>
      <FormItem label="Password" required>
        <TextField type="password" placeholder="Enter password" fullWidth />
      </FormItem>
      <FormItem>
        <Button type="submit" block>Submit</Button>
      </FormItem>
    </Form>
  );
};
```

## API

### Form

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| layout | Form layout | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` |

### FormItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Label text | `ReactNode` | - |
| help | The prompt message | `ReactNode` | - |
| status | The validation status | `'success' \| 'warning' \| 'error' \| 'validating'` | - |
| required | Whether the field is required | `boolean` | `false` |
