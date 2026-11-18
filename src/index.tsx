import React from "react";
import {
  AbsoluteFill,
  Composition,
  registerRoot,
} from "remotion";

const ProductAd = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #17112f, #7b245e)",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: 50,
      }}
    >
      <div style={{ fontSize: 65, fontWeight: "bold" }}>
        বিশেষ অফার!
      </div>
      <div style={{ fontSize: 42, marginTop: 40 }}>
        আপনার পছন্দের প্রোডাক্ট
      </div>
      <div style={{ fontSize: 75, color: "#ffd700", marginTop: 50 }}>
        মাত্র ৬৯০ টাকা
      </div>
      <div style={{ fontSize: 35, marginTop: 60 }}>
        অর্ডার করুন এখনই
      </div>
    </AbsoluteFill>
  );
};

const RemotionRoot = () => (
  <Composition
    id="ProductAd"
    component={ProductAd}
    durationInFrames={150}
    fps={30}
    width={1080}
    height={1920}
  />
);

registerRoot(RemotionRoot);
