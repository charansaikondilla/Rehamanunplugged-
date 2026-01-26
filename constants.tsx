
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
      { platform: 'whatsapp', url: "https://wa.me/918801279471", handle: "Chat on WhatsApp" },
      { platform: 'instagram', url: "https://www.instagram.com/mohammed.rehaman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", handle: "@mohammed.rehaman" },
      { platform: 'youtube', url: "https://www.youtube.com/@RehamanMohammed", handle: "@RehamanMohammed" },
      { platform: 'twitter', url: "https://twitter.com/rehmansrk", handle: "@rehmansrk" },
      { platform: 'linkedin', url: "https://linkedin.com/in/rehamanmohammed", handle: "Rehaman Mohammed" }
    ]
  },
  {
    title: "MY EXPERT SERVICES",
    type: 'outlined',
    items: [
      { label: "Vocabulary Building", url: "#" },
      { label: "Emotional Intelligence", url: "#" },
      { label: "Mental Health Awareness", url: "#" },
      { label: "Profile / Brand Building", url: "#" }
    ]
  },
];
