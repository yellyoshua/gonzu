import Link from "next/link";

export const LogoBanner = () => {
  return (
    <section className="h-20 my-2">
      <Link href="/">
        <a href="/">
          <img
            className="h-full w-auto m-auto"
            loading="lazy"
            src="https://s3-us-east-2.amazonaws.com/gonzu-api-bucket/2020/08/gonzu-header-banner-1.jpg"
            alt="gonzu-header-banner"
          />
        </a>
      </Link>
    </section>
  );
};
