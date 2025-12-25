import ClientINClude from '@/components/ClientINClude';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import OurUniqueness from '@/components/OurUniqueness';
import SavingInteresting from '@/components/SavingInteresting';

export default function page() {
  return (
    <div className="">
      <Hero />
      <ClientINClude />
      <Features />
      <OurUniqueness />
      <SavingInteresting />
    </div>
  );
}
