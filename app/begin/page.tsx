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
            min-h-[88vh]
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
              src="/door-icon.ico"
              alt="Door"
              draggable={false}
              className="
                w-14
                h-14
                sm:w-16
                sm:h-16
                md:w-20
                md:h-20
                mx-auto
                mb-8
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
                  text-[42px]
                  sm:text-[56px]
                  md:text-[70px]
                  lg:text-[88px]
                "
              >
                YOUR DOOR OPENS
              </span>

              <span
                className="
                  block
                  text-[#6C9BD5]
                  text-[42px]
                  sm:text-[56px]
                  md:text-[70px]
                  lg:text-[88px]
                "
              >
                HERE.
              </span>

            </h1>

            {/* Subtitle */}

            <p
              className="
                mt-5
                text-xl
                sm:text-2xl
                md:text-3xl
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
                mt-16
                sm:mt-20
                flex
                flex-col
                sm:flex-row
                justify-center
                items-center
                gap-8
                sm:gap-12
                lg:gap-20
              "
            >

              <Link
                href="/signup"
                className="
                  w-full
                  sm:w-auto
                  text-center
                  text-[28px]
                  sm:text-[34px]
                  lg:text-[42px]
                  font-semibold
                  text-[#F4C3D5]
                  underline
                  decoration-dotted
                  underline-offset-8
                  decoration-[3px]
                  hover:opacity-80
                  hover:scale-105
                  transition-all
                  duration-300
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
                  w-full
                  sm:w-auto
                  text-center
                  text-[28px]
                  sm:text-[34px]
                  lg:text-[42px]
                  font-semibold
                  text-[#F4C3D5]
                  underline
                  decoration-dotted
                  underline-offset-8
                  decoration-[3px]
                  hover:opacity-80
                  hover:scale-105
                  transition-all
                  duration-300
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