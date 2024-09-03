import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";

export const metadata = {
  title: "Leadership Class Guestbook - Leave Your Mark",
  description:
    "Sign our guestbook and leave a message for Leadership Class. Share your thoughts, experiences, or just say hi!",
};

export default function GuestbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">{children}</main>
      <TiltLogo />
      <Footer />
    </>
  );
}
