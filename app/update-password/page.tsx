"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";
import PublicNavbar from "@/components/PublicNavbar";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  async function updatePassword() {
    if (!password || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    setSuccess(true);

setTimeout(() => {
  window.location.href = "/login";
}, 2000);
  }

  return (
    <>
      <PublicNavbar />

      <main className="min-h-screen bg-[#353C72]">

        <section className="flex items-center justify-center min-h-[88vh] px-6">

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
                text-[52px]
                md:text-[68px]
                leading-none
                text-[#F8F8F4]
              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              CREATE A NEW
              <br />
              PASSWORD.
            </h1>

            {/* Subtitle */}

            <p
              className="
                mt-4
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
              Every new beginning starts with a
              single step forward.
            </p>

            {/* Password */}

            <div className="relative mt-12">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create your new password..."
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="
                  w-full
                  rounded-full
                  bg-[#A3C2E0]
                  px-6
                  py-4
                  pr-14
                  outline-none
                  text-[#353C72]
                  placeholder:text-[#5A6C8F]
                  focus:ring-2
                  focus:ring-[#F4C3D5]
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-[#353C72]
                  hover:text-[#1F2A52]
                "
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Confirm Password */}

            <div className="relative mt-5">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your new password..."
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-full
                  bg-[#A3C2E0]
                  px-6
                  py-4
                  pr-14
                  outline-none
                  text-[#353C72]
                  placeholder:text-[#5A6C8F]
                  focus:ring-2
                  focus:ring-[#F4C3D5]
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-[#353C72]
                  hover:text-[#1F2A52]
                "
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {/* Password Match */}

            {confirmPassword.length > 0 && (
              <p
                className={`mt-4 text-[16px] italic ${
                  password === confirmPassword
                    ? "text-green-300"
                    : "text-[#F4C3D5]"
                }`}
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                }}
              >
                {password === confirmPassword
                  ? "✓ Passwords match"
                  : "Passwords do not match"}
              </p>
            )}

            {/* Quote */}

            <p
              className="
                mt-8
                italic
                text-[#A3C2E0]
                text-[18px]
                leading-relaxed
              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              "A stronger journey begins with a stronger key."
            </p>

            {/* Button */}

            <div className="mt-14">

              <button
                onClick={updatePassword}
                disabled={loading}
                className="
                  text-[#F4C3D5]
                  text-[36px]
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
                  ? "Updating..."
                  : "Continue... →"}
              </button>

            </div>

            {/* Back */}

            <p
              className="mt-10 text-[#A3C2E0] text-[18px]"
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              Remember your password?{" "}
              <Link
                href="/login"
                className="
                  text-[#F4C3D5]
                  underline
                  hover:opacity-80
                "
              >
                Log in
              </Link>
            </p>

          </div>
          {/* Success Overlay */}

{success && (
  <div
    className="
      fixed
      inset-0
      bg-black/40
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
    "
  >
    <div
      className="
        bg-[#F8F8F4]
        rounded-[32px]
        px-12
        py-10
        shadow-2xl
        max-w-md
        text-center
      "
    >
      <div className="text-6xl mb-5">
        🎉
      </div>

      <h2
        className="
          text-[34px]
          text-[#353C72]
          font-semibold
        "
        style={{
          fontFamily:
            '"Times New Roman MT Condensed","Times New Roman",serif',
        }}
      >
        Password Updated!
      </h2>

      <p
        className="
          mt-4
          text-[#6C9BD5]
          text-[20px]
          italic
          leading-relaxed
        "
        style={{
          fontFamily:
            '"Times New Roman MT Condensed","Times New Roman",serif',
        }}
      >
        Your journey continues.

        <br />

        Redirecting you to login...
      </p>

      <div className="mt-8">

        <div
          className="
            w-12
            h-12
            mx-auto
            border-4
            border-[#6C9BD5]
            border-t-transparent
            rounded-full
            animate-spin
          "
        />

      </div>

    </div>
  </div>
)}
        </section>

      </main>
    </>
  );
}