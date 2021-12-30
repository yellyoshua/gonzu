import { RadioPicker } from "@/app/components/RadioPicker";
import React, { useMemo } from "react";
import { celebrations, useSiteConfigStore } from "../../flux/siteConfig.store";
import { CelebrationOption } from "../../interfaces";

export const CelebrationsRadioPicker = () => {
  const celebration = useSiteConfigStore((state) => state.celebration);

  const selectedCelebration = useMemo(
    () => celebrations.find((c) => c.celebration === celebration)!,
    [celebration]
  );

  const onSelectCelebration = ({ celebration: c }: CelebrationOption) =>
    useSiteConfigStore.setState({ celebration: c });

  const renderCelebrationOption = ({
    label,
  }: CelebrationOption): React.ReactNode => (
    <p className="text-sm font-jost">{label}</p>
  );

  return (
    <RadioPicker
      options={celebrations}
      handlers={{
        onSelectedValue: onSelectCelebration,
        selectedValue: selectedCelebration,
      }}
      renderValue={renderCelebrationOption}
      className={({ checked }) => `
    ${checked ? "bg-red-700 text-white" : "bg-white"}
    relative rounded-lg shadow-md px-2 py-2 cursor-pointer flex`}
    />
  );
};
