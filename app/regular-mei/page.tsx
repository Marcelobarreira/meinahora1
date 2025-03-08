import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegularizacaoCnpjBanner from './components/regularmei';
import FormRegularMEI from './components/FormRegularMEI';

const page = () => {
  return (
    <div>
      <Header />
      <RegularizacaoCnpjBanner />
      <FormRegularMEI />
      <Footer />
    </div>
  );
};

export default page;
