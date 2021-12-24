import { useEffect, useRef } from "react";
import canvascConfetti from "canvas-confetti";
import type { CreateTypes, GlobalOptions } from "canvas-confetti";

const christmasColors = ["#ffff", "#ff0000", "#ffeb3b"];

const oneHour = 3600000;

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface UseConfettiProps extends GlobalOptions {}

// TODO: change setInterval to requestAnimationFrame
export const useConfetti = ({ ...confettiOptions }: UseConfettiProps) => {
  const canvasConfettiRef = useRef<HTMLCanvasElement | null>(null);
  const confettiRef = useRef<CreateTypes | null>(null);

  const christmasTimeout = useRef<NodeJS.Timeout | null>(null);
  const realisticTimeout = useRef<NodeJS.Timeout | null>(null);
  const fireworkTimeout = useRef<NodeJS.Timeout | null>(null);

  const resetConfetti = (instant?: boolean) => {
    if (instant) {
      confettiRef.current?.reset();
    } else {
      setTimeout(() => confettiRef.current?.reset(), 2000);
    }
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
      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(
        (confettiCurrent: CreateTypes) => {
          confettiCurrent({
            particleCount: 1,
            spread: 5,
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
        },
        1500,
        confettiRef.current
      );

      christmasTimeout.current = setTimeout(() => {
        clearInterval(interval);
        resetConfetti();
        console.log("timeout");
        christmasTimeout.current = null;
      }, timeOut);
    }
  };

  const christmas = (timeOut: number = oneHour) => {
    if (confettiRef.current) {
      let skew = 1;

      const interval = setInterval(
        (confettiCurrent: CreateTypes) => {
          skew = Math.max(0.8, skew - 0.001);

          confettiCurrent({
            particleCount: 1,
            spread: 5,
            startVelocity: 0,
            ticks: 200,
            origin: {
              x: Math.random(),
              y: Math.random() * skew - 0.2,
            },
            colors: christmasColors,
            shapes: ["circle"],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
          });
        },
        1500,
        confettiRef.current
      );

      christmasTimeout.current = setTimeout(() => {
        clearInterval(interval);
        resetConfetti();
        console.log("timeout");
        christmasTimeout.current = null;
      }, timeOut);
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
      confettiRef.current && confettiRef.current.reset();

      christmasTimeout.current && clearTimeout(christmasTimeout.current);
      realisticTimeout.current && clearTimeout(realisticTimeout.current);
      fireworkTimeout.current && clearTimeout(fireworkTimeout.current);

      christmasTimeout.current = null;
      realisticTimeout.current = null;
      fireworkTimeout.current = null;
    };
  }, []);

  return {
    canvasConfettiRef,
    resetConfetti,
    confetti: { christmas, snow, realistic, fireworks },
  };
};
