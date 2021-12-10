import { ApplicationCopyright } from "@/app/constants";
import { Copyright } from "./Copyright";
import { FooterSections } from "./FooterSections";

export function Footer() {
  return (
    <footer className="py-10 sm:my-10 border-t-2 border-gray-300">
      <FooterSections />
      <Copyright className="mt-10" copyright={ApplicationCopyright} />
    </footer>
  );
}
