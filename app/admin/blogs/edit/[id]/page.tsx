"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function EditBlogPage() {

  const params = useParams();
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

  useEffect(() => {
    loadBlog();
  }, []);

  async function loadBlog() {

    const { data, error } =
      await supabase
        .from("blogs")
        .select("*")
        .eq("id", params.id)
        .single();

    if (error) {
      alert(error.message);
      return;
    }

    if (data) {

      setTitle(data.title || "");

      setExcerpt(
        data.excerpt || ""
      );

      setContent(
        data.content || ""
      );

      setAuthor(
        data.author || ""
      );

      setImageUrl(
        data.image_url || ""
      );

      setFeatured(
        data.featured || false
      );

    }

  }

  async function updateBlog() {

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
        .update({

          title,

          excerpt,

          content,

          author,

          image_url:
            imageUrl,

          featured,

        })
        .eq("id", params.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Blog updated successfully!");

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

              EDIT

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
              Refine your article and
              continue inspiring
              students through knowledge.
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
                setTitle(
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
              placeholder="Blog Content"
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
                setImageUrl(
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
                  router.push(
                    "/admin/blogs"
                  )
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
                onClick={updateBlog}
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
                Update Blog
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

                Every Revision

                <span className="text-[#6C9BD5]">
                  {" "}
                  Makes
                </span>

                <br />

                A Better Story.

              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "Keep improving every article.
                One updated blog can inspire
                thousands of students to take
                their next step."
              </p>

            </div>

          </section>

        </div>

      </main>

    </>
  );
}