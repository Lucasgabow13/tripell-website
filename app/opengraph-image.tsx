import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ironmark Capital — A Long-Term Home for Great Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Top — Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Logo mark */}
          <svg
            width="52"
            height="52"
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle cx="24" cy="24" r="18" stroke="#FFFFFF" strokeWidth="1.2" />
            <line x1="15.5" y1="16.5" x2="32.5" y2="16.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="24" y1="16.5" x2="24" y2="31.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="15.5" y1="31.5" x2="32.5" y2="31.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "36px",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 300,
                letterSpacing: "5px",
                color: "#FFFFFF",
              }}
            >
              IRONMARK
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: 300,
                letterSpacing: "5.5px",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              CAPITAL
            </span>
          </div>
        </div>

        {/* Middle — Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#FFFFFF",
              margin: 0,
              maxWidth: "800px",
              letterSpacing: "-0.02em",
            }}
          >
            A long-term home for great businesses.
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              maxWidth: "600px",
              lineHeight: 1.5,
            }}
          >
            We partner with exceptional owners to preserve what works, improve
            what doesn&apos;t, and build companies meant to last.
          </p>
        </div>

        {/* Bottom — Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
            }}
          >
            Long-term partners, not private equity.
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            ironmark.capital
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
