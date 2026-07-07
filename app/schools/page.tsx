"use client";

import PublicNavbar from "@/components/PublicNavbar";

export default function SchoolsPage() {
  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen bg-[#353C72] overflow-hidden">

        <section className="py-20 px-6">

          <div className="max-w-5xl mx-auto">

            <div
              className="
                bg-[#6C9BD5]
                rounded-[40px]
                border-4
                border-[#F4C3D5]
                shadow-[0_25px_60px_rgba(0,0,0,0.35)]
                px-8
                md:px-14
                py-16
                md:py-18
                text-center
              "
            >

              {/* Launch Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  bg-[#353C72]
                  text-[#F4C3D5]
                  rounded-full
                  px-8
                  py-4
                "
              >

                <span
                  className="text-[22px] tracking-wide"
                  style={{
                    fontFamily:
                      '"Times New Roman MT Condensed","Times New Roman",serif',
                    fontWeight: 500,
                  }}
                >
                  LAUNCHING SOON
                </span>

              </div>

              {/* Heading */}

              <h1
                className="
                  mt-10
                  text-[48px]
                  sm:text-[56px]
                  md:text-[72px]
                  leading-none
                  text-[#353C72]
                "
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                  fontWeight: 500,
                }}
              >
                Coming{" "}
                <span className="italic text-[#F4C3D5]">
                  September 2026
                </span>
              </h1>

              {/* Divider */}

              <div className="w-24 h-[3px] rounded-full bg-[#353C72] mx-auto mt-8" />

              {/* Description */}

              <p
                className="
                  mt-10
                  max-w-3xl
                  mx-auto
                  text-[19px]
                  sm:text-[20px]
                  md:text-[22px]
                  leading-[1.7]
                  text-[#353C72]
                "
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                  fontWeight: 400,
                }}
              >
                We're building a dedicated experience for
                educational institutions to help students
                discover scholarships, competitions,
                internships, leadership programs,
                exchange opportunities, and global
                experiences—all in one place.
              </p>

              {/* Bottom Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  mt-12
                  bg-[#353C72]
                  rounded-full
                  px-10
                  py-4
                "
              >

                <span
                  className="text-[22px] text-[#F4C3D5]"
                  style={{
                    fontFamily:
                      '"Times New Roman MT Condensed","Times New Roman",serif',
                    fontWeight: 500,
                  }}
                >
                  Stay Tuned
                </span>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>
  );
}