"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [country, setCountry] = useState("");
  const [financialSituation, setFinancialSituation] =
    useState("");

  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(interest: string) {
    if (interests.includes(interest)) {
      setInterests(
        interests.filter((i) => i !== interest)
      );
    } else {
      setInterests([...interests, interest]);
    }
  }

  async function finish() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login again.");
      return;
    }

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        email: user.email,
        role: "student",
        name,
        grade,
        country,
        interests,
        financial_situation:
          financialSituation,
      });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  }

  function next() {
    if (step < 5) {
      setStep(step + 1);
    } else {
      finish();
    }
  }
  return (
    <main className="min-h-screen bg-[#353C72] flex items-center justify-center px-6">

      <div className="w-full max-w-2xl text-center">
        {/*Step 0 */}
        {step === 0 && (
  <>
    <img
      src="/door-knock.ico"
      className="w-28 mx-auto mb-10"
    />

    <h1>
      OPPORTUNITY IS
      <span>KNOCKING.</span>
    </h1>

    <p>
      Every opportunity begins with a single step.
    </p>

    <button
      onClick={() => setStep(1)}
    >
      Open the door →
    </button>
  </>
)}

        <img
          src="/door-icon.ico"
          alt="Door"
          className="w-16 h-16 mx-auto mb-8"
        />
      

        {/* STEP 1 */}

        {step === 1 && (
          <>
            <h1 className="text-[64px] text-[#F8F8F4] leading-none">
              WHAT'S <span className="text-[#6C9BD5]">YOUR NAME?</span>
            </h1>

            <p className="italic text-[#6C9BD5] text-[24px] mt-3">
              Let's get to know you.
            </p>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Your name..."
              className="mt-10 w-full rounded-full bg-[#A3C2E0] px-6 py-4 text-[#353C72] outline-none"
            />
          </>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <>
            <h1 className="text-[60px] text-[#F8F8F4] leading-none">
              WHAT DO YOU WANT TO{" "}
              <span className="text-[#6C9BD5]">
                PURSUE?
              </span>
            </h1>

            <p className="italic text-[#6C9BD5] text-[24px] mt-3">
              Pick as many as you'd like.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-10">
              {[
                "Medicine",
                "Engineering",
                "Business",
                "Law",
                "Technology",
                "Science",
                "Arts",
                "Research",
                "Entrepreneurship",
                "Social Impact",
                "Other",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    toggleInterest(item)
                  }
                  className={`rounded-full py-3 transition ${
                    interests.includes(item)
                      ? "bg-[#F4C3D5] text-[#353C72]"
                      : "bg-[#A3C2E0] text-[#353C72]"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
          </>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <>
            <h1 className="text-[60px] text-[#F8F8F4] leading-none">
              WHAT <span className="text-[#6C9BD5]">GRADE</span> ARE YOU IN?
            </h1>

            <p className="italic text-[#6C9BD5] text-[24px] mt-3">
              Choose the option that fits you.
            </p>

            <select
              value={grade}
              onChange={(e) =>
                setGrade(e.target.value)
              }
              className="mt-10 w-full rounded-full bg-[#A3C2E0] px-6 py-4 text-[#353C72] outline-none"
            >
              <option value="">Select Grade</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>College</option>
              <option>University</option>
              <option>Graduate</option>
            </select>
          </>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <>
            <h1 className="text-[60px] text-[#F8F8F4] leading-none">
              WHAT <span className="text-[#6C9BD5]">COUNTRY</span> ARE YOU FROM?
            </h1>

            <p className="italic text-[#6C9BD5] text-[24px] mt-3">
              Opportunities are curated for your location.
            </p>

            <input
              value={country}
              onChange={(e) =>
                setCountry(e.target.value)
              }
              placeholder="Country..."
              className="mt-10 w-full rounded-full bg-[#A3C2E0] px-6 py-4 text-[#353C72] outline-none"
            />
          </>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <>
            <h1 className="text-[58px] text-[#F8F8F4] leading-none">
              WHAT <span className="text-[#6C9BD5]">FINANCIAL AID</span> ARE YOU LOOKING FOR?
            </h1>

            <p className="italic text-[#6C9BD5] text-[24px] mt-3">
              We have opportunities for everyone.
            </p>

            <select
              value={financialSituation}
              onChange={(e) =>
                setFinancialSituation(
                  e.target.value
                )
              }
              className="mt-10 w-full rounded-full bg-[#A3C2E0] px-6 py-4 text-[#353C72] outline-none"
            >
              <option value="">
                Select Financial Aid
              </option>

              <option>
                Need Scholarship Support
              </option>

              <option>
                Moderate Support Needed
              </option>

              <option>
                No Financial Support Needed
              </option>

            </select>
          </>
        )}

        <button
          onClick={next}
          className="mt-16 text-[#F4C3D5] text-[34px] underline decoration-dotted underline-offset-8"
        >
          {step === 5
            ? "Finish... →"
            : "Continue... →"}
        </button>

        <p className="mt-8 text-[#A3C2E0]">
          Step {step} of 5
        </p>

      </div>

    </main>
  );
}