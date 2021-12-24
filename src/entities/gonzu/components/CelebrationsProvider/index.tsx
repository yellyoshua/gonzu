import { useEffect } from "react";
import { useIdle, usePageLeave } from "react-use";
import { useConfetti } from "@/app/hooks/useConfetti";
import { useSiteConfigStore } from "../../flux/siteConfig.store";
import { Celebrations } from "../../interfaces";

const fiveMinutesIdleTimeout = 300000;

interface CelebrationsProviderProps {}

export const CelebrationsProvider = ({}: CelebrationsProviderProps) => {
  const celebration = useSiteConfigStore((state) => state.celebration);
  const showInauguralConfetti = useSiteConfigStore(
    (state) => state.showInauguralConfetti
  );
  const isUserIdle = useIdle(fiveMinutesIdleTimeout);

  const { canvasConfettiRef, confetti, resetConfetti } = useConfetti({
    resize: true,
  });

  usePageLeave(() => resetConfetti(true));

  useEffect(() => {
    // TODO: performance re-renders
    if (!isUserIdle) {
      if (!showInauguralConfetti) {
        // remove "!" to not show fireworks on each reload
        confetti.fireworks(9000);
        useSiteConfigStore.setState({ showInauguralConfetti: false });
      }

      if (celebration === Celebrations.CHRISTMAS) {
        confetti.snow();
      }
    }

    return () => {
      resetConfetti(true);
    };
  }, [celebration, isUserIdle]);

  return (
    <canvas
      ref={canvasConfettiRef}
      className="fixed top-0 bottom-0 pointer-events-none h-screen w-full"
    />
  );
};
