import styles from "./SectionHead.module.css";

export default function SectionHead({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className={styles.head}>
      <p className="kicker">{kicker}</p>
      <h2 className={styles.title}>{title}</h2>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </header>
  );
}
