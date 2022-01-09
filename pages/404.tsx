import Link from "next/link";
import { Layout } from "@/app/ui/Layout";

export default function NotFoundPageProps() {
  return (
    <Layout seo={{ title: "Página no encontrada - 404", permaLink: "/" }}>
      <h1 className="text-center text-4xl my-10 font-jost dark:text-white">
        P&aacute;gina no encontrada
      </h1>
      <div className="flex justify-center items-center my-10">
        <Link href="/">
          <a href="/">
            <button className="px-2 py-1 shadow-lg border-4 border-red-700  bg-red-700 hover:bg-white text-white hover:text-red-700 font-jost font-bold">
              Ir al inicio
            </button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
