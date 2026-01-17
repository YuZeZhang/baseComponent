# Button

Primary UI component for user interaction.

## Basic Button

The Button comes with multiple variants: primary, default, outline, ghost, and danger.

<code src="./demos/basic.tsx"></code>

## Sizes

For larger or smaller buttons, use the `size` prop.

<code src="./demos/sizes.tsx"></code>

## Buttons with icons and label

Use composition to add icons to buttons.

<code src="./demos/icons.tsx"></code>

## Loading

Use `loading` prop to set button in a loading state and disable interactions.

<code src="./demos/loading.tsx"></code>

## Interactive Playground

<code src="./demos/interactive.tsx"></code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| variant | Visual style | `'primary' \| 'default' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` |
| size | Size of the button | `'sm' \| 'md' \| 'lg'` | `'md'` |
| shape | Shape of the button | `'default' \| 'round' \| 'circle'` | `'default'` |
| loading | Set the loading status | `boolean` | `false` |
| block | Option to fit button width to its parent width | `boolean` | `false` |
| disabled | Disabled state of button | `boolean` | `false` |
