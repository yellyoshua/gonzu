import { useSiteConfigStore } from "@/app/entities/gonzu/flux/siteConfig.store";
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
  const isDarkMode = useSiteConfigStore((state) => state.darkMode);
  return (
    <div
      className={`prose ${
        isDarkMode ? "prose-dark" : "prose-base"
      } font-jost dark:pb-5 ${className}`}
      {...props}
    >
      <RichText
        {...richTextProps}
        renderers={{
          img: ({ src, altText, height, width }) => (
            <img
              {...{ src, height, width }}
              alt={altText}
              className="m-auto object-contain"
              style={{ maxHeight: 600 }}
            />
          ),
        }}
      />
    </div>
  );
};
