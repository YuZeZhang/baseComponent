import React, { forwardRef, useState, useRef, useImperativeHandle, useEffect } from 'react';
import clsx from 'clsx';

export interface InputBaseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

function fixControlledValue<T>(value: T) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}

export const InputBase = forwardRef((props: InputBaseProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    className,
    style,
    value,
    defaultValue,
    onChange,
    startAdornment,
    endAdornment,
    type = 'text',
    ...other
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current!);

  const [valueState, setValueState] = useState(fixControlledValue(value ?? defaultValue));
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

  return (
    <div 
      className={clsx('ui-input-base-root', className)} 
      style={{ display: 'flex', alignItems: 'center', cursor: 'text', ...style }}
      onClick={() => inputRef.current?.focus()}
    >
      {startAdornment && (
        <div className="ui-input-base-adornment ui-input-base-adornment--start">
          {startAdornment}
        </div>
      )}
      
      <input
        {...other}
        ref={inputRef}
        type={type}
        value={valueState}
        onChange={handleChange}
        style={{
          font: 'inherit',
          letterSpacing: 'inherit',
          color: 'currentColor',
          padding: 0,
          border: 0,
          boxSizing: 'content-box',
          background: 'none',
          height: '1.4375em', // default height
          margin: 0,
          WebkitTapHighlightColor: 'transparent',
          display: 'block',
          minWidth: 0,
          width: '100%',
          outline: 0,
        }}
        className="ui-input-base-input"
      />

      {endAdornment && (
        <div className="ui-input-base-adornment ui-input-base-adornment--end">
          {endAdornment}
        </div>
      )}
    </div>
  );
});

InputBase.displayName = 'InputBase';
