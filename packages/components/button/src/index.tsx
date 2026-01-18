import React from 'react';
import { cn } from '@enterprise-ui/utils';
import { ButtonBase, type ButtonBaseProps } from '@enterprise-ui/button-base';
import { Badge, type BadgeProps } from '@enterprise-ui/badge';
import '@enterprise-ui/theme';
import './styles.css';

interface BaseButtonProps {
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: 'text' | 'contained' | 'outlined' | 'link';
  /**
   * The color of the component.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning' | 'inherit';
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode;
  /**
   * If `true`, the button will display a loading spinner.
   * @default false
   */
  loading?: boolean;
  /**
   * If `true`, the button is an icon button (square with centered icon).
   * @default false
   */
  iconButton?: boolean;
  /**
   * The URL to link to when the button is clicked.
   * If provided, renders as an `<a>` tag instead of `<button>`.
   */
  href?: string;
  /**
   * The target attribute for the link.
   */
  target?: string;
  /**
   * The badge to display on the button.
   * Can be a number (count) or boolean (show dot).
   */
  badge?: number | boolean;
  /**
   * The anchor position of the badge.
   */
  badgeAnchorOrigin?: BadgeProps['anchorOrigin'];
  /**
   * The component used for the root node.
   */
  component?: React.ElementType;
}

export type ButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> &
  BaseButtonProps &
  Omit<ButtonBaseProps, 'component'>;

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = 'text',
      color = 'primary',
      size = 'medium',
      fullWidth = false,
      startIcon,
      endIcon,
      disabled = false,
      loading = false,
      iconButton = false,
      href,
      target,
      badge,
      badgeAnchorOrigin,
      component: ComponentProp,
      children,
      ...props
    },
    ref
  ) => {
    const isIconButton = iconButton || (!children && (startIcon || endIcon));
    const isLink = !!href;

    const renderButton = () => {
      const buttonProps = {
        className: cn(
          'ui-btn-root',
          `ui-btn-variant-${variant}`,
          `ui-btn-color-${color}`,
          `ui-btn-size-${size}`,
          fullWidth && 'ui-btn-fullWidth',
          disabled && 'ui-btn-disabled',
          loading && 'ui-btn-loading',
          isIconButton && 'ui-btn-iconButton',
          className
        ),
        disabled: disabled || loading,
        ...props,
      };

      if (isLink) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            target={target}
            {...buttonProps}
          >
            {startIcon && <span className="ui-btn-startIcon">{startIcon}</span>}
            {children}
            {endIcon && <span className="ui-btn-endIcon">{endIcon}</span>}
            {loading && <span className="ui-btn-loadingOverlay"><span className="ui-btn-spinner" /></span>}
          </a>
        );
      }

      return (
        <ButtonBase
          ref={ref as React.Ref<HTMLButtonElement>}
          {...buttonProps}
        >
          {startIcon && <span className="ui-btn-startIcon">{startIcon}</span>}
          {children}
          {endIcon && <span className="ui-btn-endIcon">{endIcon}</span>}
          {loading && <span className="ui-btn-loadingOverlay"><span className="ui-btn-spinner" /></span>}
        </ButtonBase>
      );
    };

    const buttonContent = renderButton();

    if (badge !== undefined && badge !== null) {
      return (
        <Badge
          badgeContent={typeof badge === 'boolean' ? undefined : badge}
          variant={typeof badge === 'boolean' ? 'dot' : 'standard'}
          anchorOrigin={badgeAnchorOrigin}
          overlap="circular"
        >
          {buttonContent}
        </Badge>
      );
    }

    return buttonContent;
  }
);

Button.displayName = 'Button';
