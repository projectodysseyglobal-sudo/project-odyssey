import Link from "next/link";

export default function SchoolsSection() {
  return (
    <section
      id="schools"
      className="bg-[#0D0B1E] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div
          className="
            bg-[#161233]
            border border-purple-500/20
            rounded-3xl
            p-12
            text-center
          "
        >

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 mb-8">
            <span className="text-purple-300 text-sm font-medium">
              FOR SCHOOLS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold">
            Helping Schools
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Empower Their Students
            </span>
          </h2>

          <p className="text-slate-400 text-xl mt-8 max-w-3xl mx-auto">
            Project Odyssey is building tools
            for schools, counselors, and
            educators to help students discover,
            track, and apply for meaningful
            opportunities more effectively.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-[#0D0B1E] rounded-2xl p-8">
              <h3 className="text-xl font-bold">
                Opportunity Discovery
              </h3>

              <p className="text-slate-400 mt-4">
                Curated opportunities for
                students across multiple
                categories.
              </p>
            </div>

            <div className="bg-[#0D0B1E] rounded-2xl p-8">
              <h3 className="text-xl font-bold">
                Student Tracking
              </h3>

              <p className="text-slate-400 mt-4">
                Help students manage
                applications and deadlines.
              </p>
            </div>

            <div className="bg-[#0D0B1E] rounded-2xl p-8">
              <h3 className="text-xl font-bold">
                Educator Support
              </h3>

              <p className="text-slate-400 mt-4">
                Resources and insights for
                counselors and educators.
              </p>
            </div>

          </div>

          <Link
            href="/schools"
            className="
              inline-block
              mt-12
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              hover:from-blue-500
              hover:to-purple-500
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
}