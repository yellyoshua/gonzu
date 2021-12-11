import shallow from "zustand/shallow";
import { useGonzuStore } from "@/app/entities/gonzu/flux/gonzu.store";
import { LogoBanner } from "@/app/entities/gonzu/components/LogoBanner";
import { NavBar } from "@/app/entities/gonzu/components/NavBar";

export const GonzuHeader = () => {
  const { links, logosBanner } = useGonzuStore(
    (state) => ({ links: state.header.links, logosBanner: state.bannerLogo }),
    shallow
  );

  return (
    <header className="w-full my-4">
      <LogoBanner logoBanner={logosBanner} />
      <NavBar links={links} />
    </header>
  );
};
