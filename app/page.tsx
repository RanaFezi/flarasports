import HeroSlider from '@/components/hero-slider';
import Header from '@/components/header';
import Collections from '@/components/collections';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSlider />
        <Collections />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
