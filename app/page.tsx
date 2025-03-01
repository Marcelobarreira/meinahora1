import BannerMEI from "@/components/BannerMei";
import DuvidasMEI from "@/components/Duvidas";
import Footer from "@/components/Footer";
import FormMEI from "@/components/ForMei";
import Header from "@/components/Header";
import MeiSupportSection from "@/components/MeiSupport";
import { Carousel } from "@/components/ui/carousel";
import ZapFloat from "@/components/Zapfloat";
// import SectionCNPJ from "./components/SectionCNPJ";


export default function Home() {
  return (
    <div>
      <Header />
      <BannerMEI />
      <MeiSupportSection/>
      <DuvidasMEI />
      <FormMEI />
      {/* <SectionCNPJ /> */}
      <Footer />
      <ZapFloat />
    </div>
  );
}
