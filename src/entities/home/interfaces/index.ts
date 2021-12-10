export interface SocialLink {
  name: string;
  uniconIcon: string;
  url: string;
}

export interface HomePage {
  API_URL?: string;
  loading: boolean;
  socialLinks: SocialLink[];
  copyright: string;
}
