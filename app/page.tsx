import Image from 'next/image';
import Introduction from './components/introduction/index';
import Footer from './components/footer';
import About from './components/about';
import Contacts from './components/contacts';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';

export default function Home() {
  return (
    <>
      <Introduction />
      <Testimonials />
      <About />
      <Gallery />
      <Contacts />
      <Footer />
    </>
  );
}
