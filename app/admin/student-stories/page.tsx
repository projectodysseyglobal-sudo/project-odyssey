"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AdminNavbar from "@/app/components/AdminNavbar";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Star,
  Globe,
} from "lucide-react";

export default function AdminStoriesPage() {

  const [stories, setStories] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadStories();
  }, []);

  async function loadStories() {

    const { data } =
      await supabase
        .from("student_stories")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    setStories(data || []);
    setLoading(false);

  }

  async function deleteStory(
  id: number
) {

  const confirmed = confirm(
    "Delete this story?"
  );

  if (!confirmed) return;

  /* Get Story */

  const {
    data: story,
    error: fetchError,
  } = await supabase
    .from("student_stories")
    .select("photo_url, video_url")
    .eq("id", id)
    .single();

  if (fetchError) {
    alert(fetchError.message);
    return;
  }

  function getStoragePath(
    publicUrl: string
  ) {
    if (!publicUrl) return null;

    const marker =
      "/student-stories/";

    const index =
      publicUrl.indexOf(marker);

    if (index === -1)
      return null;

    return decodeURIComponent(
      publicUrl.substring(
        index + marker.length
      )
    );
  }

  /* Delete Photo */

  if (story.photo_url) {

    const photoPath =
      getStoragePath(
        story.photo_url
      );

    if (photoPath) {

      const {
        error: photoError,
      } =
        await supabase.storage
          .from("student-stories")
          .remove([photoPath]);

      console.log(
        "Photo Delete:",
        photoPath,
        photoError
      );

    }

  }

  /* Delete Video */

  if (story.video_url) {

    const videoPath =
      getStoragePath(
        story.video_url
      );

    if (videoPath) {

      const {
        error: videoError,
      } =
        await supabase.storage
          .from("student-stories")
          .remove([videoPath]);

      console.log(
        "Video Delete:",
        videoPath,
        videoError
      );

    }

  }

  /* Delete Database Row */

  const { error } =
    await supabase
      .from("student_stories")
      .delete()
      .eq("id", id);

  if (error) {
    alert(error.message);
    return;
  }

  loadStories();

}
const filtered = stories.filter((story) => {
  const keyword = search.toLowerCase();

  return (
    story.student_name
      ?.toLowerCase()
      .includes(keyword) ||

    story.country
      ?.toLowerCase()
      .includes(keyword)
  );
});
  if (loading) {

    return (
      <>
        <AdminNavbar />

        <main className="min-h-screen bg-[#353C72] flex items-center justify-center">

          <div className="text-center">

            <img
              src="/door-2.png"
              alt="Door"
              className="w-20 mx-auto animate-pulse"
            />

            <p className="mt-6 text-2xl italic text-[#A3C2E0]">
              Loading Student Stories...
            </p>

          </div>

        </main>

      </>
    );

  }

  return (
    <>
      <AdminNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

        <div className="max-w-7xl mx-auto px-8 py-12">

          {/* Hero */}

          <div className="text-center">

            <img
              src="/door-2.png"
              alt="Door"
              className="w-28 mx-auto"
            />

            <h1 className="text-7xl mt-8">

              STUDENT

              <span className="text-[#6C9BD5]">
                {" "}
                STORIES
              </span>

            </h1>

            <p
              className="
                mt-6
                text-2xl
                italic
                text-[#A3C2E0]
              "
            >
              Celebrate inspiring journeys
              that motivate future students.
            </p>

          </div>

          {/* Search + Add */}

          <div
            className="
              mt-16
              flex
              flex-col
              lg:flex-row
              justify-between
              items-center
              gap-6
            "
          >

            <div className="relative w-full lg:w-[520px]">

              <Search
                size={20}
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-[#353C72]
                "
              />

              <input
                type="text"
                placeholder="Search Stories..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-full
                  bg-[#A3C2E0]
                  text-[#353C72]
                  pl-14
                  pr-6
                  py-4
                  outline-none
                  placeholder:text-[#353C72]
                "
              />

            </div>

            <Link
              href="/admin/student-stories/new"
              className="
                flex
                items-center
                gap-3
                bg-[#F4C3D5]
                text-[#353C72]
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
              "
            >

              <Plus size={22} />

              Add Story

            </Link>

          </div>

          {/* Stories */}

          <div className="mt-16 space-y-8">

                      {filtered.length === 0 ? (

            <div
              className="
                bg-[#2A2F72]
                rounded-[32px]
                p-16
                text-center
              "
            >

              <img
                src="/door-2.png"
                alt="Door"
                className="w-20 mx-auto opacity-60"
              />

              <h2 className="text-4xl mt-8">
                No Student Stories Found
              </h2>

              <p className="mt-4 text-[#A3C2E0]">
                Share inspiring journeys to motivate future students.
              </p>

            </div>

          ) : (

            filtered.map((story) => (

              <div
                key={story.id}
                className="
                  bg-[#2A2F72]
                  rounded-[32px]
                  border
                  border-white/10
                  p-8
                  hover:border-[#F4C3D5]
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-8
                  "
                >

                  {/* Left */}

                  <div className="flex-1">

                    <div className="flex items-center gap-3">

                      <h2 className="text-3xl">
                        {story.student_name}
                      </h2>

                      {story.featured && (

                        <span
                          className="
                            flex
                            items-center
                            gap-2
                            bg-[#F4C3D5]
                            text-[#353C72]
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            font-semibold
                          "
                        >

                          <Star
                            size={15}
                            fill="currentColor"
                          />

                          Featured

                        </span>

                      )}

                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-5
                        text-[#A3C2E0]
                      "
                    >

                      <Globe size={18} />

                      <span>
                        {story.country}
                      </span>

                    </div>

                    {story.title && (

                      <p className="mt-4 text-[#F8F8F4] text-lg">
                        {story.title}
                      </p>

                    )}

                  </div>

                  {/* Right */}

                  <div
                    className="
                      flex
                      gap-4
                      shrink-0
                    "
                  >

                    <Link
                      href={`/admin/student-stories/edit/${story.id}`}
                      className="
                        flex
                        items-center
                        gap-2
                        bg-[#6C9BD5]
                        text-white
                        px-6
                        py-3
                        rounded-full
                        hover:scale-105
                        transition
                      "
                    >

                      <Pencil size={18} />

                      Edit

                    </Link>

                    <button
                      onClick={() =>
                        deleteStory(story.id)
                      }
                      className="
                        flex
                        items-center
                        gap-2
                        bg-red-500
                        text-white
                        px-6
                        py-3
                        rounded-full
                        hover:bg-red-600
                        transition
                      "
                    >

                      <Trash2 size={18} />

                      Delete

                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

          {/* Bottom Section */}

          <section className="mt-24 pb-20">

            <div
              className="
                bg-[#2A2F72]
                rounded-[40px]
                p-14
                text-center
              "
            >

              <img
                src="/door-2.png"
                alt="Door"
                className="w-20 mx-auto mb-8"
              />

              <h2 className="text-5xl leading-tight">

                Every Story

                <span className="text-[#6C9BD5]">
                  {" "}
                  Opens
                </span>

                <br />

                Another Door Of Hope.

              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "Success stories inspire confidence,
                build ambition and remind every
                student that great opportunities
                are within reach."
              </p>

            </div>

          </section>

        </div>
       </div>
      </main>

    </>
  );
}