"use client";

import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
export default function PublicNavbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);
  useEffect(() => {

  document.body.style.overflow =
    menuOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };

}, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#353c72]">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1 flex justify-between items-center">

        {/* Logo */}
         <Link
  href="/"
  className="
    flex
    items-center
    transition
    duration-300
    hover:opacity-90
    shrink-0
  "
>
  <Image
    src="/logo-odyssey.png"
    alt="Project Odyssey"
    width={320}
    height={55}
    priority
    className="
      w-[180px]
      sm:w-[220px]
      md:w-[260px]
      lg:w-[300px]
      xl:w-[320px]
      h-auto
      object-contain
      select-none
    "
  />
</Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 xl:gap-12">
          <a
            href="/student-stories"
            className="
text-[#F8F8F4]
text-lg
xl:text-[22px]
font-semibold
leading-none
hover:text-[#F4C3D5]
transition-colors
duration-300
"
style={{
  fontFamily: '"Times New Roman", serif',
}}
          >
            Student Stories
          </a>

          <a
            href="/mission"
           className="
text-[#F8F8F4]
text-lg
xl:text-[22px]
font-semibold
leading-none
hover:text-[#F4C3D5]
transition-colors
duration-300
"
style={{
  fontFamily: '"Times New Roman", serif',
}}
          >
            Mission
          </a>
          <a
            href="/compass"
            className="
text-[#F8F8F4]
text-lg
xl:text-[22px]
font-semibold
leading-none
hover:text-[#F4C3D5]
transition-colors
duration-300
"
style={{
  fontFamily: '"Times New Roman", serif',
}}
          >
            The Compass
          </a>

          <a
            href="/schools"
            className="
text-[#F8F8F4]
text-lg
xl:text-[22px]
font-semibold
leading-none
hover:text-[#F4C3D5]
transition-colors
duration-300
"
style={{
  fontFamily: '"Times New Roman", serif',
}}
          >
            Schools
          </a>


          <Link
            href="/begin"
            className="
              bg-[#F4C3D5]
              text-[#2F3B6F]
              px-7
              py-2
              text-[20px]
              font-semibold
              rounded-full
              font-semibold
              hover:bg-[#ffd4e2]
              transition
              duration-300
            "
            style={{
  fontFamily: '"Times New Roman", serif',
}}
          >
            Begin
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-[#F8F8F4]"
>
  {menuOpen ? (
    <X size={32} />
  ) : (
    <Menu size={32} />
  )}
</button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#353c72] border-t border-white/10">

          <div className="flex flex-col gap-5 px-6 py-6">
            <Link
  href="/"
  onClick={() => setMenuOpen(false)}
  className ="text-[#F8F8F4]
py-2
active:scale-95
transition"
></Link>
            <Link
  href="/student-stories"
  onClick={() => setMenuOpen(false)}
  className ="text-[#F8F8F4]
py-2
active:scale-95
transition"
>
  Student Stories
</Link>

<Link
  href="/mission"
  onClick={() => setMenuOpen(false)}
  className ="text-[#F8F8F4]
py-2
active:scale-95
transition"
>
  Mission
</Link>

<Link
  href="/compass"
  onClick={() => setMenuOpen(false)}
  className ="text-[#F8F8F4]
py-2
active:scale-95
transition"
>
  The Compass
</Link>

<Link
  href="/schools"
  onClick={() => setMenuOpen(false)}
  className ="text-[#F8F8F4]
py-2
active:scale-95
transition"
>
  Schools
</Link>
            <Link
              href="/begin"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                bg-[#F4C3D5]
                text-[#2F3B6F]
                py-3
                rounded-full
                text-center
                font-semibold
              "
            >
              Begin
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
}