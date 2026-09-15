export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const { ImageResponse } = await import("next/og");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b1916",
          color: "#f4efe6",
          fontSize: 54,
          letterSpacing: "0.12em",
          fontFamily: "Georgia, serif",
        }}
      >
        AE
      </div>
    ),
    { ...size },
  );
}
