import shallow from "zustand/shallow";
import { useMedia } from "react-use";
import { useGonzuStore } from "@/app/entities/gonzu/flux/gonzu.store";
import { LogoBanner } from "@/app/entities/gonzu/components/LogoBanner";
import { NavBar } from "@/app/entities/gonzu/components/NavBar";
import { DrawerNavbar } from "@/app/entities/gonzu/components/DrawerNavbar";

export const GonzuHeader = () => {
  const isMDBreakpoint = useMedia("(min-width: 768px)", true);

  const { links, logosBanner, copyright } = useGonzuStore(
    (state) => ({
      links: state.header.links,
      logosBanner: state.bannerLogo,
      copyright: state.copyright,
    }),
    shallow
  );

  console.log({ isMDBreakpoint });

  return (
    <header className={`w-full relative ${isMDBreakpoint ? "h-full" : "h-20"}`}>
      {isMDBreakpoint ? (
        <NavBar
          logoElement={<LogoBanner logoBanner={logosBanner} />}
          links={links}
        />
      ) : (
        <DrawerNavbar
          links={links}
          copyright={copyright}
          logoElement={<LogoBanner logoBanner={logosBanner} className="h-16" />}
        />
      )}
    </header>
  );
};
