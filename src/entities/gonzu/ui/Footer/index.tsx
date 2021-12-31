import shallow from "zustand/shallow";
import { useGonzuStore } from "@/app/entities/gonzu/flux/gonzu.store";
import { Copyright } from "@/app/entities/gonzu/components/Copyright";
import { FooterSections } from "@/app/entities/gonzu/components/FooterSections";

export function GonzuFooter() {
  const { copyright, footer } = useGonzuStore(
    (state) => ({
      copyright: state.copyright,
      footer: state.footer,
    }),
    shallow
  );

  return (
    <footer className="py-10 border-t-2 border-gray-300">
      <FooterSections information={footer.information} links={footer.links} />
      <Copyright className="mt-10" copyright={copyright} />
    </footer>
  );
}
