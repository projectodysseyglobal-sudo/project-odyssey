"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import PublicNavbar from "@/components/PublicNavbar";
import Link from "next/link";

export default function CompassPage() {
  const [featured, setFeatured] = useState<any>(null);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    const { data: featuredBlog } = await supabase
      .from("blogs")
      .select("*")
      .eq("featured", true)
      .limit(1)
      .single();

    const { data: allBlogs } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    setFeatured(featuredBlog);

    setBlogs(
      (allBlogs || []).filter(
        (blog) => !blog.featured
      )
    );
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <PublicNavbar />

      <main className=" bg-[#353C72] text-[#F8F8F4] overflow-hidden">

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative -mt-[2px] overflow-hidden">

          <div className="max-w-6xl mx-auto px-8 py-16 text-center">

            <div className="relative inline-block">

              <img
                src="/compass-small.png"
                alt=""
                className="
                  absolute
                  -left-20
                  top-4
                  w-16
                  rotate-[-20deg]
                  hidden
                  md:block
                "
              />

              <h1
                className="
                  text-[64px]
                  md:text-[82px]
                  font-semibold
                  leading-none
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              >
                The Compass
              </h1>

              <img
                src="/compass-1.png"
                alt=""
                className="
                  absolute
                  -right-24
                  -top-10
                  w-24
                  rotate-12
                  hidden
                  md:block
                "
              />

            </div>

            <p
              className="
                mt-8
                max-w-3xl
                mx-auto
                text-[22px]
                leading-[1.3]
                text-[#BFD2E8]
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              A compass for the next generation
              of changemakers. Teaching you how
              to build the right mindset,
              create opportunities,
              and make the most of them.
            </p>

          </div>

        </section>

        {/* TOP WAVE */}

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full"
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

{/* ================================================= */}
{/* WEEKLY SPOTLIGHT */}
{/* ================================================= */}

<section
  className="
    relative
    -mt-[2px]
    bg-[#6C9BD5]
    py-12
    sm:py-16
    lg:py-20
  "
>

  <div
    className="
      max-w-6xl
      mx-auto
      px-6
      sm:px-8
      lg:px-10
    "
  >

    {/* Heading */}

    <h2
      className="
        text-center
        text-[34px]
        sm:text-[42px]
        lg:text-[52px]
        font-bold
        text-[#F8F8F4]
      "
      style={{
        fontFamily:
          '"Times New Roman", serif',
      }}
    >
      WEEKLY
      <span className="text-[#F4C3D5]">
        {" "}SPOTLIGHT
      </span>
    </h2>

    {featured && (

      <Link href={`/compass/${featured.id}`}>

        <div
          className="
            mt-10
            bg-[#353C72]
            border
            border-white/10
            rounded-[28px]
            p-6
            sm:p-8
            lg:p-12
            hover:border-[#F4C3D5]
            hover:-translate-y-1
            transition-all
            duration-300
            cursor-pointer
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[1fr_260px]
              gap-10
              items-center
            "
          >

            {/* Left */}

            <div
              className="
                text-center
                lg:text-left
              "
            >

              <h3
                className="
                  text-[30px]
                  sm:text-[38px]
                  lg:text-[48px]
                  leading-[0.95]
                  font-bold
                  uppercase
                  text-[#F8F8F4]
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              >
                {featured.title}
              </h3>

              <p
                className="
                  mt-6
                  text-lg
                  sm:text-xl
                  lg:text-[22px]
                  leading-relaxed
                  text-[#D6D8E7]
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              >
                {featured.excerpt}
              </p>

              <div
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-[#F4C3D5]
                  text-lg
                  sm:text-xl
                  lg:text-[22px]
                  font-bold
                  underline
                  decoration-dotted
                  underline-offset-8
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              >
                Read article
                <span>→</span>
              </div>

            </div>

            {/* Right */}

            <div
              className="
                flex
                justify-center
                lg:justify-end
              "
            >

              {featured.image_url ? (

                <img
                  src={featured.image_url}
                  alt={featured.title}
                  className="
                    w-44
                    h-44
                    sm:w-52
                    sm:h-52
                    lg:w-60
                    lg:h-60
                    rounded-2xl
                    object-cover
                    shadow-xl
                  "
                />

              ) : (

                <img
                  src="/mentor.png"
                  alt=""
                  className="
                    w-32
                    sm:w-40
                    lg:w-48
                  "
                />

              )}

            </div>

          </div>

        </div>

      </Link>

    )}

  </div>

</section>
                {/* ================================================ */}
        {/* BOTTOM WAVE */}
        {/* ================================================ */}

      {/* Wave Between Weekly Spotlight & Discover More */}

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
        {/* ================================================ */}
        {/* DISCOVER MORE */}
        {/* ================================================ */}

        <section className="relative -mt-[2px] bg-[#353C72] py-20">

          <div className="max-w-7xl mx-auto px-8">

            {/* Heading */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

              <h2
                className="
                  text-[46px]
                  md:text-[52px]
                  font-semibold
                  text-[#F8F8F4]
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              >
                ✦ DISCOVER MORE
              </h2>

              <input
                type="text"
                placeholder="Search entries..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  lg:w-[340px]
                  h-11
                  rounded-full
                  bg-[#BFD2E8]
                  px-6
                  text-[#353C72]
                  placeholder:text-[#5E6B8C]
                  outline-none
                "
                style={{
                  fontFamily:
                    '"Times New Roman", serif',
                }}
              />

            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

              {filteredBlogs.map((blog) => (

                <Link
                  key={blog.id}
                  href={`/compass/${blog.id}`}
                >

                  <article
                    className="
                      bg-[#6C9BD5]
                      rounded-[24px]
                      border
                      border-white
                      p-7
                      min-h-[290px]
                      flex
                      flex-col
                      justify-between
                      hover:-translate-y-2
                      transition-all
                      duration-300
                    "
                  >

                    <div>

                      <h3
                        className="
                          text-[40px]
                          leading-[0.95]
                          font-semibold
                          text-[#F8F8F4]
                        "
                        style={{
                          fontFamily:
                            '"Times New Roman", serif',
                        }}
                      >
                        {blog.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          text-[22px]
                          italic
                          leading-[1.3]
                          text-[#F8F8F4]
                        "
                        style={{
                          fontFamily:
                            '"Times New Roman", serif',
                        }}
                      >
                        {blog.excerpt}
                      </p>

                    </div>

                    <div
                      className="
                        mt-8
                        text-center
                      "
                    >

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-[#F4C3D5]
                          text-[20px]
                          font-bold
                          underline
                          decoration-dotted
                          underline-offset-8
                        "
                        style={{
                          fontFamily:
                            '"Times New Roman", serif',
                        }}
                      >
                        Read article
                        <span>→</span>
                      </span>

                    </div>

                  </article>

                </Link>

              ))}

            </div>

          </div>

        </section>


      </main>

    </>
  );
}