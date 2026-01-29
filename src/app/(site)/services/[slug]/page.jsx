import { notFound } from 'next/navigation';
import { clientStoriesBySlug, dynamicsServices, experts, serviceCapabilities, serviceExpectations, serviceProblems, serviceProcess, whyChooseUs } from '../../data/services';
import ServiceHero from '../../components/ServiceHero';
import BrandTrust from '../../components/BrandTrust';
import ServiceProblems from '../../components/ServiceProblems';
import ServiceCapabilities from '../../components/ServiceCapabilities';
import ServiceProcess from '../../components/ServiceProcess';
import ServiceExpectations from '../../components/ServiceExpectations';
import ServicesBanner from '../../components/ServicesBanner';
import ExpertProfile from '../../components/ExpertProfile';
import WhyChooseUs from '../../components/WhyChooseUs';
import ClientStories from '../../components/ClientStories';
import TestimonialsDark from '../../components/TestimonialsDark';
import AppointmentSection from '../../components/AppointmentSection';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const service = dynamicsServices.find(item => item.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} | Your Company Name`,
        description: service.description,
        alternates: {
            canonical: `https://yourdomain.com/services/${service.slug}`,
        },
    };
}

export default async function ServiceDetailPage({ params }) {
    const { slug } = await params;

    const service = dynamicsServices.find(item => item.slug === slug);
    const problems = serviceProblems[slug];
    const capabilities = serviceCapabilities[slug];
    const processData = serviceProcess[slug];
    const expert = experts[slug];
    const data = whyChooseUs[slug];
    const expectations = serviceExpectations[slug];
    if (!service) {
        notFound();
    }

    return (
        <main className="">
            <ServiceHero dynamicsServices={service} />
            <BrandTrust />
            <ServiceProblems data={problems} />
            {capabilities && <ServiceCapabilities data={capabilities} />}
            <ServiceProcess data={processData} />
            <ServiceExpectations data={expectations} />
            <ServicesBanner />
            <ExpertProfile profile={expert} />
            <WhyChooseUs data={data} />
            <ClientStories clientSlug={slug} />
            <TestimonialsDark />
            <AppointmentSection />
        </main>
    );
}
