"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";
import {
  Image as ImageIcon,
  Video,
} from "lucide-react";

export default function EditStoryPage() {

  const params = useParams();
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
      Existing Media
  ----------------------------- */

  const [photoUrl, setPhotoUrl] =
    useState("");

  const [videoUrl, setVideoUrl] =
    useState("");

  /* -----------------------------
      New Uploads
  ----------------------------- */

  const [photoFile, setPhotoFile] =
    useState<File | null>(null);

  const [videoFile, setVideoFile] =
    useState<File | null>(null);

  const [photoPreview, setPhotoPreview] =
    useState("");

  const [uploading, setUploading] =
    useState(false);

  useEffect(() => {
    loadStory();
  }, []);

  async function loadStory() {

    const { data, error } =
      await supabase
        .from("student_stories")
        .select("*")
        .eq("id", params.id)
        .single();

    if (error) {
      alert(error.message);
      return;
    }

    if (!data) return;

    setStudentName(
      data.student_name || ""
    );

    setCountry(
      data.country || ""
    );

    setQuote(
      data.quote || ""
    );

    setStory(
      data.story || ""
    );

    setFeatured(
      data.featured || false
    );

    setPhotoUrl(
      data.photo_url || ""
    );

    setVideoUrl(
      data.video_url || ""
    );

    setPhotoPreview(
      data.photo_url || ""
    );

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
  async function updateStory() {

    if (
      !studentName.trim() ||
      !country.trim() ||
      !quote.trim() ||
      !story.trim()
    ) {
      alert(
        "Please fill all required fields."
      );
      return;
    }

    setUploading(true);

    try {

      let finalPhoto =
        photoUrl;

      let finalVideo =
        videoUrl;

      /* -------------------------
          Replace Photo
      ------------------------- */

      if (photoFile) {

  /* Delete old photo */

  if (photoUrl) {

    const oldPhoto =
      getStoragePath(photoUrl);

    if (oldPhoto) {

      await supabase.storage
        .from("student-stories")
        .remove([oldPhoto]);

    }

  }

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

  finalPhoto =
    supabase.storage
      .from("student-stories")
      .getPublicUrl(photoName)
      .data.publicUrl;

}

      /* -------------------------
          Replace Video
      ------------------------- */

      if (videoFile) {

  /* Delete old video */

  if (videoUrl) {

    const oldVideo =
      getStoragePath(videoUrl);

    if (oldVideo) {

      await supabase.storage
        .from("student-stories")
        .remove([oldVideo]);

    }

  }

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

  finalVideo =
    supabase.storage
      .from("student-stories")
      .getPublicUrl(videoName)
      .data.publicUrl;

}

      /* -------------------------
          Update Story
      ------------------------- */

      const { error } =
        await supabase
          .from("student_stories")
          .update({

            student_name:
              studentName,

            country,

            quote,

            story,

            photo_url:
              finalPhoto,

            video_url:
              finalVideo,

            featured,

          })
          .eq("id", params.id);

      if (error)
        throw error;

      alert(
        "Story updated successfully!"
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

      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 sm:py-12">

        {/* Hero */}

        <div className="text-center">

          <img
            src="/door-2.png"
            alt="Door"
            className="
  w-20
  sm:w-24
  md:w-28
  mx-auto
"
          />

          <h1
  className="
    mt-6
    sm:mt-8
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    leading-none
  "
>

            EDIT

            <span className="text-[#6C9BD5]">
              {" "}
              STORY
            </span>

          </h1>

          <p
            className="
  mt-4
  sm:mt-6
  text-lg
  sm:text-xl
  md:text-2xl
  italic
  text-[#A3C2E0]
"
          >
            Update a student's inspiring
            journey and keep their success
            story alive.
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
            placeholder="Full Story"
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

          {/* Current Photo */}

          {photoPreview && (

            <div>

              <h3 className="text-xl font-semibold mb-4">
                Current Photo
              </h3>

              <img
                src={photoPreview}
                alt="Student"
                className="
                  w-full
                  h-80
                  object-cover
                  rounded-[28px]
                "
              />

            </div>

          )}

          {/* Upload New Photo */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Replace Photo
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
                    URL.createObjectURL(file)
                  );

                }}
              />

              <ImageIcon
                size={48}
                className="text-[#6C9BD5]"
              />

              <p className="mt-5 text-lg">
                Choose New Photo
              </p>

            </label>

          </div>

          {/* Upload New Video */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Replace Video (Optional)
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
                Choose New Video
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

          {/* Action Buttons */}
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
    onClick={updateStory}
    disabled={uploading}
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
      ? "Updating..."
      : "Update Story"}
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

    <h2
      className="
        text-5xl
        leading-tight
      "
    >

      Every Story

      <span
        className="
          text-[#6C9BD5]
        "
      >
        {" "}
        Evolves
      </span>

      <br />

      Keep It Updated.

    </h2>

    <p
      className="
        mt-8
        text-[#A3C2E0]
        italic
        text-2xl
      "
    >
      "A student's journey continues to
      inspire when their achievements are
      kept current and shared with others."
    </p>

  </div>

</section>

</div>

</main>

</>

);
}