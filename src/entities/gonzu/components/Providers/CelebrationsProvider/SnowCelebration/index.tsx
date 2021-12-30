import { useEffect } from "react";
import { useConfetti } from "@/app/hooks/useConfetti";

interface SnowCelebrationProps {
  execute: boolean;
  timeOut?: number;
}

export const SnowCelebration = ({
  execute = false,
  timeOut,
}: SnowCelebrationProps) => {
  const { canvasConfettiRef, confetti, resetConfetti } = useConfetti({
    resize: true,
    useWorker: true,
  });

  useEffect(() => {
    if (execute) {
      confetti.snow(timeOut);
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
