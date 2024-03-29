module.exports = {
  env: {
    NEXT_PUBLIC_APPLICATION_HOST: process.env.NEXT_PUBLIC_APPLICATION_HOST,
    NEXT_PUBLIC_APPLICATION_HOST_FOR_CONFIG:
      process.env.NEXT_PUBLIC_APPLICATION_HOST_FOR_CONFIG,
    NEXT_PUBLIC_API_URI: process.env.NEXT_PUBLIC_API_URI,
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
    SUPABASE_AUTH_TOKEN: process.env.SUPABASE_AUTH_TOKEN,
    SUPABASE_AUTH_URL: process.env.SUPABASE_AUTH_URL,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV, // production, preview, or development
    NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA:
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
  },
  swcMinify: true,
};
