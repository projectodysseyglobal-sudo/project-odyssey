"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";

export default function StudentDetailPage() {

  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [student, setStudent] =
    useState<any>(null);

  const [savedOpportunities, setSavedOpportunities] =
    useState<any[]>([]);

  const [
    recommendedOpportunities,
    setRecommendedOpportunities,
  ] = useState<any[]>([]);

  useEffect(() => {
    loadStudent();
  }, []);

  async function loadStudent() {

    /* -------------------------
       Check Admin
    ------------------------- */

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

    if (profile?.role !== "admin") {

      router.push("/dashboard");
      return;

    }

    /* -------------------------
       Student Profile
    ------------------------- */

    const {
      data: studentData,
      error,
    } =
      await supabase
        .from("profiles")
        .select("*")
        .eq("id", params.id)
        .single();

    if (error) {

      alert(error.message);

      router.push(
        "/admin/students"
      );

      return;

    }

    setStudent(studentData);

    /* -------------------------
       Saved Opportunities
    ------------------------- */

    const {
      data: saved,
    } =
      await supabase
        .from("saved_opportunities")
        .select(`
          *,
          opportunities (*)
        `)
        .eq(
          "user_id",
          studentData.id
        );

    setSavedOpportunities(
      saved || []
    );

    /* -------------------------
       Recommended Opportunities
    ------------------------- */

    if (
      studentData.interests?.length
    ) {

      const interest =
        studentData.interests[0];

      const {
        data: recommended,
      } =
        await supabase
          .from("opportunities")
          .select("*")
          .ilike(
            "subject",
            `%${interest}%`
          )
          .limit(6);

      setRecommendedOpportunities(
        recommended || []
      );

    }

    setLoading(false);

  }

  if (loading) {

    return (

      <>
        <AdminNavbar />

        <main className="min-h-screen bg-[#353C72] flex items-center justify-center text-white">

          Loading Student...

        </main>

      </>

    );

  }
  return (
  <>
    <AdminNavbar />

    <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

      <div
  className="
    max-w-7xl
    mx-auto
    px-6
    sm:px-8
    lg:px-10
    py-8
    sm:py-10
    lg:py-12
  "
>

        {/* Hero */}

        <div className="text-center">

          <img
            src="/door-2.png"
            alt="Door"
            className="
w-16
sm:w-20
lg:w-24
mx-auto
"
          />

          <h1 className="
mt-8
text-4xl
sm:text-5xl
lg:text-7xl
leading-tight
text-center
">

            STUDENT

            <span className="text-[#6C9BD5]">
              {" "}
              PROFILE
            </span>

          </h1>

          <p
            className="
mt-5
text-lg
sm:text-xl
lg:text-2xl
italic
text-[#A3C2E0]
max-w-3xl
mx-auto
"
          >
            Explore the student's academic
            interests and opportunities.
          </p>

        </div>

        {/* Back */}

        <button
          onClick={() =>
            router.push(
              "/admin/students"
            )
          }
          className="
mt-10
inline-flex
items-center
px-5
py-3
rounded-full
border
border-[#F4C3D5]
text-[#F4C3D5]
hover:bg-[#F4C3D5]
hover:text-[#353C72]
transition
"
        >
          ← Back to Students
        </button>

        {/* Profile Card */}

        <div
          className="
            mt-10
            bg-[#2A2F72]
            rounded-[28px]
lg:rounded-[40px]
p-6
sm:p-8
lg:p-10
            p-10
          "
        >

          <div
className="
flex
flex-col
sm:flex-row
items-center
sm:items-start
gap-6
sm:gap-8
text-center
sm:text-left
"
>

            <div
              className="
                w-24
h-24
sm:w-28
sm:h-28
text-4xl
sm:text-5xl
                rounded-full
                bg-[#6C9BD5]
                flex
                items-center
                justify-center
                text-5xl
                font-bold
              "
            >

              {student.name
                ?.charAt(0)
                ?.toUpperCase() || "S"}

            </div>

            <div>

              <h2 className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
break-words
">

                {student.name ||
                  "Unnamed Student"}

              </h2>

              <p
                className="
mt-3
text-[#A3C2E0]
text-base
sm:text-lg
break-all
"
              >
                {student.email}
              </p>

            </div>

          </div>

          <div
            className="
              grid
grid-cols-1
md:grid-cols-2
gap-8
              mt-12
            "
          >

            <div>

              <p className="text-[#A3C2E0]">
                Grade
              </p>

              <h3 className="text-xl
sm:text-2xl mt-2">

                {student.grade || "-"}

              </h3>

            </div>

            <div>

              <p className="text-[#A3C2E0]">
                Country
              </p>

              <h3 className="text-xl
sm:text-2xl mt-2">

                {student.country || "-"}

              </h3>

            </div>

            <div>
              <p className="text-[#A3C2E0]">
                Joined
              </p>

              <h3 className="text-xl
sm:text-2xl mt-2">

                {student.created_at
                  ? new Date(
                      student.created_at
                    ).toLocaleDateString()
                  : "-"}

              </h3>

            </div>

            <div>

  <p className="text-[#A3C2E0]">
    Financial Situation
  </p>

  <div className="flex flex-wrap gap-2 mt-3">

    {student.financial_situations?.length ? (

      student.financial_situations.map(
        (item: string) => (

          <span
            key={item}
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-[#44528A]
              text-[#F8F8F4]
              text-sm
            "
          >
            {item}
          </span>

        )
      )

    ) : (

      <span
        className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-[#353C72]
        "
      >
        -
      </span>

    )}
  </div>
</div>
          </div>

          {/* Interests */}

          <div className="mt-12">

<h3
className="
text-2xl
sm:text-3xl
font-semibold
mb-5
"
>
              Interests

            </h3>

            <div className="flex flex-wrap gap-3">

              {student.interests?.length ? (

                student.interests.map(
                  (
                    interest: string
                  ) => (

                    <span
                      key={interest}
                      className="
                        bg-[#6C9BD5]
                        px-5
py-2
text-sm
sm:text-base
                        rounded-full
                      "
                    >

                      {interest}

                    </span>

                  )
                )

              ) : (

                <span>

                  No interests added.

                </span>

              )}

            </div>

          </div>

        </div>

        {/* Saved Opportunities */}
        <div className="mt-14">

  <h2 className="text-2xl
sm:text-3xl
lg:text-4xl font-bold mb-8">

    Saved Opportunities

  </h2>

  {savedOpportunities.length === 0 ? (

    <div
      className="
        bg-[#2A2F72]
        rounded-[30px]
        p-12
        text-center
      "
    >

      <h3 className="text-2xl">

        No Saved Opportunities

      </h3>

      <p className="mt-4 text-[#A3C2E0]">

        This student hasn't saved
        any opportunities yet.

      </p>

    </div>

  ) : (

    <div className="grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6">

      {savedOpportunities.map((item) => (

        <div
          key={item.id}
          className="
            bg-[#2A2F72]
            rounded-[28px]
border
border-white/10
p-6
hover:border-[#F4C3D5]
hover:-translate-y-1
transition-all
duration-300
            transition
          "
        >

          <h3 className="text-xl
sm:text-2xl
leading-tight font-bold">

            {item.opportunities?.title}

          </h3>

          <div className="flex gap-2 mt-4 flex-wrap">

            <span
              className="
                bg-[#6C9BD5]
                px-3
                py-1
                rounded-full
                text-sm
              "
            >

              {item.opportunities?.category}

            </span>

            <span
              className="
                bg-[#353C72]
                px-3
                py-1
                rounded-full
                text-sm
              "
            >

              {item.opportunities?.subject}

            </span>

          </div>

          <p className="mt-5 text-[#A3C2E0]">

            Deadline

          </p>

          <p className="mt-1">

            {item.opportunities?.deadline}

          </p>

        </div>

      ))}

    </div>

  )}

</div>

{/* Recommended Opportunities */}

<div className="mt-20">

  <h2 className="text-2xl
sm:text-3xl
lg:text-4xl font-bold mb-8">

    Recommended Opportunities

  </h2>

  {recommendedOpportunities.length === 0 ? (

    <div
      className="
        bg-[#2A2F72]
        rounded-[30px]
        p-12
        text-center
      "
    >

      <h3 className="text-2xl">

        No Recommendations

      </h3>

      <p className="mt-4 text-[#A3C2E0]">

        Recommendations will appear
        based on the student's interests.

      </p>

    </div>

  ) : (

    <div className="grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-6">

      {recommendedOpportunities.map((item) => (

        <div
          key={item.id}
          className="
            bg-[#2A2F72]
            rounded-[28px]
border
border-white/10
p-6
hover:border-[#6C9BD5]
hover:-translate-y-1
transition-all
duration-300
            transition
          "
        >

          <h3 className="text-2xl font-bold">

            {item.title}

          </h3>

          <div className="flex gap-2 mt-4 flex-wrap">

            <span
              className="
                bg-[#F4C3D5]
                text-[#353C72]
                px-3
                py-1
                rounded-full
                text-sm
              "
            >

              {item.category}

            </span>

            <span
              className="
                bg-[#353C72]
                px-3
                py-1
                rounded-full
                text-sm
              "
            >

              {item.subject}

            </span>

          </div>

          <p className="mt-5 text-[#A3C2E0]">

            Deadline

          </p>

          <p className="mt-1">

            {item.deadline}

          </p>

        </div>

      ))}

    </div>

  )}

</div>

</div>

</main>

</>

);
}