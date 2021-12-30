import { Layout } from "@/app/ui/Layout";
import { HomeContent } from "@/app/entities/gonzu/ui/HomeContent";
import { useGonzuStore } from "@/app/entities/gonzu/flux/gonzu.store";
import { SiteConfigModal } from "@/app/entities/gonzu/ui/SiteConfigModal";
import { CelebrationsProvider } from "@/app/entities/gonzu/components/CelebrationsProvider";
import { SongsProvider } from "@/app/entities/gonzu/components/SongsProvider";

export default function HomePage() {
  useGonzuStore.setState({});

  return (
    <Layout seo={{ permaLink: "/" }}>
      <HomeContent />
      <SiteConfigModal />
      <CelebrationsProvider />
      <SongsProvider />
    </Layout>
  );
}
