import React from 'react';
import { Overlay } from '@enterprise-ui/overlay';
import { cn } from '@enterprise-ui/utils';
import { Button } from '@enterprise-ui/button';
import '@enterprise-ui/theme';
import './styles.css';

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  width?: number | string;
  className?: string;
  closable?: boolean;
  maskClosable?: boolean;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onOk?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  footer,
  children,
  width = 520,
  className,
  closable = true,
  maskClosable = true,
  okText = 'OK',
  cancelText = 'Cancel',
  onOk,
}) => {
  const handleCancel = () => {
    onClose?.();
  };

  const handleOk = () => {
    onOk?.();
  };

  const defaultFooter = (
    <div className="ui-modal-footer-default">
      <Button variant="outline" onClick={handleCancel}>
        {cancelText}
      </Button>
      <Button variant="primary" onClick={handleOk} style={{ marginLeft: 8 }}>
        {okText}
      </Button>
    </div>
  );

  return (
    <Overlay
      open={open}
      onClose={onClose}
      disableBackdropClick={!maskClosable}
      className="ui-modal-root"
    >
      <div 
        className={cn('ui-modal-content', className)}
        style={{ width }}
      >
        {closable && (
          <button className="ui-modal-close" onClick={handleCancel}>
            <span className="ui-modal-close-x">×</span>
          </button>
        )}
        
        {title && (
          <div className="ui-modal-header">
            <div className="ui-modal-title">{title}</div>
          </div>
        )}
        
        <div className="ui-modal-body">
          {children}
        </div>

        {footer !== null && (
          <div className="ui-modal-footer">
            {footer ?? defaultFooter}
          </div>
        )}
      </div>
    </Overlay>
  );
};
