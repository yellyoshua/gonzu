import Head from "next/head";
import {
  ApplicationDescription,
  ApplicationHost,
  ApplicationName,
} from "@/app/constants";
import { parsePermaLink } from "@/app/utils/transforms";
import { Favicons } from "./Favicons";
import { Preconnects } from "./Preconnects";

export interface SeoHeadProps {
  title?: string;
  isPage?: boolean;
  description?: string;
  permaLink: string | string[];
}

export const SeoHead = ({
  title = ApplicationName,
  isPage,
  description = ApplicationDescription,
  permaLink,
}: SeoHeadProps) => {
  const safePermaLink = parsePermaLink(ApplicationHost, permaLink);

  const richContent = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: title,
    datePublished: new Date().toUTCString(),
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <title>{title}</title>
      <Favicons />
      <Preconnects />
      <meta name="description" content={description} />
      <link rel="canonical" href={safePermaLink} />
      <meta name="apple-mobile-web-app-title" content={ApplicationName} />
      <meta name="application-name" content={ApplicationName} />
      <meta name="theme-color" content="#0099ff" />

      <meta property="og:url" content={safePermaLink} />
      <meta property="og:type" content={isPage ? "website" : "article"} />

      <link rel="manifest" href="/manifest.json" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <meta property="og:locale" content="es_ES" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={ApplicationName} />

      {!isPage && (
        <script type="application/ld+json">
          {JSON.stringify(richContent)}
        </script>
      )}
    </Head>
  );
};
