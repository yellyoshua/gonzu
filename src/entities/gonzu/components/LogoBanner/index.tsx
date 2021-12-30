import Link from "next/link";

interface LogoBannerProps {
  logoBanner: string[];
  removeVerticalPadding?: boolean;
  className?: string;
}

export const LogoBanner = ({
  logoBanner,
  className,
  removeVerticalPadding,
}: LogoBannerProps) => {
  const logosBannerMajor2 = logoBanner.length >= 2;

  return (
    <section className={`w-full ${!removeVerticalPadding && "py-2"} bg-white`}>
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
              className={`${
                className ? className : "h-20"
              } w-auto m-auto object-contain bg-white rounded my-2`}
              alt="banner-logo"
            />
          </picture>
        </a>
      </Link>
    </section>
  );
};
