import React, { forwardRef } from 'react';
import { cn } from '@enterprise-ui/utils';
import { InputBase, type InputBaseProps } from '@enterprise-ui/input-base';
import '@enterprise-ui/theme';
import './styles.css';

export interface InputProps extends Omit<InputBaseProps, 'onChange'> {
  size?: 'sm' | 'md' | 'lg';
  status?: 'default' | 'error' | 'warning' | 'success';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean | { clearIcon?: React.ReactNode };
  onClear?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    style,
    size = 'md',
    status = 'default',
    prefix,
    suffix,
    allowClear,
    onClear,
    value,
    disabled,
    ...rest
  } = props;

  // Logic for clear icon visibility could be moved to a hook or kept here if simple
  // For now, we delegate most logic to InputBase, but handle visual wrapping here.
  
  // Note: InputBase handles the raw input logic. 
  // The 'Input' component here adds the visual wrapper (border, background, size, status).
  
  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClear?.();
    // In a real implementation, we'd need to trigger a change event with empty value
    // This requires controlled state management which InputBase handles partly.
    // For this refactor step, we'll keep it simple.
  };

  const clearIcon = allowClear && !disabled && value ? (
    <span 
      className="ui-input-clear-icon" 
      onMouseDown={handleClear} 
      role="button" 
      aria-label="clear"
    >
       {typeof allowClear === 'object' && allowClear.clearIcon ? allowClear.clearIcon : '×'}
    </span>
  ) : null;

  return (
    <InputBase
      ref={ref}
      {...rest}
      value={value}
      disabled={disabled}
      className={cn(
        'ui-input-wrapper',
        `ui-input-wrapper--size-${size}`,
        status !== 'default' && `ui-input-wrapper--status-${status}`,
        disabled && 'ui-input-wrapper--disabled',
        // focused state handling needs coordination with InputBase onFocus/onBlur
        // or using :focus-within in CSS
        className
      )}
      style={style}
      startAdornment={prefix ? <span className="ui-input-prefix">{prefix}</span> : null}
      endAdornment={
        <>
          {clearIcon}
          {suffix ? <span className="ui-input-suffix">{suffix}</span> : null}
        </>
      }
    />
  );
});

Input.displayName = 'Input';
