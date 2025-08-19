import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import AppPreview from '@/components/sections/AppPreview'; // Import the new component
import Pricing from '@/components/sections/Pricing';
import Cta from '@/components/sections/Cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AppPreview /> {/* Add the AppPreview section here */}
      <Pricing />
      <Cta />
    </>
  );
}
