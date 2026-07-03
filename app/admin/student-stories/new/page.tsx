"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";
import {
  Upload,
  Image as ImageIcon,
  Video,
} from "lucide-react";

export default function NewStoryPage() {

  const router = useRouter();

  /* -----------------------------
      Form Fields
  ----------------------------- */

  const [studentName, setStudentName] =
    useState("");

  const [country, setCountry] =
    useState("");

  const [quote, setQuote] =
    useState("");

  const [story, setStory] =
    useState("");

  const [featured, setFeatured] =
    useState(false);

  /* -----------------------------
      Photo Upload
  ----------------------------- */

  const [photoFile, setPhotoFile] =
    useState<File | null>(null);

  const [photoPreview, setPhotoPreview] =
    useState("");

  /* -----------------------------
      Video Upload
  ----------------------------- */

  const [videoFile, setVideoFile] =
    useState<File | null>(null);

  /* -----------------------------
      Upload State
  ----------------------------- */

  const [uploading, setUploading] =
    useState(false);

  /* -----------------------------
      Save Story
  ----------------------------- */

  async function saveStory() {

    if (
      !studentName.trim() ||
      !country.trim() ||
      !quote.trim() ||
      !story.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (!photoFile) {
      alert("Please upload a student photo.");
      return;
    }

    setUploading(true);

    try {

      let photoUrl = "";
      let videoUrl = "";

      /* ===========================
            Upload Photo
      =========================== */

      const photoName =
        `photos/${Date.now()}-${photoFile.name}`;

      const {
        error: photoError,
      } =
        await supabase.storage
          .from("student-stories")
          .upload(
            photoName,
            photoFile
          );

      if (photoError)
        throw photoError;

      photoUrl =
        supabase.storage
          .from("student-stories")
          .getPublicUrl(photoName)
          .data.publicUrl;

      /* ===========================
            Upload Video
      =========================== */

      if (videoFile) {

        const videoName =
          `videos/${Date.now()}-${videoFile.name}`;

        const {
          error: videoError,
        } =
          await supabase.storage
            .from("student-stories")
            .upload(
              videoName,
              videoFile
            );

        if (videoError)
          throw videoError;

        videoUrl =
          supabase.storage
            .from("student-stories")
            .getPublicUrl(videoName)
            .data.publicUrl;

      }

      /* ===========================
            Insert Story
      =========================== */

      const { error } =
        await supabase
          .from("student_stories")
          .insert({

            student_name:
              studentName,

            country,

            quote,

            story,

            photo_url:
              photoUrl,

            video_url:
              videoUrl,

            featured,

          });

      if (error)
        throw error;

      alert(
        "Story published successfully!"
      );

      router.push(
        "/admin/student-stories"
      );

    } catch (err: any) {

      alert(err.message);

    } finally {

      setUploading(false);

    }

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
              STORY
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
            Every student's journey can
            inspire another to dream
            bigger.
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

          {/* Student Name */}

          <input
            placeholder="Student Name"
            value={studentName}
            onChange={(e) =>
              setStudentName(
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

          {/* Country */}

          <input
            placeholder="Country"
            value={country}
            onChange={(e) =>
              setCountry(
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

          {/* Quote */}

          <textarea
            placeholder="Inspirational Quote"
            value={quote}
            onChange={(e) =>
              setQuote(
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

          {/* Story */}

          <textarea
            placeholder="Write the student's complete story..."
            value={story}
            onChange={(e) =>
              setStory(
                e.target.value
              )
            }
            className="
              w-full
              h-[320px]
              bg-[#353C72]
              rounded-2xl
              p-4
              outline-none
            "
          />

          {/* Upload Student Photo */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Student Photo
            </h3>

            <label
              className="
                flex
                flex-col
                items-center
                justify-center
                border-2
                border-dashed
                border-[#6C9BD5]
                rounded-[28px]
                bg-[#353C72]
                p-10
                cursor-pointer
                hover:border-[#F4C3D5]
                transition
              "
            >

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {

                  if (!e.target.files)
                    return;

                  const file =
                    e.target.files[0];

                  setPhotoFile(file);

                  setPhotoPreview(
                    URL.createObjectURL(
                      file
                    )
                  );

                }}
              />

              <ImageIcon
                size={48}
                className="text-[#6C9BD5]"
              />

              <p className="mt-5 text-lg">
                Click to upload photo
              </p>

              <p className="text-[#A3C2E0] text-sm mt-2">
                JPG • PNG • WEBP
              </p>

            </label>

            {photoPreview && (

              <img
                src={photoPreview}
                alt="Preview"
                className="
                  mt-6
                  rounded-[28px]
                  w-full
                  h-80
                  object-cover
                "
              />

            )}

          </div>

          {/* Upload Student Video */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Student Video (Optional)
            </h3>

            <label
              className="
                flex
                flex-col
                items-center
                justify-center
                border-2
                border-dashed
                border-[#6C9BD5]
                rounded-[28px]
                bg-[#353C72]
                p-10
                cursor-pointer
                hover:border-[#F4C3D5]
                transition
              "
            >

              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => {

                  if (!e.target.files)
                    return;

                  setVideoFile(
                    e.target.files[0]
                  );

                }}
              />

              <Video
                size={48}
                className="text-[#6C9BD5]"
              />

              <p className="mt-5 text-lg">
                Click to upload video
              </p>

              <p className="text-[#A3C2E0] text-sm mt-2">
                MP4 • MOV • WEBM
              </p>

            </label>

            {videoFile && (

              <div
                className="
                  mt-5
                  bg-[#353C72]
                  rounded-xl
                  p-4
                "
              >

                <p className="text-[#F4C3D5]">
                  Selected Video
                </p>

                <p className="mt-2">
                  {videoFile.name}
                </p>

              </div>

            )}

          </div>

          {/* Featured */}

          <label
            className="
              flex
              items-center
              gap-4
              bg-[#353C72]
              rounded-2xl
              p-5
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
              Featured Story
            </span>

          </label>

          {/* Buttons */}
          <div
  className="
    flex
    justify-center
    gap-6
    pt-6
  "
>

  <button
    type="button"
    onClick={() =>
      router.push(
        "/admin/student-stories"
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
      transition-all
    "
  >
    Cancel
  </button>

  <button
    type="button"
    disabled={uploading}
    onClick={saveStory}
    className="
      px-10
      py-4
      rounded-full
      bg-[#F4C3D5]
      text-[#353C72]
      font-semibold
      hover:scale-105
      transition-all
      disabled:opacity-60
      disabled:cursor-not-allowed
    "
  >
    {uploading
      ? "Publishing..."
      : "Publish Story"}
  </button>

</div>

</div>

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

      Every Student

      <span className="text-[#6C9BD5]">
        {" "}
        Opens
      </span>

      <br />

      A Door For Another.

    </h2>

    <p
      className="
        mt-8
        text-[#A3C2E0]
        italic
        text-2xl
      "
    >
      "Success becomes meaningful when it
      inspires someone else to begin their
      own journey."
    </p>

  </div>

</section>

</div>

</main>

</>

);
}