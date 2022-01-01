import { RawRichText } from "@/app/interfaces";
import { GraphCMSMarkdown } from "@/app/components/GraphCMSMarkdown";
import { PagesBackdrop } from "@/app/entities/pages/components/PagesBackdrop";
import { usePageStore } from "@/app/entities/pages/flux/pages.store";
import { PageCardDetails } from "@/app/entities/pages/components/PageCardDetails";

interface PageContentProps {}

export const PageContent = ({}: PageContentProps) => {
  const page = usePageStore((state) => state.page);
  const safeMarkdownContent = page?.content! as RawRichText;
  const safeBackdrop = page ? page.backdrop : null;

  return (
    <div>
      <PagesBackdrop backdrop={safeBackdrop} />
      <PageCardDetails page={page!} />
      <GraphCMSMarkdown
        className="max-w-screen-lg px-5 m-auto"
        richTextProps={{ content: safeMarkdownContent.raw }}
      />
    </div>
  );
};
