import { stats } from "@/content/achievements";
import Reveal from "./Reveal";
import styles from "./StatShields.module.css";

/**
 * Competitive-programming ratings as roadside route shields —
 * big numerals you could read at 70 mph.
 */
export default function StatShields() {
  return (
    <ul className={styles.row}>
      {stats.map((s, i) => (
        <li key={s.platform} className={styles.item}>
          <Reveal delay={i * 110}>
            <div className={styles.shield}>
              <p className={`kicker ${styles.platform}`}>{s.platform}</p>
              <p className={styles.figure}>{s.figure}</p>
            </div>
            <p className={styles.detail}>{s.detail}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
