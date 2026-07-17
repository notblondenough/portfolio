import type { Project } from "@/content/projects";
import styles from "./ProjectPostcard.module.css";

/**
 * Projects as postcards from the road — pale card stock on the dusk
 * background, a dashed "stamp" carrying the dates, a place-line blurb.
 * (Travis carried a photograph of an empty lot; these carry commits.)
 */
export default function ProjectPostcard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <div>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.blurb}>{project.blurb}</p>
        </div>
        <p className={`kicker ${styles.stamp}`}>{project.period}</p>
      </div>

      <ul className={styles.points}>
        {project.points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>

      <div className={styles.bottom}>
        <ul className={styles.stack} aria-label="Built with">
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={project.github}>GitHub ↗</a>
          <a href={project.live}>Live ↗</a>
        </div>
      </div>
    </article>
  );
}
