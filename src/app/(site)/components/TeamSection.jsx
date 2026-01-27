"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { teamMembers } from "../data/services";

export default function TeamSection() {
    return (
        <section className="relative md:py-28 py-14 bg-light overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#0b1a3a]/15 blur-[120px] rounded-full" />
            <div className="absolute top-40 -right-20 w-72 h-72 bg-[#0b1a3a]/10 blur-[120px] rounded-full" />
            <div className="relative text-center mb-20 px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1a3a]">
                    Meet Our Growth Experts
                </h2>
                <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
                    A team of digital strategists, designers, and developers driving
                    measurable growth for modern brands.
                </p>
                <div className="w-32 h-[4px] mx-auto mt-6 rounded-full bg-[#0b1a3a]" />
            </div>
            <div className="max-w-6xl mx-auto px-6 relative group">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".team-prev",
                        nextEl: ".team-next",
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={800}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!pb-10"
                >

                    {teamMembers.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className="group   rounded-3xl p-8 text-center border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(11,26,58,0.35)] transition-all duration-500">
                                <div className="flex justify-center mb-6">
                                    <div className="w-32 h-32 rounded-full p-[3px] ">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            width={128}
                                            height={128}
                                            className="rounded-full object-cover bg-white"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    {member.name}
                                </h3>
                                <p className="text-[#0b1a3a] font-medium mt-2 text-sm">
                                    {member.role}
                                </p>
                                <p className="text-gray-500 text-sm mt-1">
                                    {member.exp}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="team-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition bg-white shadow-lg w-10 h-10  rounded-full flex items-center justify-center text-[#0b1a3a]">
                    ‹
                </button>
                <button className="team-next absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center text-[#0b1a3a]">
                    ›
                </button>
            </div>
        </section>
    );
}
