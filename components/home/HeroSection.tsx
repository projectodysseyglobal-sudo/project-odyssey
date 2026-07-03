import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative-mt-[2px]
        bg-[#353C72]
        text-[#F8F8F4]
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
          py-12
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* Left */}

          <div className="order-2 lg:order-1">

            <h1
              className="
                leading-[0.84]
                tracking-[-0.03em]
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              <span
                className="
                  block
                  text-[52px]
                  sm:text-[68px]
                  md:text-[84px]
                  lg:text-[104px]
                  font-bold
                  text-[#F8F8F4]
                "
              >
                Build your
              </span>

              <span
                className="
                  block
                  text-[48px]
                  sm:text-[62px]
                  md:text-[78px]
                  lg:text-[96px]
                  italic
                  font-semibold
                  text-[#6C9BD5]
                "
              >
                door.
              </span>

            </h1>

            <p
              className="
                mt-8
                max-w-[520px]
                text-lg
                sm:text-xl
                lg:text-[22px]
                leading-relaxed
                font-semibold
                text-[#AFC0DA]
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              Your only limit was access.
              You have the potential,
              the creativity,
              and the drive.
              And now,
              you have us.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                sm:flex-wrap
                items-center
                gap-5
                sm:gap-8
              "
            >

              <Link
                href="/signup"
                className="
                  w-full
                  sm:w-auto
                  bg-[#F4C3D5]
                  text-[#353C72]
                  rounded-full
                  px-8
                  py-4
                  text-lg
                  sm:text-[20px]
                  font-bold
                  text-center
                  hover:bg-[#ffd4e4]
                  transition
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              >
                Discover what's possible
              </Link>

              <Link
                href="/student-stories"
                className="
                  text-[#F8F8F4]
                  text-lg
                  sm:text-xl
                  lg:text-[22px]
                  font-bold
                  underline
                  decoration-dotted
                  underline-offset-[6px]
                  hover:text-[#F4C3D5]
                  transition
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              >
                Student stories like yours →
              </Link>

            </div>

          </div>
                    {/* Right */}

          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
              lg:justify-end
              mt-2
              lg:mt-0
            "
          >
            <img
              src="/door-2.png"
              alt="Project Odyssey Door"
              draggable={false}
              className="
                w-[220px]
                sm:w-[280px]
                md:w-[360px]
                lg:w-[450px]
                xl:w-[500px]
                object-contain
                select-none
                transition-transform
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}

     
    </section>
  );
}