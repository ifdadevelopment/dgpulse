import ContactForm from "../components/ContactForm";
import ContactInfoStrip from "../components/ContactInfoStrip";


export default function ContactPage() {
  return (
    <main className="pageOffset">
      <section className="bg-light md:py-16 py-12 px-4 font-publicSans ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <ContactForm />

          <div className="w-full md:h-[620px] h-[350px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(11,26,58,0.20)] border border-[#0b1a3a]/20">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9956555492217!2d77.2584548!3d28.539850299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce321392bd317%3A0x2be4ef8f92925bce!2sDigitalPulse%20Solution%20-%20Best%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1764324800422!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      <ContactInfoStrip />
    </main>
  );
}
