import { GetServerSideProps } from "next";

interface PagesProps {}

export default function Pages({}: PagesProps) {
  return <h1>App Section</h1>;
}

export const getServerSideProps: GetServerSideProps<PagesProps> = async (_) => {
  return {
    props: {},
    notFound: true,
  };
};
