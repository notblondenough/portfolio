export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Java", "C/C++", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Backend & Distributed Systems",
    items: [
      "Spring Boot",
      "Apache Kafka",
      "REST APIs",
      "Microservices",
      "Node.js",
      "Express.js",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Redux", "HTML/CSS", "Tailwind CSS", "Material-UI"],
  },
  {
    label: "AI Systems",
    items: [
      "LLM Pipelines",
      "Multi-Agent Systems",
      "AI Agents",
      "AI Evaluation",
      "Structured Outputs",
      "Multimodal AI",
      "Context Engineering",
      "Model Routing",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Playwright",
      "BrowserStack",
      "Claude Code",
      "VS Code",
      "Postman",
      "LaTeX",
      "Redis",
    ],
  },
  {
    label: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "OOPs",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
];
