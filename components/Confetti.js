import { useCallback, useEffect, useRef } from 'react';

import ReactCanvasConfetti from 'react-canvas-confetti';

export default function Confetti() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback(instance => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 1 },
        particleCount: Math.floor(1400 * particleRatio),
        gravity: 0.06,
        ticks: 370
      });
  }, []);

  useEffect(() => fire(), []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 106,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 360
    });

    makeShot(0.35, {
      spread: 200,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 220,
      startVelocity: 25,
      scalar: 0.5
    });

    makeShot(0.1, {
      spread: 150,
      startVelocity: 45
    });
  }, [makeShot]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
      }}
    />
  );
}