import Link from "next/link";
import { LinkUrl } from "@/app/interfaces";
import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon";
import { TextWithIcon } from "@/app/components/commons/TextWithIcon";

interface NavBarProps {
  links: LinkUrl[];
  logoElement: React.ReactNode;
}

export const NavBar = ({ logoElement, links }: NavBarProps) => {
  return (
    <div className="w-full">
      {logoElement}
      <section className="my-4 flex justify-center">
        <ul className="flex flex-wrap align-middle justify-center">
          {links.map(({ label, url, external }, key) => (
            <li
              key={`navbar-${label}-${key}`}
              className="mx-6 border-b-2 border-transparent hover:border-red-700"
            >
              {external ? (
                <a href={url} target="_blank">
                  <TextWithIcon
                    noMargin
                    className="text-black dark:text-white font-bold font-jost text-lg"
                    icon={
                      <ExternalLinkIcon
                        width={20}
                        className="text-black dark:text-white mr-3 "
                      />
                    }
                  >
                    {label}
                  </TextWithIcon>
                </a>
              ) : (
                <Link href={url}>
                  <a
                    href={url}
                    className="text-black dark:text-white font-bold font-jost text-lg"
                  >
                    {label}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
