import React, { useMemo } from "react";
import { RadioPicker } from "@/app/components/RadioPicker";
import { songs, useSiteConfigStore } from "../../flux/siteConfig.store";
import { SongOption } from "../../interfaces";

export const SongsRadioPicker = () => {
  const song = useSiteConfigStore((state) => state.song);
  const songsProviderImplemented = useSiteConfigStore(
    (state) => state.songsProviderImplemented
  );

  const selectedSong = useMemo(
    () => songs.find((s) => s.song === song)!,
    [song]
  );

  const onSelectSong = ({ song: s }: SongOption) =>
    useSiteConfigStore.setState({ song: s });

  const renderSongOption = ({ label }: SongOption): React.ReactNode => (
    <p className="text-sm font-jost">{label}</p>
  );

  return (
    <RadioPicker
      disabled={!songsProviderImplemented}
      options={songs}
      handlers={{
        onSelectedValue: onSelectSong,
        selectedValue: selectedSong,
      }}
      renderValue={renderSongOption}
      className={({ checked, disabled }) => `
    ${
      checked
        ? `${disabled ? "bg-gray-400" : "bg-blue-800"} text-white`
        : "bg-white"
    }
    relative rounded-lg shadow-md px-2 py-2 cursor-pointer flex`}
    />
  );
};
