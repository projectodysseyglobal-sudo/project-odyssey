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
  const [country, setCountry] =
    useState("");
  const [
    financialSituation,
    setFinancialSituation,
  ] = useState("");

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
        setFinancialSituation(
          data.financial_situation || ""
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
        financial_situation:
          financialSituation,
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
                  setGrade(
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

              </select>

            </div>

            {/* Interests */}

            <div className="mb-10">

              <label
                className="
                  block
                  mb-5
                  text-[#6C9BD5]
                  uppercase
                "
              >
                Interests
              </label>

              <div className="grid md:grid-cols-2 gap-4">

                {[
                  "Medicine",
                  "Engineering",
                  "Science",
                  "Technology",
                  "Business",
                  "Law",
                  "Arts",
                  "Writing",
                  "Research",
                  "Other",
                ].map(
                  (interest) => (

                    <label
                      key={interest}
                      className="
                        flex
                        items-center
                        gap-3
                        bg-[#353C72]
                        rounded-xl
                        p-4
                        cursor-pointer
                      "
                    >

                      <input
                        type="checkbox"
                        checked={interests.includes(
                          interest
                        )}
                        onChange={() =>
                          toggleInterest(
                            interest
                          )
                        }
                      />

                      {interest}

                    </label>

                  )
                )}

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

              <input
                type="text"
                value={country}
                onChange={(e) =>
                  setCountry(
                    e.target.value
                  )
                }
                placeholder="Country"

                className="
                  w-full
                  bg-[#353C72]
                  rounded-2xl
                  p-4
                  outline-none
                "
              />

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

              <select
                value={financialSituation}
                onChange={(e) =>
                  setFinancialSituation(
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
              >
                <option value="">
                  Select Financial Situation
                </option>

                <option value="Need Scholarship Support">
                  Need Scholarship Support
                </option>

                <option value="Moderate Support Needed">
                  Moderate Support Needed
                </option>

                <option value="No Financial Support Needed">
                  No Financial Support Needed
                </option>

              </select>

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