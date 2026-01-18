import React from 'react';
import { cn } from '@enterprise-ui/utils';
import './styles.css';

export interface RadioGroupContextValue {
  name: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  row?: boolean;
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning' | 'default';
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string | number;
  label?: React.ReactNode;
  disabled?: boolean;
  radioSize?: 'small' | 'medium';
  error?: boolean;
  labelPlacement?: 'top' | 'start' | 'end' | 'bottom';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning' | 'default';
}

export const RadioGroupContext = React.createContext<RadioGroupContextValue>({
  name: '',
  defaultValue: undefined,
  onChange: undefined,
  disabled: undefined,
  required: undefined,
  error: undefined,
  row: false,
  color: 'primary',
});

export const Radio: React.FC<RadioProps> = ({ 
  value, 
  label, 
  disabled = false, 
  radioSize = 'medium',
  error = false,
  labelPlacement,
  color,
  className,
  ...props 
}) => {
  const { 
    name: contextName, 
    value: contextValue, 
    defaultValue: contextDefaultValue,
    onChange: contextOnChange, 
    disabled: contextDisabled,
    required: contextRequired,
    error: contextError,
    row: contextRow,
    color: contextColor,
  } = React.useContext(RadioGroupContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || contextDisabled) {
      return;
    }
    contextOnChange?.(event, value!);
  };

  const isDisabled = disabled || contextDisabled;
  const hasError = error || contextError;
  const displayColor = color || contextColor || 'default';

  return (
    <label
      className={cn(
        'ui-radio-label',
        `ui-radio-label-placement-${labelPlacement || 'end'}`,
        isDisabled && 'ui-radio-disabled',
        hasError && 'ui-radio-error',
        `ui-radio-color-${displayColor}`,
        `ui-radio-size-${radioSize}`,
        className
      )}
    >
      <input
        type="radio"
        name={contextName}
        value={value}
        disabled={isDisabled}
        onChange={handleChange}
        checked={contextValue === value || contextDefaultValue === value}
        required={contextRequired}
        className={cn(
          'ui-radio-input',
          `ui-radio-size-${radioSize}`,
          `ui-radio-color-${displayColor}`,
          isDisabled && 'ui-radio-disabled',
          hasError && 'ui-radio-error'
        )}
        aria-invalid={hasError}
        aria-describedby={props['aria-describedby']}
        {...props}
      />
      <span className={cn('ui-radio-circle', `ui-radio-size-${radioSize}`, `ui-radio-color-${displayColor}`, isDisabled && 'ui-radio-disabled')} />
      {label && labelPlacement !== 'bottom' && (
        <span className={cn('ui-radio-label-text', `ui-radio-label-placement-${labelPlacement}`)}>
          {label}
        </span>
      )}
    </label>
  );
};

export const FieldHelper: React.FC<{ error?: boolean; helperText?: React.ReactNode }> = ({ error, helperText }) => {
  if (!helperText && !error) {
    return null;
  }

  return (
    <div className={cn('ui-radio-group-helper', error && 'ui-radio-group-helper-error')}>
      {helperText}
      {error && <span className="ui-radio-group-helper-error-icon">✕</span>}
    </div>
  );
};

export const RadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  value: selectedValue, 
  defaultValue, 
  onChange, 
  disabled = false, 
  required = false, 
  error = false, 
  row = false, 
  label,
  helperText,
  color = 'primary',
  children 
}) => {
  const contextValue: RadioGroupContextValue = {
    name,
    value: selectedValue || defaultValue,
    defaultValue,
    onChange,
    disabled,
    required,
    error,
    row,
    color,
  };

  return (
    <div className={cn('ui-radio-group', row && 'ui-radio-group-row', color && `ui-radio-group-color-${color}`)}>
      {label && (
        <div className="ui-radio-group-label">
          {label}
        </div>
      )}
      <RadioGroupContext.Provider value={contextValue}>
        {children}
      </RadioGroupContext.Provider>
      {helperText && <FieldHelper error={error} helperText={helperText} />}
    </div>
  );
};

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
