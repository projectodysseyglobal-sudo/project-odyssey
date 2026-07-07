"use client";

import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";

export default function BeginPage() {
  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen bg-[#353C72]">

        <section
          className="
            min-h-[calc(100vh-84px)]
            flex
            items-center
            justify-center
            px-6
            sm:px-8
            lg:px-10
            py-16
          "
        >

          <div
            className="
              w-full
              max-w-5xl
              mx-auto
              text-center
            "
          >

            {/* Door */}

            <img
  src="/door-2.png"
  alt="Door"
  draggable={false}
  className="
    w-[140px]
    h-[140px]
    sm:w-[140px]
    sm:h-[140px]
    md:w-[160px]
    md:h-[160px]
    lg:w-[180px]
    lg:h-[180px]
    mx-auto
    mb-10
    select-none
  "
/>

            {/* Heading */}

            <h1
              className="
                leading-[0.92]
                tracking-[-0.03em]
                font-semibold
                uppercase
                text-[#F8F8F4]
              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >

              <span
  className="
    block
    text-[32px]
    sm:text-[42px]
    md:text-[52px]
    lg:text-[72px]
  "
>
  YOUR DOOR OPENS
</span>

<span
  className="
    block
    text-[#6C9BD5]
    text-[32px]
    sm:text-[42px]
    md:text-[52px]
    lg:text-[72px]
  "
>
  HERE.
</span>

            </h1>

            {/* Subtitle */}

            <p
  className="
    mt-6
    text-lg
    sm:text-xl
    md:text-2xl
    italic
    text-[#6C9BD5]
  "
  style={{
    fontFamily:
      '"Times New Roman MT Condensed","Times New Roman",serif',
  }}
>
  Unveil the journey that awaits.
</p>

            {/* Buttons */}

            <div
  className="
    mt-14
    flex
    flex-col
    sm:flex-row
    justify-center
    items-center
    gap-6
    sm:gap-14
  "
>

              <Link
                href="/signup"
                className="
  text-[18px]
  sm:text-[22px]
  md:text-[26px]
  font-semibold
  text-[#F4C3D5]
  underline
  decoration-dotted
  underline-offset-8
  decoration-[2px]
  hover:opacity-80
  transition-all
"
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                }}
              >
                Let's begin →
              </Link>

              <Link
                href="/login"
                className="
  text-[18px]
  sm:text-[22px]
  md:text-[26px]
  font-semibold
  text-[#F4C3D5]
  underline
  decoration-dotted
  underline-offset-8
  decoration-[2px]
  hover:opacity-80
  transition-all
"
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                }}
              >
                Log in →
              </Link>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}