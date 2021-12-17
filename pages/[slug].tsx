import { GetServerSideProps } from "next";
import { Layout } from "@/app/ui/Layout";
import { setUpCustomHeaders } from "@/app/utils/server.utils";
import { PageContent } from "@/app/entities/pages/ui/PageContent";
import { getPageBySlug } from "@/app/entities/pages/flux/pages.actions";
import { PageStoreProvider } from "@/app/entities/pages/flux/pages.store";
import { Page } from "@/app/entities/pages/interfaces";

interface PagesProps {
  page: Page;
  permaLink: string;
}

export default function Pages({ permaLink, page }: PagesProps) {
  const { title } = page;

  return (
    <Layout seo={{ permaLink, title }}>
      <PageStoreProvider content={{ loading: false, page }}>
        <PageContent />
      </PageStoreProvider>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PagesProps> = async (
  ctx
) => {
  setUpCustomHeaders(ctx.res);
  const permaLink =
    (Array.isArray(ctx.params?.slug)
      ? ctx.params?.slug[0] ?? null
      : ctx.params?.slug) ?? null;

  if (permaLink) {
    const page = await getPageBySlug(permaLink);

    if (page) {
      return {
        props: { permaLink, page },
        notFound: false,
      };
    }
  }

  return { notFound: true };
};
