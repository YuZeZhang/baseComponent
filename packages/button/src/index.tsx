import React from 'react';
import { cn } from '@base-ui/utils';
import '@base-ui/theme';
import './styles.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  block?: boolean;
  shape?: 'default' | 'round' | 'circle';
}

const Spinner = () => (
  <svg className="ui-btn-spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, block = false, shape = 'default', children, ...props }, ref) => {
    const classes = cn(
      'ui-btn',
      `ui-btn--${variant}`,
      `ui-btn--size-${size}`,
      shape !== 'default' && `ui-btn--${shape}`,
      block && 'ui-btn--block',
      loading && 'ui-btn--loading',
      className
    );

    return (
      <button ref={ref} className={classes} disabled={loading || props.disabled} {...props}>
        {loading && <Spinner />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
