import BannerMEI from "@/components/BannerMei";
import FormMEI from "@/components/ForMei";
import Header from "@/components/Header";
// import SectionCNPJ from "./components/SectionCNPJ";


export default function Home() {
  return (
    <div>
      <Header />
      <BannerMEI />
      <FormMEI />
      {/* <SectionCNPJ /> */}
    </div>
  );
}
