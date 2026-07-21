"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";
import Link from "next/link";
export default function AdminStudentsPage() {

  const router = useRouter();

  const [students, setStudents] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [selectedFinancial, setSelectedFinancial] =
    useState("All");

  useEffect(() => {

    async function loadStudents() {

      const {
        data: { user },
      } =
        await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const {
        data: profile,
      } =
        await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

      if (
        profile?.role !==
        "admin"
      ) {
        router.push("/dashboard");
        return;
      }

      const {
        data,
        error,
      } =
        await supabase
          .from("profiles")
          .select(`
            id,
            name,
            email,
            grade,
            country,
            interests,
            financial_situations,
            created_at
          `)
          .eq(
            "role",
            "student"
          )
          .order(
            "created_at",
            {
              ascending: false,
            }
          );

      if (error) {
        alert(
          error.message
        );
        return;
      }

      setStudents(
        data || []
      );

      setLoading(false);

    }

    loadStudents();

  }, [router]);

  const filteredStudents =
    useMemo(() => {

      return students.filter(
        (student) => {

          const matchesSearch =

            (student.name || "")
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            (student.email || "")
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||

            (student.country || "")
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesFinancial =

            selectedFinancial ===
              "All" ||

            student.financial_situations?.includes(
  selectedFinancial
);

          return (
            matchesSearch &&
            matchesFinancial
          );

        }
      );

    }, [
      students,
      search,
      selectedFinancial,
    ]);

  if (loading) {

    return (

      <main className="min-h-screen bg-[#353C72] text-white flex items-center justify-center">

        Loading Students...

      </main>

    );
  }
  return (

    <>
      <AdminNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-12">

          {/* Hero */}

          <div className="text-center">

            <img
              src="/door-2.png"
              alt="Door"
              className="
  w-20
  sm:w-24
  md:w-28
  mx-auto
"
            />
            <h1
  className="
    mt-6
    sm:mt-8
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    leading-none
  "
>

              STUDENT

              <span className="text-[#6C9BD5]">
                {" "}
                DIRECTORY
              </span>

            </h1>

            <p
              className="
  mt-4
  sm:mt-6
  text-lg
  sm:text-xl
  md:text-2xl
  italic
  text-[#A3C2E0]
"
            >
              Manage registered students,
              explore interests and understand
              learning preferences.
            </p>

          </div>

          {/* Search */}

          <div className="mt-16">

            <input

              type="text"

              placeholder="Search by name, email or country..."

              value={search}

              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
  w-full
  bg-[#2A2F72]
  rounded-2xl
  px-5
  py-4
  sm:px-6
  sm:py-5
  outline-none
  placeholder:text-[#A3C2E0]
"

            />

          </div>
          {/* Students Table */}
          <div
  className="
    mt-10
    bg-[#2A2F72]
    rounded-[35px]
    overflow-hidden
  "
>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b border-[#46509D]">

          <th className="p-5 text-left">
            Student
          </th>

          <th className="p-5 text-left">
            Grade
          </th>

          <th className="p-5 text-left">
            Country
          </th>

          <th className="p-5 text-left">
            Interests
          </th>

          <th className="p-5 text-left">
            Financial
          </th>

          <th className="p-5 text-left">
            Joined
          </th>

        </tr>

      </thead>

      <tbody>

        {filteredStudents.length ===
        0 ? (

          <tr>

            <td
              colSpan={6}
              className="
                py-20
                text-center
              "
            >

              <img
                src="/door-2.png"
                alt="Door"
                className="w-16 mx-auto opacity-60"
              />

              <h2 className="text-3xl mt-6">

                No Students Found

              </h2>

              <p className="text-[#A3C2E0] mt-4">

                Try another search or
                filter.

              </p>

            </td>

          </tr>

        ) : (

          filteredStudents.map(
            (
              student
            ) => (

              <tr
                key={student.id}
                className="
                  border-b
                  border-[#46509D]
                  hover:bg-[#353C72]
                  transition
                "
              >

                {/* Student */}

                <td className="p-5">

                  <div>

                    <Link
  href={`/admin/students/${student.id}`}
  className="
    text-lg
    font-semibold
    hover:text-[#F4C3D5]
    transition
  "
>
  {student.name || "Unnamed Student"}
</Link>

                    <p className="text-sm text-[#A3C2E0]">

                      {student.email}

                    </p>

                  </div>

                </td>

                {/* Grade */}

                <td className="p-5">

                  <span
                    className="
                      bg-[#353C72]
                      px-4
                      py-2
                      rounded-full
                    "
                  >

                    {student.grade ||
                      "-"}

                  </span>

                </td>

                {/* Country */}

                <td className="p-5">

                  {student.country ||
                    "-"}

                </td>

                {/* Interests */}

                <td className="p-5">

                  <div className="flex flex-wrap gap-2">

                    {student.interests
                      ?.length ? (

                      student.interests.map(
                        (
                          interest: string
                        ) => (

                          <span
                            key={
                              interest
                            }
                            className="
                              bg-[#6C9BD5]
                              text-white
                              px-3
                              py-1
                              rounded-full
                              text-xs
                            "
                          >

                            {
                              interest
                            }

                          </span>

                        )
                      )

                    ) : (

                      <span className="text-[#A3C2E0]">

                        -

                      </span>

                    )}

                  </div>

                </td>

                {/* Financial */}

                <td className="p-5">

                 <div className="flex flex-wrap gap-2">

  {student.financial_situations?.length ? (

    student.financial_situations.map(
      (item: string) => (

        <span
          key={item}
          className="
            bg-[#44528A]
            text-white
            px-3
            py-1
            rounded-full
            text-xs
          "
        >
          {item}
        </span>

      )
    )

  ) : (

    <span className="text-[#A3C2E0]">
      -
    </span>

  )}

</div>

                </td>

                {/* Joined */}

                <td className="p-5 text-[#A3C2E0]">

                  {student.created_at
                    ? new Date(
                        student.created_at
                      ).toLocaleDateString()
                    : "-"}

                </td>

              </tr>

            )
          )

        )}

      </tbody>

    </table>

  </div>

</div>

</div>

</main>

</>

);
}