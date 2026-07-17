import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ProjectPostcard from "@/components/ProjectPostcard";
import { projects } from "@/content/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Postcards from the road — projects by Alok Ranjan Shukla: ML systems, real-time collaboration tools, and full-stack builds.",
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <Nav tone="night" />
      <main id="main" className={`container ${styles.main}`}>
        <Reveal>
          <SectionHead
            kicker="Postcards"
            title="The full rack of postcards"
            lede="Everything I stopped long enough to build, stamp, and send. More get pinned up as the road goes on."
          />
        </Reveal>
        <div className={styles.cards}>
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <ProjectPostcard project={p} />
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  );
}
