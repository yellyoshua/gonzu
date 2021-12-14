import { GraphCMSMarkdown } from "@/app/components/GraphCMSMarkdown";
import { Page, RawRichText } from "../../interfaces";

interface PageContentProps {
  content: Page;
}

export const PageContent = ({ content }: PageContentProps) => {
  const safeMarkdownContent = content.content! as RawRichText;

  return (
    <div>
      <GraphCMSMarkdown
        className="max-w-screen-lg px-5 m-auto"
        richTextProps={{ content: safeMarkdownContent.raw }}
      />
    </div>
  );
};
