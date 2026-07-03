"use client";

import PublicNavbar from "@/components/PublicNavbar";

export default function SchoolsPage() {
  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen bg-[#353C72] overflow-hidden">

        <section className="py-24 px-6">

          <div className="max-w-5xl mx-auto">

            <div
              className="
                bg-[#6C9BD5]
rounded-[40px]
border-4
border-[#F4C3D5]
shadow-[0_25px_60px_rgba(0,0,0,0.35)]
px-16
py-20
text-center
              "
            >

              {/* Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#353C72]
                  text-[#F4C3D5]
                  rounded-full
                  px-8
                  py-4
                "
              >
                <span className="text-2xl">🚀</span>

                <span
                  className="
                    text-[26px]
                    font-bold
                    tracking-wide
                  "
                  style={{
                    fontFamily:
                      '"Times New Roman MT Condensed","Times New Roman",serif',
                  }}
                >
                  LAUNCHING SOON
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
                  mt-10
                  text-[64px]
                  md:text-[90px]
                  leading-none
                  font-semibold
                  text-[#353C72]
                "
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                }}
              >
                Coming{" "}
                <span className="italic text-[#F4C3D5]">
                  September 2026
                </span>
              </h1>

              {/* Divider */}

              <div className="w-28 h-[4px] rounded-full bg-[#6C9BD5] mx-auto mt-8" />

              {/* Description */}

              <p
                className="
                  mt-10
                  max-w-3xl
                  mx-auto
                  text-[24px]
                  md:text-[28px]
                  leading-[1.6]
                  text-[#353C72]
                "
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                }}
              >
                We're building a dedicated experience for
                educational institutions to help students
                discover scholarships, competitions,
                internships, leadership programs,
                exchange opportunities and global
                experiences—all in one place.
              </p>

              {/* Illustration */}

              <div className="mt-16 text-[90px]">
                🎓
              </div>

              {/* Bottom Badge */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-4
                  mt-10
                  bg-[#353C72]
                  rounded-full
                  px-10
                  py-5
                "
              >
                <span className="text-2xl">
                  🚀
                </span>

                <span
                  className="
                    text-[28px]
                    font-semibold
                    text-[#F4C3D5]
                  "
                  style={{
                    fontFamily:
                      '"Times New Roman MT Condensed","Times New Roman",serif',
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