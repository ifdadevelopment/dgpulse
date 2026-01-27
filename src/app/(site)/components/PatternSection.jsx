import Image from "next/image";

export default function PatternSection() {
  return (
    <section className="w-full">
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
  );
}
