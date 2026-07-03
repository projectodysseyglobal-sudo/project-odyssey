"use client";

import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";

export default function NaomiPage() {
  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

  <div
    className="
      max-w-7xl
      mx-auto
      px-6
      sm:px-8
      lg:px-10
      py-10
      sm:py-14
      lg:py-16
    "
  >

    {/* Back */}

    <Link
      href="/mission"
      className="
        inline-flex
        items-center
        text-[#F4C3D5]
        hover:opacity-80
        transition
        text-lg
        sm:text-xl
        lg:text-2xl
        underline
        decoration-dotted
        underline-offset-8
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      ← Back
    </Link>

    {/* Hero */}

    <div
      className="
        grid
        lg:grid-cols-[55%_45%]
        gap-12
        lg:gap-16
        items-center
        mt-10
        lg:mt-14
      "
    >

      {/* Left */}

      <div
        className="
          order-2
          lg:order-1
          text-center
          lg:text-left
        "
      >

        <h1
          className="
            leading-[0.9]
            tracking-[-0.03em]
          "
          style={{
            fontFamily:
              '"Times New Roman MT Condensed","Times New Roman",serif',
          }}
        >

          <span
            className="
              block
              text-[52px]
              sm:text-[70px]
              md:text-[82px]
              lg:text-[96px]
              font-semibold
            "
          >
            Naomi
          </span>

          <span
            className="
              block
              text-[52px]
              sm:text-[70px]
              md:text-[82px]
              lg:text-[96px]
              font-semibold
            "
          >
            Hayward
          </span>

        </h1>

        <p
          className="
            mt-5
            italic
            text-[#6C9BD5]
            text-2xl
            sm:text-3xl
            lg:text-[42px]
            font-semibold
          "
          style={{
            fontFamily:
              '"Times New Roman MT Condensed","Times New Roman",serif',
          }}
        >
          Co-Founder, Canada
        </p>

        <p
          className="
            mt-10
            max-w-2xl
            mx-auto
            lg:mx-0
            text-lg
            sm:text-xl
            lg:text-[30px]
            leading-relaxed
            text-[#A3C2E0]
          "
          style={{
            fontFamily:
              '"Times New Roman MT Condensed","Times New Roman",serif',
          }}
        >
          Naomi believes that opportunity
          should never depend on geography.
          Through Project Odyssey,
          she helps students discover
          scholarships, competitions,
          mentorships, and global
          experiences that empower them
          to dream bigger and build
          meaningful futures.
        </p>

      </div>
            {/* Right */}

      <div
        className="
          order-1
          lg:order-2
          flex
          justify-center
          lg:justify-end
        "
      >

        <img
          src="/placeholder.jpg"
          alt="Naomi Hayward"
          draggable={false}
          className="
            w-[220px]
            h-[220px]
            sm:w-[280px]
            sm:h-[280px]
            md:w-[340px]
            md:h-[340px]
            lg:w-[420px]
            lg:h-[420px]
            rounded-full
            object-cover
            border-4
            border-[#6C9BD5]
            shadow-2xl
            transition-transform
            duration-500
            hover:scale-105
          "
        />

      </div>

    </div>

    {/* Biography */}

    <div
      className="
        mt-16
        lg:mt-24
        bg-[#2E3465]
        rounded-[28px]
        p-8
        sm:p-10
        lg:p-14
        shadow-xl
      "
    >

      <h2
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-semibold
        "
        style={{
          fontFamily:
            '"Times New Roman MT Condensed","Times New Roman",serif',
        }}
      >
        About Naomi
      </h2>

      <p
        className="
          mt-8
          text-lg
          sm:text-xl
          lg:text-[28px]
          leading-relaxed
          text-[#A3C2E0]
        "
        style={{
          fontFamily:
            '"Times New Roman", serif',
        }}
      >
        As Co-Founder of Project Odyssey,
        Naomi is passionate about helping
        students discover opportunities that
        can transform their future.
        Her vision is to ensure that every
        student—regardless of where they
        live—has access to scholarships,
        competitions, leadership programs,
        mentorship, and international
        experiences that inspire confidence
        and unlock potential.
      </p>

      <p
        className="
          mt-8
          text-lg
          sm:text-xl
          lg:text-[28px]
          leading-relaxed
          text-[#A3C2E0]
        "
        style={{
          fontFamily:
            '"Times New Roman", serif',
        }}
      >
        Through Project Odyssey,
        she hopes to build a global community
        where ambitious young people support,
        inspire, and learn from one another,
        proving that opportunity should never
        be limited by geography.
      </p>

    </div>

  </div>

</main>

    </>
  );
}