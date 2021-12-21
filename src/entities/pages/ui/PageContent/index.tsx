import { GraphCMSMarkdown } from "@/app/components/GraphCMSMarkdown";
import { RawRichText } from "@/app/interfaces";
import { usePageStore } from "../../flux/pages.store";

interface PageContentProps {}

export const PageContent = ({}: PageContentProps) => {
  const page = usePageStore((state) => state.page);
  const safeMarkdownContent = page?.content! as RawRichText;

  return (
    <div>
      <GraphCMSMarkdown
        className="max-w-screen-lg px-5 m-auto"
        richTextProps={{ content: safeMarkdownContent.raw }}
      />
    </div>
  );
};
