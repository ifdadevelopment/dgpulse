import Image from "next/image";

export default function ChallengesSection() {
  const challenges = [
    "Despite best efforts most businessmen find it difficult to gauge where their businesses are heading?",
    "Due to lack of seamless access to reports, they also find it challenging to make quick & decisive decisions.",
    "You also find it challenging to manage the escalating cost and face an acute cash-flow shortage.",
    "You find yourselves handicapped with half-baked reports & MIS full of numbers but without substance.",
  ];

  return (
    <section
      id="challenges"
      className="w-full bg-white  "
    >
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-10 md:py-24">
        <div className="text-center mb-12">
          <p className="text-sm md:text-xl font-semibold text-[#03122e]">
            Dear ‘High-Growth Seeking’ Entrepreneur
          </p>
          <h5 className="mt-3 text-lg md:text-5xl font-bold text-[#03122e]">
            Do you relate with following challenges?
          </h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 ">
          {challenges.map((text, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition challenges-box"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src="/images/right-orange-arrow-big.jpg"
                    alt="Arrow"
                    width={28}
                    height={28}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-left">
                  {text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
