import { LinkUrl } from "@/app/interfaces";

export interface SocialLink {
  name: string;
  uniconIcon: string;
  url: string;
}

export interface AcademicOffer {
  title: string;
  link: LinkUrl;
}

export enum CelebrationsTemplates {
  CHRISTMAS = "christmas",
}

export interface Celebration {
  template: CelebrationsTemplates;
}

export interface SiteConfig {
  celebration: Celebration | null;
  darkMode: boolean;
}

export interface Gonzu {
  socialLinks: SocialLink[];

  applicationName: string;
  applicationDescription: string;
  bannerLogo: string[];
  header: {
    links: LinkUrl[];
  };
  body: {
    welcomeLinks: LinkUrl[];
    academicOffers: AcademicOffer[];
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
