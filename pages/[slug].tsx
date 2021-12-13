import { GetServerSideProps } from "next";
import { Layout } from "@/app/ui/Layout";
import { setUpCustomHeaders } from "@/app/utils/server.utils";

interface PagesProps {
  permaLink: string;
  title: string;
}

export default function Pages({ permaLink, title }: PagesProps) {
  return (
    <Layout seo={{ permaLink, title }}>
      <h1>{title}</h1>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<PagesProps> = async (
  ctx
) => {
  setUpCustomHeaders(ctx.res);
  const permaLink = ctx.params?.slug;

  return {
    props: { permaLink, title: "Sample title" },
    notFound: true,
  };
};
