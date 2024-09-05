import { Metadata } from "next";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import TiltLogo from "../components/TiltLogo";

export const metadata: Metadata = {
  title:
    "Guestbook of Leadership Class, Alt Rock Music based in Springfield, MO",
  description:
    "Sign our guestbook and leave your thoughts about Leadership Class, Springfield's dynamic alt-rock band.",
  openGraph: {
    title:
      "Guestbook of Leadership Class, Alt Rock Music based in Springfield, MO",
    description:
      "Sign our guestbook and leave your thoughts about Leadership Class, Springfield's dynamic alt-rock band.",
  },
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
