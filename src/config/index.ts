import type { SiteConfig, SiteContent } from "../types";
export const SITE_CONFIG: SiteConfig = {
  title: "Joe Karow — Full Stack Software Engineer",
  author: "Joe Karow",
  description:
    "Software Engineer based in Washington, DC. I specialize in web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/memoji.webp",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Featured Work", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    {
      text: "Bluesky",
      href: "https://bsky.app/profile/joekarow.dev",
      icon: { name: "logos:bluesky" },
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/jkarow/",
      icon: { name: "logos:linkedin-icon" },
    },
    {
      text: "Github",
      href: "https://github.com/JoeKarow",
      icon: { name: "logos:github-icon" },
    },
  ],
  socialImage: "/preview.png",
  canonicalURL: "https://joekarow.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Joe Karow",
    specialty: "Full Stack Software Engineer",
    summary: SITE_CONFIG.description,
    // "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "hello@joekarow.dev",
    socialLinks: SITE_CONFIG.socialLinks,
  },
  experience: [
    {
      company: "InReach",
      position: "Lead Engineer",
      startDate: "September 2022",
      endDate: "October 2024",
      summary: [
        "Led the complete rewrite of the organization's legacy application, transitioning it from an outdated codebase to a modern, scalable architecture.",
        "Enhanced language access by utilizing Crowdin for crowdsourced translations from volunteers to ensure accurate, inclusive, and culturally competent language support.",
        "Updated iOS & Android apps to comply with latest Apple/Google standards.",
        "Managed cloud resources to minimize waste expense without sacrificing performance.",
        "Managed team of interns, volunteers, and contractors using agile workflows.",
      ],
    },
    {
      company: "100Devs",
      position: "Full Stack Engineer",
      startDate: "January 2022",
      endDate: "September 2022",
      summary: [
        "Collaborated with a team of community taught developers to build modern and responsive web applications.",
        "Offered peer mentorship by sharing technical knowledge and best practices with team members through regular pair programming sessions and collaborative code reviews.",
      ],
    },
    {
      company: "Hilton",
      position: "Director of Finance",
      startDate: "August 2015",
      endDate: "August 2021",
      summary: [
        "Finance lead for various hotels, including the Embassy Suites Old Town Alexandria, Hilton Garden Inn Alexandria, Washington Hilton, and Hilton Crystal City. Managed diverse teams, implementing Agile processes to deliver workflow efficiency while ensuring a profitable, productive hotel operation.",
        "Developed a daily sales tax reconciliation application that reduced monthly sales tax return filing time from 4+ hours down to under 30 minutes, while also reducing sales tax collection variances to less than 0.5% on $10m monthly sales volume. This application was celebrated as a best practice and shared at a conference attended by all hotel finance leaders in North & South America.",
        "Developed multiple smaller tools/applications to reduce month-end financial closing time from 60+ working hours to less than 24 working hours.",
      ],
    },
  ],
  projects: [
    {
      name: "InReach App",
      summary:
        "InReach is the world’s first open source verified LGBTQ+ resource platform.",
      links: [
        { href: "https://app.inreach.org", text: "Live App" },
        { href: "https://github.com/weareinreach/InReach", text: "Source" },
      ],
      image: "/inreach-app.png",
    },
    // {
    //   name: "Shopp App",
    //   summary: "An e-commerce platform that replicates Shopify's key features.",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/shopify-clon.png",
    // },
    // {
    //   name: "ClonTagram",
    //   summary: "A social network that replicates the features of Instagram",
    //   linkPreview: "/",
    //   linkSource: "https://github.com/immois/astro-zen",
    //   image: "/clone-ig.png",
    // },
  ],
  about: {
    description: [
      `
      Hi, I’m Joe Karow!
      Ever since my childhood Tandy 1000RL from Radio Shack, computers have been my playground. My early adventures included attempting to install Windows 2.0 (thwarted by a corrupted disk #4) and successfully dual-booting Slackware Linux with Windows 95 without catastrophe—a genuine achievement in 1996!`,
      `My first web creation? A "Java Enhanced" Simpsons fan site hosted on AOL, gloriously overloaded with unnecessary java applets and too many GIFs. (I even earned my first copyright notice from Sun Microsystems for borrowing Duke, the Java mascot.)`,
      `After building a successful career in the hotel industry, where creative problem-solving became second nature, I have returned to my first love — development. The moment I started coding again, that same excitement I felt building that awful Simpsons site came rushing back. Now, I blend my hospitality experience with technical skills to create solutions that are both functional and user-focused.
    `,
    ],
    image: "/memoji.webp",
  },
};

// #5755ff
