import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffe566",
          border: "10px solid #0b1f33",
          borderRadius: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            width: 28,
            height: 28,
            background: "#4da3ff",
            border: "6px solid #0b1f33",
            borderRadius: 8,
          }}
        />
        <div
          style={{
            display: "flex",
            color: "#0b1f33",
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: "-0.08em",
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#22c55e" }}>C</span>
          <span style={{ color: "#4da3ff" }}>{"</"}</span>
          <span style={{ color: "#ff6b9d" }}>/</span>
          <span style={{ color: "#ff8a3d" }}>{">"}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
