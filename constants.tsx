
import { Section } from './types';

export const PROFILE_NAME = "DR. REHAMAN MOHAMMED";
export const TAGLINE = "MENTOR & COACH";
export const HEADING = "Igniting Minds, Unleashing Potentials.";
export const SUB_TAGLINE = "Helping students and young individuals who feel lost or overwhelmed find clarity, confidence, and direction through strategic mentorship and practical, life-shaping frameworks.";
export const PROFILE_IMAGE = "https://i.ibb.co/YBnY9r6D/rehman-sir-photo.jpg";

export const SECTIONS: Section[] = [
  {
    title: "FEATURED BOOK",
    description: "Latest Release",
    type: 'gradient',
    items: [
      { label: "The Soul's Canvas", sublabel: "📖 Available on Amazon", url: "https://amzn.in/d/b7otYm5" }
    ]
  },
  {
    title: "PROGRAMS",
    description: "Accelerator Track",
    type: 'outlined',
    items: [
      { label: "Elite Mentorship Program", sublabel: "Next-Gen Scaling", url: "#" }
    ]
  },
  {
    title: "COACHING",
    type: 'outlined',
    items: [
      { label: "1-ON-1 SESSIONS", sublabel: "Strategic Audit", url: "#" },
      { label: "MASTERMIND GROUP", sublabel: "Weekly Expansion", url: "#" }
    ]
  },
  {
    title: "CONNECT",
    description: "Follow the Journey",
    type: 'outlined',
    items: [],
    socials: [
      { platform: 'instagram', url: "https://www.instagram.com/mohammed.rehaman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", handle: "@mohammed.rehaman" },
      { platform: 'youtube', url: "https://www.youtube.com/@RehamanMohammed", handle: "@RehamanMohammed" },
      { platform: 'twitter', url: "https://twitter.com/rehmansrk", handle: "@rehmansrk" },
      { platform: 'linkedin', url: "https://linkedin.com/in/rehamanmohammed", handle: "Rehaman Mohammed" }
    ]
  }
];
