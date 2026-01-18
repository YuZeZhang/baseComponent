import React, { createContext, useContext } from 'react';
import { cn } from '@enterprise-ui/utils';
import '@enterprise-ui/theme';
import './styles.css';

interface FormContextType {
  layout: 'horizontal' | 'vertical' | 'inline';
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
}

const FormContext = createContext<FormContextType>({
  layout: 'vertical',
});

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  layout?: 'horizontal' | 'vertical' | 'inline';
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
}

export const Form: React.FC<FormProps> = ({
  layout = 'vertical',
  labelCol,
  wrapperCol,
  className,
  children,
  ...props
}) => {
  return (
    <FormContext.Provider value={{ layout, labelCol, wrapperCol }}>
      <form className={cn('ui-form', `ui-form-${layout}`, className)} {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export interface FormItemProps {
  label?: React.ReactNode;
  help?: React.ReactNode;
  status?: 'error' | 'warning' | 'success' | 'validating';
  required?: boolean;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}

export const FormItem: React.FC<FormItemProps> = ({
  label,
  help,
  status,
  required,
  htmlFor,
  className,
  children,
}) => {
  const { layout } = useContext(FormContext);

  return (
    <div
      className={cn(
        'ui-form-item',
        `ui-form-item-${layout}`,
        status && `ui-form-item-status-${status}`,
        className
      )}
    >
      {label && (
        <div className="ui-form-item-label">
          <label htmlFor={htmlFor} className={cn(required && 'ui-form-item-required')}>
            {label}
          </label>
        </div>
      )}
      <div className="ui-form-item-control">
        <div className="ui-form-item-control-input">
          {children}
        </div>
        {help && <div className="ui-form-item-explain">{help}</div>}
      </div>
    </div>
  );
};
