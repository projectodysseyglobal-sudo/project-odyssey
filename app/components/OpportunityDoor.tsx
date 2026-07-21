"use client";

import Link from "next/link";

type Props = {
  id: number;
  title: string;
  category: string;
  subject?: string;
  deadline?: string;
};

export default function OpportunityDoor({
  id,
  title,
  category,
  subject,
  deadline,
}: Props) {
 const formattedDeadline =
  deadline &&
  !isNaN(new Date(deadline).getTime())
    ? new Date(deadline).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "No Deadline";

  return (
    <Link href={`/opportunities/${id}`} className="block">
      <article
        className="
        group
        h-full
        bg-[#2A2F72]
        rounded-[30px]
        border
        border-white/10
        hover:border-[#F4C3D5]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        p-10
        "
      >
        <div className="flex gap-8 h-full">

          {/* Door */}

          <div className="flex items-center">
            <img
              src="/door-2.png"
              alt="Door"
              className="
              w-24
              transition-transform
              duration-300
              group-hover:-translate-x-2
              "
            />
          </div>

          {/* Content */}

          <div className="flex flex-col flex-1">

            <h2
              className="
              text-[#F8F8F4]
              text-[28px]
              leading-tight
              "
            >
              {title}
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">

  {(category || "")
    .split(",")
    .map((item: string) => (

      <span
        key={item}
        className="
          px-3
          py-1
          rounded-full
          bg-[#6C9BD5]/20
          text-[#A3C2E0]
          text-sm
          border
          border-[#6C9BD5]/40
        "
      >
        {item.trim()}
      </span>

    ))}

</div>

           {subject && (

  <div className="mt-3 flex flex-wrap gap-2">

    {subject
      .split(",")
      .map((item: string) => (

        <span
          key={item}
          className="
            px-3
            py-1
            rounded-full
            bg-[#F4C3D5]/20
            text-[#F4C3D5]
            text-sm
            border
            border-[#F4C3D5]/40
          "
        >
          {item.trim()}
        </span>

      ))}

  </div>

)}

            <div className="mt-8">

              <p className="text-[#6C9BD5]">
                Deadline
              </p>

              <p className="text-[#F8F8F4] text-xl mt-1">
                {formattedDeadline}
              </p>

            </div>

            {/* Push footer to bottom */}

            <div className="flex-1" />

            <div className="pt-8">

              <span
                className="
                text-[#F4C3D5]
                text-2xl
                underline
                decoration-dotted
                underline-offset-8
                group-hover:tracking-wide
                transition-all
                "
              >
                Open Door →
              </span>

            </div>

          </div>

        </div>
      </article>
    </Link>
  );
}