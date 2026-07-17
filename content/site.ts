// Single source of truth for identity, links, and site-wide copy.
// Social/profile URLs are placeholders ("#") until Alok supplies them.

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
  links: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "LeetCode", href: "#" },
    { label: "Codeforces", href: "#" },
  ],
  url: "https://alokranjanshukla.vercel.app", // update after first deploy
} as const;
