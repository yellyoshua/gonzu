import { Layout } from "@/app/ui/Layout";
import { HomeContent } from "@/app/entities/gonzu/ui/HomeContent";

export default function HomePage() {
  return (
    <Layout seo={{ permaLink: "/" }}>
      <HomeContent />
    </Layout>
  );
}
