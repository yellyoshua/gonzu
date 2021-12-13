import Head from "next/head";
import {
  ApplicationDescription,
  ApplicationHost,
  ApplicationName,
} from "@/app/constants";
import { parsePermaLink } from "@/app/utils/transforms";
import { Favicons } from "./Favicons";
import { Preconnects } from "./Preconnects";
import { RichContent } from "./RichContent";
import { RichMeta } from "./RichMeta";

export interface SeoHeadProps {
  title?: string;
  isPage?: boolean;
  backdrop?: string;
  description?: string;
  permaLink: string | string[];
}

export const SeoHead = ({
  title = ApplicationName,
  isPage = true,
  description = ApplicationDescription,
  backdrop,
  permaLink,
}: SeoHeadProps) => {
  const safePermaLink = parsePermaLink(ApplicationHost, permaLink);
  const safeBackdrop =
    backdrop ?? "https://www.gonzu.edu.ec/assets/gonzu-header-banner.jpg";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="HandheldFriendly" content="True" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <link rel="alternate" href="http://example.com/" hrefLang="es" />

      <Favicons />
      <Preconnects />
      <link rel="manifest" href="/manifest.json" />
      <RichMeta
        isPage={isPage}
        content={{
          title,
          description,
          permaLink: safePermaLink,
          backdrop: safeBackdrop,
        }}
      />
      <RichContent
        isPage={isPage}
        content={{ title, description, backdrop: safeBackdrop }}
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&amp;family=Lato:wght@300;400;700&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
