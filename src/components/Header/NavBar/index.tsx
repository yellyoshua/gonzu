import Link from "next/link";
import { LinkUrl } from "@/app/interfaces";
import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon";
import { TextWithIcon } from "@/app/components/commons/TextWithIcon";

interface NavBarProps {
  links: LinkUrl[];
}

export const NavBar = ({ links }: NavBarProps) => {
  return (
    <section className="my-4 flex justify-center">
      <ul className="flex flex-wrap align-middle justify-center">
        {links.map(({ label, url, external }) => (
          <li className="mx-6 border-b-2 border-transparent hover:border-red-700">
            {external ? (
              <a
                href={url}
                target="_blank"
                className="font-medium font-arvo text-lg"
              >
                <TextWithIcon
                  noMargin
                  icon={
                    <ExternalLinkIcon width={20} className="text-black mr-3" />
                  }
                >
                  {label}
                </TextWithIcon>
              </a>
            ) : (
              <Link href={url}>
                <a href={url} className="font-medium font-arvo text-lg">
                  {label}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};