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

  if (isMDBreakpoint) {
    return (
      <header suppressHydrationWarning className="w-full relative">
        <NavBar
          logoElement={<LogoBanner logoBanner={logosBanner} />}
          links={links}
        />
      </header>
    );
  }

  return (
    <DrawerNavbar
      links={links}
      copyright={copyright}
      logoElement={<LogoBanner logoBanner={logosBanner} className="h-16" />}
    />
  );
};
