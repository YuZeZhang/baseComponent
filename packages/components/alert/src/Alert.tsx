import React from 'react';
import { cn } from '@enterprise-ui/utils';
import { Button } from '@enterprise-ui/button';
import './styles.css';

export interface AlertProps {
  /**
   * The content of the alert.
   */
  children?: React.ReactNode;
  /**
   * The severity of the alert.
   * @default 'info'
   */
  severity?: 'success' | 'info' | 'warning' | 'error';
  /**
   * The variant of the alert.
   * @default 'standard'
   */
  variant?: 'filled' | 'outlined' | 'standard';
  /**
   * The icon to display.
   */
  icon?: React.ReactNode;
  /**
   * If `true`, the alert is disabled.
   */
  disabled?: boolean;
  /**
   * The action to display.
   */
  action?: React.ReactNode;
  /**
   * The title of the alert.
   */
  title?: React.ReactNode;
  /**
   * Callback fired when the alert is closed.
   */
  onClose?: () => void;
  /**
   * If `true`, the alert will take up the full width of its container.
   */
  fullWidth?: boolean;
}

const defaultIcons = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '!',
};

export const Alert: React.FC<AlertProps> = ({
  severity = 'info',
  variant = 'standard',
  icon,
  disabled = false,
  action,
  title,
  onClose,
  fullWidth = false,
  children,
}) => {
  const displayIcon = icon !== undefined ? icon : defaultIcons[severity];

  return (
    <div
      className={cn(
        'ui-alert-root',
        `ui-alert-severity-${severity}`,
        `ui-alert-variant-${variant}`,
        fullWidth && 'ui-alert-fullWidth',
        disabled && 'ui-alert-disabled'
      )}
      role="alert"
    >
      <div className="ui-alert-content">
        <div className="ui-alert-icon-container">
          {displayIcon && <span className="ui-alert-icon">{displayIcon}</span>}
        </div>
        <div className="ui-alert-message">
          {title && <div className="ui-alert-title">{title}</div>}
          {children}
        </div>
        {action && <div className="ui-alert-action">{action}</div>}
        {onClose && (
          <div className="ui-alert-close">
            <Button
              variant="text"
              size="small"
              onClick={onClose}
              iconButton
              aria-label="Close"
            >
              ✕
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';

export default Alert;
