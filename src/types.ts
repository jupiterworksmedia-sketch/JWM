export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string; // Used to choose lucide-react icon dynamically
}

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  imageUrl: string;
  category: string;
  client: string;
  year: string;
  summary: string;
  challenges: string;
  results: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

// Concrete static data aligned with user services
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "advertising",
    title: "Brand Impact – Advertising",
    subtitle: "We create campaigns that grab attention, provoke emotion, and drive measurable market shift.",
    description: "Our approach to advertising is cinematic and highly strategic. We do not just build banners or run ads; we craft narratives that lodge themselves in culture. Through hyper-targeted delivery and avant-garde visuals, we turn products into conversational triggers.",
    highlights: [
      "Cinematic Video Campaigns",
      "Omnichannel Visual Systems",
      "High-Fashion Editorial Art Direction",
      "Dynamic Social Ecosystems"
    ],
    iconName: "Megaphone"
  },
  {
    id: "experience",
    title: "Brand Engagement – Experience",
    subtitle: "We blend architecture, digital art, and physical spaces into unforgettable client encounters.",
    description: "In a digital-first world, physical space has become the ultimate luxury. We design spatial brand experiences, interactive galleries, and premium retail pop-ups that draw customers into living worlds. Human interaction sits at the core of our experiential architecture.",
    highlights: [
      "Spatial & Interior Experience Architecture",
      "Interactive Digital Art Installations",
      "Immersive Retail Pop-up Galleries",
      "Multi-sensory Launch Events"
    ],
    iconName: "Sparkles"
  },
  {
    id: "pr",
    title: "Brand Influence – Public Relations",
    subtitle: "We shape narratives, curate press relations, and build cultural momentum for elite brands.",
    description: "True influence is earned, not bought. We design bespoke media strategies, publish premium brand-owned content, and connect brands to cultural tastemakers. Our PR is centered on sleek design, sophisticated publications, and high-impact press packages.",
    highlights: [
      "Bespoke Press & Media Relations",
      "High-Concept Printed Publications",
      "Eminent Cultural Integration & Styling",
      "Crisis Narrative Management"
    ],
    iconName: "Compass"
  },
  {
    id: "consulting",
    title: "Brand Consulting",
    subtitle: "We define modern brand strategies, visual identity platforms, and market entry playbooks.",
    description: "We work directly with founders and executives to define the semantic core of their business. We establish clear visual standards, tone systems, and strategic market positioning that elevate a brand above commodity status to secure long-term value.",
    highlights: [
      "Core Brand DNA & Semantic Strategy",
      "Visual & Typography Architecture Systems",
      "Premium Market Entry Playbooks",
      "Product Line Architecture"
    ],
    iconName: "Compass" // Will map to Briefcase
  }
];

export const WORKS_DATA: WorkItem[] = [
  {
    id: "adv-perfume",
    title: "AURA SENSE",
    subtitle: "Cinematic Product Campaign",
    tagline: "Redefining high-fashion luxury cosmetics through moody editorial art direction.",
    imageUrl: "/src/assets/images/advertising_work_1781509457189.jpg",
    category: "Brand Impact – Advertising",
    client: "Aura Paris",
    year: "2026",
    summary: "Created a full visual campaign including high-fashion printed editorials, abstract cinematic videos, and a bespoke interactive soundboard that reacts to scent descriptions. This resulted in a historic lift in direct-to-consumer digital engagement.",
    challenges: "The luxury cosmetic market is extremely saturated, requiring a visual signature that eschewed generic pinks and golden sands for a moody physical artwork aesthetic.",
    results: [
      "40% increase in brand search volume within 30 days of launch",
      "Awarded Best Visual Campaign at the International Design Awards",
      "Featured across premium creative publications globally"
    ]
  },
  {
    id: "exp-lumen",
    title: "THE BRUTALIST HEAVEN",
    subtitle: "Interactive Spatial Installation",
    tagline: "A physical exhibition blending raw architecture and responsive light projections.",
    imageUrl: "/src/assets/images/experience_work_1781509473589.jpg",
    category: "Brand Engagement – Experience",
    client: "Lumen Art Gallery",
    year: "2025",
    summary: "Designed and built a spatial installation utilizing raw textured concrete surfaces and real-time generative lighting. Visitors' motion influenced the color spectrum, making each visitor an active component of the artwork.",
    challenges: "Synchronizing high-speed sensors with projection mapping inside historical raw structures without compromising the rustic, minimalist architectural integrity.",
    results: [
      "Over 45,000 visitors in its limited two-week showcase",
      "Generated immense earned media reach on social channels",
      "Acquired as a permanent installation by the Modern Museum"
    ]
  },
  {
    id: "pr-manifesto",
    title: "THE MONOCHROME VOLUME",
    subtitle: "Aesthetic Brand Print Volume",
    tagline: "Curation of a high-end physical publication documenting independent global creatives.",
    imageUrl: "/src/assets/images/pr_work_1781509488577.jpg",
    category: "Brand Influence – Public Relations",
    client: "The Circle Guild",
    year: "2026",
    summary: "Conceptualized and published a strictly limited, foil-embossed editorial book featuring black and white fine-art photography and intimate interviews. The publication served as a premium entry point for VIP guests.",
    challenges: "Maintaining a flawless level of tactile print production with hyper-precise margins and typography while curating global contributors on a tight publishing schedule.",
    results: [
      "100% of editions sold out in pre-orders within 12 hours",
      "Established long-term collaborative ties with high-net-worth creators",
      "Secured exclusive editorial coverage in 15+ major design portals"
    ]
  },
  {
    id: "con-identity",
    title: "NORDIC ARCH TYPE",
    subtitle: "Brand Identity & Strategy System",
    tagline: "Unifying architectural structures into a clean visual and strategic guidelines playbook.",
    imageUrl: "/src/assets/images/consulting_work_1781509505517.jpg",
    category: "Brand Consulting",
    client: "Nordic Construction & Design",
    year: "2025",
    summary: "Conducted a complete strategic overhaul of Nordic's corporate collateral, bringing their architectural values into their brand DNA. We developed custom type scales, editorial guidelines, and corporate packaging.",
    challenges: "Simplifying decades of complex industrial terminology and diverse business lines into a singular, highly refined, user-friendly strategy system.",
    results: [
      "Successfully repositioned client into high-end residential sectors",
      "Reduced collateral production turnaround by 65% through custom asset generators",
      "Cohesive alignment across 4 global regional offices"
    ]
  }
];

export const HERO_IMAGE_URL = "/src/assets/images/abstract_hero_1781509439498.jpg";

export const STATS: StatItem[] = [
  { value: "4", label: "Creative Divisions" },
  { value: "18+", label: "International Design Awards" },
  { value: "120+", label: "Premium Campaigns Launched" },
  { value: "14", label: "Global Brand Partners" }
];

export const ABOUT_US_MANIFESTO = {
  quote: "Design is not a decorative layer; it is the physical architecture of belief.",
  lead: "We are an elite creative force sitting at the geometric intersection of high art, advanced strategy, and cinematic visual design. We don't believe in generic templates, and we definitely don't believe in blending in.",
  philosophy: "Founded and operated by design purists, we collaborate with visionary founders who respect premium craftsmanship and long-term brand equity over temporary shortcuts. Our objective is to create enduring cultural gravity so that your audience approaches you, not the other way around."
};

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  divisionRef: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testi-aura",
    quote: "The cinematic campaign transformed our product launch from a standard luxury cosmetics run into a genuine cultural movement. They refuse compromise, and the market response has been extraordinary.",
    author: "Hélène de Roche",
    role: "Directrice de Création",
    company: "Aura Paris",
    divisionRef: "Advertising"
  },
  {
    id: "testi-lumen",
    quote: "Vertices didn't just build an exhibition; they engineered a tactile manifestation of light and concrete. This installation remains a pristine visual benchmark in our modern art collections.",
    author: "Dr. Marcus Vandercook",
    role: "Visual Director",
    company: "Lumen Art Gallery",
    divisionRef: "Experience"
  },
  {
    id: "testi-nordic",
    quote: "Their consulting stripped away decades of corporate clutter, leaving a sharp, highly authoritative identity system. It successfully repositioned our entire asset portfolio into high-end markets.",
    author: "Kjell Lindqvist",
    role: "Managing Partner",
    company: "Nordic Construction & Design",
    divisionRef: "Consulting"
  },
  {
    id: "testi-circle",
    quote: "Treating public relations and editorial publication as high art was a massive risk that paid off instantly. Every page of our Monochrome Volume is a physical statement of raw power.",
    author: "Sarah Jennings",
    role: "Executive Director",
    company: "The Circle Guild",
    divisionRef: "Public Relations"
  }
];

export const CONTACT_CHANNELS = {
  address: "Studio 402, Tiergartenstraße 17, 10785 Berlin, Germany",
  email: "curator@creativeagency.com",
  phone: "+49 30 8942-0210",
  socials: [
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Vimeo", url: "#" },
    { name: "Behance", url: "#" }
  ]
};
