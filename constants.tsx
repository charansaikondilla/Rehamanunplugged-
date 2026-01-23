
import { Section } from './types';

export const PROFILE_NAME = "DR. REHAMAN MOHAMMED";
export const TAGLINE = "MENTOR & COACH";
export const HEADING = "Igniting Minds, Unleashing Potentials.";
export const SUB_TAGLINE = "I help students and young individuals who feel confused or stuck find clarity, confidence, and direction through strategic mentorship and practical frameworks — by understanding their mindset silently and making everything feel simple and achievable.";
export const PROFILE_IMAGE = "https://i.ibb.co/YBnY9r6D/rehman-sir-photo.jpg";

export const SECTIONS: Section[] = [
  {
    title: "CONNECT WITH ME",
    description: "Follow the Journey",
    type: 'gradient',
    items: [],
    socials: [
      { platform: 'instagram', url: "https://www.instagram.com/mohammed.rehaman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", handle: "@mohammed.rehaman" },
      { platform: 'youtube', url: "https://www.youtube.com/@RehamanMohammed", handle: "@RehamanMohammed" },
      { platform: 'twitter', url: "https://twitter.com/rehmansrk", handle: "@rehmansrk" },
      { platform: 'linkedin', url: "https://linkedin.com/in/rehamanmohammed", handle: "Rehaman Mohammed" }
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
];
