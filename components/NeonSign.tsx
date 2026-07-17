import styles from "./NeonSign.module.css";

/**
 * A small original motel sign for the night section. "Vacancy" here
 * means exactly what it means on the highway: there's room — write in.
 * The glow breathes very slowly; it holds still under reduced motion.
 */
export default function NeonSign() {
  return (
    <p className={styles.sign}>
      <span className={styles.vacancy}>Vacancy</span>
      <span className={styles.sub}>open to interesting work</span>
    </p>
  );
}
