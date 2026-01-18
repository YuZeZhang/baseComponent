import React, { forwardRef, cloneElement, ReactElement, isValidElement } from 'react';
import { cn } from '@enterprise-ui/utils';
import './styles.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The content rendered within the badge.
   */
  badgeContent?: React.ReactNode;
  /**
   * The badge will be added relative to this node.
   */
  children: ReactElement;
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible?: boolean;
  /**
   * Max count to show.
   * @default 99
   */
  max?: number;
  /**
   * Wrapped shape variants.
   * @default 'rectangular'
   */
  variant?: 'dot' | 'standard';
  /**
   * The anchor position of the badge.
   * @default { vertical: 'top', horizontal: 'right' }
   */
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  /**
   * If `true`, the badge will show a zero count.
   * @default false
   */
  showZero?: boolean;
  /**
   * The overlap of the badge.
   * @default 'rectangular'
   */
  overlap?: 'rectangular' | 'circular';
  /**
   * The color of the badge.
   * @default 'error'
   */
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  /**
   * The className to apply to the badge.
   */
  className?: string;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    badgeContent,
    children,
    invisible = false,
    max = 99,
    showZero = false,
    variant = 'standard',
    anchorOrigin = { vertical: 'top', horizontal: 'right' },
    overlap = 'rectangular',
    color = 'error',
    className,
    ...other
  } = props;

  let displayValue: React.ReactNode = badgeContent;

  if (variant === 'standard' && typeof badgeContent === 'number' && badgeContent > max) {
    displayValue = `${max}+`;
  }

  const isDot = variant === 'dot';
  const isHidden = invisible || (badgeContent === 0 && !showZero && !isDot);

  return (
    <span
      ref={ref}
      className={cn(
        'ui-badge-root',
        `ui-badge-anchorOrigin-${anchorOrigin.vertical}-${anchorOrigin.horizontal}`,
        `ui-badge-overlap-${overlap}`,
        className
      )}
      {...other}
    >
      {cloneElement(children as ReactElement, {
        className: cn('ui-badge-child', (children as ReactElement).props.className),
      })}
      <span
        className={cn(
          'ui-badge-badge',
          `ui-badge-variant-${variant}`,
          `ui-badge-color-${color}`,
          isHidden && 'ui-badge-invisible'
        )}
        aria-hidden={isHidden}
      >
        {displayValue}
      </span>
    </span>
  );
});

Badge.displayName = 'Badge';
