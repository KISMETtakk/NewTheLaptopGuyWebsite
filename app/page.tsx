import Header from '@/components/header'
import Hero from '@/components/hero'
import LaptopSection from '@/components/laptop-section'
import AccessoriesSection from '@/components/accessories-section'
import VideosSection from '@/components/videos-section'
import ContactSection from '@/components/contact-section'
import ReferralSection from '@/components/referral-section'
import Footer from '@/components/footer'
import LoadingScreen from '@/components/loading-screen'
import ReferralPopup from '@/components/referral-popup'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ReferralPopup />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <LaptopSection brand="Dell" id="dell" />
          <LaptopSection brand="Lenovo" id="lenovo" />
          <LaptopSection brand="HP" id="hp" />
          <AccessoriesSection />
          <VideosSection />
          <ContactSection />
          <ReferralSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
