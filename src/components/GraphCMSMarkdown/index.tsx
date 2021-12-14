import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextProps } from "@graphcms/rich-text-types";

interface GraphCMSMarkdownProps extends RichTextProps {}

export const GraphCMSMarkdown = ({ ...props }: GraphCMSMarkdownProps) => {
  return <RichText {...props} />;
};
