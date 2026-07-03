"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  useRouter,
  usePathname,
} from "next/navigation";

import { supabase } from "@/lib/supabase";

import {
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function StudentNavbar() {

  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [loggingOut, setLoggingOut] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    function handleClickOutside(
      event: MouseEvent
    ) {

      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target as Node
        )
      ) {

        setOpen(false);

      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  useEffect(() => {

    document.body.style.overflow =
      mobileOpen ? "hidden" : "auto";

    return () => {

      document.body.style.overflow =
        "auto";

    };

  }, [mobileOpen]);

  async function logout() {

    setLoggingOut(true);

    await supabase.auth.signOut();

    router.push("/");

  }

  const navItems = [

    {
      href: "/dashboard",
      label: "Dashboard",
    },

    {
      href: "/opportunities",
      label: "Discover",
    },

    {
      href: "/saved",
      label: "My Voyages",
    },

  ];

  return (

    <nav
      className="
        sticky
        top-0
        z-[9999]
        bg-[#353C72]
        shadow-lg
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
          py-5
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}

        <Link
          href="/dashboard"
          onClick={() => {

            setOpen(false);
            setMobileOpen(false);

          }}
          className="
            text-[24px]
            sm:text-[28px]
            lg:text-[34px]
            font-semibold
            tracking-[-0.03em]
            leading-none
            shrink-0
          "
        >

          <span className="text-[#F8F8F4]">
            PROJECT
          </span>

          <span className="text-[#6C9BD5]">
            {" "}
            ODYSSEY
          </span>

        </Link>

        {/* Desktop Navigation */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-12
          "
        >
                    {navItems.map((item) => {

            const active =
              pathname === item.href ||
              pathname.startsWith(
                item.href + "/"
              );

            return (

              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-[20px]
                  font-semibold
                  transition
                  duration-300
                  ${
                    active
                      ? "text-[#F4C3D5]"
                      : "text-[#F8F8F4] hover:text-[#F4C3D5]"
                  }
                `}
              >
                {item.label}
              </Link>

            );

          })}

        </div>

        {/* Desktop Account */}

        <div
          className="hidden lg:block relative"
          ref={menuRef}
        >

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              bg-[#F4C3D5]
              text-[#353C72]
              rounded-full
              px-7
              py-2
              text-[20px]
              font-semibold
              hover:bg-[#ffd4e2]
              transition
            "
          >
            Account
          </button>

          {open && (

            <div
              className="
                absolute
                right-0
                mt-3
                w-56
                rounded-2xl
                bg-[#2E3465]
                shadow-2xl
                overflow-hidden
                border
                border-[#6C9BD5]/30
              "
            >

              <Link
                href="/profile"
                onClick={() =>
                  setOpen(false)
                }
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  text-[#F8F8F4]
                  hover:bg-[#404887]
                  transition
                "
              >

                <User size={20} />

                <span>
                  My Profile
                </span>

              </Link>

              <button
                onClick={logout}
                disabled={loggingOut}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  text-left
                  text-[#F4C3D5]
                  hover:bg-[#404887]
                  transition
                  disabled:opacity-50
                "
              >

                <LogOut size={20} />

                <span>
                  {loggingOut
                    ? "Logging out..."
                    : "Logout"}
                </span>

              </button>

            </div>

          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() =>
            setMobileOpen(
              !mobileOpen
            )
          }
          className="
            lg:hidden
            text-[#F8F8F4]
            p-2
          "
          aria-label={
            mobileOpen
              ? "Close menu"
              : "Open menu"
          }
        >

          {mobileOpen ? (

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
          bg-[#353C72]
          border-t
          border-white/10
          ${
            mobileOpen
              ? "max-h-[500px]"
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
                    {navItems.map((item) => {

            const active =
              pathname === item.href ||
              pathname.startsWith(
                item.href + "/"
              );

            return (

              <Link
                key={item.href}
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className={`
                  px-4
                  py-4
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    active
                      ? "bg-[#F4C3D5] text-[#353C72]"
                      : "text-[#F8F8F4] hover:bg-white/10"
                  }
                `}
              >
                {item.label}
              </Link>

            );

          })}

          <Link
            href="/profile"
            onClick={() =>
              setMobileOpen(false)
            }
            className="
              flex
              items-center
              gap-3
              px-4
              py-4
              rounded-xl
              text-[#F8F8F4]
              hover:bg-white/10
              transition
            "
          >

            <User size={20} />

            My Profile

          </Link>

          <button
            onClick={logout}
            disabled={loggingOut}
            className="
              mt-4
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