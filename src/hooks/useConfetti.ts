import { useEffect, useRef } from "react";
import canvascConfetti from "canvas-confetti";
import type { CreateTypes, GlobalOptions } from "canvas-confetti";

const oneHour = 3600000;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface UseConfettiProps extends GlobalOptions {}

// TODO: change setInterval to requestAnimationFrame
export const useConfetti = ({ ...confettiOptions }: UseConfettiProps) => {
  const canvasConfettiRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<CreateTypes | null>(null);

  const realisticTimeout = useRef<NodeJS.Timeout | null>(null);
  const fireworkTimeout = useRef<NodeJS.Timeout | null>(null);

  const snowRequestAnimationFrameKey = useRef<number | null>(null);

  const unmountTimeouts = () => {
    realisticTimeout.current && clearTimeout(realisticTimeout.current);
    fireworkTimeout.current && clearTimeout(fireworkTimeout.current);

    realisticTimeout.current = null;
    fireworkTimeout.current = null;
  };

  const cancelAnimationsFrame = () => {
    snowRequestAnimationFrameKey.current &&
      window.cancelAnimationFrame(snowRequestAnimationFrameKey.current);
  };

  const resetConfetti = () => {
    const resetAll = () => {
      unmountTimeouts();
      cancelAnimationsFrame();
      confettiRef.current && confettiRef.current.reset();
    };

    resetAll();
  };

  const fireworks = (timeOut: number = 5000) => {
    if (confettiRef.current) {
      const interval = setInterval(
        (confettiCurrent: CreateTypes) => {
          confettiCurrent({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 150,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          });

          confettiCurrent({
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 0,
            particleCount: 150,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          });
        },
        1300,
        confettiRef.current
      );

      fireworkTimeout.current = setTimeout(() => {
        clearInterval(interval);
        resetConfetti();
        fireworkTimeout.current = null;
      }, timeOut);
    }
  };

  const realistic = (timeOut: number = 5000) => {
    if (confettiRef.current) {
      const commonConfig = (particleRatio: number) => ({
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });

      const interval = setInterval(
        (confettiCurrent: CreateTypes) => {
          confettiCurrent({
            ...commonConfig(0.25),
            spread: 26,
            startVelocity: 55,
          });

          confettiCurrent({
            ...commonConfig(0.2),
            spread: 60,
          });

          confettiCurrent({
            ...commonConfig(0.35),
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
          });

          confettiCurrent({
            ...commonConfig(0.1),
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
          });

          confettiCurrent({
            ...commonConfig(0.1),
            spread: 120,
            startVelocity: 45,
          });
        },
        1300,
        confettiRef.current
      );

      realisticTimeout.current = setTimeout(() => {
        clearInterval(interval);
        resetConfetti();
        realisticTimeout.current = null;
      }, timeOut);
    }
  };

  const snow = (timeOut: number = oneHour) => {
    if (confettiRef.current) {
      var duration = timeOut;
      var end = Date.now() + duration;

      (function frame(confettiCurrent: CreateTypes, reset: () => void) {
        confettiCurrent({
          particleCount: 1,
          startVelocity: 0,
          ticks: 200,
          gravity: 0.3,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.999 - 0.2,
          },
          colors: ["#ffffff"],
          shapes: ["circle"],
          scalar: randomInRange(0.4, 1),
        });

        // keep going until we are out of time
        if (Date.now() < end) {
          snowRequestAnimationFrameKey.current = window.requestAnimationFrame(
            () => frame(confettiCurrent, reset)
          );
        } else {
          reset();
        }
      })(confettiRef.current, () => resetConfetti());
    }
  };

  useEffect(() => {
    if (canvasConfettiRef.current && !confettiRef.current) {
      confettiRef.current = canvascConfetti.create(
        canvasConfettiRef.current,
        confettiOptions
      );
    }

    return () => {
      resetConfetti();
    };
  }, []);

  return {
    canvasConfettiRef,
    resetConfetti,
    confetti: { snow, realistic, fireworks },
  };
};
