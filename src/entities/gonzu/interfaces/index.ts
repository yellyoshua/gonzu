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

export enum Celebrations {
  NONE = "none",
  CHRISTMAS = "christmas",
}

export interface CelebrationOption {
  celebration: Celebrations;
  label: string;
}

export enum Songs {
  NONE = "none",
  CHRISTMAS = "christmas",
  STUDYING = "studying",
  SPIRITUAL = "spiritual",
}

export interface SongOption {
  song: Songs;
  label: string;
}

export interface SiteConfig {
  showInauguralConfetti: boolean;
  song: Songs;
  songsProviderImplemented: boolean;
  celebration: Celebrations;
  celebrationsProviderImplemented: boolean;
  darkMode: boolean;
  timesActiveDarkMode: number;
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
