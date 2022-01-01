export const configureEndpointAPI = (): ((path: string) => string) => {
  const NEXT_PUBLIC_APPLICATION_HOST_FOR_CONFIG =
    process.env.NEXT_PUBLIC_APPLICATION_HOST_FOR_CONFIG;

  if (!NEXT_PUBLIC_APPLICATION_HOST_FOR_CONFIG)
    throw new Error(
      "NEXT_PUBLIC_APPLICATION_HOST_FOR_CONFIG env variable is empty"
    );

  return (path: string) => `${NEXT_PUBLIC_APPLICATION_HOST_FOR_CONFIG}/${path}`;
};
