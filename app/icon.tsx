export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          fontSize: 14,
          letterSpacing: "0.08em",
          fontFamily: "Georgia, serif",
        }}
      >
        AE
      </div>
    ),
    { ...size },
  );
}
