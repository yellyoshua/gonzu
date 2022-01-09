import { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "@/app/ui/Layout";
import { PageContent } from "@/app/entities/pages/ui/PageContent";
import {
  getPageBySlug,
  getPagesSlug,
} from "@/app/entities/pages/flux/pages.actions";
import { usePageStore } from "@/app/entities/pages/flux/pages.store";
import { Page } from "@/app/entities/pages/interfaces";
import { PagesRecommendation } from "@/app/entities/pages/components/PagesRecommendation";
import { SiteConfigModal } from "@/app/entities/gonzu/ui/SiteConfigModal";
import {
  CelebrationsProvider,
  SongsProvider,
} from "@/app/entities/gonzu/components/Providers";

interface PagesProps {
  page: Page;
  permaLink: string;
}

export default function Pages({ permaLink, page }: PagesProps) {
  usePageStore.setState({ loading: false, page, recomendations: [] }, true);

  const { title } = usePageStore.getState().page!;

  return (
    <Layout seo={{ permaLink, title }}>
      <PageContent />
      <PagesRecommendation />
      <SiteConfigModal />
      <CelebrationsProvider />
      <SongsProvider />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PagesProps> = async (ctx) => {
  const permaLink = ctx.params?.slug as string;

  const page = await getPageBySlug(permaLink);

  return { props: { permaLink, page: page! } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const pages = await getPagesSlug();

  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};
