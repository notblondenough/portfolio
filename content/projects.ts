export type Project = {
  slug: string;
  name: string;
  blurb: string;
  period: string;
  points: string[];
  stack: string[];
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    slug: "res-u-me",
    name: "RES-U-ME",
    blurb: "ML-based personalized job recommender.",
    period: "Jan — Aug 2024",
    points: [
      "Full-stack web app (React, Node.js) with 98% uptime, serving 1000+ users.",
      "Trained NER and K-Means models on BERT embeddings — 80%+ accuracy on job–resume matching.",
      "Optimized backend pipelines for a 25% cut in data-processing latency.",
    ],
    stack: ["React", "Node.js", "BERT", "K-Means"],
    github: "https://github.com/Manik-Jasrai/res-u-me",
    live: "https://res-u-me.vercel.app/",
  },
  {
    slug: "filmfolio",
    name: "FilmFolio",
    blurb: "Film database with user sessions.",
    period: "Jun — Jul 2024",
    points: [
      "Responsive frontend (React, Material UI) that cut bounce rate by 30%.",
      "Express.js + MongoDB backend holding steady under 500+ concurrent users.",
      "TMDB and IMDb API integrations for 40% wider film-metadata coverage.",
    ],
    stack: ["React", "Material UI", "Express.js", "MongoDB"],
    github: "https://github.com/notblondenough/FilmFolio",
    live: "https://filmfolio-p0kf.onrender.com/",
  },
  {
    slug: "interviewpad",
    name: "InterViewPad",
    blurb: "Real-time collaboration tooling for enterprise hiring.",
    period: "May — Jun 2025",
    points: [
      "Real-time code collaboration over WebSockets (Socket.IO) with sync delay under 100ms.",
      "In-browser execution for Java, JavaScript, Python, and C++ — 35% fewer execution errors.",
      "Live collaboration features drove 2.5x session engagement; deployed on AWS EC2 / Render / Vercel.",
    ],
    stack: ["Socket.IO", "WebSockets", "AWS EC2", "React"],
    github: "https://github.com/notblondenough/InterViewPad",
    live: "https://interviewpad.onrender.com/",
  },
];
