"use client";

type DashboardHeroProps = {
  name?: string;
};

export default function DashboardHero({
  name,
}: DashboardHeroProps) {
  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col items-center text-center">

          {/* Door */}

          <img
            src="/door-icon.ico"
            alt="Door"
            className="w-16 h-16 mb-8"
          />

          {/* Heading */}

          <h1
            className="
              text-[#F8F8F4]
              uppercase
              leading-[0.92]
              tracking-[-0.03em]
              text-[46px]
              md:text-[72px]
              lg:text-[82px]
            "
          >
            WELCOME TO
            <br />

            YOUR{" "}
            <span className="text-[#6C9BD5]">
              ODYSSEY,
            </span>

            <br />

            <span className="text-[#F8F8F4]">
              {name
                ? name.toUpperCase()
                : "EXPLORER"}
            </span>
          </h1>

          {/* Subtitle */}

          <p
            className="
              mt-8
              max-w-2xl
              text-[#A3C2E0]
              italic
              text-[22px]
              leading-relaxed
            "
          >
            “The best way to predict the future is to create it.”

          </p>

        </div>

      </div>

    </section>
  );
}