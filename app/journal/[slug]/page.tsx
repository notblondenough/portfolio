import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import Nav from "@/components/Nav";
import { getPost, getPosts, formatDate } from "@/lib/journal";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className={styles.page}>
      <Nav tone="night" />
      <main id="main" className={`container ${styles.main}`}>
        <article className={styles.article}>
          <header className={styles.header}>
            <p className={`kicker ${styles.meta}`}>
              {formatDate(post.date)}
              {post.sample ? " · sample entry" : ""}
            </p>
            <h1 className={styles.title}>{post.title}</h1>
          </header>
          <div className={styles.body}>
            <Markdown>{post.body}</Markdown>
          </div>
          <footer className={styles.footer}>
            <Link href="/journal">← Back to the desk</Link>
          </footer>
        </article>
      </main>
    </div>
  );
}
