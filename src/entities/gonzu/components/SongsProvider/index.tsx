import { useEffect } from "react";
import { useAudio } from "react-use";
import { useSiteConfigStore } from "../../flux/siteConfig.store";
import { Songs } from "../../interfaces";

export const SongsProvider = () => {
  const song = useSiteConfigStore((state) => state.song);
  const [audio, stats, controls, audioRef] = useAudio({ src: "" });

  const changeCurrentAudio = async (srcAudio: string | null) => {
    audioRef.current && (audioRef.current.src = srcAudio ?? "");

    if (!srcAudio) return controls.pause();
  };

  const replayCurrentAudio = () => {
    controls.volume(0.05);
    controls.seek(0);
    controls.play();
  };

  audioRef.current &&
    (audioRef.current.onloadeddata = () => {
      replayCurrentAudio();
    });

  useEffect(() => {
    useSiteConfigStore.setState({ songsProviderImplemented: true });
    return () => {
      useSiteConfigStore.setState({ songsProviderImplemented: false });
    };
  }, []);

  useEffect(() => {
    if (song !== Songs.NONE && stats.paused) {
      if (stats.time === stats.duration) {
        replayCurrentAudio();
      }
    }
  }, [stats.paused, song]);

  useEffect(() => {
    if (song === Songs.NONE) {
      changeCurrentAudio(null);
    }

    if (song === Songs.CHRISTMAS) {
      changeCurrentAudio(
        "https://cdn2.melodyloops.com/mp3/preview-xmas-jazz-trio.mp3"
      );
    }

    if (song === Songs.STUDYING) {
      changeCurrentAudio(
        "https://cdn2.melodyloops.com/mp3/preview-inner-calm.mp3"
      );
    }

    if (song === Songs.SPIRITUAL) {
      changeCurrentAudio(
        "https://cdn2.melodyloops.com/mp3/preview-spiritual-highway.mp3"
      );
    }

    return () => {
      controls.pause();
    };
  }, [song]);

  return <>{audio}</>;
};
