import { Layout } from "@/app/ui/Layout";
import { UnderMaintenance } from "@/app/ui/UnderMaintenance";

export default function HomePage() {
  return (
    <Layout seo={{ permaLink: "/" }}>
      <UnderMaintenance />
    </Layout>
  );
}
