import { useEffect } from "react";
import { useIdle } from "react-use";
import { useSiteConfigStore } from "../../flux/siteConfig.store";
import { Celebrations } from "../../interfaces";
import { SnowCelebration } from "./SnowCelebration";
import { FireworksCelebration } from "./FireworksCelebration";

const fiveMinutesIdleTimeout = 300000;
const fiveMinutes = 300000;
const nineSeconds = 9000;

interface CelebrationsProviderProps {}

export const CelebrationsProvider = ({}: CelebrationsProviderProps) => {
  const celebration = useSiteConfigStore((state) => state.celebration);
  const showInauguralConfetti = useSiteConfigStore(
    (state) => state.showInauguralConfetti
  );
  const isUserIdle = useIdle(fiveMinutesIdleTimeout);

  useEffect(() => {
    useSiteConfigStore.setState({ celebrationsProviderImplemented: true });
    return () => {
      useSiteConfigStore.setState({ celebrationsProviderImplemented: false });
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      useSiteConfigStore.setState({ showInauguralConfetti: false });
    }, fiveMinutes);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <SnowCelebration
        execute={!isUserIdle && celebration === Celebrations.CHRISTMAS}
        timeOut={fiveMinutes}
      />
      <FireworksCelebration
        execute={!isUserIdle && !showInauguralConfetti}
        // remove "!" from "showInauguralConfetti" for not execute on each reload
        timeOut={nineSeconds}
      />
    </>
  );
};
