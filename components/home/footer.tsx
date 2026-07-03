"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
    <footer className="relative -mt-[2px]  bg-[#353C72] overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Top */}

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}

          <div>

            <h3
              className="
                text-2xl
                md:text-3xl
                font-semibold
                text-[#F8F8F4]
                mb-6
              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              Explore
            </h3>

            <div
              className="
                grid
                grid-cols-2
                gap-y-4
                gap-x-8
                text-[#F8F8F4]
                text-lg
              "
              style={{
                fontFamily:
                  '"Times New Roman",serif',
              }}
            >
              <Link href="/student-stories" className="hover:text-[#F4C3D5]">
                Student Stories
              </Link>

              <Link href="/#compass" className="hover:text-[#F4C3D5]">
                The Compass
              </Link>

              <Link href="/#mission" className="hover:text-[#F4C3D5]">
                Mission
              </Link>

              <Link href="/#schools" className="hover:text-[#F4C3D5]">
                Schools
              </Link>
            </div>

          </div>

          {/* Right */}

          <div className="text-center md:text-right">

            <h2
              className="
                text-4xl
                md:text-5xl
                font-semibold
                text-[#F8F8F4]
              "
              style={{
                fontFamily:
                  '"Times New Roman MT Condensed","Times New Roman",serif',
              }}
            >
              Ready to Begin?
            </h2>

            <Link
              href="/signup"
              className="
                inline-block
                mt-5
                px-8
                py-3
                rounded-full
                bg-[#F4C3D5]
                text-[#353C72]
                font-semibold
                hover:bg-white
                transition
              "
              style={{
                fontFamily:
                  '"Times New Roman",serif',
              }}
            >
              Begin Your Journey →
            </Link>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-8" />

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          <a
            href="mailto:projectodyssey.global@gmail.com"
            className="
              flex
              items-center
              gap-2
              text-[#F8F8F4]
              hover:text-[#F4C3D5]
            "
          >
            <Mail size={18} />
            projectodyssey.global@gmail.com
          </a>

          <div className="flex items-center gap-6">

            <a
              href="https://instagram.com/projectodyssey.official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F4C3D5]"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://tiktok.com/@projectodyssey.global"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F4C3D5]"
            >
              <FaTiktok size={22} />
            </a>

            <a
              href="https://youtube.com/@ProjectOdysseyofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#F4C3D5]"
            >
              <FaYoutube size={22} />
            </a>

          </div>

          <p
            className="text-[#A3C2E0] text-sm"
            style={{
              fontFamily:
                '"Times New Roman",serif',
            }}
          >
            © {new Date().getFullYear()} Project Odyssey
          </p>

        </div>

      </div>

    </footer>
    </>
  );
}