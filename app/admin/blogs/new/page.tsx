"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function NewBlogPage() {

  const router = useRouter();

  const [title, setTitle] =
    useState("");

  const [excerpt, setExcerpt] =
    useState("");

  const [content, setContent] =
    useState("");

  const [author, setAuthor] =
    useState("");

  const [imageUrl, setImageUrl] =
    useState("");

  const [featured, setFeatured] =
    useState(false);

  async function saveBlog() {

    if (
      !title.trim() ||
      !excerpt.trim() ||
      !content.trim() ||
      !author.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const { error } =
      await supabase
        .from("blogs")
        .insert({
          title,
          excerpt,
          content,
          author,
          image_url: imageUrl,
          featured,
        });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Blog created successfully!");

    router.push("/admin/blogs");
  }

  return (
    <>
      <AdminNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

        <div className="max-w-5xl mx-auto px-8 py-12">

          {/* Hero */}

          <div className="text-center">

            <img
              src="/door-2.png"
              alt="Door"
              className="w-28 mx-auto"
            />

            <h1 className="text-7xl mt-8">

              CREATE

              <span className="text-[#6C9BD5]">
                {" "}
                BLOG
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
              Every article opens a new
              door of knowledge for
              students.
            </p>

          </div>

          {/* Form */}

          <div
            className="
              mt-16
              bg-[#2A2F72]
              rounded-[40px]
              p-10
              space-y-8
            "
          >

            {/* Title */}

            <input
              placeholder="Blog Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="
                w-full
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

            {/* Excerpt */}

            <textarea
              placeholder="Short Excerpt"
              value={excerpt}
              onChange={(e) =>
                setExcerpt(
                  e.target.value
                )
              }
              className="
                w-full
                h-28
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

            {/* Content */}

            <textarea
              placeholder="Write your blog content..."
              value={content}
              onChange={(e) =>
                setContent(
                  e.target.value
                )
              }
              className="
                w-full
                h-[350px]
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

            {/* Author */}

            <input
              placeholder="Author Name"
              value={author}
              onChange={(e) =>
                setAuthor(
                  e.target.value
                )
              }
              className="
                w-full
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

                        {/* Image URL */}

            <input
              placeholder="Image URL (Optional)"
              value={imageUrl}
              onChange={(e) =>
                setImageUrl(e.target.value)
              }
              className="
                w-full
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

            {/* Featured */}

            <label
              className="
                flex
                items-center
                gap-4
                bg-[#353C72]
                rounded-2xl
                p-5
                cursor-pointer
              "
            >

              <input
                type="checkbox"
                checked={featured}
                onChange={(e) =>
                  setFeatured(
                    e.target.checked
                  )
                }
                className="w-5 h-5"
              />

              <span className="text-lg">
                Featured Blog
              </span>

            </label>

            {/* Buttons */}

            <div className="flex justify-center gap-6 pt-8">

              <button
                onClick={() =>
                  router.push("/admin/blogs")
                }
                className="
                  px-10
                  py-4
                  rounded-full
                  border
                  border-[#F4C3D5]
                  text-[#F4C3D5]
                  hover:bg-[#F4C3D5]
                  hover:text-[#353C72]
                  transition
                "
              >
                Cancel
              </button>

              <button
                onClick={saveBlog}
                className="
                  px-10
                  py-4
                  rounded-full
                  bg-[#F4C3D5]
                  text-[#353C72]
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                Publish Blog
              </button>

            </div>

          </div>

          {/* Bottom Quote */}

          <section className="mt-20 pb-20">

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

                Every Blog
                <span className="text-[#6C9BD5]">
                  {" "}
                  Opens
                </span>

                <br />

                A New Door Of Knowledge.

              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "Great ideas become even greater
                when they are shared. Inspire,
                educate and empower every student
                through your words."
              </p>

            </div>

          </section>

        </div>

      </main>

    </>
  );
}