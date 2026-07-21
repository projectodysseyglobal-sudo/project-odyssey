"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import PublicNavbar from "@/components/PublicNavbar";
import Link from "next/link";
export default function StudentStoriesPage() {
  const [stories, setStories] =
    useState<any[]>([]);

  useEffect(() => {
    loadStories();
  }, []);

  async function loadStories() {
    const { data } = await supabase
      .from("student_stories")
      .select("*")
      .order("created_at", {
        ascending: false,
      })
      .limit(3);

    setStories(data || []);
  }

  return (
    <>
      <PublicNavbar />
      
      <main className="bg-[#353C72] text-[#F8F8F4] min-h-screen">

  {/* Hero */}

  <section
    className="
      relative
      -mt-[1px]
      px-6
      sm:px-8
      lg:px-10
      pt-16
      sm:pt-20
      lg:pt-24
      pb-14
      sm:pb-18
      lg:pb-20
      text-center
      overflow-hidden
    "
  >

    <div className="max-w-5xl mx-auto">

      <h1
        className="
          font-bold
          tracking-tight
          leading-none
        "
        style={{
          fontFamily:
            '"Times New Roman", serif',
        }}
      >

        <span
          className="
            block
            text-[46px]
            sm:text-[60px]
            md:text-[74px]
            lg:text-[92px]
          "
        >
          Hear from our
        </span>

        <span
          className="
            block
            mt-2
            text-[42px]
            sm:text-[56px]
            md:text-[68px]
            lg:text-[88px]
            italic
            text-[#6C9BD5]
          "
        >
          Odysseans.
        </span>
      </h1>
      <p
        className="
          mt-8
          max-w-3xl
          mx-auto
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
        The team, student ambassadors,
        and students who are turning
        ideas into something meaningful.
      </p>

    </div>

  </section>

  {/* Wave */}

  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className="
      block
      w-full
      -mb-[1px]
    "
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

  {/* How It Started */}

<section
  className="
    bg-[#6C9BD5]
    text-[#2F3B6F]
    px-6
    sm:px-8
    lg:px-10
    py-14
    sm:py-18
    lg:py-20
  "
>

  <div className="max-w-5xl mx-auto text-center">

    <h2
      className="
        font-bold
        leading-none
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >

      <span
        className="
          text-[42px]
          sm:text-[52px]
          md:text-[62px]
        "
      >
        HOW IT
      </span>

      <span
        className="
          text-[#F4C3D5]
          text-[42px]
          sm:text-[52px]
          md:text-[62px]
        "
      >
        {" "}
        STARTED
      </span>

    </h2>

    <p
      className="
        mt-10
        text-lg
        sm:text-xl
        lg:text-[26px]
        leading-relaxed
        font-semibold
        text-[#F8F8F4]
      "
      style={{
        fontFamily:
          '"Times New Roman", serif',
      }}
    >
      A small, isolated town in Canada.
      Big ambitions, nowhere to put them.
      I looked around and couldn't find a
      single person who wanted what I wanted,
      or who thought wanting it made any sense.
    </p>

    <p
      className="
        mt-8
        text-lg
        sm:text-xl
        lg:text-[26px]
        leading-relaxed
        font-semibold
        text-[#F8F8F4]
      "
      style={{
        fontFamily:
          '"Times New Roman", serif',
      }}
    >
      I wasn't waiting to be served.
      I was searching.
      And one day, I found it.
      Not a sign, not a mentor,
      just a quiet realization that the world
      had been full of open doors the whole time.
    </p>

    <p
      className="
        mt-8
        text-lg
        sm:text-xl
        lg:text-[26px]
        leading-relaxed
        font-semibold
        text-[#F8F8F4]
      "
      style={{
        fontFamily:
          '"Times New Roman", serif',
      }}
    >
      That's the thing about access.
      It doesn't announce itself.
      Project Odyssey is the gateway
      for students to build their future
      and realize the access they
      already have.
    </p>

    <p
      className="
        mt-12
        text-2xl
        sm:text-3xl
        lg:text-4xl
        italic
        font-bold
        text-[#F4C3D5]
      "
      style={{
        fontFamily:
          '"Times New Roman", serif',
      }}
    >
      — Naomi Hayward, Co-Founder
    </p>

  </div>

</section>

{/* Bottom Wave */}

<svg
  viewBox="0 0 1440 120"
  preserveAspectRatio="none"
  className="
  block
  w-full
  bg-[#6C9BD5]
  -mb-[1px]
"
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

{/* Real Students */}

<section
  className="
    relative
    px-6
    sm:px-8
    lg:px-10
    py-16
    sm:py-20
    lg:py-24
  "
>

  <div className="max-w-6xl mx-auto text-center">

    <h2
      className="
        font-bold
        leading-none
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
          sm:text-[52px]
          md:text-[64px]
        "
      >
        REAL STUDENTS.
      </span>

      <span
        className="
          block
          text-[#F4C3D5]
          text-[42px]
          sm:text-[52px]
          md:text-[64px]
        "
      >
        REAL STORIES.
      </span>

    </h2>
    <p
      className="
        mt-6
        max-w-3xl
        mx-auto
        text-lg
        sm:text-xl
        lg:text-[24px]
        leading-relaxed
        text-[#F8F8F4]/80
      "
      style={{
        fontFamily:
          '"Times New Roman", serif',
      }}
    >
      Audio and video stories from
      Odysseans sharing their journey
      with Project Odyssey.
      Do you think your story could
      inspire another student?
    </p>

    <Link
  href="https://docs.google.com/forms/d/e/1FAIpQLSdZOuhYbixuRvYR4IRZ988ht4Q-OZmdbtldXY-FryS2nCckzA/viewform"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block
    mt-10
    w-full
    sm:w-auto
    bg-[#F4C3D5]
    text-[#2F3B6F]
    px-8
    py-4
    rounded-full
    text-center
    text-lg
    sm:text-xl
    font-bold
    hover:bg-[#ffd5e3]
    transition
  "
  style={{
    fontFamily:
      '"Times New Roman", serif',
  }}
>
  Share Your Story
</Link>

    {/* Stories */}

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        lg:gap-10
        mt-16
      "
    >

      {stories.map((story) => (

        <div
          key={story.id}
          className="
            bg-[#2F3B6F]
            rounded-2xl
            overflow-hidden
            shadow-xl
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >

          <img
            src={
              story.photo_url ||
              "/student-placeholder.png"
            }
            alt={story.student_name}
            className="
              w-full
              h-64
              sm:h-72
              object-cover
            "
          />

          <div className="p-6">

            <p
              className="
                italic
                text-lg
                sm:text-xl
                font-semibold
                leading-relaxed
                min-h-[110px]
              "
            >
              "{story.quote}"
            </p>

            <p
              className="
                mt-6
                text-xl
                font-bold
                text-[#F4C3D5]
              "
            >
              {story.student_name}
            </p>

            <p
              className="
                mt-1
                text-[#F8F8F4]/70
                text-sm
                sm:text-base
              "
            >
              {story.country}
            </p>

            {story.video_url && (

              <a
                href={story.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  text-[#F4C3D5]
                  font-semibold
                  hover:text-white
                  transition
                "
              >
                ▶ Watch Story
              </a>

            )}

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

</main>
</>
  );
}