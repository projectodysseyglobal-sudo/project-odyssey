"use client";

export default function CenterWave() {
  return (
    <div className="overflow-hidden leading-none bg-[#353C72]">
      <svg
        viewBox="0 0 1440 180"
        className="block w-full h-[180px]"
        preserveAspectRatio="none"
      >
        {/* Top wave */}
        <path
          fill="#7BA3D8"
          d="
            M0,0
            L0,60
            C80,10 160,10 240,60
            S400,110 480,60
            S640,10 720,60
            S880,110 960,60
            S1120,10 1200,60
            S1360,110 1440,60
            L1440,0
            Z
          "
        />

        {/* Bottom wave */}
        <path
          fill="#7BA3D8"
          d="
            M0,120
            C80,170 160,170 240,120
            S400,70 480,120
            S640,170 720,120
            S880,70 960,120
            S1120,170 1200,120
            S1360,70 1440,120
            L1440,180
            L0,180
            Z
          "
        />
      </svg>
    </div>
  );
}