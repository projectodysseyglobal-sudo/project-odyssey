"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function loginAdmin() {
    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Login failed.");
      setLoading(false);
      return;
    }

    const { data: profile } =
      await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    if (profile?.role !== "admin") {
      await supabase.auth.signOut();

      alert(
        "Access denied. Administrator account required."
      );

      setLoading(false);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-[#353C72] flex items-center justify-center px-6">

      <div
        className="
          w-full
          max-w-md
          bg-[#2A2F72]
          rounded-[36px]
          p-10
          border
          border-white/10
          shadow-2xl
        "
      >

        <div className="text-center">

          <img
            src="/door-2.png"
            alt="Door"
            className="w-20 mx-auto"
          />

          <h1
            className="
              text-5xl
              text-[#F8F8F4]
              mt-6
            "
          >
            ADMIN
          </h1>

          <p
            className="
              mt-3
              text-[#A3C2E0]
              italic
            "
          >
            Enter the control room.
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              bg-[#353C72]
              p-4
              text-white
              outline-none
              border
              border-transparent
              focus:border-[#F4C3D5]
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              bg-[#353C72]
              p-4
              text-white
              outline-none
              border
              border-transparent
              focus:border-[#F4C3D5]
            "
          />

          <button
            onClick={loginAdmin}
            disabled={loading}
            className="
              w-full
              rounded-full
              bg-[#F4C3D5]
              text-[#353C72]
              py-4
              text-lg
              font-semibold
              hover:scale-[1.02]
              transition
              disabled:opacity-50
            "
          >
            {loading
              ? "Opening..."
              : "Open Admin Door"}
          </button>

        </div>

      </div>

    </main>
  );
}