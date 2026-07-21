"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
export default function OnboardingPage() {
  const router = useRouter();

const [step, setStep] = useState(0);

const [name, setName] = useState("");

const [grade, setGrade] = useState("");

const [country, setCountry] = useState("");

const [financialSituations, setFinancialSituations] =
  useState<string[]>([]);

const financialOptions = [
  "Need Scholarship Support",
  "Need Full Financial Aid",
  "Need Partial Financial Aid",
  "Moderate Support Needed",
  "Need Merit Scholarship",
  "Need Need-Based Aid",
  "No Financial Support Needed",
];

const [interests, setInterests] = useState<string[]>([]);
/* Subjects shown in Step 2 */
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
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Croatia",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malaysia",
  "Maldives",
  "Malta",
  "Mauritius",
  "Mexico",
  "Mongolia",
  "Morocco",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Vietnam",
  "Zimbabwe",
  "Other",
];
const [recommendedOpportunities, setRecommendedOpportunities] =
  useState<any[]>([]);
const [selectedOpportunities, setSelectedOpportunities] =
  useState<number[]>([]);
function toggleInterest(interest: string) {
  if (interests.includes(interest)) {
    setInterests(
      interests.filter((i) => i !== interest)
    );
  } else {
    setInterests([
      ...interests,
      interest,
    ]);
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
        financial_situations:
  financialSituations,
      });
    if (error) {
      alert(error.message);
      return;
    }
    for (const opportunityId of selectedOpportunities) {
  await supabase
    .from("saved_opportunities")
    .insert({
      user_id: user.id,
      opportunity_id: opportunityId,
    });
}

router.push("/dashboard");
  }
  function next() {
  if (step < 6) {
    setStep(step + 1);
  } else {
    finish();
  }
}
useEffect(() => {
  if (step === 6) {
    loadRecommendedOpportunities();
  }
}, [step]);

async function loadRecommendedOpportunities() {
  console.log("Selected interests:", interests);

  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .in("subject", interests)
    .limit(3);

  console.log("Recommended:", data);
  console.log("Error:", error);

  if (error) return;

  setRecommendedOpportunities(data || []);
}
async function toggleOpportunity(opportunity: any) {
  if (
    selectedOpportunities.includes(opportunity.id)
  ) {
    setSelectedOpportunities(
      selectedOpportunities.filter(
        (id) => id !== opportunity.id
      )
    );
  } else {
    setSelectedOpportunities([
      ...selectedOpportunities,
      opportunity.id,
    ]);
  }
}
  return (
    <main className="min-h-screen bg-[#353C72] flex items-center justify-center px-6">

      <div className="w-full max-w-3xl mx-auto text-center px-2 sm:px-4">
{step === 0 && (
  <div className="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">

    <img
      src="/door-knock.ico"
      alt="Door"
      className="
        w-36
        sm:w-44
        md:w-56
        lg:w-64
        mx-auto
        mb-8
        sm:mb-10
      "
    />

    <h1
      className="
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
        fontWeight: 600,
      }}
    >
      OPPORTUNITY
      <br />
      <span className="text-[#6C9BD5]">
        IS KNOCKING.
      </span>
    </h1>

    <p
      className="
        mt-6
        text-[#A3C2E0]
        italic
        text-lg
        sm:text-xl
        md:text-2xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      Every opportunity begins with a single step.
    </p>

    <button
      onClick={() => setStep(1)}
      className="
        mt-10
        text-[#F4C3D5]
        text-2xl
        sm:text-3xl
        md:text-[34px]
        underline
        decoration-dotted
        underline-offset-8
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      Open the door →
    </button>

  </div>
)}

       {step > 0 && (
  <img
    src="/door-icon.ico"
    alt="Door"
    className="
      w-20
      h-20
      sm:w-24
      sm:h-24
      md:w-28
      md:h-28
      lg:w-32
      lg:h-32
      mx-auto
      mb-8
      sm:mb-10
    "
  />
)}

{/* STEP 1 */}

{step === 1 && (
  <>
    <h1
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      WHAT'S{" "}
      <span className="text-[#6C9BD5]">
        YOUR NAME?
      </span>
    </h1>

    <p
      className="
        mt-4
        italic
        text-[#6C9BD5]
        text-lg
        sm:text-xl
        md:text-2xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      Let's get to know you.
    </p>

    <input
      value={name}
      onChange={(e) =>
        setName(e.target.value)
      }
      placeholder="Your name..."
      className="
        mt-10
        w-full
        rounded-full
        bg-[#A3C2E0]
        px-5
        py-3
        sm:px-6
        sm:py-4
        text-[#353C72]
        outline-none
      "
    />
  </>
)}
        {/* STEP 2 */}

{step === 2 && (
  <>
    <h1
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      WHAT DO YOU WANT TO{" "}
      <span className="text-[#6C9BD5]">
        PURSUE?
      </span>
    </h1>

    <p
      className="
        mt-4
        italic
        text-[#6C9BD5]
        text-lg
        sm:text-xl
        md:text-2xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      Pick as many as you'd like.
    </p>

    <div className="mt-10 space-y-5">

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
          rounded-full
          bg-[#A3C2E0]
          px-5
          py-3
          sm:px-6
          sm:py-4
          text-[#353C72]
          outline-none
        "
      >
        <option value="">
          Select a subject...
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

      {/* Selected Interests */}

      <div className="flex flex-wrap justify-center gap-3">

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
              text-sm
              sm:text-base
              rounded-full
              font-medium
              hover:opacity-80
              transition
            "
          >
            {interest} ✕
          </button>

        ))}

      </div>

    </div>

  </>
)}

      {/* STEP 3 */}

{step === 3 && (
  <>
    <h1
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      WHAT{" "}
      <span className="text-[#6C9BD5]">
        GRADE
      </span>{" "}
      ARE YOU IN?
    </h1>

    <p
      className="
        mt-4
        italic
        text-[#6C9BD5]
        text-lg
        sm:text-xl
        md:text-2xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      Choose the option that fits you.
    </p>

    <select
      value={grade}
      onChange={(e) =>
        setGrade(e.target.value)
      }
      className="
        mt-10
        w-full
        rounded-full
        bg-[#A3C2E0]
        px-5
        py-3
        sm:px-6
        sm:py-4
        text-[#353C72]
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

      <option value="Other">
        Other
      </option>

    </select>
  </>
)}

{/* STEP 4 */}

{step === 4 && (
  <>
    <h1
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      WHAT{" "}
      <span className="text-[#6C9BD5]">
        COUNTRY
      </span>{" "}
      ARE YOU FROM?
    </h1>

    <p
      className="
        mt-4
        italic
        text-[#6C9BD5]
        text-lg
        sm:text-xl
        md:text-2xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      Opportunities are curated for your location.
    </p>

    <select
      value={country}
      onChange={(e) =>
        setCountry(e.target.value)
      }
      className="
        mt-10
        w-full
        rounded-full
        bg-[#A3C2E0]
        px-5
        py-3
        sm:px-6
        sm:py-4
        text-[#353C72]
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
  </>
)}

        {/* STEP 5 */}

{step === 5 && (
  <>
    <h1
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      WHAT{" "}
      <span className="text-[#6C9BD5]">
        FINANCIAL AID
      </span>{" "}
      ARE YOU LOOKING FOR?
    </h1>

    <p
      className="
        mt-4
        italic
        text-[#6C9BD5]
        text-lg
        sm:text-xl
        md:text-2xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      We have opportunities for everyone.
    </p>

    <div className="mt-10 space-y-5">

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
          rounded-full
          bg-[#A3C2E0]
          px-5
          py-3
          sm:px-6
          sm:py-4
          text-[#353C72]
          outline-none
        "
      >
        <option value="">
          Select Financial Aid
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

      {/* Selected Financial Situations */}

      <div className="flex flex-wrap justify-center gap-3">

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
              text-sm
              sm:text-base
              rounded-full
              font-medium
              hover:opacity-80
              transition
            "
          >
            {option} ✕
          </button>

        ))}

      </div>

    </div>
  </>
)}
{/* STEP 6 */}

{step === 6 && (
  <>
    <h1
      className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      WE FOUND SOME
      <span className="text-[#6C9BD5]">
        {" "}OPPORTUNITIES
      </span>
    </h1>

    <p
      className="
        mt-4
        italic
        text-[#6C9BD5]
        text-lg
        sm:text-xl
        md:text-2xl
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
      }}
    >
      These match your interests.
      <br className="hidden sm:block" />
      You can always add or remove more later.
    </p>

    <div className="mt-10 space-y-6">

      {recommendedOpportunities.map((item) => (

        <div
          key={item.id}
          className="
            bg-[#A3C2E0]
            rounded-[28px]
            p-5
            sm:p-7
            text-left
            shadow-lg
          "
        >

          <p className="text-[#6C9BD5] text-xs sm:text-sm uppercase tracking-wider">
            {item.category}
          </p>

          <h3
            className="
              mt-2
              text-xl
              sm:text-2xl
              font-semibold
              text-[#353C72]
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-3
              text-[#353C72]
              leading-relaxed
              text-sm
              sm:text-base
            "
          >
            {item.description}
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:justify-between
              sm:items-center
              mt-6
            "
          >

            <span className="text-[#353C72] font-medium">
              {item.subject}
            </span>

            <button
              onClick={() =>
                toggleOpportunity(item)
              }
              className="
                bg-[#F4C3D5]
                px-5
                py-2
                rounded-full
                font-semibold
                text-[#353C72]
                w-full
                sm:w-auto
              "
            >
              {selectedOpportunities.includes(item.id)
                ? "✓ Added"
                : "+ Add"}
            </button>

          </div>

        </div>

      ))}

    </div>
  </>
)}

{/* Continue Button */}

{step > 0 && (
  <button
    onClick={next}
    className="
      mt-14
      text-[#F4C3D5]
      text-2xl
      sm:text-3xl
      md:text-[34px]
      underline
      decoration-dotted
      underline-offset-8
    "
    style={{
      fontFamily:
        '"Times New Roman MT Condensed","Times New Roman",serif',
    }}
  >
    {step === 6
      ? "Finish... →"
      : "Continue... →"}
  </button>
)}

{/* Step Counter */}

<p
  className="
    mt-8
    text-sm
    sm:text-base
    text-[#A3C2E0]
  "
  style={{
    fontFamily:
      '"Times New Roman MT Condensed","Times New Roman",serif',
  }}
>
  Step {Math.min(step, 6)} of 6
</p>

      </div>

    </main>
  );
}