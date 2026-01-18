# TextField

TextFields let users enter and edit text.

## Usage

```tsx
import { TextField } from '@enterprise-ui/text-field';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
      <TextField label="Standard" variant="standard" />
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField label="Error" error helperText="Incorrect entry." />
    </div>
  );
};
```

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | The label content | `ReactNode` | - |
| variant | The variant to use | `'outlined' \| 'filled' \| 'standard'` | `'outlined'` |
| error | If true, the label should be displayed in an error state | `boolean` | `false` |
| helperText | The helper text content | `ReactNode` | - |
| fullWidth | If true, the input will take up the full width of its container | `boolean` | `false` |
