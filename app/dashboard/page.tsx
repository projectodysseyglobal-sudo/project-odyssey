"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import StudentNavbar from "@/app/components/StudentNavbar";
import OpportunityCard from "@/app/components/OpportunityDoor";
import DashboardHero from "@/app/components/DashboardHero";
import WaveDivider from "../components/WaveDivider";
export default function Dashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [saved, setSaved] = useState<any[]>([]);
  const [recommended, setRecommended] = useState<any[]>([]);
  useEffect(() => {
    async function loadData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log("CURRENT USER:", user);
      if (!user) return;
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(profileData);
console.log("PROFILE:", profileData);
console.log("INTERESTS:", profileData?.interests);

   const { data: allOpportunities, error } =
  await supabase
    .from("opportunities")
    .select("*");

console.log(
  "INTERESTS:",
  profileData.interests
);

console.log(
  "ALL OPPORTUNITIES:",
  allOpportunities
);

console.log(
  "RECOMMENDATION ERROR:",
  error
);
const recommendedData =
  (allOpportunities || []).filter(
    (opportunity) => {

      const subjects =
        (opportunity.subject || "")
          .split(",")
          .map((subject: string) =>
            subject.trim().toLowerCase()
          );

      return (
        profileData.interests || []
      ).some((interest: string) =>
        subjects.includes(
          interest.toLowerCase()
        )
      );
    }
  );

setRecommended(recommendedData);
const { data: savedData } = await supabase
  .from("saved_opportunities")
  .select(`
    *,
    opportunities (*)
  `)
  .eq("user_id", user.id);
      setSaved(savedData || []);
    }
    loadData();
  }, []);
async function removeSaved(id: number) {
  console.log("DELETE ID:", id);

  const { error } = await supabase
    .from("saved_opportunities")
    .delete()
    .eq("id", id);

  console.log("DELETE ERROR:", error);

  if (error) {
    alert(error.message);
    return;
  }
  alert("Deleted successfully");
  setSaved(
    saved.filter((item) => item.id !== id)
  );
}
return (
  <>
    <StudentNavbar />
    <main className="min-h-screen bg-[#353C72] text-white">
  {/* Hero */}
  {profile && (
    <DashboardHero
      name={profile.name}
    />
  )}
  {/* Wave */}
  <WaveDivider />
 {/* Saved */}
  <section className="bg-[#7BA3D8] py-16">
    <div className="max-w-7xl mx-auto px-8">
      <h2
        className="
        text-[#F8F8F4]
        text-4xl
        mb-10
        "
      >
        MY VOYAGES
      </h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {saved.map((item) => (
          <div
  key={item.id}
  className="
    relative
    self-start
  "
>
            <OpportunityCard
              id={item.opportunities?.id}
              title={item.opportunities?.title}
              category={item.opportunities?.category}
              subject={item.opportunities?.subject}
              deadline={item.opportunities?.deadline}
            />

            <button
              onClick={() => removeSaved(item.id)}
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

    </div>


  </section>

<div className="bg-[#7BA3D8]">
  <img
    src="/center-wave.png"
    alt=""
    className="block w-full"
  />
</div>

  {/* Recommended */}
  <section className="bg-[#7BA3D8] py-10">

    <div className="max-w-7xl mx-auto px-8">

      <h2
        className="
        text-[#F8F8F4]
        text-4xl
        mb-10
        "
      >
        DISCOVER MORE RECOMMENDED OPPORTUNITIES
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">

        {recommended.map((item) => (

          <OpportunityCard
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            subject={item.subject}
            deadline={item.deadline}
          />

        ))}

      </div>

    </div>

  </section>

  

 
{/* Wave */}
  <WaveDivider flip/>
</main>
  </>
);
}