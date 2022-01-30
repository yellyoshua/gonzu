import "tailwindcss/tailwind.css";
import "dayjs/locale/es";
import type { AppProps } from "next/app";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  CelebrationsProvider,
  DarkModeProvider,
} from "@/app/entities/gonzu/components/Providers";
import { SiteConfigModal } from "@/app/entities/gonzu/ui/SiteConfigModal";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Guayaquil");
dayjs.locale("es");

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CelebrationsProvider />
      <DarkModeProvider />
      {children}
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <SiteConfigModal />
      <Component {...pageProps} />
    </AppProviders>
  );
}

export default MyApp;
