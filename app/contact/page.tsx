import ContactForm from "./ContactForm";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";

export const metadata = {
  title: "Contact Leadership Class - Book Us for Your Next Event",
  description:
    "Get in touch with Leadership Class, Springfield's premier alt-rock band. Book us for your venue, event, or just say hi! We're the hosts of The Fungeon and we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-center text-3xl font-bold mb-2">
          Contact{" "}
          <span className="relative group inline-block">
            <span className="relative z-10 leadership-class-text">
              Leadership Class
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-0"></span>
          </span>
        </h2>
        <p className="text-center text-lg mb-8 text-gray-300">
          Send us an email, book us for a show, or just say hi! We&apos;re based
          in Springfield, Missouri, and can perform within a 240-mile radius.
        </p>
        <ContactForm />
      </main>
      <TiltLogo />
      <Footer />
    </>
  );
}
