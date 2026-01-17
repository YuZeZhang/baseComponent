import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';
import { cn } from '@base-ui/utils';
import '@base-ui/theme';
import './styles.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'onChange' | 'onInput'> {
  size?: 'sm' | 'md' | 'lg';
  status?: 'default' | 'error' | 'warning' | 'success';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean | { clearIcon?: React.ReactNode };
  onClear?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
}

function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const {
    className,
    style,
    size = 'md',
    status = 'default',
    prefix,
    suffix,
    allowClear,
    onClear,
    onChange,
    onPressEnter,
    onKeyDown,
    onFocus,
    onBlur,
    disabled,
    value,
    defaultValue,
    type = 'text',
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!);

  const [valueState, setValueState] = useState(fixControlledValue(value ?? defaultValue));
  const [focused, setFocused] = useState(false);

  const controlled = value !== undefined;

  useEffect(() => {
    if (controlled) {
      setValueState(fixControlledValue(value));
    }
  }, [value, controlled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!controlled) {
      setValueState(newValue);
    }
    onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const newValue = '';
    if (!controlled) {
      setValueState(newValue);
    }
    
    // Trigger change event manually
    if (inputRef.current) {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
      nativeInputValueSetter?.call(inputRef.current, newValue);
      
      const event = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(event);
    }

    onClear?.();
    inputRef.current?.focus();
  };

  const isShowClear = allowClear && !disabled && valueState;

  return (
    <span
      className={cn(
        'ui-input-wrapper',
        `ui-input-wrapper--size-${size}`,
        status !== 'default' && `ui-input-wrapper--status-${status}`,
        disabled && 'ui-input-wrapper--disabled',
        focused && 'ui-input-wrapper--focused',
        className
      )}
      style={style}
    >
      {prefix && <span className="ui-input-prefix">{prefix}</span>}
      <input
        {...rest}
        ref={inputRef}
        className="ui-input"
        disabled={disabled}
        type={type}
        value={valueState}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isShowClear && (
        <span className="ui-input-clear-icon" onMouseDown={handleReset} role="button" aria-label="clear">
           {typeof allowClear === 'object' && allowClear.clearIcon ? allowClear.clearIcon : '×'}
        </span>
      )}
      {suffix && <span className="ui-input-suffix">{suffix}</span>}
    </span>
  );
});

Input.displayName = 'Input';
