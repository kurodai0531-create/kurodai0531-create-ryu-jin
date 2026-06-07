import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Staff from "@/components/Staff";
import News from "@/components/News";
import Access from "@/components/Access";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <Gallery />
        <Staff />
        <News />
        <Access />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
