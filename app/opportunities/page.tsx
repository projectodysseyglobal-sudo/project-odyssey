"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import StudentNavbar from "@/app/components/StudentNavbar";
import OpportunityDoor from "@/app/components/OpportunityDoor";

type Opportunity = {
  id: number;
  title: string;
  description: string;
  category: string;
  subject: string;
  deadline: string;
  application_link: string;
};

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] =
    useState<Opportunity[]>([]);

  const [filtered, setFiltered] =
    useState<Opportunity[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  // Dynamic Categories
  const [categories, setCategories] =
    useState<string[]>(["All"]);

  // Selected Category
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    async function fetchOpportunities() {
      const { data, error } = await supabase
        .from("opportunities")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (!error && data) {
        setOpportunities(data);
        setFiltered(data);

        // Generate categories dynamically
       const uniqueCategories = [
  "All",
  ...new Set(
    data
      .flatMap((item) =>
        item.category
          ?.split(",")
          .map((c: string) => c.trim())
      )
      .filter(Boolean)
  ),
];

        setCategories(uniqueCategories);
      }

      setLoading(false);
    }

    fetchOpportunities();
  }, []);
  useEffect(() => {
    let results = opportunities;

    if (selectedCategory !== "All") {
  results = results.filter((item) =>
    item.category
      ?.split(",")
      .map((c) => c.trim())
      .includes(selectedCategory)
  );
}

    if (search.trim()) {
  const query = search.toLowerCase();

  results = results.filter((item) => {
    const titleMatch =
      item.title
        ?.toLowerCase()
        .includes(query);

    const subjectMatch =
      item.subject
        ?.toLowerCase()
        .split(",")
        .map((s) => s.trim())
        .some((s) =>
          s.includes(query)
        );

    const categoryMatch =
      item.category
        ?.toLowerCase()
        .split(",")
        .map((c) => c.trim())
        .some((c) =>
          c.includes(query)
        );
    return (
      titleMatch ||
      subjectMatch ||
      categoryMatch
    );
  });
}

    setFiltered(results);
  }, [
    search,
    selectedCategory,
    opportunities,
  ]);

  return (
    <>
      <StudentNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

        <div className="max-w-7xl mx-auto px-8 py-12">

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
                leading-none
                mt-8
              "
            >
              DISCOVER MORE
              <span className="text-[#6C9BD5]">
                {" "}
                DOORS
              </span>
            </h1>

            <p
              className="
                italic
                text-[#A3C2E0]
                text-2xl
                mt-8
              "
            >
              Every journey begins
              with curiosity.
            </p>
          </div>
          {/* Search */}
          <div className="mt-14">
            <input
              type="text"
              placeholder="Search opportunities..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                w-full
                rounded-full
                bg-[#A3C2E0]
                text-[#353C72]
                placeholder:text-[#353C72]
                px-8
                py-5
                outline-none
                text-xl
              "
            />
          </div>
          {/* Categories */}
          <div
  className="
    flex
    flex-wrap
    gap-4
    mt-10
    justify-center
  "
>
  {categories.map((category) => (

    <button
      key={category}
      onClick={() =>
        setSelectedCategory(category)
      }
      className={`
        px-8
        py-3
        rounded-full
        transition-all
        duration-300
        ${
          selectedCategory === category
            ? "bg-[#F4C3D5] text-[#353C72] shadow-lg"
            : "bg-[#2A2F72] text-[#F8F8F4] hover:bg-[#46509D]"
        }
      `}
    >
      {category}
    </button>

  ))}
</div>

          {/* Opportunities */}

          <div className="mt-16">

            {loading ? (

              <div className="text-center py-24">

                <img
                  src="/door-2.png"
                  className="w-20 mx-auto animate-pulse"
                  alt="Door"
                />

                <p
                  className="
                    mt-6
                    text-2xl
                    italic
                    text-[#A3C2E0]
                  "
                >
                  Opening more doors...
                </p>

              </div>

            ) : filtered.length === 0 ? (

              <div className="text-center py-24">

                <img
                  src="/door-2.png"
                  className="w-20 mx-auto opacity-70"
                  alt="Door"
                />

                <h2 className="text-4xl mt-8">
                  No Doors Found
                </h2>

                <p
                  className="
                    text-[#A3C2E0]
                    mt-4
                  "
                >
                  Try another search
                  or category.
                </p>

              </div>

            ) : (

              <div className="grid lg:grid-cols-2 gap-8">
                            {filtered.map((opportunity) => (

                <OpportunityDoor
                  key={opportunity.id}
                  id={opportunity.id}
                  title={opportunity.title}
                  category={opportunity.category}
                  subject={opportunity.subject}
                  deadline={opportunity.deadline}
                />

              ))}

            </div>

          )}

        </div>

        {/* Bottom Quote */}

        <section className="mt-24 pb-20">

          <div
            className="
              max-w-5xl
              mx-auto
              bg-[#2A2F72]
              rounded-[40px]
              px-12
              py-16
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
              Every Door
              <span className="text-[#6C9BD5]">
                {" "}
                Opens
              </span>
              <br />
              A New Journey.
            </h2>

            <p
              className="
                mt-8
                text-[#A3C2E0]
                italic
                text-2xl
              "
            >
              "The future belongs to those
              willing to open one more door."
            </p>

          </div>
        </section>
      </div>
      </main>

    </>
  );
}