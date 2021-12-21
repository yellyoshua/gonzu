import Link from "next/link";

interface LogoBannerProps extends React.ComponentProps<"section"> {
  logoBanner: string[];
}

export const LogoBanner = ({ logoBanner, ...props }: LogoBannerProps) => {
  const logosBannerMajor2 = logoBanner.length >= 2;

  return (
    <section className="h-20 my-2" {...props}>
      <Link href="/">
        <a href="/">
          <picture>
            {logosBannerMajor2 &&
              logoBanner
                .slice(0, logoBanner.length - 1)
                .map((logo, key) => (
                  <source
                    key={`banner-logo-${key}`}
                    srcSet={logo}
                    type="image"
                  />
                ))}

            <img
              src={
                logosBannerMajor2
                  ? logoBanner[logoBanner.length - 1]
                  : logoBanner[0]
              }
              className="h-full w-auto m-auto object-contain"
              alt="banner-logo"
            />
          </picture>
        </a>
      </Link>
    </section>
  );
};
