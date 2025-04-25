import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ForensicsContactSection from './components/ForensicsContactSection';
import ForensicServicesSection from './components/ForensicServicesSection';
import ForensicTaxServices from './components/ForensicTaxServices';
import { HeaderBanner } from './components/HeaderBanner';
import RequestServiceForm from './components/RequestServiceForm';

function App() {
  return (
    <>
      <HeaderBanner />
      <ForensicServicesSection />
      <ForensicTaxServices />
      <ContactSection />
      <RequestServiceForm />
      <ForensicsContactSection />
      <Footer />
    </>
  );
}

export default App;
