"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import StudentNavbar from "@/app/components/StudentNavbar";

export default function EditProfilePage() {
  const router = useRouter();

  const [grade, setGrade] = useState("");
  const [interests, setInterests] =
    useState<string[]>([]);
  const interestOptions = [
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

const countryOptions = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "China",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Ireland",
  "Italy",
  "Japan",
  "Malaysia",
  "Mexico",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Pakistan",
  "Philippines",
  "Russia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "UAE",
  "United Kingdom",
  "United States",
  "Vietnam",
];
const financialOptions = [
  "Need Scholarship Support",
  "Need Full Financial Aid",
  "Need Partial Financial Aid",
  "Moderate Support Needed",
  "Need Merit Scholarship",
  "Need Need-Based Aid",
  "No Financial Support Needed",
];
const [country, setCountry] =
    useState("");
const [
  financialSituations,
  setFinancialSituations,
] = useState<string[]>([]);

  function toggleInterest(
    interest: string
  ) {
    if (interests.includes(interest)) {
      setInterests(
        interests.filter(
          (i) => i !== interest
        )
      );
    } else {
      setInterests([
        ...interests,
        interest,
      ]);
    }
  }

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data) {
        setGrade(data.grade || "");
        setInterests(
          data.interests || []
        );
        setCountry(
          data.country || ""
        );
        setFinancialSituations(
          data.financial_situations || []
        );
      }
    }

    loadProfile();
  }, []);

  async function saveProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .update({
        grade,
        interests,
        country,
        financial_situations:
          financialSituations,
      })
      .eq("id", user.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profile Updated!");

    router.push("/profile");
  }

  return (
    <>
      <StudentNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

        <div className="max-w-5xl mx-auto px-8 py-12">

          {/* Hero */}

          <div className="text-center">

            <img
              src="/door-2.png"
              alt="Door"
              className="w-28 mx-auto"
            />

            <h1
              className="
                text-7xl
                mt-8
                leading-none
              "
            >
              EDIT
              <span className="text-[#6C9BD5]">
                {" "}
                PROFILE
              </span>
            </h1>

            <p
              className="
                mt-8
                italic
                text-[#A3C2E0]
                text-2xl
              "
            >
              Shape your journey by
              keeping your profile
              up to date.
            </p>

          </div>

          {/* Form */}

          <div
            className="
              mt-16
              bg-[#2A2F72]
              rounded-[40px]
              p-10
            "
          >

            {/* Grade */}

            <div className="mb-10">

              <label
                className="
                  block
                  mb-3
                  text-[#6C9BD5]
                  uppercase
                "
              >
                Grade
              </label>

<select
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
>
  <option value="">
    Select Grade
  </option>

  <option value="9">
    Grade 9
  </option>

  <option value="10">
    Grade 10
  </option>

  <option value="11">
    Grade 11
  </option>

  <option value="12">
    Grade 12
  </option>

  <option value="College">
    College
  </option>

  <option value="University">
    University
  </option>

  <option value="Graduate">
    Graduate
  </option>
</select>

            </div>

{/* Interests */}

<div className="mb-10">

  <label
    className="
      block
      mb-3
      text-[#6C9BD5]
      uppercase
    "
  >
    Interests
  </label>

  <select
    onChange={(e) => {
      if (
        e.target.value &&
        !interests.includes(e.target.value)
      ) {
        setInterests([
          ...interests,
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
      Select an interest...
    </option>

    {interestOptions.map((interest) => (
      <option
        key={interest}
        value={interest}
      >
        {interest}
      </option>
    ))}

  </select>

  <div className="flex flex-wrap gap-3 mt-5">

    {interests.map((interest) => (

      <button
        key={interest}
        type="button"
        onClick={() =>
          toggleInterest(interest)
        }
        className="
          bg-[#F4C3D5]
          text-[#353C72]
          px-4
          py-2
          rounded-full
          hover:opacity-80
          transition
        "
      >
        {interest} ✕
      </button>

    ))}

  </div>

</div>

            {/* Country */}

            <div className="mb-10">

              <label
                className="
                  block
                  mb-3
                  text-[#6C9BD5]
                  uppercase
                "
              >
                Country
              </label>

              <select
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
>
  <option value="">
    Select your country
  </option>

  {countryOptions.map((country) => (
    <option
      key={country}
      value={country}
    >
      {country}
    </option>
  ))}

</select>

            </div>

                        {/* Financial Situation */}

            <div className="mb-10">

              <label
                className="
                  block
                  mb-3
                  text-[#6C9BD5]
                  uppercase
                "
              >
                Financial Situation
              </label>

            <div className="space-y-4">

  <select
    onChange={(e) => {
      if (
        e.target.value &&
        !financialSituations.includes(e.target.value)
      ) {
        setFinancialSituations([
          ...financialSituations,
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
      Select Financial Situation
    </option>

    {financialOptions.map((option) => (
      <option
        key={option}
        value={option}
      >
        {option}
      </option>
    ))}

  </select>

  <div className="flex flex-wrap gap-3">

    {financialSituations.map((option) => (

      <button
        key={option}
        type="button"
        onClick={() =>
          setFinancialSituations(
            financialSituations.filter(
              (item) => item !== option
            )
          )
        }
        className="
          bg-[#F4C3D5]
          text-[#353C72]
          px-4
          py-2
          rounded-full
          hover:opacity-80
          transition
        "
      >
        {option} ✕
      </button>

    ))}

  </div>

</div>

            </div>

            {/* Quote */}

            <div
              className="
                bg-[#353C72]
                rounded-3xl
                p-8
                text-center
                mb-10
              "
            >

              <img
                src="/door-2.png"
                alt="Door"
                className="w-16 mx-auto mb-6"
              />

              <h2 className="text-3xl">
                Every Great Journey
                <span className="text-[#6C9BD5]">
                  {" "}
                  Begins Within
                </span>
              </h2>

              <p
                className="
                  mt-5
                  italic
                  text-[#A3C2E0]
                  text-xl
                "
              >
                "Your profile is the compass
                that guides you to the right
                opportunities."
              </p>

            </div>

            {/* Buttons */}

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-6
              "
            >

              <button
                onClick={saveProfile}
                className="
                  bg-[#F4C3D5]
                  text-[#353C72]
                  px-10
                  py-4
                  rounded-full
                  text-xl
                  hover:scale-105
                  transition
                "
              >
                Save Changes
              </button>

              <button
                onClick={() =>
                  router.push("/profile")
                }
                className="
                  border-2
                  border-[#F4C3D5]
                  text-[#F4C3D5]
                  px-10
                  py-4
                  rounded-full
                  text-xl
                  hover:bg-[#F4C3D5]
                  hover:text-[#353C72]
                  transition
                "
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      </main>

    </>
  );
}