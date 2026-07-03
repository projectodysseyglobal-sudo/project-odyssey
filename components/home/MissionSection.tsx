export default function MissionSection() {
  return (
    <section
      id="mission"
      className="bg-[#0D0B1E] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-[#161233] mb-8">
          <span className="text-purple-300 text-sm font-medium">
            OUR MISSION
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Every Student Deserves
          <br />

          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Access To Opportunity
          </span>
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-xl mt-8 max-w-4xl mx-auto leading-relaxed">
          We believe talent exists everywhere,
          but opportunities do not.
          Project Odyssey bridges that gap by
          helping students discover scholarships,
          competitions, internships, research
          programs, leadership experiences, and
          global opportunities that can transform
          their future.
        </p>

      </div>

      {/* Mission Vision Impact */}

      <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-3 gap-8">

        <div
          className="
            bg-[#161233]
            border border-purple-500/20
            rounded-3xl
            p-8
            hover:border-purple-500
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Our Mission
          </h3>

          <p className="text-slate-400 leading-relaxed">
            To make opportunities accessible,
            discoverable, and achievable for
            students everywhere.
          </p>
        </div>

        <div
          className="
            bg-[#161233]
            border border-purple-500/20
            rounded-3xl
            p-8
            hover:border-purple-500
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Our Vision
          </h3>

          <p className="text-slate-400 leading-relaxed">
            A world where every student,
            regardless of background,
            has access to opportunities
            that unlock their full potential.
          </p>
        </div>

        <div
          className="
            bg-[#161233]
            border border-purple-500/20
            rounded-3xl
            p-8
            hover:border-purple-500
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >
          <h3 className="text-2xl font-bold mb-4">
            Our Impact
          </h3>

          <p className="text-slate-400 leading-relaxed">
            Connecting students with
            scholarships, competitions,
            internships, leadership programs,
            and life-changing experiences.
          </p>
        </div>

      </div>
    </section>
  );
}