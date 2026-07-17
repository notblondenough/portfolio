"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span className={`kicker ${styles.label}`}>Name</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
          />
        </label>
        <label className={styles.field}>
          <span className={`kicker ${styles.label}`}>Email</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            required
            maxLength={200}
            autoComplete="email"
          />
        </label>
      </div>
      <label className={styles.field}>
        <span className={`kicker ${styles.label}`}>Message</span>
        <textarea
          className={styles.input}
          name="message"
          required
          rows={6}
          maxLength={5000}
        />
      </label>

      <div className={styles.actions}>
        <button
          className={styles.button}
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send it down the wire"}
        </button>
        <p className={styles.status} role="status" aria-live="polite">
          {status === "sent" &&
            "Got it. Your message is on the road — I'll write back soon."}
          {status === "error" &&
            "Something dropped the call. Try again, or email me directly below."}
        </p>
      </div>
    </form>
  );
}
