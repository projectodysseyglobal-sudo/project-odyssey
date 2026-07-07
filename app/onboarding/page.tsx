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
  "Law",
  "Technology",
  "Science",
  "Arts",
  "Research",
  "Entrepreneurship",
  "Social Impact",
  "Writing",
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

      <div className="w-full max-w-2xl text-center">
      {step === 0 && (
  <div className="max-w-3xl mx-auto">

    <img
      src="/door-knock.ico"
      alt="Door"
      className="
        w-[190px]
        md:w-[240px]
        mx-auto
        mb-12
      "
    />
    <h1
      className="
        text-[#F8F8F4]
        leading-none
        tracking-[-0.03em]
      "
      style={{
        fontFamily:
          '"Times New Roman MT Condensed","Times New Roman",serif',
        fontSize: "72px",
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
        mt-8
        text-[#A3C2E0]
        text-2xl
        italic
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
        mt-14
        text-[#F4C3D5]
        text-[34px]
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
      w-[110px]
      h-[110px]
      mx-auto
      mb-10
    "
  />
)}
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

           <div className="mt-10 space-y-4">

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
      px-6
      py-4
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
          px-5
          py-2
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
              <option>Other</option>
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

           <select
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  className="mt-10 w-full rounded-full bg-[#A3C2E0] px-6 py-4 text-[#353C72] outline-none"
>
  <option value="">
    Select your country
  </option>

  {countryOptions.map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
</select>
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

            <div className="mt-10 space-y-4">

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
      px-6
      py-4
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
          px-5
          py-2
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
      {step === 6 && (
  <>
    <h1 className="text-[56px] text-[#F8F8F4] leading-none">
      WE FOUND SOME
      <span className="text-[#6C9BD5]">
        {" "}OPPORTUNITIES
      </span>
    </h1>

    <p className="italic text-[#6C9BD5] text-[24px] mt-4">
      These match your interests.
      You can always add or remove more later.
    </p>

    <div className="mt-12 space-y-5">

      {recommendedOpportunities.map(
        (item) => (

          <div
  key={item.id}
  className="
    bg-[#A3C2E0]
    rounded-[28px]
    p-7
    text-left
    shadow-lg
  "
>
  <p className="text-[#6C9BD5] text-sm uppercase tracking-wider">
    {item.category}
  </p>

  <h3 className="mt-2 text-2xl font-semibold text-[#353C72]">
    {item.title}
  </h3>

  <p className="mt-3 text-[#353C72] leading-relaxed">
    {item.description}
  </p>

  <div className="flex justify-between items-center mt-6">
    <span className="text-[#353C72] font-medium">
      {item.subject}
    </span>

    <button
      onClick={() => toggleOpportunity(item)}
      className="
        bg-[#F4C3D5]
        px-5
        py-2
        rounded-full
        font-semibold
        text-[#353C72]
      "
    >
      {selectedOpportunities.includes(item.id)
        ? "✓ Added"
        : "+ Add"}
    </button>
  </div>
</div>
        )
      )}

    </div>
  </>
)}
        {step > 0 && (
  <button
    onClick={next}
    className="
      mt-16
      text-[#F4C3D5]
      text-[34px]
      underline
      decoration-dotted
      underline-offset-8
    "
  >
    {step === 5
      ? "Finish... →"
      : "Continue... →"}
  </button>
)}

        <p className="mt-8 text-[#A3C2E0]">
          Step {Math.min(step, 6)} of 6
        </p>

      </div>

    </main>
  );
}