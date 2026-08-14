"use client";  
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import PublicNavbar from "@/components/PublicNavbar";
export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  async function handleReset() {
    const { error } =
      await supabase.auth.resetPasswordForEmail(
        email,
        {
          redirectTo:
            "https://www.projectodysseyglobal.org/update-password",
        }
      );

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Password reset email sent. Please check your inbox."
    );
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
              RESET YOUR
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
              Even the strongest paths sometimes
              need a fresh start.
            </p>

            {/* Email */}

            <div className="mt-12">

              <input
                type="email"
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
                  focus:ring-2
                  focus:ring-[#F4C3D5]
                "
              />

            </div>

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
              We'll send you a secure link to create
              a new password and continue your journey.
            </p>

            {/* Button */}

            <div className="mt-14">

              <button
                onClick={handleReset}
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
                "
                style={{
                  fontFamily:
                    '"Times New Roman MT Condensed","Times New Roman",serif',
                }}
              >
                Send Link... →
              </button>

            </div>

            {/* Back */}

            <p
              className="mt-10 text-[#A3C2E0]"
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
                "
              >
                Log in
              </Link>
            </p>

          </div>

        </section>

      </main>
    </>
  );
}
