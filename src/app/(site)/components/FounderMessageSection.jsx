import Image from "next/image";
import PatternSection from "./PatternSection";

export default function FounderMessageSection() {
    return (
        <>
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-block font21-smart-btn font-medium px-6 py-2 rounded-full text-sm md:text-base">
                            Message from the Founder and Director
                        </div>

                        <div className="flex justify-center  hidden  mt-4">
                            <Image
                                src="/images/dark-arrow.jpg"
                                alt="Arrow"
                                width={40}
                                height={40}
                                className=""
                            />
                        </div>

                        <div className="flex justify-center ">
                            <Image
                                src="/images/stripped.jpg"
                                alt="Divider"
                                width={400}
                                height={40}
                                className="w-full  rounded-lg px-2"
                            />
                        </div>
                    </div>
                    <div className=" bg-white shadow-xl max-w-3xl  rounded-3xl p-4 md:p-10  mx-auto relative z-10">
                        <div className="flex flex-col relative md:flex-row gap-8 items-start">

                            <div className="static flex-shrink-0 md:mx-0">
                                <Image
                                    src="/images/amit-gupta-passport.png"
                                    alt="Amit Gupta"
                                    width={160}
                                    height={200}
                                    className="rounded-xl -left-36 md:absolute z-10"
                                />

                                <Image
                                    src="/images/private-circle.png"
                                    alt=""
                                    width={120}
                                    height={120}
                                    className="absolute  private-circle z-0 "
                                />
                            </div>
                            <div className="relative">
                                <Image
                                    src="/images/light-quoat.png"
                                    alt="Quote"
                                    width={40}
                                    height={40}
                                    className=" -mb-4"
                                />

                                <p className="text-[#0b2148] leading-relaxed text-sm md:text-base">
                                    Dear friend,
                                    <br /><br />
                                    Your business data is your goldmine. Instead of not looking at it,
                                    leverage its power to gain unfair advantages.
                                    <br /><br />
                                    It pains me when I see that most business owners rely on
                                    &apos;trial-and-error&apos; to keep their business afloat and still
                                    hope to achieve the growth they genuinely deserve. Sadly, it
                                    doesn&apos;t work; instead, it results in sluggish growth and acute
                                    stress.
                                    <br /><br />
                                    After closely working with my father in his company and later at
                                    market-leading companies, I figured out how to fix the gaps, save
                                    millions going drain and make informed, quick decisions.
                                    <br /><br />
                                    Today, with Smart Data Dashboard, I, along with my team, help our
                                    clients gain a competitive advantage and add multiple zeros in
                                    their profit year on year.
                                    <br /><br />
                                    You may not realize but{" "}
                                    <span className="font-bold">
                                        you are sitting on a goldmine.
                                    </span>{" "}
                                    Let me help you unleash its power.
                                </p>

                                <div className="mt-6">
                                    <Image
                                        src="/images/amit-gupta-sign.png"
                                        alt="Signature"
                                        width={160}
                                        height={60}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
               <section className="w-full -mt-40">
                  <div className="relative w-full h-[180px] md:h-[230px]">
                    <Image
                      src="/images/pattern.jpg"
                      alt="Pattern Background"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </section>
            {/* <PatternSection /> */}
        </>

    );
}
