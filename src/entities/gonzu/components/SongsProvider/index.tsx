import { useEffect } from "react";
import { useAudio } from "react-use";
import { useSiteConfigStore } from "../../flux/siteConfig.store";
import { Songs } from "../../interfaces";

export const SongsProvider = () => {
  const song = useSiteConfigStore((state) => state.song);
  const [audio, , controls, audioRef] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });

  const changeCurrentAudio = (srcAudio: string) => {
    audioRef.current && (audioRef.current.src = srcAudio);
  };

  useEffect(() => {
    if (song === Songs.NONE) {
      changeCurrentAudio("");
      controls.pause();
    }

    if (song === Songs.CHRISTMAS) {
      changeCurrentAudio("/content/mp3/soft_christmas_song_8_hours.m4a");
      controls.volume(0.01);
      controls.play();
    }

    return () => {
      controls.pause();
    };
  }, [song]);

  return <>{audio}</>;
};
