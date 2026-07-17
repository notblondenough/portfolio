import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dusk on the highway: sunset band over indigo night, one neon accent.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(to bottom, #e8863a 0%, #c4502c 22%, #6d3550 42%, #2b2440 62%, #16182b 100%)",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "72px 84px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: 10,
              color: "#3fe0b0",
              textTransform: "uppercase",
            }}
          >
            {site.role} · Bengaluru
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 88,
              fontWeight: 800,
              color: "#efe7d8",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 30,
              color: "#c7b299",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Kafka pipelines, multi-agent AI systems, and backends that keep
            running after everyone&apos;s gone home.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 48,
              width: "100%",
              height: 3,
              background: "#efe7d8",
              opacity: 0.35,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
