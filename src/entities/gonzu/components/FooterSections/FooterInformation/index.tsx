import LocationMarkerIcon from "@heroicons/react/solid/LocationMarkerIcon";
import PhoneIcon from "@heroicons/react/solid/PhoneIcon";
import MailIcon from "@heroicons/react/solid/MailIcon";
import { TextWithIcon } from "@/app/components/commons/TextWithIcon";

interface FooterInformationProps {
  direction: string;
  phone: string;
  email: string;
}

export const FooterInformation = ({
  direction,
  phone,
  email,
}: FooterInformationProps) => {
  return (
    <section className="m-auto md:m-0">
      <img
        className="max-w-xs w-full rounded-md m-auto md:m-0"
        src="/assets/gonzu-header-banner.jpg"
        alt="gonzu-header-banner"
      />

      <TextWithIcon
        icon={<LocationMarkerIcon width={20} className="text-black mr-3" />}
      >
        {direction}
      </TextWithIcon>

      <TextWithIcon icon={<PhoneIcon width={20} className="text-black mr-3" />}>
        {phone}
      </TextWithIcon>

      <TextWithIcon icon={<MailIcon width={20} className="text-black mr-3" />}>
        {email}
      </TextWithIcon>
    </section>
  );
};
