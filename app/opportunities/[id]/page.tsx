"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, BookOpen, GraduationCap } from "lucide-react";
import { supabase } from "@/lib/supabase";
import StudentNavbar from "@/app/components/StudentNavbar";

export default function OpportunityDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [opportunity, setOpportunity] = useState<any>(null);

  useEffect(() => {
    async function fetchOpportunity() {
      const { data, error } = await supabase
        .from("opportunities")
        .select("*")
        .eq("id", id)
        .single();

      console.log("ID:", id);
      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        console.error(error);
        return;
      }

      setOpportunity(data);
    }

    fetchOpportunity();
  }, [id]);

  async function saveOpportunity() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    const { data: existing } = await supabase
      .from("saved_opportunities")
      .select("*")
      .eq("user_id", user.id)
      .eq("opportunity_id", opportunity.id)
      .maybeSingle();

    if (existing) {
      alert("Already saved!");
      return;
    }

    const { error } = await supabase
      .from("saved_opportunities")
      .insert({
        user_id: user.id,
        opportunity_id: opportunity.id,
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Opportunity saved!");
  }

  if (!opportunity) {
    return (
      <>
        <StudentNavbar />
        <main className="min-h-screen bg-[#353C72] flex items-center justify-center">
          <div className="text-center">
            <img
              src="/door-open.png"
              className="w-20 mx-auto mb-6 animate-pulse"
              alt="Door"
            />

            <h1 className="text-4xl text-[#F8F8F4]">
              Opening the door...
            </h1>
          </div>
        </main>
      </>
    );
  }

  const today = new Date();
today.setHours(0, 0, 0, 0);

const deadlineDate = opportunity.deadline
  ? new Date(opportunity.deadline)
  : null;

if (
  deadlineDate &&
  !isNaN(deadlineDate.getTime())
) {
  deadlineDate.setHours(0, 0, 0, 0);
}

const isOpen =
  deadlineDate !== null &&
  !isNaN(deadlineDate.getTime()) &&
  deadlineDate >= today;

  return (
    <>
      <StudentNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

        <div className="max-w-7xl mx-auto px-8 py-12">

          {/* Back */}

          <Link
            href="/opportunities"
            className="
              inline-flex
              items-center
              gap-2
              text-[#A3C2E0]
              hover:text-[#F4C3D5]
              transition
              text-lg
            "
          >
            <ArrowLeft size={22} />
            Back to Opportunities
          </Link>

          {/* Hero */}

          <div className="text-center mt-14">

            <img
              src="/door-open.png"
              alt="Door"
              className="w-28 mx-auto"
            />

            <p
              className="
                mt-8
                tracking-[0.35em]
                uppercase
                text-[#6C9BD5]
                text-lg
              "
            >
              A NEW DOOR HAS OPENED
            </p>

            <h1
              className="
                text-6xl
                leading-none
                mt-6
              "
            >
              {opportunity.title}
            </h1>

            <p
              className="
                italic
                text-[#A3C2E0]
                text-2xl
                mt-8
              "
            >
              Every opportunity begins with
              opening one more door.
            </p>

          </div>

          {/* Information Cards */}

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-[#2A2F72] rounded-3xl p-6">
              <BookOpen className="mb-4 text-[#F4C3D5]" />
              <p className="text-[#6C9BD5] uppercase text-sm">
                Category
              </p>
              <div className="flex flex-wrap gap-2 mt-3">

  {(opportunity.category || "")
    .split(",")
    .map((category: string) => (

      <span
        key={category}
        className="
          bg-[#353C72]
          border
          border-[#6C9BD5]
          text-[#F8F8F4]
          px-4
          py-2
          rounded-full
          text-sm
        "
      >
        {category.trim()}
      </span>

    ))}

</div>
            </div>

            <div className="bg-[#2A2F72] rounded-3xl p-6">
              <BookOpen className="mb-4 text-[#F4C3D5]" />
              <p className="text-[#6C9BD5] uppercase text-sm">
                Subject
              </p>
              <div className="flex flex-wrap gap-2 mt-3">

  {(opportunity.subject || "")
    .split(",")
    .map((subject: string) => (

      <span
        key={subject}
        className="
          bg-[#353C72]
          border
          border-[#6C9BD5]
          text-[#F8F8F4]
          px-4
          py-2
          rounded-full
          text-sm
        "
      >
        {subject.trim()}
      </span>

    ))}

</div>
            </div>

            <div className="bg-[#2A2F72] rounded-3xl p-6">
              <MapPin className="mb-4 text-[#F4C3D5]" />
              <p className="text-[#6C9BD5] uppercase text-sm">
                Country
              </p>
              <h3 className="text-2xl mt-2">
                {opportunity.country}
              </h3>
            </div>

            <div className="bg-[#2A2F72] rounded-3xl p-6">
              <GraduationCap className="mb-4 text-[#F4C3D5]" />
              <p className="text-[#6C9BD5] uppercase text-sm">
                Grade
              </p>
              <h3 className="text-2xl mt-2">
                {opportunity.grade}
              </h3>
            </div>

            <div className="bg-[#2A2F72] rounded-3xl p-6">
              <Calendar className="mb-4 text-[#F4C3D5]" />
              <p className="text-[#6C9BD5] uppercase text-sm">
                Deadline
              </p>
              <h3 className="text-2xl mt-2">
  {deadlineDate
    ? deadlineDate.toLocaleDateString("en-GB")
    : "No Deadline"}
</h3>
            </div>

            <div className="bg-[#2A2F72] rounded-3xl p-6">
              <Calendar className="mb-4 text-[#F4C3D5]" />
              <p className="text-[#6C9BD5] uppercase text-sm">
                Status
              </p>

              <span
                className={`inline-block mt-3 px-5 py-2 rounded-full ${
  !deadlineDate
    ? "bg-gray-600"
    : isOpen
    ? "bg-green-600"
    : "bg-red-600"
}`}
              >
                {!deadlineDate
  ? "No Deadline"
  : isOpen
  ? "Open"
  : "Closed"}
              </span>
            </div>

          </div>

          {/* Continue in Part 2 */}
                    {/* Description */}

          <section className="mt-20">
            <h2 className="text-4xl text-[#F8F8F4] mb-6">
              YOUR JOURNEY
            </h2>

            <div className="bg-[#2A2F72] rounded-3xl p-8">
              <p className="text-[#F8F8F4] whitespace-pre-line leading-9 text-lg">
                {opportunity.description}
              </p>
            </div>
          </section>

          {/* Eligibility */}

          {opportunity.eligibility && (
            <section className="mt-16">
              <h2 className="text-4xl mb-6">
                WHO CAN OPEN THIS DOOR?
              </h2>

              <div className="bg-[#2A2F72] rounded-3xl p-8">
                <p className="whitespace-pre-line leading-9 text-lg">
                  {opportunity.eligibility}
                </p>
              </div>
            </section>
          )}

          {/* Benefits */}

          {opportunity.benefits && (
            <section className="mt-16">
              <h2 className="text-4xl mb-6">
                WHAT AWAITS YOU
              </h2>

              <div className="bg-[#2A2F72] rounded-3xl p-8">
                <p className="whitespace-pre-line leading-9 text-lg">
                  {opportunity.benefits}
                </p>
              </div>
            </section>
          )}

          {/* How To Apply */}

          {opportunity.how_to_apply && (
            <section className="mt-16">
              <h2 className="text-4xl mb-6">
                YOUR FIRST STEPS
              </h2>

              <div className="bg-[#2A2F72] rounded-3xl p-8">
                <p className="whitespace-pre-line leading-9 text-lg">
                  {opportunity.how_to_apply}
                </p>
              </div>
            </section>
          )}

          {/* Application Process */}

          {opportunity.application_process && (
            <section className="mt-16">
              <h2 className="text-4xl mb-6">
                YOUR VOYAGE ROADMAP
              </h2>

              <div className="bg-[#2A2F72] rounded-3xl p-8">
                <p className="whitespace-pre-line leading-9 text-lg">
                  {opportunity.application_process}
                </p>
              </div>
            </section>
          )}

          {/* Selection Process */}

          {opportunity.selection_process && (
            <section className="mt-16">
              <h2 className="text-4xl mb-6">
                BEYOND THE DOOR
              </h2>

              <div className="bg-[#2A2F72] rounded-3xl p-8">
                <p className="whitespace-pre-line leading-9 text-lg">
                  {opportunity.selection_process}
                </p>
              </div>
            </section>
          )}

          {/* Winning Tips */}

          {opportunity.winning_tips && (
            <section className="mt-16">
              <h2 className="text-4xl mb-6">
                COMPASS TIPS
              </h2>

              <div className="bg-[#2A2F72] rounded-3xl p-8">
                <p className="whitespace-pre-line leading-9 text-lg">
                  {opportunity.winning_tips}
                </p>
              </div>
            </section>
          )}

          {/* Application Guidance */}

          {opportunity.application_guidance && (
            <section className="mt-16">
              <h2 className="text-4xl mb-6">
                ODYSSEY GUIDANCE
              </h2>

              <div className="bg-[#2A2F72] rounded-3xl p-8">
                <p className="whitespace-pre-line leading-9 text-lg">
                  {opportunity.application_guidance}
                </p>
              </div>
            </section>
          )}

          {/* Quote */}

          <div className="text-center mt-24">

            <img
              src="/door-open.png"
              className="w-20 mx-auto mb-8 opacity-90"
              alt="Door"
            />

            <p
              className="
                italic
                text-3xl
                text-[#A3C2E0]
              "
            >
              "Some doors lead to places.
              <br />
              The best doors lead to possibilities."
            </p>

          </div>

          {/* CTA */}

          <div className="mt-20 bg-[#2A2F72] rounded-[40px] p-12 text-center">

            <h2 className="text-5xl">
              Ready to Begin?
            </h2>

            <p
              className="
                mt-6
                text-[#A3C2E0]
                text-2xl
                italic
              "
            >
              Every great journey starts
              with opening one more door.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">

              <a
                href={opportunity.application_link}
                target="_blank"
                rel="noopener noreferrer"
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
                Begin Your Voyage →
              </a>

              <button
                onClick={saveOpportunity}
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
                Save This Door
              </button>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}