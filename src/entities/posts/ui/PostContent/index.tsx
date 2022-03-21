import { RawRichText } from "@/app/interfaces";
import { GraphCMSMarkdown } from "@/app/components/GraphCMSMarkdown";
import { PagesBackdrop } from "@/app/components/PagesBackdrop";
import { PageCardDetails } from "@/app/components/PageCardDetails";
import { usePostStore } from "../../flux/posts.store";

interface PostContentProps {}

export const PostContent = ({}: PostContentProps) => {
  const post = usePostStore((state) => state.post);
  const safeMarkdownContent = post?.content! as RawRichText;
  const safeBackdrop = post ? post.backdrop : null;

  return (
    <div>
      <PagesBackdrop backdrop={safeBackdrop} />
      <PageCardDetails page={post!} />
      <GraphCMSMarkdown
        className="max-w-screen-lg px-5 m-auto"
        richTextProps={{ content: safeMarkdownContent.raw }}
      />
    </div>
  );
};
