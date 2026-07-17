import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { getPosts, formatDate } from "@/lib/journal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the motel desk — Alok Ranjan Shukla on distributed systems, AI pipelines, and what he's learning on the way.",
};

export default function JournalPage() {
  const posts = getPosts();

  return (
    <div className={styles.page}>
      <Nav tone="night" />
      <main id="main" className={`container ${styles.main}`}>
        <Reveal>
          <SectionHead
            kicker="Journal"
            title="Notes from the motel desk"
            lede="Written late, when the systems are quiet: distributed systems, AI evaluation, and the odd dispatch from the road."
          />
        </Reveal>

        {posts.length === 0 ? (
          <p className={styles.empty}>
            Nothing pinned to the corkboard yet. Check back after the next
            stretch of road.
          </p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Reveal delay={i * 90}>
                  <article className={styles.entry}>
                    <p className={`kicker ${styles.meta}`}>
                      {formatDate(post.date)}
                      {post.sample ? " · sample entry" : ""}
                    </p>
                    <h2 className={styles.title}>
                      <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className={styles.summary}>{post.summary}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
