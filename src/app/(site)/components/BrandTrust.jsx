import Image from "next/image";
import { brands } from "../data/services";



export default function BrandTrust() {
    return (
        <section className="w-full bg-sky md:py-20 py-14 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                    Brands That Trust On Digital Pulse
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
                    From startups to global brands, we design digital experiences that build trust and delight users.
                </p>
                <div className="relative overflow-hidden marquee-hover">
                    <div className="flex gap-16 w-max animate-marquee">
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[160px]"
                            >
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    width={160}
                                    height={64}
                                    className="h-16 w-auto grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                                />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
