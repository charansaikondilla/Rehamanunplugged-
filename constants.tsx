
import { Section, Testimonial } from './types';

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

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sai Marthand",
    title: "Director – Little Hearts (Telugu)",
    subtitle: "Media & Entertainment",
    quote: "Rehaman Sir has a rare ability — he sees strengths you don't even know exist. He never pushes loudly. He nudges silently. Before you realise it, you are operating at a level you once thought was impossible. That clarity changed my creative journey.",
    image: "/testimonials/saimarthad.png"
  },
  {
    name: "Navya Darba",
    title: "Influencer – United States",
    subtitle: "Content Creator",
    quote: "Whenever I faced confusion or inner conflict, one conversation with Rehaman Sir would realign everything. He doesn't just advice — he makes you see clearly. Every discussion left me stronger, calmer, and more decisive.",
    image: "/testimonials/navya darba.png"
  },
  {
    name: "Mr. Haneuf",
    title: "Senior Manager – Amazon",
    subtitle: "Technology & Leadership",
    quote: "I was a complete introvert, filled with fear and hesitation. Rehaman Sir's mentoring didn't just improve my communication — it rebuilt my confidence. He transformed my mindset and helped me grow into a leader.",
    image: "/testimonials/Mr.haneuf.png"
  }
];
