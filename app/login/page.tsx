"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";
import PublicNavbar from "@/components/PublicNavbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] =
  useState(false);

  async function handleLogin() {

  if (!email.trim() ||
      !password.trim()) {
    alert("Please enter your email and password.");
    return;
  }

  setLoading(true);

  try {

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    if (!data.user?.email_confirmed_at) {

      alert(
        "Please verify your email before logging in."
      );

      await supabase.auth.signOut();
      return;
    }

    const { data: profile } =
      await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.user.id)
        .single();

    if (!profile) {

      window.location.href =
        "/onboarding";

      return;

    }
    if (profile.role === "admin") {

      window.location.href =
        "/admin";
    } else {
      window.location.href =
        "/dashboard";

    }

  } finally {

    setLoading(false);
  }
}
  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen bg-[#353C72]">

        <section className="flex justify-center items-center min-h-[88vh] px-6">

          <div className="w-full max-w-xl text-center">

            {/* Door */}

            <img
              src="/door-icon.ico"
              alt="Door"
              className="w-16 h-16 mx-auto mb-6"
            />

            {/* Heading */}

            <h1
              className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-[68px]
  leading-none
  text-[#F8F8F4]

              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              LOG BACK IN...
            </h1>

            {/* Subtitle */}

            <p
              className="
                mt-2
                text-[20px]
                md:text-[24px]
                italic
                text-[#6C9BD5]
              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              Your future awaits.
            </p>

           {/* Form */}

<form
  className="mt-12 space-y-5"
  onSubmit={(e) => {
    e.preventDefault();
    handleLogin();
  }}
>

  <input
    type="email"
    autoFocus
    autoComplete="email"
    disabled={loading}
    placeholder="Your email..."
    value={email}
    onChange={(e) =>
      setEmail(e.target.value)
    }
    className="
      w-full
      rounded-full
      bg-[#A3C2E0]
      px-6
      py-4
      text-[#353C72]
      placeholder:text-[#5E6D92]
      outline-none
      disabled:opacity-60
    "
  />

  <div className="relative">

    <input
      type={
        showPassword
          ? "text"
          : "password"
      }
      autoComplete="current-password"
      disabled={loading}
      placeholder="Your password..."
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="
        w-full
        rounded-full
        bg-[#A3C2E0]
        px-6
        pr-14
        py-4
        text-[#353C72]
        placeholder:text-[#5E6D92]
        outline-none
        disabled:opacity-60
      "
    />

    <button
      type="button"
      disabled={loading}
      onClick={() =>
        setShowPassword(
          !showPassword
        )
      }
      className="
        absolute
        right-5
        top-1/2
        -translate-y-1/2
        text-[#353C72]
      "
    >
      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}
    </button>

  </div>

            {/* Forgot */}

            <div className="mt-5">

              <Link
                href="/forgot-password"
                className="
                  text-[#A3C2E0]
                  italic
                  hover:text-white
                "
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                }}
              >
                Forgot your password?
              </Link>

            </div>

            {/* Login */}


<div className="mt-10 sm:mt-14 lg:mt-16">

  <button
    type="submit"
    disabled={loading}
    className="
      text-[#F4C3D5]
      text-1xl
      sm:text-2xl
      md:text-[28px]
      font-semibold
      underline
      decoration-dotted
      underline-offset-8
      decoration-[3px]
      hover:opacity-80
      transition
      disabled:opacity-50
      disabled:cursor-not-allowed
    "
    style={{
      fontFamily:
        '"Times New Roman MT Condensed","Times New Roman",serif',
    }}
  >
    {loading
      ? "Logging in..."
      : "Let's go... →"}
  </button>

</div>

</form>

            {/* Signup */}

            <p
              className="
                mt-10
                text-[#A3C2E0]
                text-[18px]
              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="
                  text-[#F4C3D5]
                  underline
                "
              >
                Begin
              </Link>
            </p>

          </div>

        </section>
             
      </main>
    </>
  );
}