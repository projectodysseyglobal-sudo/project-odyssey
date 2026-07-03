"use client";

import { use, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function EditOpportunityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [category, setCategory] =
  useState("");

const [
  customCategory,
  setCustomCategory,
] = useState("");

const [subject, setSubject] =
  useState("");

const [
  customSubject,
  setCustomSubject,
] = useState("");
  const [grade, setGrade] =
    useState("");

  const [country, setCountry] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  const [
    applicationLink,
    setApplicationLink,
  ] = useState("");

  const [
    eligibility,
    setEligibility,
  ] = useState("");

  const [
    applicationProcess,
    setApplicationProcess,
  ] = useState("");

  const [
    applicationGuidance,
    setApplicationGuidance,
  ] = useState("");

  const [benefits, setBenefits] =
    useState("");

  const [
    howToApply,
    setHowToApply,
  ] = useState("");

  const [
    selectionProcess,
    setSelectionProcess,
  ] = useState("");

  const [
    winningTips,
    setWinningTips,
  ] = useState("");

  useEffect(() => {
    async function loadOpportunity() {

      const { data, error } =
        await supabase
          .from("opportunities")
          .select("*")
          .eq("id", id)
          .single();

      if (error) {
        alert(error.message);
        return;
      }

      setTitle(data.title || "");
      setDescription(
        data.description || ""
      );

      const categoryList = [
  "Research",
  "Competition",
  "Scholarship",
  "Internship",
  "Summer Program",
  "Workshop",
  "Bootcamp",
  "Conference",
  "Fellowship",
  "Other",
];

if (
  categoryList.includes(data.category)
) {
  setCategory(data.category);
} else {
  setCategory("Other");
  setCustomCategory(
    data.category || ""
  );
}

const subjectList = [
  "Medicine",
  "Engineering",
  "Science",
  "Technology",
  "Business",
  "Law",
  "Arts",
  "Writing",
  "Research",
  "Entrepreneurship",
  "Social Impact",
  "Other"
];

if (
  subjectList.includes(data.subject)
) {
  setSubject(data.subject);
} else {
  setSubject("Other");
  setCustomSubject(
    data.subject || ""
  );
}
      setGrade(
        data.grade || ""
      );

      setCountry(
        data.country || ""
      );

      setDeadline(
        data.deadline || ""
      );

      setApplicationLink(
        data.application_link || ""
      );

      setEligibility(
        data.eligibility || ""
      );

      setApplicationProcess(
        data.application_process ||
          ""
      );

      setApplicationGuidance(
        data.application_guidance ||
          ""
      );

      setBenefits(
        data.benefits || ""
      );

      setHowToApply(
        data.how_to_apply || ""
      );

      setSelectionProcess(
        data.selection_process ||
          ""
      );

      setWinningTips(
        data.winning_tips || ""
      );

      setLoading(false);
    }

    loadOpportunity();
  }, [id]);

  async function updateOpportunity() {
    const finalCategory =
  category === "Other"
    ? customCategory
    : category;

const finalSubject =
  subject === "Other"
    ? customSubject
    : subject;
      // Validation
  if (
    category === "Other" &&
    !customCategory.trim()
  ) {
    alert("Please enter a custom category.");
    return;
  }

  if (
    subject === "Other" &&
    !customSubject.trim()
  ) {
    alert("Please enter a custom subject.");
    return;
  }

    const { error } =
      await supabase
        .from("opportunities")
        .update({
          title,
          description,
          category: finalCategory,
          subject: finalSubject,
          grade,
          country,
          deadline,
          application_link:
            applicationLink,
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
        })
        .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Opportunity updated successfully!"
    );

    router.push(
      "/admin/opportunities"
    );
  }

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
              Loading Opportunity...
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
                OPPORTUNITY
              </span>
            </h1>

            <p className="mt-6 text-2xl italic text-[#A3C2E0]">
              Refine an existing opportunity
              for students.
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
                setTitle(e.target.value)
              }
              className="w-full bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full h-40 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Eligibility"
              value={eligibility}
              onChange={(e) =>
                setEligibility(e.target.value)
              }
              className="w-full h-28 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Application Process"
              value={applicationProcess}
              onChange={(e) =>
                setApplicationProcess(e.target.value)
              }
              className="w-full h-36 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Application Guidance"
              value={applicationGuidance}
              onChange={(e) =>
                setApplicationGuidance(e.target.value)
              }
              className="w-full h-36 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Benefits"
              value={benefits}
              onChange={(e) =>
                setBenefits(e.target.value)
              }
              className="w-full h-28 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="How To Apply"
              value={howToApply}
              onChange={(e) =>
                setHowToApply(e.target.value)
              }
              className="w-full h-28 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Selection Process"
              value={selectionProcess}
              onChange={(e) =>
                setSelectionProcess(e.target.value)
              }
              className="w-full h-28 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            <textarea
              placeholder="Winning Tips"
              value={winningTips}
              onChange={(e) =>
                setWinningTips(e.target.value)
              }
              className="w-full h-28 bg-[#353C72] rounded-2xl p-4 outline-none"
            />

                        {/* Category */}

            <select
  value={category}
  onChange={(e) =>
    setCategory(e.target.value)
  }
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

  <option value="Research">
    Research
  </option>

  <option value="Competition">
    Competition
  </option>

  <option value="Scholarship">
    Scholarship
  </option>

  <option value="Internship">
    Internship
  </option>

  <option value="Summer Program">
    Summer Program
  </option>

  <option value="Workshop">
    Workshop
  </option>

  <option value="Bootcamp">
    Bootcamp
  </option>

  <option value="Conference">
    Conference
  </option>

  <option value="Fellowship">
    Fellowship
  </option>

  <option value="Other">
    Other
  </option>

</select>

{category === "Other" && (

<input
  placeholder="Custom Category"
  value={customCategory}
  onChange={(e) =>
    setCustomCategory(
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

)}

            {/* Subject */}

            <select
  value={subject}
  onChange={(e) =>
    setSubject(e.target.value)
  }
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

  <option value="Medicine">
    Medicine
  </option>

  <option value="Engineering">
    Engineering
  </option>

  <option value="Science">
    Science
  </option>

  <option value="Technology">
    Technology
  </option>

  <option value="Business">
    Business
  </option>

  <option value="Law">
    Law
  </option>

  <option value="Arts">
    Arts
  </option>

  <option value="Writing">
    Writing
  </option>

  <option value="Research">
    Research
  </option>

  <option value="Entrepreneurship">
    Entrepreneurship
  </option>

  <option value="Social Impact">
    Social Impact
  </option>

  <option value="Other">
    Other
  </option>

</select>

{subject === "Other" && (

<input
  placeholder="Custom Subject"
  value={customSubject}
  onChange={(e) =>
    setCustomSubject(
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

)}
            {/* Grade */}

            <input
              placeholder="Grade"
              value={grade}
              onChange={(e) =>
                setGrade(e.target.value)
              }
              className="w-full bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            {/* Country */}

            <input
              placeholder="Country"
              value={country}
              onChange={(e) =>
                setCountry(e.target.value)
              }
              className="w-full bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            {/* Deadline */}

            <input
              type="date"
              value={deadline}
              onChange={(e) =>
                setDeadline(e.target.value)
              }
              className="w-full bg-[#353C72] rounded-2xl p-4 outline-none"
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
              className="w-full bg-[#353C72] rounded-2xl p-4 outline-none"
            />

            {/* Buttons */}

            <div className="flex justify-center gap-6 pt-8">

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
                onClick={updateOpportunity}
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
                Update Opportunity
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
                Small Updates
                <span className="text-[#6C9BD5]">
                  {" "}
                  Create
                </span>
                <br />
                Better Opportunities.
              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "Keep every opportunity accurate,
                inspiring and ready for the next
                student who opens the door."
              </p>

            </div>

          </section>

        </div>

      </main>

    </>
  );
}