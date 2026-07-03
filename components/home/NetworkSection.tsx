"use client";

import Link from "next/link";

export default function NetworkSection() {
  return (
    <>
    <section
      id="schools"
className="
relative
-mt-[2px]
bg-[#6C9BD5]
text-[#F8F8F4]
overflow-hidden
px-6
sm:px-8
lg:px-10
py-14
sm:py-18
lg:py-20
"    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center">
          <h2
  className="
    text-[44px]
sm:text-[58px]
md:text-[72px]
lg:text-[82px]
font-semibold
leading-none
tracking-[-0.02em]
  "
  style={{
    fontFamily:
      '"Times New Roman MT Condensed","Times New Roman",serif',
  }}
>
  Our Network
</h2>

          <p
  className="
    mt-8
    max-w-5xl
    mx-auto
    text-lg
sm:text-xl
lg:text-[25px]
leading-relaxed
    leading-[1.65]
    font-semibold
    text-[#F8F8F4]
  "
  style={{
    fontFamily:
      '"Times New Roman MT Condensed","Times New Roman",serif',
  }}
>
  We bring Project Odyssey directly into classrooms,
  connecting students with real opportunities,
  real mentors, and a community that looks like them.
  No matter where your school is or who your students are.
</p>

        </div>

        {/* Cards */}

        <div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
mt-12
lg:mt-14
">
          {/* Students */}

          <div
  className="
    bg-[#F4C3D5]
   rounded-[28px]
px-6
sm:px-8
py-6
sm:py-8
  "
>
            <h3
  className="
    text-center
    text-2xl
sm:text-[26px]
    font-bold
    text-[#2F3B6F]
    mb-5
  "
  style={{
    fontFamily: '"Times New Roman",serif',
  }}
>
              For students
            </h3>

            <div
  className="space-y-5 text-lg
sm:text-xl
leading-relaxed
leading-[1.7]
font-medium text-[#2F3B6F]"
  style={{ fontFamily: '"Times New Roman",serif' }}
>
  <div className="flex items-start gap-3">
    <span className="text-[20px] leading-none mt-1">•</span>
    <p>
      Access to 150+ human-verified competitions, summer programs
      and study abroad opportunities curated for you.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-[20px] leading-none mt-1">•</span>
    <p>Apply to become a Student Ambassador.</p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-[20px] leading-none mt-1">•</span>
    <p>
      <em>The Compass</em> newsletter.
    </p>
  </div>
</div>

          </div>

          {/* Educators */}

          <div
            className="
              bg-[#F4C3D5]
              rounded-[28px]
px-6
sm:px-8
py-6
sm:py-8
            "
          >
            <h3
              className="
                text-center
                text-2xl
sm:text-[26px]
                font-bold
                text-[#2F3B6F]
                mb-6
              "
              style={{
                fontFamily:
                  '"Times New Roman",serif',
              }}
            >
              For educators
            </h3>

            <ul
              className="
                space-y-5
                text-lg
sm:text-xl
leading-[1.7]
font-medium
                leading-relaxed
                text-[#2F3B6F]
              "
              style={{
                fontFamily:
                  '"Times New Roman",serif',
              }}
            >
              <li>
                • A ready-made framework for guidance
                counsellors to find real opportunities
                for students without the headache.
              </li>

            </ul>

          </div>

        </div>

        {/* CTA */}

        <div className="mt-10 text-center">
  <Link
    href="/schools"
    className="
      inline-flex
      items-center
      gap-2
      text-lg
sm:text-xl
lg:text-[22px]
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
      fontFamily: '"Times New Roman",serif',
    }}
  >
    Discover our reach →
  </Link>
</div>

      </div>
    </section>
    <svg
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  className="block w-full bg-[#6C9BD5]"
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