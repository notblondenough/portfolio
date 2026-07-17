// Single source of truth for identity, links, and site-wide copy.

export const site = {
  name: "Alok Ranjan Shukla",
  shortName: "Alok R. Shukla",
  role: "Software Engineer",
  location: "Bengaluru, India",
  tagline:
    "I build the long, quiet roads that data travels — Kafka pipelines, multi-agent AI systems, and backends that keep running after everyone's gone home.",
  currently:
    "Currently at Whatfix, turning week-long manual workflows into three-hour automated ones.",
  email: "alokranjanshuklaofficial@gmail.com",
  resume: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/notblondenough" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alok-shukla-059ab8253/" },
    { label: "LeetCode", href: "https://leetcode.com/u/alkuhskola" },
    { label: "Codeforces", href: "https://codeforces.com/profile/retards" },
  ],
  url: "https://alokrshukla.vercel.app",
} as const;
