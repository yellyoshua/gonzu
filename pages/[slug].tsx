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

interface PagesProps {
  page: Page;
  permaLink: string;
}

export default function Pages({ permaLink, page }: PagesProps) {
  usePageStore.setState({ loading: false, page, recomendations: [] }, true);

  const { title } = page;

  return (
    <Layout seo={{ permaLink, title }}>
      <PageContent />
      <PagesRecommendation />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PagesProps> = async (ctx) => {
  try {
    const permaLink = ctx.params?.slug as string;

    const page = await getPageBySlug(permaLink);

    return { props: { permaLink, page } };
  } catch (error) {
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getPagesSlug();

  return {
    paths: pages.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
};
