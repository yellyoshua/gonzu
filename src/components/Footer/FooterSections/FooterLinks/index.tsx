import Link from "next/link";
import LinkIcon from "@heroicons/react/solid/LinkIcon";
import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon";
import { TextWithIcon } from "@/app/components/commons/TextWithIcon";
import { LinkUrl } from "@/app/interfaces";

interface FooterLinksProps {
  links: LinkUrl[];
}

export const FooterLinks = ({ links }: FooterLinksProps) => {
  return (
    <section className="w-4/5 m-auto md:w-full md:m-0">
      <h3 className="text-lg font-bold text-black">La institución | Enlaces</h3>
      <ul>
        {links.map((link) => {
          return (
            <li>
              {link.external ? (
                <a href={link.url} target="_blank" className="text-black">
                  <TextWithIcon
                    icon={
                      <ExternalLinkIcon
                        width={20}
                        className="text-black mr-3"
                      />
                    }
                  >
                    {link.label}
                  </TextWithIcon>
                </a>
              ) : (
                <Link href={link.url}>
                  <a href={link.url} className="text-black">
                    <TextWithIcon
                      icon={<LinkIcon width={20} className="text-black mr-3" />}
                    >
                      {link.label}
                    </TextWithIcon>
                  </a>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
