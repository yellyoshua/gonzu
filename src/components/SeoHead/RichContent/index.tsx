interface RichContentProps {
  isPage?: boolean;
  content: { title: string; description: string };
}

export const RichContent = ({ isPage, content }: RichContentProps) => {
  const richContentForPages = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    publisher: {
      "@type": "Organization",
      name: content.title,
      url: "https://www.gonzu.edu.ec/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.gonzu.edu.ec/logo/logo.png",
      },
    },
    url: "https://www.gonzu.edu.ec/",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.gonzu.edu.ec/",
    },
    description: content.description,
  };

  const richContentForPosts = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: content.title,
    description: content.description,
    datePublished: new Date().toUTCString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            isPage ? richContentForPages : richContentForPosts
          ),
        }}
      />
    </>
  );
};
