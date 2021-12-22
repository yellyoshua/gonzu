import { useEffect, useRef } from "react";
import type { CreateTypes } from "canvas-confetti";
import { createCanvasConfetti } from "../utils/dom.utils";

const celebrationColors = ["#bb0000", "#1e40af", "#ffeb3b"];

const christmasColors = ["#ffff", "#ff0000", "#ffeb3b"];

const oneHour = 3600000;

export const useConfetti = () => {
  const confetti = useRef<CreateTypes | null>(null);
  const christmasTimeout = useRef<NodeJS.Timeout | null>(null);
  const celebrationTimeout = useRef<NodeJS.Timeout | null>(null);

  const resetConfetti = () => {
    setTimeout(() => confetti.current?.reset(), 1500);
  };

  const celebration = (timeOut: number = 5000) => {
    const interval = setInterval(() => {
      if (confetti.current) {
        confetti.current({
          particleCount: 80,
          angle: 60,
          spread: 40,
          origin: { x: 0 },
          colors: celebrationColors,
        });

        confetti.current({
          particleCount: 80,
          angle: 120,
          spread: 40,
          origin: { x: 1 },
          colors: celebrationColors,
        });
      }
    }, 1000);

    celebrationTimeout.current = setTimeout(() => {
      clearInterval(interval);
      resetConfetti();
      celebrationTimeout.current = null;
    }, timeOut);
  };

  const christmas = (timeOut: number = oneHour) => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      if (confetti.current) {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confetti.current({
          particleCount: 20,
          spread: 30,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: Math.random() * skew - 0.2,
          },
          colors: christmasColors,
          shapes: ["circle"],
          gravity: randomInRange(0.4, 0.6),
          scalar: randomInRange(0.4, 1),
          drift: randomInRange(-0.4, 0.4),
        });
      }
    }, 1500);

    christmasTimeout.current = setTimeout(() => {
      clearInterval(interval);
      resetConfetti();
      console.log("timeout");
      christmasTimeout.current = null;
    }, timeOut);
  };

  useEffect(() => {
    const removeCanvasConfetti = createCanvasConfetti((confettiFn) => {
      confetti.current = confettiFn;
    });

    return () => {
      console.log("ummounted ", removeCanvasConfetti);

      removeCanvasConfetti && removeCanvasConfetti();

      christmasTimeout.current && clearTimeout(christmasTimeout.current);
      celebrationTimeout.current && clearTimeout(celebrationTimeout.current);

      christmasTimeout.current = null;
      celebrationTimeout.current = null;
    };
  }, []);

  return { celebration, christmas };
};
