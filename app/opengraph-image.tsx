import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { ImageResponse } = await import("next/og");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4efe6",
          color: "#1b1916",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            fontSize: 18,
          }}
        >
          AYA EMAM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontFamily: "Georgia, serif",
              maxWidth: 900,
            }}
          >
            Real Estate, With a More Personal Perspective.
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 22,
              color: "#7a7368",
            }}
          >
            Real Estate Consultant · Abu Dhabi, UAE
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
