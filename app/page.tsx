import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Horizon from "@/components/Horizon";
import SectionHead from "@/components/SectionHead";
import RoadLog from "@/components/RoadLog";
import StatShields from "@/components/StatShields";
import ProjectPostcard from "@/components/ProjectPostcard";
import NeonSign from "@/components/NeonSign";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { extras } from "@/content/achievements";
import { getPosts, formatDate } from "@/lib/journal";
import styles from "./page.module.css";

/**
 * The home page is one day on the road, top to bottom:
 * noon glare → golden hour → sunset → dusk → night.
 */
export default function Home() {
  const [latestPost] = getPosts();

  return (
    <>
      {/* ---------- noon: overexposed, wide open ---------- */}
      <header className={styles.hero}>
        <Nav tone="day" />
        <div className={`container ${styles.heroInner}`}>
          <p className="kicker">
            {site.role} · {site.location}
          </p>
          <h1 className={styles.name}>{site.name}</h1>
          <p className={styles.tagline}>{site.tagline}</p>
          <p className={styles.currently}>{site.currently}</p>
          <ul className={styles.quickLinks} aria-label="Direct links">
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
            {site.links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className={`kicker ${styles.roadSign}`} aria-hidden="true">
          ↓ the road runs south
        </p>
      </header>

      <main id="main">
        {/* ---------- late afternoon: the route so far ---------- */}
        <section id="work" className={styles.work}>
          <div className="container">
            <Reveal>
              <SectionHead
                kicker="Mile markers"
                title="The route so far"
                lede="Three stops, each one further into the systems I wanted to be building all along."
              />
            </Reveal>
            <RoadLog />
          </div>
        </section>

        {/* ---------- golden hour: proof of miles ---------- */}
        <section id="highlights" className={styles.highlights}>
          <div className="container">
            <Reveal>
              <SectionHead
                kicker="Road signs"
                title="Numbers you can read from the highway"
                lede="Competitive programming is where I learned patience with hard problems — the ratings are just the odometer."
              />
            </Reveal>
            <StatShields />
            <p className={styles.extras}>{extras[0]}</p>

            <div className={styles.toolkit}>
              <Reveal>
                <h3 className={styles.toolkitTitle}>What I carry</h3>
              </Reveal>
              <dl className={styles.skills}>
                {skillGroups.map((group) => (
                  <div key={group.label} className={styles.skillGroup}>
                    <dt className={`kicker ${styles.skillLabel}`}>
                      {group.label}
                    </dt>
                    <dd className={styles.skillItems}>
                      {group.items.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- sunset: no words, just the poles ---------- */}
        <div className={styles.sunsetBand} aria-hidden="true">
          <Horizon className={styles.horizon} />
        </div>

        {/* ---------- dusk: postcards from the road ---------- */}
        <section id="projects" className={styles.projects}>
          <div className="container">
            <Reveal>
              <SectionHead
                kicker="Postcards"
                title="Postcards from the road"
                lede="Three projects — three places I stopped long enough to build something."
              />
            </Reveal>
            <div className={styles.cards}>
              {projects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 120}>
                  <ProjectPostcard project={p} />
                </Reveal>
              ))}
            </div>
            <p className={styles.more}>
              <Link href="/projects">The full rack of postcards →</Link>
            </p>
          </div>
        </section>

        {/* ---------- night falls: the journal ---------- */}
        {latestPost ? (
          <section className={styles.journal}>
            <div className="container">
              <Reveal>
                <SectionHead
                  kicker="Journal"
                  title="Notes from the motel desk"
                />
                <article className={styles.postCard}>
                  <p className={`kicker ${styles.postMeta}`}>
                    {formatDate(latestPost.date)}
                    {latestPost.sample ? " · sample entry" : ""}
                  </p>
                  <h3 className={styles.postTitle}>
                    <Link href={`/journal/${latestPost.slug}`}>
                      {latestPost.title}
                    </Link>
                  </h3>
                  <p className={styles.postSummary}>{latestPost.summary}</p>
                  <p className={styles.more}>
                    <Link href="/journal">All entries →</Link>
                  </p>
                </article>
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* ---------- full night: the motel office ---------- */}
        <section id="contact" className={styles.contact}>
          <div className={`container ${styles.contactInner}`}>
            <Reveal>
              <NeonSign />
              <h2 className={styles.contactTitle}>The line is open</h2>
              <p className={styles.contactLede}>
                Whether it&apos;s a role, a collaboration, or a hard problem
                you want a second pair of eyes on — write. No answering
                machine here; a person reads this.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
