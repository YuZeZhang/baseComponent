import React, { forwardRef, useRef, useId } from 'react';
import clsx from 'clsx';
import './styles.css';

export interface CheckboxBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The id of the input element.
   */
  id?: string;
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean;
  /**
   * If `true`, the component is checked.
   */
  defaultChecked?: boolean;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the component is indeterminate.
   */
  indeterminate?: boolean;
  /**
   * The icon to display when the component is unchecked.
   */
  icon?: React.ReactNode;
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ReactNode;
  /**
   * The size of the checkbox.
   */
  checkboxSize?: 'small' | 'medium';
  /**
   * The value of the checkbox.
   */
  value?: string | number;
}

export const CheckboxBase = forwardRef<HTMLLabelElement, CheckboxBaseProps>((props, ref) => {
  const {
    id: idProp,
    checked: checkedProp,
    defaultChecked = false,
    disabled = false,
    indeterminate = false,
    icon,
    checkedIcon,
    checkboxSize = 'medium',
    onChange: onChangeProp,
    value,
    className,
    children,
    ...other
  } = props;

  const id = useId();
  const finalId = idProp || `checkbox-${id}`;

  const [checked, setCheckedState] = React.useState(defaultChecked);
  const isControlled = checkedProp !== undefined;
  const isChecked = isControlled ? checkedProp : checked;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const newChecked = event.target.checked;
    if (!isControlled) {
      setCheckedState(newChecked);
    }
    onChangeProp?.(event);
  };

  return (
    <label
      ref={ref}
      htmlFor={finalId}
      className={clsx(
        'ui-checkbox-base-root',
        `ui-checkbox-base-size-${checkboxSize}`,
        disabled && 'ui-checkbox-base-disabled',
        indeterminate && 'ui-checkbox-base-indeterminate',
        className
      )}
    >
      <input
        ref={inputRef}
        id={finalId}
        type="checkbox"
        checked={indeterminate ? false : isChecked}
        disabled={disabled}
        onChange={handleChange}
        value={value}
        className="ui-checkbox-base-input"
        {...other}
      />
      <span className="ui-checkbox-base-icon">
        {indeterminate
          ? null
          : isChecked
          ? checkedIcon || icon
          : icon}
      </span>
      {children}
    </label>
  );
});

CheckboxBase.displayName = 'CheckboxBase';
