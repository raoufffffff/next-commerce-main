import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import SimplicitySection from '@/components/SimplicitySection';
import { useTranslations } from 'next-intl';

export default function page() {
  const t = useTranslations('HomePage');
  return <div
    className='bg-white'
  >
    {/* 5. Add IDs to your sections so the scroller can find them */}

    <div id="hero">
      <Hero />
    </div>
    <div id="features">
      <Features />
    </div>
    <div id="simplicity">
      <SimplicitySection />
    </div>
    <div id="pricing">
      <Pricing />
    </div>
    <div id="cta">
      <CTA />
    </div>
  </div>;
}


