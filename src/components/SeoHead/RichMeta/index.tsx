import { ApplicationName } from "@/app/constants";

interface RichMetaProps {
  isPage?: boolean;
  content: {
    title: string;
    description: string;
    permaLink: string;
  };
}

export const RichMeta = ({ isPage, content }: RichMetaProps) => {
  return (
    <>
      <meta name="description" content={content.description} />
      <meta name="apple-mobile-web-app-title" content={ApplicationName} />
      <meta name="application-name" content={ApplicationName} />
      <meta name="theme-color" content="#0099ff" />

      <link rel="canonical" href={content.permaLink} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content={isPage ? "website" : "article"} />
      <meta property="og:url" content={content.permaLink} />
      <meta property="og:title" content={content.title} />
      <meta property="og:description" content={content.description} />
      <meta property="og:site_name" content={ApplicationName} />

      <meta
        property="article:publisher"
        content="https://www.facebook.com/gonzuoficial"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={content.title} />
      <meta name="twitter:description" content={content.description} />
      <meta name="twitter:url" content={content.permaLink} />
    </>
  );
};
