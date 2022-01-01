import { useEffect } from "react";
import { useConfetti } from "@/app/hooks/useConfetti";

interface FireworksCelebrationProps {
  execute: boolean;
  timeOut?: number;
}

export const FireworksCelebration = ({
  execute = false,
  timeOut,
}: FireworksCelebrationProps) => {
  const { canvasConfettiRef, confetti, resetConfetti } = useConfetti({
    resize: true,
  });

  useEffect(() => {
    if (execute) {
      confetti.fireworks(timeOut);
    }

    return () => {
      resetConfetti();
    };
  }, [execute, timeOut]);

  return (
    <canvas
      ref={canvasConfettiRef}
      className="fixed top-0 bottom-0 pointer-events-none h-screen w-full"
    />
  );
};
