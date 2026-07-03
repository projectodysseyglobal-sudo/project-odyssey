"use client";

export default function FounderMessage() {
  return (
    <>

<svg
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  className="block w-full bg-[#353C72]"
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
      <section
        id="mission"
        className="relative-mt-[2px] bg-[#6C9BD5] py-16 px-6 text-center overflow-hidden "
      >
        <div className="max-w-5xl mx-auto">

          <h2
            className="
              text-4xl
              md:text-6xl
              leading-tight
              font-bold
              text-white
            "
            style={{
              fontFamily:
                '"Times New Roman MT Condensed","Times New Roman",serif',
            }}
          >
            “We want to give every high school student
            the vetted opportunities and real tools to
            stop waiting for doors to open and
            <span className="text-[#F4C3D5]">
              {" "}start building their own.
            </span>
            ”
          </h2>

          <p
            className="
              mt-10
              text-xl
              italic
              text-white
            "
            style={{
              fontFamily:
                '"Times New Roman", serif',
            }}
          >
            — Suyathi Mugunthan & Naomi Hayward,
            Co-Founders
          </p>

          <a
  href="/mission"
  className="
    inline-flex
    items-center
    gap-2
    mt-10
    text-[22px]
    font-bold
    text-[#F8F8F4]
    underline
    decoration-dotted
    underline-offset-8
    hover:text-[#F4C3D5]
    transition-all
    duration-300
  "
  style={{
    fontFamily: '"Times New Roman", serif',
  }}
>
  How it started →
</a>
        </div>
      </section>

      {/* Bottom Wave */}
     <svg
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  className="block w-full bg-[#6C9BD5] "
>
  <path
    fill="#353C72"
 d="M0,70
       C80,20 160,20 240,70
       S400,120 480,70
       S640,20 720,70
       S880,120 960,70
       S1120,20 1200,70
       S1360,120 1440,70
       L1440,120
       L0,120
       Z"  />
</svg>
    </>
  );
}