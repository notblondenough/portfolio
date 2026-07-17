export type Role = {
  title: string;
  org: string;
  place: string;
  period: string;
  points: string[];
};

export type School = {
  name: string;
  place: string;
  detail: string;
  period: string;
};

export const roles: Role[] = [
  {
    title: "Software Engineer",
    org: "Whatfix Private Limited",
    place: "Bengaluru, India · Onsite",
    period: "Jan 2026 — Present",
    points: [
      "Designed and developed an end-to-end AI automation pipeline across Spring Boot microservices and Apache Kafka, reducing a manual workflow from 1 week to under 3 hours (95%+ reduction).",
      "Built a distributed multi-agent AI workflow with structured inference and context propagation to automate UI understanding and metadata generation across enterprise web applications.",
      "Engineered a browser automation pipeline using Kafka, Playwright, and BrowserStack for authenticated DOM extraction and screenshot capture, enabling scalable AI-powered analysis of web applications.",
      "Developed an automated AI evaluation framework that reduced manual validation effort by over 10x; built reusable Java HTTP client libraries and shared request abstractions.",
    ],
  },
  {
    title: "Problem Setter & Technical Content Reviewer Intern",
    org: "InterviewBit (Scaler)",
    place: "Bengaluru, India · Remote",
    period: "Sep 2025 — Dec 2025",
    points: [
      "Developed and validated 100+ coding problems (C++, Java, SQL) and MCQs for Scaler School of Technology and the AI Companion platform.",
      "Reviewed and optimized technical content, video editorials, and learning scripts for clarity, accuracy, and curriculum alignment.",
      "Created 20+ cue cards and structured materials for High-Level Design and Machine Learning modules.",
    ],
  },
  {
    title: "Contract Engineer",
    org: "Datacurve (YC W24)",
    place: "Remote",
    period: "Jul 2024 — Apr 2025",
    points: [
      "Designed 200+ DSA and system design questions used to fine-tune LLMs; adopted by OpenAI and other clients.",
      "Maintained <1% error rate in dataset annotations; helped boost AI model F1 scores by 5–10%.",
    ],
  },
];

export const schools: School[] = [
  {
    name: "The LNMIIT Jaipur",
    place: "Jaipur, India",
    detail: "B.Tech Computer Science — CGPA 9.34 / 10.0",
    period: "Aug 2022 — May 2026",
  },
  {
    name: "GNNPS Gorakhpur",
    place: "Gorakhpur, India",
    detail: "CBSE — Class XII: 94.2% · Class X: 97.2%",
    period: "2018 — 2022",
  },
];
