import { useRef, useState, useCallback, useEffect } from 'react';

interface TiltState {
  rotateX: number;
  rotateY: number;
  scale: number;
}

interface UseTiltOptions {
  maxTilt?: number;
  scale?: number;
  transitionSpeed?: number;
}

export const useTilt = (options: UseTiltOptions = {}) => {
  const { maxTilt = 4, scale = 1.01, transitionSpeed = 400 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (normalized -1 to 1)
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    
    // Apply tilt (inverted for natural feel)
    setTilt({
      rotateX: -percentY * maxTilt,
      rotateY: percentX * maxTilt,
      scale: scale,
    });
  }, [maxTilt, scale, isTouchDevice]);

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    setIsHovered(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  }, [isTouchDevice]);

  const style: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
    transition: isHovered 
      ? `transform ${transitionSpeed / 4}ms ease-out` 
      : `transform ${transitionSpeed}ms ease-out`,
  };

  return {
    ref,
    style,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    isHovered,
    isTouchDevice,
  };
};
