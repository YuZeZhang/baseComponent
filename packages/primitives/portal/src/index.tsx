import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement | (() => HTMLElement | null) | null;
  disablePortal?: boolean;
}

export const Portal: React.FC<PortalProps> = ({ children, container, disablePortal = false }) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (disablePortal) return;

    const getContainer = () => {
      if (typeof container === 'function') return container();
      if (container) return container;
      if (typeof document !== 'undefined') return document.body;
      return null;
    };

    setMountNode(getContainer());
  }, [container, disablePortal]);

  if (disablePortal) {
    return <>{children}</>;
  }

  return mountNode ? createPortal(children, mountNode) : null;
};
