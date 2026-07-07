"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import StudentNavbar from "@/app/components/StudentNavbar";
import Link from "next/link";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

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

      setProfile(data);
    }

    loadProfile();
  }, []);

  if (!profile) {
    return (
      <>
        <StudentNavbar />

        <main className="min-h-screen bg-[#353C72] flex items-center justify-center">

          <div className="text-center">

            <img
              src="/door-2.png"
              alt="Door"
              className="w-20 mx-auto animate-pulse"
            />

            <p className="mt-6 text-2xl text-[#A3C2E0] italic">
              Opening your profile...
            </p>

          </div>

        </main>
      </>
    );
  }

  return (
    <>
      <StudentNavbar />

      <main className="min-h-screen bg-[#353C72] text-[#F8F8F4]">

        <div className="max-w-6xl mx-auto px-8 py-12">

          {/* Hero */}

          <div className="text-center">

            <img
              src="/door-2.png"
              alt="Door"
              className="w-28 mx-auto"
            />

            <h1 className="text-7xl mt-8">
              MY
              <span className="text-[#6C9BD5]">
                {" "}
                PROFILE
              </span>
            </h1>

            <p className="mt-8 italic text-[#A3C2E0] text-2xl">
              Every journey begins with knowing yourself.
            </p>

          </div>

          {/* Profile Card */}

          <div
            className="
              mt-16
              bg-[#2A2F72]
              rounded-[40px]
              p-10
            "
          >

            <h2 className="text-4xl mb-10">
              Your Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div>

                <p className="text-[#6C9BD5] uppercase text-sm">
                  Name
                </p>

                <p className="text-2xl mt-2">
                  {profile.name}
                </p>

              </div>

              <div>

                <p className="text-[#6C9BD5] uppercase text-sm">
                  Email
                </p>

                <p className="text-2xl mt-2 break-all">
                  {profile.email}
                </p>

              </div>

              <div>

                <p className="text-[#6C9BD5] uppercase text-sm">
                  Grade
                </p>

                <p className="text-2xl mt-2">
                  {profile.grade}
                </p>

              </div>

              <div>

                <p className="text-[#6C9BD5] uppercase text-sm">
                  Country
                </p>

                <p className="text-2xl mt-2">
                  {profile.country || "Not Provided"}
                </p>

              </div>

              <div className="md:col-span-2">

                <p className="text-[#6C9BD5] uppercase text-sm mb-4">
                  Interests
                </p>

                <div className="flex flex-wrap gap-3">

                  {profile.interests?.map(
                    (interest: string) => (

                      <span
                        key={interest}
                        className="
                          bg-[#353C72]
                          px-5
                          py-2
                          rounded-full
                          border
                          border-white/10
                        "
                      >
                        {interest}
                      </span>

                    )
                  )}

                </div>

              </div>

            <div className="md:col-span-2">

  <p className="text-[#6C9BD5] uppercase text-sm">
    Financial Situation
  </p>

  {profile.financial_situations?.length ? (

    <div className="flex flex-wrap gap-3 mt-4">

      {profile.financial_situations.map(
        (item: string) => (

          <div
            key={item}
            className="
              px-5
              py-2
              rounded-full
              bg-[#44528A]
              border
              border-[#5A669A]
              text-[#F8F8F4]
            "
          >
            {item}
          </div>

        )
      )}

    </div>

  ) : (

    <p className="text-2xl mt-2">
      Not Provided
    </p>

  )}

</div>
            </div>

          </div>

          {/* Quote */}

          <div
            className="
              mt-20
              bg-[#2A2F72]
              rounded-[40px]
              p-12
              text-center
            "
          >

            <img
              src="/door-2.png"
              alt="Door"
              className="w-20 mx-auto mb-8"
            />

            <h2 className="text-5xl">
              Every Journey
              <span className="text-[#6C9BD5]">
                {" "}
                Is Unique
              </span>
            </h2>

            <p className="mt-8 italic text-[#A3C2E0] text-2xl">
              "The more we understand ourselves,
              the better doors we choose."
            </p>

            <Link
              href="/profile/edit"
              className="
                inline-block
                mt-12
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
              Edit My Profile
            </Link>

          </div>

        </div>

      </main>
    </>
  );
}