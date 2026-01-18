import React, { forwardRef, useImperativeHandle, useState, useCallback, useRef, useEffect } from 'react';
import './styles.css';

export interface TouchRippleActions {
  start: (event?: React.SyntheticEvent) => void;
  stop: (event?: React.SyntheticEvent) => void;
}

export interface TouchRippleProps {
  className?: string;
  center?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const TouchRipple = forwardRef<TouchRippleActions, TouchRippleProps>((props, ref) => {
  const { className, center: centerProp = false } = props;
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextKey = useRef(0);
  const containerRef = useRef<HTMLSpanElement>(null);

  const start = useCallback((event?: React.SyntheticEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if (centerProp) {
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    } else if (event && (event as any).clientX) {
      clientX = (event as any).clientX;
      clientY = (event as any).clientY;
    } else if (event && (event as any).touches && (event as any).touches.length > 0) {
      clientX = (event as any).touches[0].clientX;
      clientY = (event as any).touches[0].clientY;
    } else {
      // Fallback to center
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    }

    const rippleX = clientX - rect.left;
    const rippleY = clientY - rect.top;
    
    // Calculate size
    const sizeX = Math.max(Math.abs((container ? container.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
    const sizeY = Math.max(Math.abs((container ? container.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
    const rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);

    setRipples((oldRipples) => [
      ...oldRipples,
      {
        id: nextKey.current++,
        x: rippleX - rippleSize / 2,
        y: rippleY - rippleSize / 2,
        size: rippleSize,
      },
    ]);
  }, [centerProp]);

  const stop = useCallback(() => {
    // In a real implementation we might want to fade out the last ripple
    // For simplicity, we just clear ripples after animation completes via CSS
    // But here we rely on the onAnimationEnd to remove them
  }, []);

  // Expose methods
  useImperativeHandle(ref, () => ({
    start,
    stop,
  }));

  const handleAnimationEnd = (id: number) => {
    setRipples((oldRipples) => oldRipples.filter((r) => r.id !== id));
  };

  return (
    <span className={`ui-touch-ripple-root ${className || ''}`} ref={containerRef}>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ui-touch-ripple-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
          onAnimationEnd={() => handleAnimationEnd(ripple.id)}
        >
          <span className="ui-touch-ripple-child" />
        </span>
      ))}
    </span>
  );
});

TouchRipple.displayName = 'TouchRipple';
