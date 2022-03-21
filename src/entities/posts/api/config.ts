import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { isSSR } from "@/app/utils/dom.utils";

const createHttpLink = () => {
  const uri = process.env.NEXT_PUBLIC_API_URI;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  return new HttpLink({
    uri,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const GraphQLClient = () => {
  const link = createHttpLink();
  const ssrMode = isSSR;

  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode,
    link,
  });
};
