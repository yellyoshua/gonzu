import { useLayoutEffect, useRef } from "react";
import { useSiteConfigStore } from "@/app/entities/gonzu/flux/siteConfig.store";
import { RichText } from "@graphcms/rich-text-react-renderer";
import type { RichTextProps } from "@graphcms/rich-text-types";

interface GraphCMSMarkdownProps extends React.ComponentProps<"div"> {
  richTextProps: RichTextProps;
}

export const GraphCMSMarkdown = ({
  className,
  richTextProps,
  ...props
}: GraphCMSMarkdownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const unsubscribe = useSiteConfigStore.subscribe((state) => {
      state.darkMode
        ? ref.current?.classList.add("prose-dark")
        : ref.current?.classList.remove("prose-dark");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div
      {...props}
      ref={ref}
      className={`prose font-jost dark:pb-5 ${className}`}
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
