// ============================================================
// RAFIX STUDIO — SITE DATA (Edit this file to update content)
// ============================================================
// This file is your CMS. Edit values below to update the site.
// For advanced edits, use the Admin Panel at /admin.html
// ============================================================

const SITE_DATA_DEFAULT = {
  // ── BRAND ──────────────────────────────────────────────────
  brand: {
    studioName: "Rafix Studio",
    designerName: "Rafid Khan",
    tagline: "Graphic Designer & Visual Storyteller",
    subTagline: "Founder of Rafix Studio",
    specialties: ["Brand Identity", "Social Media", "Packaging", "Motion Graphics"],
    bio: "Graphic Designer with 8+ years of experience across the UAE, GCC, and UK markets, specializing in brand identity, social media creative, packaging design, and motion graphics. Proven ability to handle fast-paced campaign adaptation, multilingual content (EN/AR), and high-volume design production for agencies and global brands.",
    bioExtra: "Strong track record in boosting engagement, improving brand visuals, and delivering clean, high-quality creative assets under tight deadlines.",
    stats: [
      { value: "8+", label: "Years Experience" },
      { value: "50+", label: "Brands Served" },
      { value: "3", label: "Countries" },
      { value: "200+", label: "Projects Delivered" }
    ],
    location: "Dubai, UAE",
    availability: "Available for Freelance",
    resumeFile: "Rafid_Resume_2026.pdf",
    resumeDataUrl: "",  // Uploaded PDF stored as base64 data URL (set via Admin)
    photo: "",          // Hero photo — data URL or path e.g. "assets/rafid-photo.jpg"
    logo: ""            // Logo image — data URL or path. Empty = use text logo.
  },

  // ── CONTACT ────────────────────────────────────────────────
  contact: {
    email: "rafiddesigner@rafixstudio.com",
    phone: "+971 55 191 7260",
    website: "www.rafixstudio.com",
    whatsapp: "971551917260",
    social: {
      instagram: "https://instagram.com/rafixstudio",
      behance: "https://behance.net/rafidkhan",
      linkedin: "https://linkedin.com/in/rafidkhan",
      facebook: "https://facebook.com/rkcreativedesigner"
    }
  },

  // ── EXPERIENCE ─────────────────────────────────────────────
  experience: [
    {
      role: "Graphics Designer",
      company: "WUPP Media UK",
      type: "Full-Time",
      period: "Sep 2025 — Present",
      description: "Creating high-impact visual content for UK-based digital media brand. Managing brand identity, social campaigns, and motion graphics for international audiences.",
      current: true
    },
    {
      role: "Senior Graphics Designer",
      company: "Boo Boo Laand",
      type: "Full-Time",
      period: "Aug 2024 — Sep 2025",
      description: "Led visual design direction for a fast-growing brand. Delivered complete brand systems, campaign assets, and motion graphics under tight production timelines.",
      current: false
    },
    {
      role: "Graphics Designer",
      company: "CAC International Bank",
      type: "Remote Work",
      period: "Aug 2022 — Sep 2024",
      description: "Designed multilingual (EN/AR) corporate communication materials, digital banking visuals, and brand-compliant marketing assets for an international financial institution.",
      current: false
    },
    {
      role: "Freelance Designer",
      company: "Events, Real Estate & Digital Agencies",
      type: "Freelancing",
      period: "2018 — Ongoing",
      description: "Delivered brand identity, event visuals, real estate marketing material, and social media creative for clients across Dubai and the wider GCC region.",
      current: false
    }
  ],

  // ── EDUCATION ──────────────────────────────────────────────
  education: [
    {
      degree: "Diploma in Design and Art",
      institution: "Design Institute",
      period: "2016 – 2018"
    }
  ],

  // ── SKILLS ─────────────────────────────────────────────────
  skills: [
    { name: "Brand Identity", icon: "✦", level: 95 },
    { name: "Social Media Design", icon: "◈", level: 98 },
    { name: "Packaging Design", icon: "⬡", level: 88 },
    { name: "Motion Graphics", icon: "◎", level: 85 },
    { name: "Creative Direction", icon: "✧", level: 90 },
    { name: "Campaign Design", icon: "◆", level: 92 }
  ],
  software: [
    { name: "Photoshop", abbr: "Ps", color: "#31A8FF" },
    { name: "Illustrator", abbr: "Ai", color: "#FF9A00" },
    { name: "After Effects", abbr: "Ae", color: "#9999FF" },
    { name: "Premiere Pro", abbr: "Pr", color: "#9999FF" },
    { name: "Figma", abbr: "Fi", color: "#F24E1E" }
  ],

  // ── PROJECTS ───────────────────────────────────────────────
  // Add your projects here. Each project opens a full case study.
  projects: [
    {
      id: "brand-identity-01",
      title: "Brand Identity System",
      category: "Branding",
      tags: ["Logo", "Brand Guidelines", "Visual Identity"],
      description: "Complete brand identity design from strategy to visual execution. Developed logo, color system, typography, and full brand guidelines.",
      client: "Confidential",
      year: "2024",
      tools: ["Illustrator", "Photoshop"],
      featured: true,
      cover: "", // "assets/projects/brand-01.jpg"
      images: [],
      story: "A full brand identity project that required understanding the client's vision and translating it into a cohesive visual language that speaks to their target audience."
    },
    {
      id: "social-media-01",
      title: "Social Media Campaign",
      category: "Social Media",
      tags: ["Instagram", "Campaign", "Visual Design"],
      description: "High-engagement social media creative suite for a regional brand launch across UAE and GCC markets.",
      client: "Confidential",
      year: "2024",
      tools: ["Photoshop", "Illustrator", "After Effects"],
      featured: true,
      cover: "",
      images: [],
      story: "Developed a complete social media visual system with templates, animated stories, and feed posts that maintained brand consistency while maximizing engagement."
    },
    {
      id: "packaging-01",
      title: "Product Packaging Design",
      category: "Packaging",
      tags: ["Packaging", "Print", "Brand Extension"],
      description: "Premium packaging design for a consumer product brand. From concept to print-ready artwork including structural considerations.",
      client: "Confidential",
      year: "2023",
      tools: ["Illustrator", "Photoshop"],
      featured: true,
      cover: "",
      images: [],
      story: "Combining aesthetics with functionality, this packaging project required deep understanding of print production, material constraints, and shelf impact."
    },
    {
      id: "motion-01",
      title: "Motion Graphics Reel",
      category: "Motion Graphics",
      tags: ["Animation", "After Effects", "Motion"],
      description: "Animated brand videos and motion graphics created for digital campaigns, delivering dynamic storytelling for social platforms.",
      client: "Various",
      year: "2024",
      tools: ["After Effects", "Premiere Pro", "Illustrator"],
      featured: false,
      cover: "",
      images: [],
      story: "A collection of motion pieces showcasing fluid animation, brand storytelling, and dynamic visual communication across different client projects."
    },
    {
      id: "event-01",
      title: "Event Branding — Frenzy Dubai",
      category: "Event Design",
      tags: ["Event", "Branding", "Print", "Dubai"],
      description: "Complete event visual identity and collateral design for Frenzy Events Dubai, covering digital and print materials.",
      client: "Frenzy Event Dubai",
      year: "2023",
      tools: ["Illustrator", "Photoshop", "After Effects"],
      featured: false,
      cover: "",
      images: [],
      story: "Event branding that had to work across multiple touchpoints — digital invitations, venue signage, social media, and printed collateral."
    },
    {
      id: "realestate-01",
      title: "Real Estate Marketing Suite",
      category: "Marketing Design",
      tags: ["Real Estate", "Marketing", "Print", "Digital"],
      description: "Comprehensive real estate marketing materials including property brochures, digital ads, and social media assets.",
      client: "Real Estate Client",
      year: "2023",
      tools: ["Photoshop", "Illustrator"],
      featured: false,
      cover: "",
      images: [],
      story: "Luxury real estate requires a certain level of sophistication in visual design. This project delivered a full suite of marketing materials that elevated the property presentation."
    }
  ],

  // ── ADMIN ──────────────────────────────────────────────────
  // Change the password below to secure your admin panel.
  // After changing it here, open admin.html → Export → "Export as data.js"
  // and replace this file with the exported one to make it permanent.
  admin: {
    password: "rafix2024"
  }
};

// ── CMS LOADER ─────────────────────────────────────────────
// This merges admin panel edits (stored in localStorage) with defaults
function getSiteData() {
  try {
    const saved = localStorage.getItem('rafix_site_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      return deepMerge(SITE_DATA_DEFAULT, parsed);
    }
  } catch(e) { console.warn('CMS data load error:', e); }
  return SITE_DATA_DEFAULT;
}

function deepMerge(base, override) {
  const result = { ...base };
  for (const key in override) {
    if (override[key] && typeof override[key] === 'object' && !Array.isArray(override[key])) {
      result[key] = deepMerge(base[key] || {}, override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

// Expose globally
window.SITE = getSiteData();
