import { Button } from "@/app/entities/gonzu/components/Button";
import { LinkUrl } from "@/app/interfaces";
import Link from "next/link";

interface ButtonsGridProps {
  links?: LinkUrl[];
}

const defaultButtons: LinkUrl[] = [
  { label: "Dar un Tour", url: "/app/tour", disabled: true },
  { label: "Nosotros", url: "/sobre-nosotros" },
  { label: "Pastoral", url: "/pastoral" },
  { label: "Inscripciones", url: "/app/inscripciones" },
];

export const ButtonsGrid = ({ links }: ButtonsGridProps) => {
  const safeLinks: LinkUrl[] =
    typeof links === "undefined" ? defaultButtons : links;

  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 items-center">
      {safeLinks.map((link, key) =>
        link.disabled ? (
          <Button
            key={`${link.label}-${key}`}
            disabled={link.disabled}
            className="m-1 grow"
          >
            {link.label}
          </Button>
        ) : (
          <Link key={`${link.label}-${key}`} href={link.url}>
            <a href={link.url} className="m-1 grow">
              <Button className="w-full">{link.label}</Button>
            </a>
          </Link>
        )
      )}
    </div>
  );
};
