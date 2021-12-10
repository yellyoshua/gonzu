import { ApplicationCopyright } from "@/app/constants";
import { Copyright } from "./Copyright";
import { FooterSections } from "./FooterSections";

export function Footer() {
  return (
    <footer className="py-10 sm:my-10 bg-gray-200">
      <FooterSections />
      <Copyright className="mt-10" copyright={ApplicationCopyright} />
    </footer>
  );
}
