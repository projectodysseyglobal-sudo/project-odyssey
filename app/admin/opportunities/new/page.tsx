"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function NewOpportunityPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Multi-select Categories
  const [categories, setCategories] = useState<string[]>([]);

  // Multi-select Subjects
  const [subjects, setSubjects] = useState<string[]>([]);

  const [grade, setGrade] = useState("");

  const [country, setCountry] = useState("");

  const [deadline, setDeadline] = useState("");

  const [applicationLink, setApplicationLink] =
    useState("");

  const [featured, setFeatured] =
    useState(false);

  const [eligibility, setEligibility] =
    useState("");

  const [applicationProcess, setApplicationProcess] =
    useState("");

  const [applicationGuidance, setApplicationGuidance] =
    useState("");

  const [benefits, setBenefits] =
    useState("");

  const [howToApply, setHowToApply] =
    useState("");

  const [selectionProcess, setSelectionProcess] =
    useState("");

  const [winningTips, setWinningTips] =
    useState("");

  // Available Categories

  const categoryOptions = [
    "Award",
    "Competition",
    "Scholarship",
    "Internship",
    "Summer Program",
    "Program",
    "Research",
    "Bootcamp",
    "Conference",
    "Workshop",
    "Fellowship",
    "Exchange Program",
    "Volunteer",
    "Hackathon",
    "Course",
    "Other",
  ];

  // Available Subjects

  const subjectOptions = [
    "Medicine",
    "Engineering",
    "Business",
    "Technology",
    "Science",
    "Research",
    "Writing",
    "Arts",
    "Law",
    "Economics",
    "Artificial Intelligence",
    "Coding",
    "STEM",
    "Community Service",
    "Music",
    "Photography",
    "Debate & MUN",
    "Public Speaking",
    "Social Impact",
    "Innovation",
    "Environment",
    "History",
    "Mathematics",
    "Other",
  ];

  function toggleCategory(category: string) {
    if (categories.includes(category)) {
      setCategories(
        categories.filter(
          (c) => c !== category
        )
      );
    } else {
      setCategories([
        ...categories,
        category,
      ]);
    }
  }

  function toggleSubject(subject: string) {
    if (subjects.includes(subject)) {
      setSubjects(
        subjects.filter(
          (s) => s !== subject
        )
      );
    } else {
      setSubjects([
        ...subjects,
        subject,
      ]);
    }
  }

  async function createOpportunity() {

    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }

    if (categories.length === 0) {
      alert("Please select at least one category.");
      return;
    }

    if (subjects.length === 0) {
      alert("Please select at least one subject.");
      return;
    }

    const { error } =
      await supabase
        .from("opportunities")
        .insert({
          title,
          description,
          category: categories.join(", "),
          subject: subjects.join(", "),
          grade,
          country,
          deadline: deadline || null,
          application_link:
            applicationLink,
          featured,
          eligibility,
          how_to_apply:
            howToApply,
          application_process:
            applicationProcess,
          selection_process:
            selectionProcess,
          winning_tips:
            winningTips,
          application_guidance:
            applicationGuidance,
          benefits,
        });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Opportunity created successfully!"
    );

    router.push(
      "/admin/opportunities"
    );
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
                OPPORTUNITY
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
              Create a new door
              for students around
              the world.
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

            <input
              placeholder="Opportunity Title"
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

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="
                w-full
                h-40
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

            <textarea
              placeholder="Eligibility"
              value={eligibility}
              onChange={(e) =>
                setEligibility(
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

            <textarea
              placeholder="Application Process"
              value={applicationProcess}
              onChange={(e) =>
                setApplicationProcess(
                  e.target.value
                )
              }
              className="
                w-full
                h-36
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

            <textarea
              placeholder="Application Guidance"
              value={applicationGuidance}
              onChange={(e) =>
                setApplicationGuidance(
                  e.target.value
                )
              }
              className="
                w-full
                h-36
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />

            <textarea
              placeholder="Benefits"
              value={benefits}
              onChange={(e) =>
                setBenefits(
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

            <textarea
              placeholder="How To Apply"
              value={howToApply}
              onChange={(e) =>
                setHowToApply(
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

            <textarea
              placeholder="Selection Process"
              value={selectionProcess}
              onChange={(e) =>
                setSelectionProcess(
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

            <textarea
              placeholder="Winning Tips"
              value={winningTips}
              onChange={(e) =>
                setWinningTips(
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

{/* Category */}

<div className="space-y-4">

  <select
    onChange={(e) => {
      if (
        e.target.value &&
        !categories.includes(e.target.value)
      ) {
        setCategories([
          ...categories,
          e.target.value,
        ]);
      }

      e.target.selectedIndex = 0;
    }}
    className="
      w-full
      bg-[#353C72]
      rounded-2xl
      p-4
      outline-none
    "
  >
    <option value="">
      Select Category
    </option>

    {categoryOptions.map((category) => (
      <option
        key={category}
        value={category}
      >
        {category}
      </option>
    ))}

  </select>

  <div className="flex flex-wrap gap-3">

    {categories.map((category) => (

      <button
        key={category}
        type="button"
        onClick={() =>
          toggleCategory(category)
        }
        className="
          bg-[#F4C3D5]
          text-[#353C72]
          px-4
          py-2
          rounded-full
          font-medium
          hover:opacity-80
          transition
        "
      >
        {category} ✕
      </button>

    ))}

  </div>

</div>

{/* Subject */}

<div className="space-y-4">

  <select
    onChange={(e) => {
      if (
        e.target.value &&
        !subjects.includes(e.target.value)
      ) {
        setSubjects([
          ...subjects,
          e.target.value,
        ]);
      }

      e.target.selectedIndex = 0;
    }}
    className="
      w-full
      bg-[#353C72]
      rounded-2xl
      p-4
      outline-none
    "
  >
    <option value="">
      Select Subject
    </option>

    {subjectOptions.map((subject) => (
      <option
        key={subject}
        value={subject}
      >
        {subject}
      </option>
    ))}

  </select>

  <div className="flex flex-wrap gap-3">

    {subjects.map((subject) => (

      <button
        key={subject}
        type="button"
        onClick={() =>
          toggleSubject(subject)
        }
        className="
          bg-[#F4C3D5]
          text-[#353C72]
          px-4
          py-2
          rounded-full
          font-medium
          hover:opacity-80
          transition
        "
      >
        {subject} ✕
      </button>
    ))}
  </div>
</div>

{/* Grade */}
<input
  type="text"
  placeholder="e.g. 7-12, University"
  value={grade}
  onChange={(e) =>
    setGrade(e.target.value)
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
  type="text"
  placeholder="e.g. Canada, Global, Canada, United States"
  value={country}
  onChange={(e) =>
    setCountry(e.target.value)
  }
  className="
    w-full
    bg-[#353C72]
    rounded-2xl
    p-4
    outline-none
  "
/>
            {/* Deadline */}
            <input
              type="date"
              value={deadline}
              onChange={(e) =>
                setDeadline(e.target.value)
              }
              className="
                w-full
                bg-[#353C72]
                rounded-2xl
                p-4
                outline-none
              "
            />
            {/* Application Link */}
            <input
              placeholder="Application Link"
              value={applicationLink}
              onChange={(e) =>
                setApplicationLink(
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
                Featured Opportunity
              </span>

            </label>

            {/* Buttons */}

            <div className="flex justify-center gap-6 pt-6">

              <button
                onClick={() =>
                  router.push(
                    "/admin/opportunities"
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
                onClick={createOpportunity}
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
                Create Opportunity
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
                Every Opportunity
                <span className="text-[#6C9BD5]">
                  {" "}
                  Begins
                </span>
                <br />
                With One Decision.
              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "One opportunity can change
                a student's future. Create it
                with purpose."
              </p>

            </div>

          </section>

        </div>

      </main>

    </>
  );
}