import { LinkUrl } from "@/app/interfaces";

export interface SocialLink {
  name: string;
  uniconIcon: string;
  url: string;
}

export interface Gonzu {
  socialLinks: SocialLink[];

  applicationName: string;
  applicationDescription: string;
  bannerLogo: string[];
  header: {
    links: LinkUrl[];
  };
  footer: {
    information: {
      phone: string;
      email: string;
      direction: string;
    };
    links: LinkUrl[];
  };
  copyright: string;
}
