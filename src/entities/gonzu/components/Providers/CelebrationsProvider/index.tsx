import { useEffect } from "react";
import { useIdle } from "react-use";
import { useSiteConfigStore } from "@/app/entities/gonzu/flux/siteConfig.store";
import { Celebrations } from "@/app/entities/gonzu/interfaces";
import { SnowCelebration } from "./SnowCelebration";
import { FireworksCelebration } from "./FireworksCelebration";

const tenMinutes = 600000;
const fiveMinutes = 300000;
const nineSeconds = 9000;

interface CelebrationsProviderProps {}

export const CelebrationsProvider = ({}: CelebrationsProviderProps) => {
  const celebration = useSiteConfigStore((state) => state.celebration);
  const showInauguralConfetti = useSiteConfigStore(
    (state) => state.showInauguralConfetti
  );
  const isUserIdle = useIdle(fiveMinutes);

  useEffect(() => {
    useSiteConfigStore.setState({ celebrationsProviderImplemented: true });
    return () => {
      useSiteConfigStore.setState({ celebrationsProviderImplemented: false });
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      useSiteConfigStore.setState({ showInauguralConfetti: false });
    }, tenMinutes);

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
        execute={!isUserIdle && showInauguralConfetti}
        // remove "!" from "showInauguralConfetti" for not execute on each reload
        timeOut={nineSeconds}
      />
    </>
  );
};
