"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AdminNavbar from "@/app/components/AdminNavbar";
import {
  Search,
  Plus,
  Calendar,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

export default function AdminBlogsPage() {

  const [blogs, setBlogs] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {

    const { data, error } =
      await supabase
        .from("blogs")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    console.log("BLOGS:", data);
    console.log("ERROR:", error);

    setBlogs(data || []);
    setLoading(false);
  }

  async function deleteBlog(
    id: number
  ) {

    const confirmed = confirm(
      "Delete this blog?"
    );

    if (!confirmed) return;

    const { error } =
      await supabase
        .from("blogs")
        .delete()
        .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadBlogs();
  }

  const filtered =
    blogs.filter((blog) => {

      const keyword =
        search.toLowerCase();

      return (
        blog.title
          ?.toLowerCase()
          .includes(keyword) ||

        blog.author
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
              Loading Blogs...
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

              MANAGE

              <span className="text-[#6C9BD5]">
                {" "}
                BLOGS
              </span>

            </h1>

            <p className="mt-6 text-2xl italic text-[#A3C2E0]">

              Share inspiring stories and
              valuable knowledge with
              students.

            </p>

          </div>

          {/* Search + Add */}

          <div
            className="
              mt-16
              flex
              flex-col
              lg:flex-row
              gap-6
              justify-between
              items-center
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
                placeholder="Search Blogs..."
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
              href="/admin/blogs/new"
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

              Add Blog

            </Link>

          </div>

          {/* Blog Cards */}

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
                No Blogs Found
              </h2>

              <p className="mt-4 text-[#A3C2E0]">
                Create your first blog to inspire students.
              </p>

            </div>

          ) : (

            filtered.map((blog) => (

              <div
                key={blog.id}
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
                        {blog.title}
                      </h2>

                      {blog.featured && (

                        <span
                          className="
                            flex
                            items-center
                            gap-1
                            bg-[#F4C3D5]
                            text-[#353C72]
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            font-semibold
                          "
                        >

                          <Star size={15} fill="currentColor" />

                          Featured

                        </span>

                      )}

                    </div>

                    <p className="mt-4 text-[#A3C2E0]">
                      By {blog.author}
                    </p>

                    {blog.published_at && (

                      <div className="flex items-center gap-2 mt-4">

                        <Calendar
                          size={18}
                          className="text-[#F4C3D5]"
                        />

                        <span>

                          {new Date(
                            blog.published_at
                          ).toLocaleDateString("en-GB")}

                        </span>

                      </div>

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
                      href={`/admin/blogs/edit/${blog.id}`}
                      className="
                        flex
                        items-center
                        gap-2
                        bg-[#6C9BD5]
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
                        deleteBlog(blog.id)
                      }
                      className="
                        flex
                        items-center
                        gap-2
                        bg-red-500
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
                  Inspires
                </span>

                <br />

                Someone To Dream Bigger.

              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >

                "Knowledge grows when it is shared.
                Write blogs that encourage every
                student to open a new door."

              </p>

            </div>

          </section>
            </div>
        </div>

      </main>

    </>
  );
}