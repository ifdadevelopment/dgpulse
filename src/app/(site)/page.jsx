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
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import SmartDashboardSection from "./components/SmartDashboardSection";
import HelpWithTestimonialsSection from "./components/HelpWithTestimonialsSection";
import SolutionSection from "./components/SolutionSection";
import FounderMessageSection from "./components/FounderMessageSection";
import BookAndBenefitsSection from "./components/BookAndBenefitsSection";
import HeroSections from "./components/HeroSections";
import AboutSections from "./components/AboutSections";
import CtaAndStats from "./components/CtaAndStats";
import PartnersSection from "./components/PartnersSection";
import StickyServicesSection from "./components/StickyServicesSection";
import ProblemsSection from "./components/ProblemsSection";
import CaseStudies from "./components/CaseStudies";
import IndustrySection from "./components/IndustrySection";
import ResultsSection from "./components/ResultsSection";
import ClutchTestimonials from "./components/ClutchTestimonials";
import FAQSection from "./components/FAQSection";
import BlogSections from "./components/BlogSections";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <main className="pageOffset">
      <HeroSections />
      <AboutSections />
      <CtaAndStats />
      <PartnersSection />
      <StickyServicesSection />
      <ProblemsSection />
      <CaseStudies />
      <IndustrySection />
      <ResultsSection />
      <ClutchTestimonials />
      <FAQSection />
      <BlogSections />
      <ContactSection />
      {/* <HeroSection />
      <SolutionSection />
      <SmartDashboardSection />
      <SuccessStoriesSection />
      <HelpWithTestimonialsSection />
      <BookAndBenefitsSection />
      <HowItWorksSection />
      <FounderMessageSection />
      {/* <HeroBanner  /> */}
      {/* <BrandTrust />
      <OurCapabilities />
      <ServicesBanner />
      <TeamSection />
      <ServiceProcess data={serviceProcessHome}/>
      <SlidingKeywords />
      <RecentWork />
      <WhyChooseUs data={whyChooseUsfront} />
      <TestimonialsDark />
      <AppointmentSection />  */}
    </main>
  );
}
