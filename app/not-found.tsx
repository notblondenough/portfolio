import Link from "next/link";
import Nav from "@/components/Nav";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Nav tone="night" />
      <main id="main" className={`container ${styles.main}`}>
        <p className={`kicker ${styles.kicker}`}>Route 404</p>
        <h1 className={styles.title}>This road doesn&apos;t go anywhere</h1>
        <p className={styles.copy}>
          Whatever was here has either moved on or never existed. The
          highway&apos;s empty in both directions.
        </p>
        <p className={styles.back}>
          <Link href="/">← Back to the start of the road</Link>
        </p>
      </main>
    </div>
  );
}
