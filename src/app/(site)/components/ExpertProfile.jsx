import Image from "next/image";

export default function ExpertProfile({ profile }) {
  if (!profile) return null;

  return (
    <section className="w-full md:py-20 py-14 px-6 md:px-20 bg-gradient-to-br from-[#0b1a3a] via-[#08142d] to-[#010002] text-white">
      <div className="md:mt-16 mt-10 max-w-6xl mx-auto px-8 border border-white/10 rounded-2xl p-4 md:p-10 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src={profile?.image}
              alt={profile.name}
              width={80}
              height={80}
              className="rounded-full border border-white/20 object-cover"
            />

            <h2 className="text-xl font-semibold mt-4">
              {profile.name}
            </h2>

            <p className="text-sm text-gray-400">
              {profile.role}
            </p>

            <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full text-xs bg-[#1d7a88] border border-white/10">
                ● {profile.experience}
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-[#0b1a3a]/60 border border-white/10">
                ✦ {profile.projects}
              </span>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                About Me
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {profile.about}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Expertise
              </h3>

              <div className="grid grid-cols-1 gap-2 text-gray-300 text-sm">
                {profile.skills.map((skill) => (
                  <p key={skill} className="flex items-center gap-2">
                    <span className="text-[#1d7a88]">●</span>
                    {skill}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
