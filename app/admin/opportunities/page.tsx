"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AdminNavbar from "@/app/components/AdminNavbar";
import {
  Search,
  Plus,
  Calendar,
  Pencil,
  Trash2,
} from "lucide-react";

export default function AdminOpportunities() {
  const [opportunities, setOpportunities] =
    useState<any[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadOpportunities();
  }, []);

  async function loadOpportunities() {
    const { data } = await supabase
      .from("opportunities")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    setOpportunities(data || []);
  }

  async function deleteOpportunity(
    id: number
  ) {
    const confirmed = confirm(
      "Delete this opportunity?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("opportunities")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadOpportunities();
  }

  const filtered =
    opportunities.filter((item) => {
      const keyword =
        search.toLowerCase();

      return (
        item.title
          ?.toLowerCase()
          .includes(keyword) ||
        item.category
          ?.toLowerCase()
          .includes(keyword) ||
        item.subject
          ?.toLowerCase()
          .includes(keyword)
      );
    });

  return (
    <>
      <AdminNavbar />

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
                mt-8
              "
            >
              MANAGE
              <span className="text-[#6C9BD5]">
                {" "}
                OPPORTUNITIES
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
              Create, update and manage
              every opportunity.
            </p>

          </div>

          {/* Search + Add */}

          <div
            className="
              mt-16
              flex
              flex-col
              lg:flex-row
              gap-6
              justify-between
              items-center
            "
          >

            <div className="relative w-full lg:w-[520px]">

              <Search
                className="
                  absolute
                  left-5
                  top-1/2
                  -translate-y-1/2
                  text-[#353C72]
                "
                size={20}
              />

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
                  pl-14
                  pr-6
                  py-4
                  outline-none
                  placeholder:text-[#353C72]
                "
              />

            </div>

            <Link
              href="/admin/opportunities/new"
              className="
                flex
                items-center
                gap-3
                bg-[#F4C3D5]
                text-[#353C72]
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
              "
            >
              <Plus size={22} />
              Add Opportunity
            </Link>

          </div>

          {/* Opportunity Cards */}

          <div className="mt-16 space-y-8">

                      {filtered.length === 0 ? (

            <div
              className="
                bg-[#2A2F72]
                rounded-[32px]
                p-16
                text-center
              "
            >
              <img
                src="/door-2.png"
                alt="Door"
                className="w-20 mx-auto opacity-60"
              />

              <h2 className="text-4xl mt-8">
                No Opportunities Found
              </h2>

              <p className="mt-4 text-[#A3C2E0]">
                Try another search or create a
                new opportunity.
              </p>

            </div>

          ) : (

            filtered.map((item) => {

              const isOpen =
                new Date(item.deadline) >=
                new Date();

              return (

                <div
                  key={item.id}
                  className="
                    bg-[#2A2F72]
                    rounded-[32px]
                    border
                    border-white/10
                    p-8
                    hover:border-[#F4C3D5]
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      gap-8
                    "
                  >

                    {/* Left */}

                    <div className="flex-1">

                      <h2 className="text-3xl">
                        {item.title}
                      </h2>

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-3
                          mt-4
                        "
                      >

                        <span
                          className="
                            bg-[#353C72]
                            px-4
                            py-2
                            rounded-full
                          "
                        >
                          {item.category}
                        </span>

                        <span
                          className="
                            bg-[#353C72]
                            px-4
                            py-2
                            rounded-full
                          "
                        >
                          {item.subject}
                        </span>

                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          mt-6
                        "
                      >

                        <Calendar
                          size={18}
                          className="text-[#F4C3D5]"
                        />

                        <span className="text-[#A3C2E0]">
                          Deadline:
                        </span>

                        <span>
                          {new Date(
                            item.deadline
                          ).toLocaleDateString(
                            "en-GB"
                          )}
                        </span>

                        <span
                          className={`
                            ml-4
                            px-4
                            py-1
                            rounded-full
                            text-sm
                            ${
                              isOpen
                                ? "bg-green-600"
                                : "bg-red-600"
                            }
                          `}
                        >
                          {isOpen
                            ? "Open"
                            : "Closed"}
                        </span>

                      </div>

                    </div>

                    {/* Right */}

                    <div
                      className="
                        flex
                        gap-4
                        shrink-0
                      "
                    >

                      <Link
                        href={`/admin/opportunities/edit/${item.id}`}
                        className="
                          flex
                          items-center
                          gap-2
                          bg-[#6C9BD5]
                          text-white
                          px-6
                          py-3
                          rounded-full
                          hover:scale-105
                          transition
                        "
                      >
                        <Pencil size={18} />
                        Edit
                      </Link>

                      <button
                        onClick={() =>
                          deleteOpportunity(
                            item.id
                          )
                        }
                        className="
                          flex
                          items-center
                          gap-2
                          bg-red-500
                          text-white
                          px-6
                          py-3
                          rounded-full
                          hover:bg-red-600
                          transition
                        "
                      >
                        <Trash2 size={18} />
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              );

            })

          )}

          {/* Bottom Section */}

          <section className="mt-24 pb-20">

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
                  Changes
                </span>
                <br />
                Someone's Future.
              </h2>

              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "Create opportunities today
                that inspire tomorrow's
                innovators."
              </p>

            </div>

          </section>
        </div>
        </div>

      </main>

    </>
  );
}