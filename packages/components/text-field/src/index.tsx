import React, { forwardRef, useState, useEffect } from 'react';
import { InputBase, type InputBaseProps } from '@enterprise-ui/input-base';
import { cn } from '@enterprise-ui/utils';
import '@enterprise-ui/theme';
import './styles.css';

export interface TextFieldProps extends Omit<InputBaseProps, 'onChange'> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label,
    helperText,
    error = false,
    fullWidth = false,
    variant = 'outlined',
    className,
    style,
    value,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    disabled,
    startAdornment,
    id: idProp,
    ...other
  } = props;

  const [focused, setFocused] = useState(false);
  // We need to track value emptiness for label shrinking
  const [hasValue, setHasValue] = useState(() => {
    const v = value ?? defaultValue;
    return v !== undefined && v !== null && v !== '';
  });

  useEffect(() => {
    if (value !== undefined) {
      setHasValue(value !== null && value !== '');
    }
  }, [value]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) {
      setHasValue(e.target.value !== '');
    }
    onChange?.(e);
  };

  // Generate a random ID if not provided, for label association
  // In a real app use a stable ID hook
  const inputId = idProp || `text-field-${Math.random().toString(36).substr(2, 9)}`;
  const labelShrunk = focused || hasValue || startAdornment;

  return (
    <div
      className={cn(
        'ui-text-field-root',
        `ui-text-field-${variant}`,
        fullWidth && 'ui-text-field-full-width',
        className
      )}
      style={style}
    >
      <div
        className={cn(
          'ui-text-field-wrapper',
          focused && 'ui-text-field-focused',
          error && 'ui-text-field-error',
          disabled && 'ui-text-field-disabled'
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'ui-text-field-label',
              labelShrunk && 'ui-text-field-label-shrunk',
              focused && 'ui-text-field-label-focused',
              error && 'ui-text-field-label-error'
            )}
          >
            {label}
          </label>
        )}
        
        <div className="ui-text-field-input-container">
           <InputBase
            ref={ref}
            id={inputId}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            startAdornment={startAdornment}
            className="ui-text-field-input-base"
            {...other}
          />
          {variant === 'outlined' && (
            <fieldset aria-hidden="true" className={cn('ui-text-field-notched-outline')}>
               <legend className={cn('ui-text-field-legend', labelShrunk ? 'ui-text-field-legend-shrunk' : '')}>
                  {label ? <span>{label}</span> : <span className="notranslate">&#8203;</span>}
               </legend>
            </fieldset>
          )}
        </div>
      </div>
      
      {helperText && (
        <p className={cn('ui-text-field-helper-text', error && 'ui-text-field-helper-text-error')}>
          {helperText}
        </p>
      )}
    </div>
  );
});

TextField.displayName = 'TextField';
