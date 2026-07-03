"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import PublicNavbar from "@/components/PublicNavbar";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSignup() {

  if (!accepted) {
    alert("Please accept the consent before continuing.");
    return;
  }

  if (!email.trim() || !password.trim()) {
    alert("Please enter your email and password.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  setLoading(true);

  try {

    const { error } =
      await supabase.auth.signUp({

        email,

        password,

        options: {
          emailRedirectTo:
            `${window.location.origin}/login`,
        },

      });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Verification email sent. Please verify your email before logging in."
    );

  } finally {

    setLoading(false);

  }

}

  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen bg-[#353C72] flex justify-center items-center px-6 py-20">

        <div className="w-full max-w-2xl bg-[#44528A] rounded-[40px] px-10 py-14 shadow-2xl">

          {/* Door */}

          <img
            src="door-icon.ico"
            alt="Door"
            className="w-20 mx-auto mb-8"
          />

          {/* Heading */}

          <h1
            className="
text-center
text-[#F8F8F4]
text-4xl
sm:text-5xl
lg:text-6xl
leading-none
"
            style={{
              fontFamily:
                '"Times New Roman MT Condensed","Times New Roman",serif',
            }}
          >
            PLEASE FILL OUT THE FORM
            <br />
            TO CREATE YOUR ACCOUNT.
          </h1>

          {/* Subtitle */}

          <p
            className="text-center text-[#6C9BD5] italic mt-5"
            style={{
              fontFamily:
                '"Times New Roman MT Condensed","Times New Roman",serif',
              fontSize: "34px",
            }}
          >
            Your future awaits.
          </p>

          {/* Inputs */}

          {/* Form */}

<form
  className="mt-12 flex flex-col gap-5"
  onSubmit={(e) => {
    e.preventDefault();
    handleSignup();
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
      outline-none
      text-[#353C72]
      placeholder:text-[#5A6C8F]
      disabled:opacity-60
    "
  />

  <div
    className="
      flex
      items-center
      bg-[#A3C2E0]
      rounded-full
      px-6
      py-4
    "
  >

    <input
      type={
        showPassword
          ? "text"
          : "password"
      }
      autoComplete="new-password"
      disabled={loading}
      placeholder="Your password..."
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      className="
        flex-1
        bg-transparent
        outline-none
        text-[#353C72]
        placeholder:text-[#5A6C8F]
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
        ml-3
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

          {/* Checkbox */}

          <div className="mt-8 flex items-center justify-center gap-3">

            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="w-5 h-5 accent-[#F4C3D5]"
            />

            <p
              className="italic text-[#A3C2E0]"
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
                fontSize: "22px",
              }}
            >
              I consent to emails from the newsletter.
            </p>

          </div>

          {/* Button */}

          {/* Button */}

<div className="text-center mt-12">

  <button
    type="submit"
    disabled={
      !accepted || loading
    }
    className={`
      text-2xl
      sm:text-3xl
      lg:text-[40px]
      font-semibold
      underline
      underline-offset-8
      decoration-dotted
      transition
      ${
        accepted && !loading
          ? "text-[#F4C3D5] hover:opacity-80"
          : "text-gray-500 cursor-not-allowed"
      }
    `}
    style={{
      fontFamily:
        '"Times New Roman MT Condensed","Times New Roman",serif',
    }}
  >
    {loading
      ? "Creating Account..."
      : "Begin Your Journey →"}
  </button>

</div>

</form>
          {/* Already have an account */}

<div className="mt-8 text-center">
  <p
    className="text-[#A3C2E0]"
    style={{
      fontFamily:
        '"Times New Roman MT Condensed","Times New Roman",serif',
      fontSize: "22px",
    }}
  >
    Already have an account?{" "}
    <Link
  href="/login"
      className="
        text-[#F4C3D5]
        underline
        underline-offset-4
        decoration-dotted
        hover:opacity-80
        transition
      "
    >
      Sign In
    </Link>
  </p>
</div>

        </div>

      </main>
    </>
  );
}