// import { FooterContact } from "./FooterContact";
import { FooterInformation } from "./FooterInformation";
import { FooterLinks } from "./FooterLinks";

interface FooterSectionsProps extends React.ComponentProps<"div"> {}

export const FooterSections = ({
  className,
  ...props
}: FooterSectionsProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 mx-3 ${className}`}
      {...props}
    >
      <FooterInformation
        phone="(02) 601-590"
        email="comunicaciones@gonzu.edu.ec"
        direction="Carlos Polit E18-300 Jardin del Valle Pasaje N. Parroquia Juan Pablo II"
      />
      <FooterLinks
        links={[
          { label: "Noticias", url: "/news" },
          { label: "Eventos", url: "/events" },
          { label: "Pastoral", url: "/pastoral" },
          {
            label: "Idukay",
            url: "https://idukay.net",
            external: true,
          },
        ]}
      />
      {/* <FooterContact /> */}
    </div>
  );
};
