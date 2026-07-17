import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Nav.module.css";

const items = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/#contact" },
];

/**
 * Quiet top nav. `tone` matches the section it sits on: "day" for the
 * bleached hero, "night" for the dark sub-pages.
 */
export default function Nav({ tone = "day" }: { tone?: "day" | "night" }) {
  return (
    <nav
      aria-label="Primary"
      className={`${styles.nav} ${tone === "night" ? styles.night : ""}`.trim()}
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          {site.shortName}
        </Link>
        <ul className={styles.links}>
          {items.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className={styles.link}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
