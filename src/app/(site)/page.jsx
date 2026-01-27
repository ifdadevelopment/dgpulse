"use client";
import OurCapabilities from "./components/OurCapabilities";
import TeamSection from "./components/TeamSection";
import TestimonialsDark from "./components/TestimonialsDark";
import AppointmentSection from "./components/AppointmentSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { serviceProcessHome, whyChooseUsfront } from "./data/services";
import ServicesBanner from "./components/ServicesBanner";
import BrandTrust from "./components/BrandTrust";
import ServiceProcess from "./components/ServiceProcess";
import SlidingKeywords from "./components/SlidingKeywords";
import RecentWork from "./components/RecentWork";
import HeroBanner from "./components/HeroBanner";

export default function HomePage() {
  return (
    <main className="pageOffset">
      <HeroBanner  />
      <BrandTrust />
      <OurCapabilities />
      <ServicesBanner />
      <TeamSection />
      <ServiceProcess data={serviceProcessHome}/>
      <SlidingKeywords />
      <RecentWork />
      <WhyChooseUs data={whyChooseUsfront} />
      <TestimonialsDark />
      <AppointmentSection />
    </main>
  );
}
