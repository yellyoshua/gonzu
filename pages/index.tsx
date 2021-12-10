import { Layout } from "@/app/ui/Layout";
import { UnderMaintenance } from "@/app/ui/UnderMaintenance";

export default function IndexPage() {
  return (
    <Layout seoProps={{ permaLink: "/" }}>
      <UnderMaintenance />
    </Layout>
  );
}
