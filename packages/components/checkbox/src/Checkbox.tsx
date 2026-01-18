import React from 'react';
import { cn } from '@enterprise-ui/utils';
import { CheckboxBase } from '@enterprise-ui/checkbox-base';
import '@enterprise-ui/theme';
import './styles.css';

export interface CheckboxProps extends Omit<React.ComponentProps<typeof CheckboxBase>, 'color' | 'checkboxSize'> {
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning' | 'default';
  /**
   * The size of the checkbox.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
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
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
}

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      className,
      color = 'primary',
      size = 'medium',
      defaultChecked = false,
      disabled = false,
      indeterminate = false,
      icon,
      checkedIcon,
      fullWidth = false,
      checked: checkedProp,
      defaultChecked: _unusedDefaultChecked,
      ...props
    },
    ref
  ) => {
    const isChecked = checkedProp !== undefined ? checkedProp : defaultChecked;

    return (
      <CheckboxBase
        ref={ref}
        checked={checkedProp}
        defaultChecked={defaultChecked}
        disabled={disabled}
        indeterminate={indeterminate}
        icon={icon}
        checkedIcon={checkedIcon}
        checkboxSize={size}
        className={cn(
          'ui-checkbox-root',
          `ui-checkbox-color-${color}`,
          `ui-checkbox-size-${size}`,
          fullWidth && 'ui-checkbox-fullWidth',
          indeterminate && 'ui-checkbox-indeterminate',
          className
        )}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
