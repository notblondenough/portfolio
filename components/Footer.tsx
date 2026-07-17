import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={`kicker ${styles.kicker}`}>End of the road — for now</p>
          <p className={styles.big}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <ul className={styles.links} aria-label="Profiles">
          <li>
            <a href={site.resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
          </li>
          {site.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.meta}>
          <p>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
          <p className={styles.colophon}>
            Set in Overpass, Source Serif 4 &amp; Overpass Mono. Built with
            Next.js. Lit like a motel at 2 a.m.
          </p>
          <p>
            <Link href="/journal">Journal</Link> ·{" "}
            <Link href="/projects">Projects</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
