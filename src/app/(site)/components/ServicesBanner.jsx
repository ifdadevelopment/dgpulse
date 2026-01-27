"use client";

import Image from "next/image";
import React from "react";

const ServicesBanner = () => {
  return (
    <section className="w-full overflow-hidden ">
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[720px]">
        <Image
          src="/images/marketing-services.webp"
          alt="Services Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default ServicesBanner;
