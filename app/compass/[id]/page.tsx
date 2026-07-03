"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import PublicNavbar from "@/components/PublicNavbar";

export default function BlogDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    loadBlog();
  }, []);

  async function loadBlog() {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", params.id)
      .single();

    if (!error) {
      setBlog(data);
    }
  }

  if (!blog) {
    return (
      <>
        <PublicNavbar />

        <main className="min-h-screen bg-[#353C72] flex items-center justify-center">

          <p
            className="text-3xl text-[#F8F8F4]"
            style={{
              fontFamily: '"Times New Roman", serif',
            }}
          >
            Loading article...
          </p>

        </main>
      </>
    );
  }

  return (
    <>
      <PublicNavbar />

      <main className="relative -mt-[2px] bg-[#353C72] text-[#F8F8F4] overflow-hidden">

        {/* =======================================================
            HERO
        ======================================================== */}

        <section className="relative overflow-hidden">

          <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">

            {/* Back */}

            <button
              onClick={() => router.back()}
              className="
                inline-flex
                items-center
                gap-2
                text-[22px]
                font-bold
                underline
                decoration-dotted
                underline-offset-8
                hover:text-[#F4C3D5]
                transition-all
              "
              style={{
                fontFamily: '"Times New Roman", serif',
              }}
            >
              ← Back
            </button>

            {/* Title */}

            <div className="mt-8">

              <h1
                className="
                  text-center
                  text-[58px]
                  md:text-[72px]
                  lg:text-[78px]
                  leading-[0.95]
                  font-semibold
                  tracking-[-0.03em]
                "
                style={{
                  fontFamily: '"Times New Roman", serif',
                }}
              >
                {blog.title}
              </h1>

            </div>

            {/* Meta */}

          <div
  className="mt-8 flex justify-end"
  style={{
    fontFamily: '"Times New Roman", serif',
  }}
>
  <p className="text-[20px] italic text-[#A3C2E0]">
    By{" "}
    <span className="text-[#F4C3D5] font-semibold">
      {blog.author}
    </span>
    {" • "}
    {blog.published_at
      ? new Date(blog.published_at).toLocaleDateString("en-GB")
      : ""}
  </p>
</div>

          </div>

        </section>

        {/* =======================================================
            WAVE
        ======================================================== */}

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full overflow-hidden"
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

        {/* =======================================================
            ARTICLE
        ======================================================== */}

        <section className="relative -mt-[1px] bg-[#6C9BD5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 py-16">

            <div className="grid lg:grid-cols-[340px_1fr] gap-14">

              {/* Image */}

              <div>

                {blog.image_url && (

                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="
                      w-full
                      aspect-square
                      rounded-[28px]
                      object-cover
                    "
                  />

                )}

              </div>

              {/* First Paragraph */}

              <div>

                <p
                  className="
                    text-[24px]
                    leading-[1.8]
                    text-[#F8F8F4]
                  "
                  style={{
                    fontFamily:
                      '"Times New Roman", serif',
                  }}
                >
                  {
                    blog.content
                      ?.split("\n\n")[0]
                  }
                </p>

              </div>

            </div>
                        {/* Remaining Content */}

            <div className="mt-20">

              {blog.content
                ?.split("\n\n")
                .slice(1)
                .map(
                  (
                    paragraph: string,
                    index: number
                  ) => (
                    <p
                      key={index}
                      className="
                        text-[24px]
                        leading-[1.85]
                        text-[#F8F8F4]
                        mb-10
                      "
                      style={{
                        fontFamily:
                          '"Times New Roman", serif',
                      }}
                    >
                      {paragraph}
                    </p>
                  )
                )}

            </div>

          </div>

        </section>

        {/* ==========================================
            Bottom Wave
        ========================================== */}

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

        {/* ==========================================
            Footer CTA
        ========================================== */}

        <section className="relative -mt-[2px] bg-[#353C72] py-16 overflow-hidden">

          <div className="max-w-5xl mx-auto text-center px-8">

            <h2
              className="
                text-[58px]
                md:text-[70px]
                font-semibold
                leading-none
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              Keep Exploring
            </h2>

            <p
              className="
                mt-6
                text-[24px]
                leading-[1.7]
                text-[#D6D8E7]
                max-w-3xl
                mx-auto
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              Discover more stories,
              opportunities, mentors,
              and insights through
              <span className="text-[#F4C3D5]">
                {" "}The Compass.
              </span>
            </p>

            <button
              onClick={() => router.push("/compass")}
              className="
                mt-10
                bg-[#F4C3D5]
                text-[#353C72]
                px-10
                py-4
                rounded-full
                text-[22px]
                font-bold
                hover:bg-[#ffd5e4]
                transition-all
                duration-300
              "
              style={{
                fontFamily:
                  '"Times New Roman", serif',
              }}
            >
              Back to The Compass →
            </button>

          </div>

        </section>

      </main>

    </>
  );
}