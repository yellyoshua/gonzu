import Link from "next/link";
import { useLockBodyScroll, useToggle } from "react-use";
import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon";
import { TextWithIcon } from "@/app/components/commons/TextWithIcon";
import { LinkUrl } from "@/app/interfaces";

interface DrawerNavbarProps {
  links: LinkUrl[];
  copyright: string;
  logoElement: React.ReactNode;
}

export const DrawerNavbar = ({
  logoElement,
  links,
  copyright,
}: DrawerNavbarProps) => {
  const [isOpen, toggleDrawer] = useToggle(false);

  useLockBodyScroll(isOpen);

  return (
    <nav className="flex fixed w-full items-center justify-between px-6 h-20 bg-white text-gray-700 border-b border-gray-200 z-10">
      <div className="flex items-center w-full">
        <button className="mr-2" aria-label="Open Menu" onClick={toggleDrawer}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className="flex-1">{logoElement}</div>
      </div>

      {isOpen && (
        <div
          className="z-10 fixed inset-0 transition-opacity"
          onClick={toggleDrawer}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      <aside
        className={`flex flex-col transform top-0 left-0 w-72 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="flex w-full items-center p-4 border-b">
          {logoElement}
        </span>

        {links.map(({ label, url, external }, key) => {
          return (
            <span
              key={`navbar-${label}-${key}`}
              className="flex items-center px-2 py-4 mx-6 cursor-pointer border-b-2 border-transparent hover:border-red-700"
            >
              {external ? (
                <a
                  href={url}
                  target="_blank"
                  className="font-bold font-jost text-lg text-black"
                >
                  <TextWithIcon
                    noMargin
                    right
                    icon={<ExternalLinkIcon width={20} className="ml-3" />}
                  >
                    {label}
                  </TextWithIcon>
                </a>
              ) : (
                <Link href={url}>
                  <a
                    href={url}
                    className="font-bold text-black font-jost text-lg"
                  >
                    {label}
                  </a>
                </Link>
              )}
            </span>
          );
        })}
        <span className="flex-1" />

        <div className="w-full">
          <p className="p-4 bg-orange-700 text-white">
            <span className="font-bold">U.E GONZU</span>
            <br />
            <span className="text-sm text-white">{copyright}</span>
          </p>
        </div>
      </aside>
    </nav>
  );
};
