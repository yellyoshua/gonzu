import { useSiteConfigStore } from "@/app/entities/gonzu/flux/siteConfig.store";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RichTextProps } from "@graphcms/rich-text-types";
import { useEffect, useState } from "react";

interface GraphCMSMarkdownProps extends React.ComponentProps<"div"> {
  richTextProps: RichTextProps;
}

export const GraphCMSMarkdown = ({
  className,
  richTextProps,
  ...props
}: GraphCMSMarkdownProps) => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const unsubscribe = useSiteConfigStore.subscribe((state) =>
      setDarkMode(state.darkMode)
    );

    return () => unsubscribe();
  }, []);

  return (
    <div
      {...props}
      suppressHydrationWarning
      className={`prose ${
        isDarkMode && "prose-dark"
      } font-jost dark:pb-5 ${className}`}
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
