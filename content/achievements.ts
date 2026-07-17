// Competitive-programming stats rendered as roadside route shields on the home page.
export type Stat = {
  platform: string;
  figure: string;
  detail: string;
};

export const stats: Stat[] = [
  {
    platform: "LeetCode",
    figure: "2180",
    detail: "Guardian · top 1% worldwide · 500+ solved",
  },
  {
    platform: "Codeforces",
    figure: "1678",
    detail: "Expert · top 2% worldwide · 500+ solved",
  },
  {
    platform: "CodeChef",
    figure: "1982",
    detail: "4-star · top 3% worldwide · 50+ solved",
  },
  {
    platform: "Academics",
    figure: "9.34",
    detail: "CGPA · top 10 of batch, LNMIIT",
  },
];

export const extras = [
  "Participated in several coding competitions and hackathons.",
];
