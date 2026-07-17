import { roles, schools } from "@/content/experience";
import Reveal from "./Reveal";
import styles from "./RoadLog.module.css";

/**
 * Work history as a road log: entries strung along a dashed
 * center-line, each dated with a mono mile-marker chip.
 */
export default function RoadLog() {
  return (
    <div className={styles.log}>
      <ol className={styles.list}>
        {roles.map((role, i) => (
          <li key={role.org} className={styles.entry}>
            <Reveal delay={i * 90}>
              <p className={`kicker ${styles.marker}`}>{role.period}</p>
              <h3 className={styles.role}>{role.title}</h3>
              <p className={styles.org}>
                {role.org} <span className={styles.place}>· {role.place}</span>
              </p>
              <ul className={styles.points}>
                {role.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className={styles.schooling}>
        <p className={`kicker ${styles.schoolKicker}`}>
          Where the road started
        </p>
        <ol className={styles.schoolList}>
          {schools.map((s) => (
            <li key={s.name} className={styles.school}>
              <p className={`kicker ${styles.marker}`}>{s.period}</p>
              <h3 className={styles.schoolName}>{s.name}</h3>
              <p className={styles.schoolDetail}>
                {s.detail} <span className={styles.place}>· {s.place}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
