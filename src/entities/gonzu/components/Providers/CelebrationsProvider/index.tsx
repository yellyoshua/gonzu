import { useEffect } from "react";
import { useIdle } from "react-use";
import { useSiteConfigStore } from "@/app/entities/gonzu/flux/siteConfig.store";
import { Celebrations } from "@/app/entities/gonzu/interfaces";
import { SnowCelebration } from "./SnowCelebration";

const fiveMinutes = 300000;

interface CelebrationsProviderProps {}

export const CelebrationsProvider = ({}: CelebrationsProviderProps) => {
  const celebration = useSiteConfigStore((state) => state.celebration);
  const isUserIdle = useIdle(fiveMinutes);

  useEffect(() => {
    useSiteConfigStore.setState({ celebrationsProviderImplemented: true });
    return () => {
      useSiteConfigStore.setState({ celebrationsProviderImplemented: false });
    };
  }, []);

  return (
    <>
      <SnowCelebration
        execute={!isUserIdle && celebration === Celebrations.CHRISTMAS}
        timeOut={fiveMinutes}
      />
    </>
  );
};
