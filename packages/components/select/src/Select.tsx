import React, { useState, useRef, useEffect, useId } from 'react';
import { cn } from '@enterprise-ui/utils';
import { Portal } from '@enterprise-ui/portal';
import './styles.css';

export interface SelectOption {
  value: string | number;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * The value of the select.
   */
  value?: string | number;
  /**
   * Callback fired when a value is selected.
   */
  onChange?: (value: string | number) => void;
  /**
   * The options to display.
   */
  options: SelectOption[];
  /**
   * The label of the select.
   */
  label?: React.ReactNode;
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the select will take up the full width of its container.
   */
  fullWidth?: boolean;
  /**
   * The error text to display.
   */
  error?: boolean;
  /**
   * The helper text to display.
   */
  helperText?: React.ReactNode;
  /**
   * The size of the select.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Placeholder text when no value is selected.
   */
  placeholder?: string;
  /**
   * If `true`, multiple selection is allowed.
   */
  multiple?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  value: selectedValue,
  onChange,
  options = [],
  label,
  disabled = false,
  fullWidth = false,
  error = false,
  helperText,
  size = 'medium',
  placeholder = 'Select...',
  multiple = false,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const selectedOption = options.find(opt => opt.value === selectedValue);
  const displayValue = selectedOption?.label || placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});

  const updateMenuPosition = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setMenuStyle({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        position: 'absolute',
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      updateMenuPosition();
      window.addEventListener('resize', updateMenuPosition);
      window.addEventListener('scroll', updateMenuPosition, true);
    }
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition, true);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string | number) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const isOptionSelected = (optionValue: string | number) => {
    if (multiple) {
      return Array.isArray(selectedValue) && (selectedValue as (string | number)[]).includes(optionValue);
    }
    return selectedValue === optionValue;
  };

  return (
    <div className={cn('ui-select-container', fullWidth && 'ui-select-fullWidth', className)}>
      {label && <label className="ui-select-label">{label}</label>}
      <button
        ref={selectRef}
        type="button"
        disabled={disabled}
        onClick={handleToggle}
        className={cn(
          'ui-select-trigger',
          `ui-select-size-${size}`,
          isOpen && 'ui-select-open',
          disabled && 'ui-select-disabled',
          error && 'ui-select-error'
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        id={`select-${id}`}
        {...props}
      >
        {displayValue}
        <span className="ui-select-arrow" />
      </button>
      {isOpen && (
        <Portal>
          <div
            ref={menuRef}
            className={cn('ui-select-menu', `ui-select-size-${size}`)}
            style={menuStyle}
            role="listbox"
            aria-labelledby={`select-${id}`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={cn(
                  'ui-select-option',
                  option.disabled && 'ui-select-option-disabled',
                  isOptionSelected(option.value) && 'ui-select-option-selected'
                )}
                onClick={() => !option.disabled && handleSelect(option.value)}
                role="option"
                aria-selected={isOptionSelected(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </Portal>
      )}
      {helperText && <span className={cn('ui-select-helper', error && 'ui-select-error-text')}>{helperText}</span>}
    </div>
  );
};

Select.displayName = 'Select';

export default Select;
