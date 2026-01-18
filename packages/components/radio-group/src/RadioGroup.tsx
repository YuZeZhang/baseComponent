import React from 'react';
import { cn } from '@enterprise-ui/utils';
import './styles.css';

export interface RadioGroupContextValue {
  name: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
}

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The value of the radio button.
   */
  value?: string | number;
  /**
   * The label to display.
   */
  label?: React.ReactNode;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The size of the radio button.
   */
  size?: 'small' | 'medium';
}

export const RadioGroupContext = React.createContext<RadioGroupContextValue>({
  name: '',
});

export const Radio: React.FC<RadioProps> = ({ 
  value, 
  label, 
  disabled = false, 
  size = 'medium',
  className,
  ...props 
}) => {
  const { name, onChange } = React.useContext(RadioGroupContext);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event, value!);
  };

  return (
    <label className={cn('ui-radio-label', className)}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={cn(
          'ui-radio-input',
          `ui-radio-size-${size}`,
          disabled && 'ui-radio-disabled'
        )}
        {...props}
      />
      <span className={cn('ui-radio-circle', `ui-radio-size-${size}`)} />
      {label && <span className="ui-radio-label-text">{label}</span>}
    </label>
  );
};

export interface RadioGroupProps {
  /**
   * The name of the radio group.
   */
  name: string;
  /**
   * The value of the currently selected radio.
   */
  value?: string | number;
  /**
   * Callback fired when a radio is selected.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * The size of the radio buttons.
   */
  size?: 'small' | 'medium';
  /**
   * The direction of the radio group.
   */
  row?: boolean;
  /**
   * The label of the radio group.
   */
  label?: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  value: selectedValue, 
  onChange, 
  disabled = false, 
  size = 'medium', 
  row = false,
  label,
  children 
}) => {
  const contextValue: RadioGroupContextValue = {
    name,
    value: selectedValue,
    onChange,
  };

  return (
    <div className={cn('ui-radio-group', row && 'ui-radio-group-row')}>
      {label && <span className="ui-radio-group-label">{label}</span>}
      <RadioGroupContext.Provider value={contextValue}>
        {children}
      </RadioGroupContext.Provider>
    </div>
  );
};

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
