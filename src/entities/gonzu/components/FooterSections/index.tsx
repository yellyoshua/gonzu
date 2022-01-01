// import { FooterContact } from "./FooterContact";
import { LinkUrl } from "@/app/interfaces";
import { FooterInformation } from "./FooterInformation";
import { FooterLinks } from "./FooterLinks";

interface FooterSectionsProps extends React.ComponentProps<"div"> {
  information: { phone: string; email: string; direction: string };
  links: LinkUrl[];
}

export const FooterSections = ({
  links,
  information,
  className,
  ...props
}: FooterSectionsProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 mx-3 ${className}`}
      {...props}
    >
      <FooterInformation {...information} />
      <FooterLinks links={links} />
      {/* <FooterContact /> */}
    </div>
  );
};
