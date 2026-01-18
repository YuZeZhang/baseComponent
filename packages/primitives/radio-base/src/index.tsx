import React, { forwardRef, useRef, useId, useImperativeHandle } from 'react';
import clsx from 'clsx';
import './styles.css';

export interface RadioBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The id of input element.
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
   * The value of the radio button.
   */
  value?: string | number;
  /**
   * The name of the radio button group.
   */
  name?: string;
  /**
   * The size of the radio button.
   */
  radioSize?: 'small' | 'medium';
  /**
   * Callback fired when the state changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  /**
   * The input component class name.
   */
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked' | 'onChange' | 'name' | 'value' | 'id' | 'disabled'>;
  /**
   * The ref attached to the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
}

export interface RadioBaseActions {
  focus: () => void;
}

export const RadioBase = forwardRef<HTMLLabelElement, RadioBaseProps>((props, ref) => {
  const {
    id: idProp,
    checked: checkedProp,
    defaultChecked = false,
    disabled = false,
    value,
    name: nameProp,
    radioSize = 'medium',
    onChange: onChangeProp,
    inputProps,
    inputRef: inputRefProp,
    className,
    children,
    ...other
  } = props;

  const id = useId();
  const finalId = idProp || `radio-${id}`;
  const finalName = nameProp || `radio-group-${id}`;

  const [checked, setCheckedState] = React.useState(defaultChecked);
  const isControlled = checkedProp !== undefined;
  const isChecked = isControlled ? checkedProp : checked;

  const internalInputRef = useRef<HTMLInputElement>(null);
  const inputRef = inputRefProp || internalInputRef;

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (typeof inputRef.current?.focus === 'function') {
        inputRef.current.focus();
      }
    },
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }

    const newChecked = event.target.checked;
    if (!isControlled) {
      setCheckedState(newChecked);
    }
    onChangeProp?.(event, newChecked);
  };

  return (
    <label
      ref={ref}
      htmlFor={finalId}
      className={clsx(
        'ui-radio-base-root',
        `ui-radio-base-size-${radioSize}`,
        disabled && 'ui-radio-base-disabled',
        className
      )}
    >
      <span className="ui-radio-base-radio">
        <input
          ref={inputRef}
          id={finalId}
          type="radio"
          name={finalName}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          value={value}
          className="ui-radio-base-input"
          {...inputProps}
          {...other}
        />
        <span className="ui-radio-base-icon" />
      </span>
      {children}
    </label>
  );
});

RadioBase.displayName = 'RadioBase';
