import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './index';

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Type" />);
    expect(screen.getByPlaceholderText('Type')).toBeInTheDocument();
  });

  it('clearable input', () => {
    render(<Input defaultValue="abc" allowClear />);
    const clear = screen.getByLabelText('clear');
    fireEvent.click(clear);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('');
  });
});
