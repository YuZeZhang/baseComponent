# Input

A basic widget for getting the user input is a text field.

## Basic Usage

<code src="./demos/basic.tsx"></code>

## Three Sizes

Input comes in three sizes: `sm`, `md` (default), and `lg`.

<code src="./demos/sizes.tsx"></code>

## Status

Add status to Input with `status`, which could be `error` or `warning`.

<code src="./demos/status.tsx"></code>

## Prefix & Suffix

Add prefix or suffix icons/text inside input.

<code src="./demos/icon.tsx"></code>

## Uncontrolled & Clear

Uncontrolled usage and allowClear.

<code src="./demos/uncontrolled.tsx"></code>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The input content value | `string` | - |
| defaultValue | The initial input content | `string` | - |
| onChange | Callback when user input | `function(e)` | - |
| onPressEnter | The callback function that is triggered when Enter key is pressed | `function(e)` | - |
| allowClear | If allow to remove input content with clear icon | `boolean` | `false` |
| status | Set validation status | `'error' \| 'warning'` | - |
| size | The size of the input box | `'lg' \| 'md' \| 'sm'` | `'md'` |
| prefix | The prefix icon for the Input | `ReactNode` | - |
| suffix | The suffix icon for the Input | `ReactNode` | - |
| disabled | Whether the input is disabled | `boolean` | `false` |
| type | The type of input | `string` | `'text'` |
