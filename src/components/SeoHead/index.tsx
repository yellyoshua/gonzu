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

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="HandheldFriendly" content="True" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no"
      />
      <Favicons />
      <Preconnects />
      <link rel="manifest" href="/manifest.json" />
      <RichMeta
        isPage={isPage}
        content={{ title, description, permaLink: safePermaLink }}
      />
      <RichContent isPage={isPage} content={{ title, description }} />

      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&amp;family=Lato:wght@300;400;700&amp;display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
