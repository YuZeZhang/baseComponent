import React, { useEffect, useRef } from 'react';
import { Portal } from '@enterprise-ui/portal';
import { cn } from '@enterprise-ui/utils';
import './styles.css';

export interface OverlayProps {
  open?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  backdropClassName?: string;
  disableBackdropClick?: boolean;
  disableEscapeKeyDown?: boolean;
  hasBackdrop?: boolean;
  container?: HTMLElement | (() => HTMLElement | null) | null;
}

export const Overlay: React.FC<OverlayProps> = ({
  open,
  onClose,
  children,
  className,
  backdropClassName,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  hasBackdrop = true,
  container,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open || disableEscapeKeyDown) return;
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock scroll
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Unlock scroll
    };
  }, [open, disableEscapeKeyDown, onClose]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    if (!disableBackdropClick) {
      onClose?.();
    }
  };

  if (!open) return null;

  return (
    <Portal container={container}>
      <div
        className={cn('ui-overlay-root', className)}
        ref={overlayRef}
      >
        {hasBackdrop && (
          <div
            className={cn('ui-overlay-backdrop', backdropClassName)}
            onClick={handleBackdropClick}
            aria-hidden="true"
          />
        )}
        <div className="ui-overlay-content">
          {children}
        </div>
      </div>
    </Portal>
  );
};
