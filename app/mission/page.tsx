"use client";

import PublicNavbar from "@/components/PublicNavbar";

export default function MissionPage() {
  return (
    <>
      <PublicNavbar />

      <main className="bg-[#353C72] text-[#F8F8F4] overflow-hidden">

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative-mt-[2px] overflow-hidden">

          <div className="max-w-7xl mx-auto px-8 pt-12 pb-16">

            <h1
              className="
                text-center
                text-[70px]
                md:text-[86px]
                leading-none
                font-semibold
              "
              style={{
  fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              <span className="text-[#F8F8F4]">
                Our
              </span>{" "}

              <span className="italic text-[#6C9BD5]">
                Mission
              </span>
            </h1>

          </div>

        </section>

        {/* ================================================= */}
        {/* THREE DOORS */}
        {/* ================================================= */}

        <section className="relative -mt-12">

          <div className="max-w-7xl mx-auto px-8">

            <div className="grid lg:grid-cols-3 gap-12">

              {/* Barrier */}

              <div className="text-center">

                <img
                  src="/door-2.png"
                  alt=""
                  className="
                    w-44
                    mx-auto
                  "
                />

                <h2
                  className="
                    mt-6
                    text-[28px]
                    font-bold
                  "
                  style={{
                      fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  THE BARRIER
                </h2>

                <p
                  className="
                    mt-4
                    text-[20px]
                    leading-[1.5]
                    font-semibold
                  "
                  style={{
                      fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Success shouldn't depend
                  on where you live or what
                  you can afford. Right now,
                  incredible resources remain
                  locked behind closed doors,
                  leaving students to believe
                  their dreams are out of reach.
                </p>

              </div>

              {/* Discovery */}

              <div className="text-center">

                <img
                  src="/door-open.png"
                  alt=""
                  className="
                    w-44
                    mx-auto
                  "
                />

                <h2
                  className="
                    mt-6
                    text-[28px]
                    font-bold
                    text-[#6C9BD5]
                  "
                  style={{
                      fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  THE DISCOVERY
                </h2>

                <p
                  className="
                    mt-4
                    text-[20px]
                    text-[#6C9BD5]
                    font-semibold
                    leading-[1.5]
                  "
                  style={{
                      fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  We opened the door to
                  what's possible. Project
                  Odyssey bridges the gap
                  connecting ambitious
                  students with curated,
                  real-world opportunities
                  no matter where they are
                  starting from.
                </p>

              </div>

              {/* Future */}

              <div className="text-center">

                <img
                  src="/door-future.png"
                  alt=""
                  className="
                    w-44
                    mx-auto
                  "
                />

                <h2
                  className="
                    mt-6
                    text-[28px]
                    font-bold
                    text-[#F4C3D5]
                  "
                  style={{
                      fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  THE BOUNDLESS FUTURE
                </h2>

                <p
                  className="
                    mt-4
                    text-[20px]
                    leading-[1.5]
                    text-[#F4C3D5]
                    font-semibold
                  "
                  style={{
                      fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  We want to live in a world
                  where every student can.
                  That's it. No waiting for
                  permission. No hoping
                  someone notices you.
                  Build your own door.
                </p>

              </div>

            </div>

          </div>

        </section>
                {/* ================================================= */}
        {/* QUOTE SECTION */}
        {/* ================================================= */}

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full bg-[#353C72] mt-16"
        >
          <path
            fill="#6C9BD5"
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
        </svg>

        <section className="bg-[#6C9BD5] py-16">

          <div className="max-w-5xl mx-auto px-8 text-center mx-auto">

            <h2
  className="
    text-[60px]
    md:text-[65px]
    lg:text-[75px]
    leading-[1.08]
    font-semibold
    tracking-[-0.02em]
    text-[#F8F8F4]
    max-w-5xl
    mx-auto
  "
  style={{
      fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

  }}
>
  “Every great odyssey needs a launchpad.
  <br />
  Our vision is to build a world where every
  <br />
  student{" "}
  <span className="italic text-[#F4C3D5]">
    can.
  </span>
  ”
</h2>
<p
            className="
              mt-15
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
          </div>
          

        </section>

        {/* Wave */}

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full bg-[#6C9BD5]"
        >
          <path
            fill="#353C72"
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
        </svg>

        {/* ================================================= */}
        {/* OUR VALUES */}
        {/* ================================================= */}

        <section className="relative -mt-[2px] bg-[#353C72] py-24">

          <div className="max-w-7xl mx-auto px-8">

            <h2
              className="
                text-center
                text-[78px]
                font-bold
                text-[#F8F8F4]
              "
              style={{
                  fontFamily:'"Times New Roman MT Condensed","Times New Roman",serif',

              }}
            >
              Our{" "}
              <span className="italic text-[#6C9BD5]">
                values
              </span>
            </h2>

            <div className="grid lg:grid-cols-3 gap-12 mt-20">

              {/* Accessibility */}

              <div className="text-center">

                <h3
                  className="
  text-[40px]
  md:text-[56px]
  italic
  font-bold
  leading-none
  tracking-[-0.03em]
  text-[#F4C3D5]
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Accessibility
                </h3>

                <p
                  className="
  mt-7
  text-[26px]
  md:text-[28px]
  font-semibold
  leading-[1.4]
  tracking-[-0.01em]
  max-w-[400px]
  mx-auto
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Democratizing opportunity globally by
                  creating a user-friendly platform that
                  works for every student regardless
                  of barriers.
                </p>

              </div>

              {/* Responsibility */}

              <div className="text-center">

                <h3
                 className="
  text-[40px]
  md:text-[56px]
  italic
  font-bold
  leading-none
  tracking-[-0.03em]
  text-[#F4C3D5]
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Responsibility
                </h3>

                <p
                  className="
  mt-7
  text-[26px]
  md:text-[28px]
  font-semibold
  leading-[1.4]
  tracking-[-0.01em]
  max-w-[400px]
  mx-auto
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Building the trust that every student
                  deserves. We implement secure systems
                  so every opportunity remains accurate,
                  timely and reliable.
                </p>

              </div>

              {/* Diversity */}

              <div className="text-center">

                <h3
                  className="
  text-[40px]
  md:text-[56px]
  italic
  font-bold
  leading-none
  tracking-[-0.03em]
  text-[#F4C3D5]
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Diversity
                </h3>

                <p
                  className="
  mt-7
  text-[26px]
  md:text-[28px]
  font-semibold
  leading-[1.4]
  tracking-[-0.01em]
  max-w-[400px]
  mx-auto
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Cultivating a borderless community
                  where every country is represented,
                  ensuring every success is realized
                  regardless of where someone starts.
                </p>

              </div>

            </div>

            {/* Bottom Row */}

            <div className="grid lg:grid-cols-2 gap-20 mt-20 max-w-5xl mx-auto">

              {/* Innovation */}

              <div className="text-center">

                <h3
                  className="
  text-[40px]
  md:text-[56px]
  italic
  font-bold
  leading-none
  tracking-[-0.03em]
  text-[#F4C3D5]
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Innovation
                </h3>

                <p
                  className="
  mt-7
  text-[26px]
  md:text-[28px]
  font-semibold
  leading-[1.4]
  tracking-[-0.01em]
  max-w-[400px]
  mx-auto
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Always pushing boundaries to empower
                  students. We don't just help them
                  find open doors—we give them the
                  tools to build their own.
                </p>

              </div>

              {/* Collaboration */}

              <div className="text-center">

                <h3
                  className="
  text-[40px]
  md:text-[56px]
  italic
  font-bold
  leading-none
  tracking-[-0.03em]
  text-[#F4C3D5]
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',
                  }}
                >
                  Collaboration
                </h3>

                <p
                  className="
  mt-7
  text-[26px]
  md:text-[28px]
  font-semibold
  leading-[1.4]
  tracking-[-0.01em]
  max-w-[400px]
  mx-auto
"
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',
                  }}
                >
                  Integrating into schools, partnering
                  with educators and counsellors to
                  strengthen guidance systems and
                  expand opportunity worldwide.
                </p>

              </div>

            </div>

          </div>

        </section>
  <img
    src="/multi-wave.png"
    alt=""
    className="block w-full"
  />
        {/* ============================================== */}
        {/* TEAM */}
        {/* ============================================== */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-8">

            <h2
              className="
                text-center
                text-[56px]
                font-semibold
              "
              style={{
                fontFamily: '"Times New Roman MT Condensed", serif',
              }}
            >
              MEET THE{" "}
              <span className="text-[#F4C3D5]">
                TEAM.
              </span>
            </h2>

            <p
              className="
                mt-5
                text-center
                max-w-3xl
                mx-auto
                text-[20px]
                italic
                leading-relaxed
                text-[#D7D9EA]
              "
              style={{
                fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

              }}
            >
              Project Odyssey is made by students,
              for students. Learn about the team
              working tirelessly to tear down the
              barriers to opportunity.
            </p>
            {/* Members */}

            <div className="grid lg:grid-cols-3 gap-14 mt-20">

              {/* ========================== */}

              <div className="text-center">

                <img
                  src="/placeholder.jpg"
                  alt="Suyathi"
                  className="
                    w-44
                    h-44
                    rounded-full
                    object-cover
                    mx-auto
                    border-4
                    border-white
                  "
                />
                <h3
                  className="
                    mt-7
                    text-[26px]
                    font-semibold
                  "
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Suyathi Mugunthan
                </h3>

                <p
                  className="
                    mt-2
                    italic
                    text-[#D7D9EA]
                    text-[20px]
                  "
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Co-Founder, Canada
                </p>

                <a
                  href="/mission/team/suyathi"
                  className="
                    inline-block
                    mt-6
                    bg-[#F4C3D5]
                    text-[#353C72]
                    px-6
                    py-2
                    rounded-full
                    font-semibold
                    hover:bg-white
                    transition
                  "
                >
                  Learn More
                </a>

              </div>

              {/* ========================== */}

              <div className="text-center">

                <img
                  src="/placeholder.jpg"
                  alt="Naomi"
                  className="
                    w-44
                    h-44
                    rounded-full
                    object-cover
                    mx-auto
                    border-4
                    border-white
                  "
                />

                <h3
                  className="
                    mt-7
                    text-[26px]
                    font-semibold
                  "
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Naomi Hayward
                </h3>

                <p
                  className="
                    mt-2
                    italic
                    text-[#D7D9EA]
                    text-[20px]
                  "
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Co-Founder, Canada
                </p>

                <a
                  href="/mission/team/naomi"
                  className="
                    inline-block
                    mt-6
                    bg-[#F4C3D5]
                    text-[#353C72]
                    px-6
                    py-2
                    rounded-full
                    font-semibold
                    hover:bg-white
                    transition
                  "
                >
                  Learn More
                </a>

              </div>

              {/* ========================== */}

              <div className="text-center">

                <img
                  src="/placeholder.jpg"
                  alt="Sruthy"
                  className="
                    w-44
                    h-44
                    rounded-full
                    object-cover
                    mx-auto
                    border-4
                    border-white
                  "
                />

                <h3
                  className="
                    mt-7
                    text-[26px]
                    font-semibold
                  "
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Sruthy
                </h3>

                <p
                  className="
                    mt-2
                    italic
                    text-[#D7D9EA]
                    text-[20px]
                  "
                  style={{
                    fontFamily: '"Times New Roman MT Condensed","Times New Roman",serif',

                  }}
                >
                  Project Manager, Australia
                </p>

                <a
                  href="/mission/team/sruthy"
                  className="
                    inline-block
                    mt-6
                    bg-[#F4C3D5]
                    text-[#353C72]
                    px-6
                    py-2
                    rounded-full
                    font-semibold
                    hover:bg-white
                    transition
                  "
                >
                  Learn More
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}