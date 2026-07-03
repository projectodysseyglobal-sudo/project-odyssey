"use client";

import Link from "next/link";

export default function CompassPreview() {
  return (
    <>
    <section
      id="compass"
      className="
relative
-mt-[2px]
bg-[#353C72]
text-[#F8F8F4]
overflow-hidden
px-6
sm:px-8
lg:px-10
py-14
sm:py-18
lg:py-20
"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}

        <div className="
flex
flex-col
sm:flex-row
items-center
justify-center
gap-3
sm:gap-5
">

  <h2
    className="
      text-[42px]
sm:text-[56px]
md:text-[72px]
lg:text-[88px]
      font-semibold
      leading-none
      tracking-[-0.03em]
    "
    style={{
      fontFamily:
        '"Times New Roman MT Condensed","Times New Roman",serif',
    }}
  >
    The Compass
  </h2>

  <img
    src="/compass-1.png"
    alt="Compass"
    className="
      w-16
sm:w-20
md:w-28
lg:w-36
      -rotate-12
      -mt-4
      shrink-0
      select-none
      pointer-events-none
    "
    draggable={false}
  />

</div>
        {/* Description */}

        <p
          className="
            mt-10
            max-w-5xl
            mx-auto
            text-lg
sm:text-xl
lg:text-[26px]
leading-relaxed
            font-semibold
            text-[#A3C2E0]
          "
          style={{
            fontFamily: '"Times New Roman", serif',
          }}
        >
          More than a newsletter. It's proof of what students like you can
          achieve and the path to achieving it. Read stories from ambassadors,
          discover new opportunities, and see how Project Odyssey is
          empowering young people to{" "}
          <span className="text-[#F4C3D5] font-bold">
            create impact worldwide.
          </span>
        </p>

        {/* CTA */}

        <Link
          href="/compass"
          className="
            inline-flex
items-center
justify-center
mt-12
px-8
py-4
rounded-full
bg-[#F4C3D5]
text-[#353C72]
font-semibold
text-lg
sm:text-xl
hover:bg-[#ffd4e4]
transition
          "
          style={{
            fontFamily: '"Times New Roman", serif',
          }}
        >
          Check out the latest entry →
        </Link>

      </div>

      {/* Decorative Compass */}

      <img
        src="/compass-small.png"
        alt=""
        className="
          absolute
          left-8
xl:left-24
bottom-6
w-16
xl:w-28
          rotate-[-25deg]
          opacity-80
          hidden
          lg:block
          pointer-events-none
        "
      />
      
    </section>
     <svg
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  className="
block
w-full

bg-[#353C72]
"
>
    <path
      fill="#6C9BD5"
 d="M0,70
       C80,20 160,20 240,70
       S400,120 480,70
       S640,20 720,70
       S880,120 960,70
       S1120,20 1200,70
       S1360,120 1440,70
       L1440,120
       L0,120
       Z"    />
  </svg>
    </>

  );
}