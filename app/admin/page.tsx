"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/app/components/AdminNavbar";
import {
  Users,
  Briefcase,
  BookOpen,
  Clock3,
} from "lucide-react";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  const [studentsCount, setStudentsCount] =
    useState(0);

  const [
    opportunitiesCount,
    setOpportunitiesCount,
  ] = useState(0);

  const [blogsCount, setBlogsCount] =
    useState(0);

  const [expiredCount, setExpiredCount] =
    useState(0);

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile } =
        await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

      if (profile?.role !== "admin") {
        alert("Access Denied");

        router.push("/dashboard");

        return;
      }

      const {
        count: students,
      } = await supabase
        .from("profiles")
        .select("*", {
          count: "exact",
          head: true,
        })
        .eq("role", "student");

      const {
        count: opportunities,
      } = await supabase
        .from("opportunities")
        .select("*", {
          count: "exact",
          head: true,
        });

      const {
        count: blogs,
      } = await supabase
        .from("blogs")
        .select("*", {
          count: "exact",
          head: true,
        });

    const today = new Date();

today.setHours(0, 0, 0, 0);

const todayString = today
  .toLocaleDateString("en-CA"); 
const {
  data: expired,
  error,
} = await supabase
  .from("opportunities")
  .select("id, deadline")
  .lte("deadline", todayString);
console.log("Today:", todayString);
console.log("Expired:", expired);
console.log("Error:", error);

setExpiredCount(expired?.length ?? 0);

      setStudentsCount(
        students || 0
      );

      setOpportunitiesCount(
        opportunities || 0
      );

      setBlogsCount(
        blogs || 0
      );
      setLoading(false);
    }
    checkAdmin();
  }, [router]);

  if (loading) {
    return (
      <>
        <AdminNavbar />

        <main className="min-h-screen bg-[#353C72] flex items-center justify-center">

          <div className="text-center">

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
              Opening Admin Dashboard...
            </p>

          </div>

        </main>

      </>
    );
  }

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
              ADMIN
              <span className="text-[#6C9BD5]">
                {" "}
                DASHBOARD
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
              Manage every opportunity,
              every story, every student.
            </p>
          </div>
          {/* Statistics */}

          <div className="grid lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-[#2A2F72] rounded-[30px] p-8">
              <Users
                size={34}
                className="text-[#F4C3D5]"
              />

              <p className="mt-5 text-[#A3C2E0]">
                Students
              </p>

              <h2 className="text-5xl mt-2">
                {studentsCount}
              </h2>
            </div>
            <div className="bg-[#2A2F72] rounded-[30px] p-8">

              <Briefcase
                size={34}
                className="text-[#F4C3D5]"
              />

              <p className="mt-5 text-[#A3C2E0]">
                Opportunities
              </p>

              <h2 className="text-5xl mt-2">
                {opportunitiesCount}
              </h2>

            </div>

            <div className="bg-[#2A2F72] rounded-[30px] p-8">

              <BookOpen
                size={34}
                className="text-[#F4C3D5]"
              />

              <p className="mt-5 text-[#A3C2E0]">
                Blogs
              </p>

              <h2 className="text-5xl mt-2">
                {blogsCount}
              </h2>

            </div>

            <div className="bg-[#2A2F72] rounded-[30px] p-8">

              <Clock3
                size={34}
                className="text-[#F4C3D5]"
              />

              <p className="mt-5 text-[#A3C2E0]">
                Expired
              </p>

              <h2 className="text-5xl mt-2">
                {expiredCount}
              </h2>

            </div>

          </div>

                    {/* Quick Actions */}

          <section className="mt-20">

            <h2 className="text-4xl mb-10">
              Quick Actions
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

              <Link
                href="/admin/opportunities"
                className="
                  bg-[#2A2F72]
                  rounded-[30px]
                  p-8
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition
                  border
                  border-white/10
                "
              >
                <h3 className="text-3xl">
                  🚪 Opportunities
                </h3>

                <p className="mt-4 text-[#A3C2E0]">
                  Add, edit or remove
                  opportunities.
                </p>
              </Link>
              <Link
                href="/admin/blogs"
                className="
                  bg-[#2A2F72]
                  rounded-[30px]
                  p-8
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition
                  border
                  border-white/10
                "
              >
                <h3 className="text-3xl">
                  📝 Blogs
                </h3>

                <p className="mt-4 text-[#A3C2E0]">
                  Publish and manage
                  blog articles.
                </p>
              </Link>
              <Link
                href="/admin/students"
                className="
                  bg-[#2A2F72]
                  rounded-[30px]
                  p-8
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition
                  border
                  border-white/10
                "
              >
                <h3 className="text-3xl">
                  👥 Students
                </h3>

                <p className="mt-4 text-[#A3C2E0]">
                  View registered
                  student profiles.
                </p>

              </Link>

              <Link
                href="/admin/student-stories"
                className="
                  bg-[#2A2F72]
                  rounded-[30px]
                  p-8
                  hover:-translate-y-1
                  hover:shadow-2xl
                  transition
                  border
                  border-white/10
                "
              >
                <h3 className="text-3xl">
                  🌟 Stories
                </h3>

                <p className="mt-4 text-[#A3C2E0]">
                  Manage student
                  success stories.
                </p>
              </Link>
            </div>
          </section>
          {/* Quote */}

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
                Every Door You Create
                <span className="text-[#6C9BD5]">
                  {" "}
                  Opens
                </span>
                <br />
                A Student's Future.
              </h2>
              <p
                className="
                  mt-8
                  text-[#A3C2E0]
                  italic
                  text-2xl
                "
              >
                "Great opportunities don't
                happen by chance—they are
                created by great people."
              </p>
            </div>

          </section>

        </div>

      </main>

    </>
  );
}