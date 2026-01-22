
export interface LinkItem {
  label: string;
  sublabel?: string;
  url: string;
  icon?: string;
}

export interface Section {
  title: string;
  description?: string;
  type: 'gradient' | 'outlined';
  items: LinkItem[];
  socials?: SocialLink[];
}

export interface SocialLink {
  platform: 'instagram' | 'linkedin' | 'twitter' | 'youtube';
  url: string;
  handle: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
