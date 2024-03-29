import { Layout } from "@/app/ui/Layout";
import { HomeContent } from "@/app/entities/gonzu/ui/HomeContent";
import { useGonzuStore } from "@/app/entities/gonzu/flux/gonzu.store";

export default function HomePage() {
  useGonzuStore.setState({});

  return (
    <Layout seo={{ permaLink: "/" }}>
      <HomeContent />
    </Layout>
  );
}
