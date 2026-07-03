"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import StudentNavbar from "@/app/components/StudentNavbar";
import OpportunityCard from "@/app/components/OpportunityDoor";

export default function SavedPage() {
  const [saved, setSaved] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSaved();
  }, []);

  async function loadSaved() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("saved_opportunities")
      .select(
        `
        *,
        opportunities (*)
      `
      )
      .eq("user_id", user.id);

    setSaved(data || []);
    setLoading(false);
  }

  async function removeSaved(id: number) {
    const { error } = await supabase
      .from("saved_opportunities")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setSaved(
      saved.filter(
        (item) => item.id !== id
      )
    );
  }

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
              MY
              <span className="text-[#6C9BD5]">
                {" "}
                VOYAGES
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
              The doors you've chosen
              are waiting for you.
            </p>

          </div>

          {/* Loading */}

          {loading ? (

            <div className="text-center py-24">

              <img
                src="/door-2.png"
                alt="Door"
                className="w-20 mx-auto animate-pulse"
              />

              <p
                className="
                  mt-6
                  text-2xl
                  italic
                  text-[#A3C2E0]
                "
              >
                Opening your saved doors...
              </p>

            </div>

          ) : saved.length === 0 ? (

            <div className="text-center py-24">

              <img
                src="/door-2.png"
                alt="Door"
                className="w-20 mx-auto opacity-70"
              />

              <h2 className="text-4xl mt-8">
                No Saved Doors
              </h2>

              <p
                className="
                  mt-4
                  text-[#A3C2E0]
                  text-xl
                "
              >
                Save opportunities from
                Discover More Doors and
                they'll appear here.
              </p>

            </div>

          ) : (

            <div className="grid lg:grid-cols-2 gap-8 mt-16">

              {saved.map((item) => (

                <div
                  key={item.id}
                  className="relative"
                >

                  <OpportunityCard
                    id={item.opportunities?.id}
                    title={
                      item.opportunities?.title
                    }
                    category={
                      item.opportunities?.category
                    }
                    subject={
                      item.opportunities?.subject
                    }
                    deadline={
                      item.opportunities?.deadline
                    }
                  />

                  <button
                    onClick={() =>
                      removeSaved(item.id)
                    }
                    className="
                      absolute
                      bottom-8
                      right-8
                      text-[#F4C3D5]
                      underline
                      decoration-dotted
                      underline-offset-4
                      hover:text-red-300
                      transition
                    "
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

          {/* Quote */}

          {!loading && saved.length > 0 && (

            <div
              className="
                mt-24
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

              <h2 className="text-5xl">
                Every Saved Door
                <span className="text-[#6C9BD5]">
                  {" "}
                  Is A Future
                </span>
              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "Dreams become journeys
                when you choose the
                right doors."
              </p>

            </div>

          )}

        </div>

      </main>
    </>
  );
}