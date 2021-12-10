import { Layout } from "@/app/ui/Layout";

function NotFoundPage() {
  return (
    <Layout seoProps={{ title: "Página no encontrada - 404", permaLink: "/" }}>
      <p className="text-center text-4xl my-28 font-arvo">
        P&aacute;gina no encontrada
      </p>
    </Layout>
  );
}

export default NotFoundPage;
