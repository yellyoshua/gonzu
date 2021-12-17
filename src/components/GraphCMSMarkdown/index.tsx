import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextProps } from "@graphcms/rich-text-types";

interface GraphCMSMarkdownProps extends React.ComponentProps<"div"> {
  richTextProps: RichTextProps;
}

export const GraphCMSMarkdown = ({
  className,
  richTextProps,
  ...props
}: GraphCMSMarkdownProps) => {
  return (
    <div className={`prose ${className}`} {...props}>
      <RichText
        {...richTextProps}
        renderers={{
          img: ({ src, altText, height, width }) => (
            <img
              {...{ src, altText, height, width }}
              className="m-auto object-contain"
              style={{ maxHeight: 600 }}
            />
          ),
        }}
      />
    </div>
  );
};
