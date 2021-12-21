import { Layout } from "@/app/ui/Layout";
import { HomeContent } from "@/app/entities/gonzu/ui/HomeContent";
import { GonzuStoreProvider } from "@/app/entities/gonzu/flux/gonzu.store";

export default function HomePage() {
  return (
    <Layout seo={{ permaLink: "/" }}>
      <GonzuStoreProvider content={null}>
        <HomeContent />
      </GonzuStoreProvider>
    </Layout>
  );
}
