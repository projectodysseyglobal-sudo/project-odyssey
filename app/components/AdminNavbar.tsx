"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  useRouter,
  usePathname,
} from "next/navigation";

import { supabase } from "@/lib/supabase";

import {
  LayoutDashboard,
  Briefcase,
  Users,
  BookOpen,
  GraduationCap,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function AdminNavbar() {

  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [loggingOut, setLoggingOut] =
    useState(false);

  useEffect(() => {

    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };

  }, [menuOpen]);

  async function handleLogout() {

    setLoggingOut(true);

    await supabase.auth.signOut();

    router.push("/");

  }

  const links = [

    {
      href: "/admin",
      label: "Dashboard",
      icon: LayoutDashboard,
    },

    {
      href: "/admin/opportunities",
      label: "Opportunities",
      icon: Briefcase,
    },

    {
      href: "/admin/students",
      label: "Students",
      icon: Users,
    },

    {
      href: "/admin/blogs",
      label: "Blogs",
      icon: BookOpen,
    },

    {
      href: "/admin/student-stories",
      label: "Stories",
      icon: GraduationCap,
    },

  ];

  return (

    <nav
      className="
        sticky
        top-0
        z-[9999]
        bg-[#2A2F72]
        border-b
        border-white/10
        shadow-xl
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}

        <Link
          href="/admin"
          onClick={() =>
            setMenuOpen(false)
          }
          className="
            flex
            items-center
            gap-4
          "
        >

          <img
            src="/door-2.png"
            alt="Project Odyssey"
            className="
              w-10
              lg:w-12
            "
          />

          <div>

            <h1
              className="
                text-lg
                sm:text-xl
                lg:text-2xl
                text-[#F8F8F4]
                font-semibold
              "
            >
              PROJECT ODYSSEY
            </h1>

            <p
              className="
                text-[#A3C2E0]
                text-xs
                lg:text-sm
              "
            >
              Admin Panel
            </p>

          </div>

        </Link>

        {/* Desktop Navigation */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-8
          "
        >
                    {links.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (

              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex
                  items-center
                  gap-2
                  transition-colors
                  duration-300
                  ${
                    active
                      ? "text-[#F4C3D5]"
                      : "text-[#F8F8F4] hover:text-[#F4C3D5]"
                  }
                `}
              >

                <Icon size={18} />

                <span>
                  {item.label}
                </span>

              </Link>

            );

          })}

        </div>

        {/* Desktop Logout */}

        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="
            hidden
            lg:flex
            items-center
            gap-2
            bg-[#F4C3D5]
            text-[#353C72]
            px-6
            py-3
            rounded-full
            font-semibold
            transition
            hover:scale-105
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >

          <LogOut size={18} />

          {loggingOut
            ? "Logging out..."
            : "Logout"}

        </button>

        {/* Mobile Menu Button */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="
            lg:hidden
            text-[#F8F8F4]
            p-2
          "
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
        >

          {menuOpen ? (

            <X size={30} />

          ) : (

            <Menu size={30} />

          )}

        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          bg-[#2A2F72]
          border-t
          border-white/10
          ${
            menuOpen
              ? "max-h-[600px]"
              : "max-h-0"
          }
        `}
      >

        <div
          className="
            px-6
            py-6
            flex
            flex-col
            gap-3
          "
        >
                  {links.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (

              <Link
                key={item.href}
                href={item.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className={`
                  flex
                  items-center
                  gap-3
                  px-4
                  py-4
                  rounded-xl
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#F4C3D5] text-[#353C72]"
                      : "text-[#F8F8F4] hover:bg-white/10"
                  }
                `}
              >

                <Icon size={20} />

                <span className="font-medium">
                  {item.label}
                </span>

              </Link>

            );

          })}

          {/* Mobile Logout */}

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="
              mt-5
              w-full
              flex
              items-center
              justify-center
              gap-3
              bg-[#F4C3D5]
              text-[#353C72]
              py-4
              rounded-xl
              font-semibold
              transition
              hover:scale-[1.02]
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >

            <LogOut size={20} />

            {loggingOut
              ? "Logging out..."
              : "Logout"}

          </button>

        </div>

      </div>

    </nav>

  );

}