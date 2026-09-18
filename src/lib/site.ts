export const site = {
  name: "SM Marketing",
  tagline: "Digital Solutions Tailored for Growth",
  headline: "Innovative Software House for Business Growth",
  description:
    "SM Marketing crafts customized websites, modern design, and data-driven marketing strategies that help businesses reach their full potential.",
  phone: "+92 327 2775540",
  phoneHref: "tel:+923272775540",
  email: "info@smmarketing.live",
  emailHref: "mailto:info@smmarketing.live",
  address: "Office No 7, Ruby Heights, Near Imtiaz Xpress, Sharfabad, Karachi",
  addressShort: "Ruby Heights, Sharfabad, Karachi",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM PKT",
  facebook: "https://www.facebook.com/smmarketing340/",
  instagram:
    "https://www.instagram.com/smmarketing340/",
} as const;

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  short: string;
  body: string;
  points: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    kicker: "Build",
    short:
      "Responsive, high-performance websites tailored to your business goals.",
    body: "We design and develop customized websites that provide seamless user experiences and drive business growth. Every build is responsive, scalable, and engineered to convert visitors into clients.",
    points: [
      "Custom marketing and corporate sites",
      "Fast, mobile-first performance",
      "CMS setups you can actually manage",
      "SEO-ready structure from day one",
    ],
    image: "/images/work-web.jpg",
  },
  {
    slug: "modern-designing",
    title: "Modern Designing",
    kicker: "Brand",
    short:
      "Sleek, modern design that elevates brand identity and engagement.",
    body: "We craft cutting-edge, visually appealing design systems that captivate audiences and set your brand apart — from identity to campaign collateral.",
    points: [
      "Brand identity and visual systems",
      "Campaign and social creative",
      "Print and digital collateral",
      "Consistent look across every channel",
    ],
    image: "/images/work-graphic.jpg",
  },
  {
    slug: "marketing-strategy",
    title: "Marketing Strategy",
    kicker: "Grow",
    short:
      "Data-driven strategies that boost visibility, engagement, and conversions.",
    body: "We design targeted marketing strategies that enhance brand visibility, drive customer engagement, and grow revenue — tailored to your market, not a template.",
    points: [
      "Positioning and go-to-market plans",
      "Paid and organic channel mix",
      "Funnel and conversion mapping",
      "Monthly reporting you can act on",
    ],
    image: "/images/work-marketing.jpg",
  },
  {
    slug: "seo-content",
    title: "SEO & Content Writing",
    kicker: "Rank",
    short:
      "Search-led content that gets found and turns readers into customers.",
    body: "From technical SEO foundations to editorial calendars, we help your business show up for the searches that matter in Karachi and beyond.",
    points: [
      "Keyword and competitor research",
      "On-page and technical SEO",
      "Blog, landing, and service copy",
      "Local search for Karachi businesses",
    ],
    image: "/images/work-marketing.jpg",
  },
  {
    slug: "app-development",
    title: "App Development",
    kicker: "Ship",
    short:
      "Intuitive, scalable mobile products built to perform on iOS and Android.",
    body: "We turn product ideas into high-impact mobile experiences — from booking and commerce to internal tools — with clean UX and reliable delivery.",
    points: [
      "iOS and Android product builds",
      "MVP through production releases",
      "API and payment integrations",
      "Post-launch support and iteration",
    ],
    image: "/images/work-app.jpg",
  },
  {
    slug: "ui-ux-designing",
    title: "UI / UX Designing",
    kicker: "Craft",
    short:
      "User-focused interfaces that feel effortless and convert with intent.",
    body: "We map journeys, prototype flows, and design interfaces that reduce friction — so your product is as clear as it is beautiful.",
    points: [
      "Research-backed user flows",
      "Wireframes and interactive prototypes",
      "Design systems for scale",
      "Usability reviews before you build",
    ],
    image: "/images/work-ux.jpg",
  },
];

export const pillars = [
  {
    title: "Advanced Technology",
    text: "Innovative software development and system integration that help businesses grow, adapt, and thrive in the digital world.",
  },
  {
    title: "Exceptional Free Support",
    text: "Fast, reliable help from our expert team to keep your systems running smoothly — whenever you need it most.",
  },
  {
    title: "Fast Service",
    text: "Quick turnaround without compromising quality. We prioritize efficiency so you never wait long for solutions.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discover",
    text: "Complimentary consultation. We assess your goals, audience, and current digital presence — at no cost.",
  },
  {
    step: "02",
    title: "Design",
    text: "Modern, user-focused concepts that capture your brand and map a clear path from first click to conversion.",
  },
  {
    step: "03",
    title: "Build",
    text: "Responsive websites, apps, and campaigns engineered for speed, SEO, and the tools your team actually uses.",
  },
  {
    step: "04",
    title: "Grow",
    text: "Launch, measure, and iterate. Ongoing support and marketing so the work keeps compounding after go-live.",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: "Website Design" | "Mobile Apps" | "Logo Design" | "E-Commerce";
  client: string;
  year: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    slug: "business-consult",
    title: "Business Consult",
    category: "Website Design",
    client: "Advisory studio",
    year: "2025",
    image: "/images/work-web.jpg",
    summary:
      "A conversion-led consulting site with structured service pages and a calm, executive visual system.",
  },
  {
    slug: "lumen-atelier",
    title: "Lumen Atelier",
    category: "E-Commerce",
    client: "Lifestyle retail",
    year: "2025",
    image: "/images/work-ecom.jpg",
    summary:
      "Luxury product storytelling, streamlined checkout, and a storefront built to feel like a flagship.",
  },
  {
    slug: "northline-book",
    title: "Northline Book",
    category: "Mobile Apps",
    client: "Hospitality",
    year: "2024",
    image: "/images/work-app.jpg",
    summary:
      "A dark-mode booking app with live availability, reminders, and a one-tap confirm flow.",
  },
  {
    slug: "vector-mark",
    title: "Vector Mark",
    category: "Logo Design",
    client: "Professional services",
    year: "2025",
    image: "/images/work-brand.jpg",
    summary:
      "A geometric identity system across stationery, decks, and digital — built to lock up cleanly at any size.",
  },
  {
    slug: "pulse-campaigns",
    title: "Pulse Campaigns",
    category: "Website Design",
    client: "Growth brand",
    year: "2024",
    image: "/images/work-marketing.jpg",
    summary:
      "Landing architecture and campaign creative designed to raise qualified traffic and keep it.",
  },
  {
    slug: "folio-press",
    title: "Folio Press",
    category: "Logo Design",
    client: "Creative house",
    year: "2024",
    image: "/images/work-graphic.jpg",
    summary:
      "Print-led brand collateral and poster systems with a tight emerald-and-ink palette.",
  },
  {
    slug: "orbit-flow",
    title: "Orbit Flow",
    category: "Mobile Apps",
    client: "Product team",
    year: "2025",
    image: "/images/work-ux.jpg",
    summary:
      "UX architecture and interface design for a multi-step product flow that finally felt obvious.",
  },
  {
    slug: "harbor-store",
    title: "Harbor Store",
    category: "E-Commerce",
    client: "DTC brand",
    year: "2024",
    image: "/images/work-ecom.jpg",
    summary:
      "Catalog, merchandising, and mobile checkout engineered for repeat purchase — not just launch day.",
  },
];

export const team = [
  {
    name: "Muhammad Salman",
    role: "Co Founder",
    bio: "Leads SM Marketing with a focus on original, lasting digital work — not throwaway templates.",
  },
  {
    name: "Muhammad Hussain Noor",
    role: "Web Developer",
    bio: "Builds responsive, high-performance websites that give businesses a durable online presence.",
  },
  {
    name: "Sara Khan",
    role: "Manager & SEO",
    bio: "Runs campaigns and search programs that grow visibility with measurable, compounding results.",
  },
  {
    name: "Zeeshan Aslam",
    role: "Designer",
    bio: "Shapes brand systems and modern interfaces that feel premium and stay consistent everywhere.",
  },
  {
    name: "Abdul Ahad",
    role: "Marketing Manager",
    bio: "Oversees strategic campaigns that drive brand growth, engagement, and commercial outcomes.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "SM Marketing rebuilt our site and the strategy behind it. Leads are cleaner, the brand looks the part, and the team actually stays on it after launch.",
    name: "Ali",
    role: "Director",
  },
  {
    quote:
      "Clear process, fast delivery, no drama. They treated our digital presence like an operating system — not a one-off brochure.",
    name: "Hassan Malik",
    role: "Director",
  },
  {
    quote:
      "The design work is sharp, but the follow-through is why we stayed. Support is real, and they move when the market moves.",
    name: "Ahmed Shah",
    role: "Director",
  },
] as const;

export const articles = [
  {
    date: "26 Mar 2025",
    title: "Naturally Foster a Holistic Global Perspective",
    excerpt:
      "How growing teams stay coherent as they expand — from brand voice to the systems behind the site.",
  },
  {
    date: "26 Mar 2024",
    title: "Essential Guidelines for Running a Successful Web Agency",
    excerpt:
      "Clear communication, high-quality work, timely delivery, and client-focused solutions — every time.",
  },
  {
    date: "26 Mar 2024",
    title: "Providing Top-Notch Digital Marketing Solutions",
    excerpt:
      "Innovative strategies that drive growth, increase engagement, and convert attention into revenue.",
  },
] as const;

export const reasons = [
  {
    title: "Quality Service",
    text: "Reliable, professional, and affordable work tailored to what your business actually needs.",
  },
  {
    title: "Skilled Team",
    text: "Experienced specialists in web, design, SEO, and campaigns — not a revolving freelance bench.",
  },
  {
    title: "Complimentary Consultation",
    text: "Expert insight at no cost. We assess, recommend, and only then scope what is worth building.",
  },
  {
    title: "Karachi Based, Always On",
    text: "Direct access to the people doing the work. Fast answers, local context, no offshore runaround.",
  },
] as const;

export const skills = [
  "React",
  "WordPress",
  "Shopify",
  "Laravel",
  "Figma",
  "SEO",
  "Google Ads",
  "Content",
  "Flutter",
  "Node.js",
  "UI / UX",
  "Branding",
  "E-Commerce",
  "Analytics",
] as const;

export const faqs = [
  {
    q: "Do you offer a free consultation?",
    a: "Yes. Every new engagement starts with a complimentary consultation so we can understand your goals and recommend a path that actually fits.",
  },
  {
    q: "How long does a typical website take?",
    a: "Most marketing sites land in two to six weeks depending on scope, content, and feedback speed. Rush timelines are available in the quote estimator.",
  },
  {
    q: "Can you handle design, development, and marketing together?",
    a: "That is the point. SM Marketing is built as a software house plus agency — so brand, site, and growth are not split across three vendors.",
  },
  {
    q: "Where are you based?",
    a: "Office No 7, Ruby Heights, near Imtiaz Xpress, Sharfabad, Karachi. We work with clients across Pakistan and remotely.",
  },
] as const;
