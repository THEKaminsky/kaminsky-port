import { ImageResponse } from "next/og";

export const alt = "Rob Kaminsky: I code for people, not just for specs.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The link preview shown on LinkedIn, Slack and texts: a page from the notebook. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          backgroundColor: "#EDF1E4",
          backgroundImage:
            "linear-gradient(#D3DDC4 1px, transparent 1px), linear-gradient(90deg, #D3DDC4 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          color: "#262B25",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
          I code for people, not just for specs.
        </div>
        <div style={{ marginTop: 36, fontSize: 34, color: "#4A5246" }}>
          Rob Kaminsky · senior frontend &amp; mobile engineer
        </div>
      </div>
    ),
    size,
  );
}
