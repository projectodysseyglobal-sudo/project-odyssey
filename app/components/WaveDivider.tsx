"use client";

export default function WaveDivider({
  flip = false,
}: {
  flip?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-[100px]"
        preserveAspectRatio="none"
      >
        {!flip ? (
          /* Top Wave */
          <path
            fill="#7BA3D8"
            d="
              M0,70
              C80,20 160,20 240,70
              S400,120 480,70
              S640,20 720,70
              S880,120 960,70
              S1120,20 1200,70
              S1360,120 1440,70
              L1440,120
              L0,120
              Z
            "
          />
        ) : (
          /* Bottom Wave */
          <path
            fill="#7BA3D8"
            d="
              M0,50
              C80,100 160,100 240,50
              S400,0 480,50
              S640,100 720,50
              S880,0 960,50
              S1120,100 1200,50
              S1360,0 1440,50
              L1440,0
              L0,0
              Z
            "
          />
        )}
      </svg>
    </div>
  );
}