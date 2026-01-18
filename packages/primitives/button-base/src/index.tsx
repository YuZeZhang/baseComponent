import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { TouchRipple, type TouchRippleActions } from '@enterprise-ui/touch-ripple';
import './styles.css';

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple?: boolean;
}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>((props, ref) => {
  const { 
    className, 
    type = 'button', 
    disableRipple = false, 
    children, 
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    onClick,
    ...other 
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<TouchRippleActions>(null);

  useImperativeHandle(ref, () => buttonRef.current!);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disableRipple) {
      rippleRef.current?.start(e);
    }
    onMouseDown?.(e);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    // rippleRef.current?.stop(e);
    onMouseUp?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    // rippleRef.current?.stop(e);
    onMouseLeave?.(e);
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      className={clsx('ui-btn-base', className)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...other}
    >
      {children}
      {!disableRipple && <TouchRipple ref={rippleRef} />}
    </button>
  );
});

ButtonBase.displayName = 'ButtonBase';
