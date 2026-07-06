import React from 'react';
import { Hero } from '../components/homepage/Hero';
import { ImpactStats } from '../components/homepage/ImpactStats';
import { AboutEJI } from '../components/homepage/AboutEJI';
import { StrategicFocusAreas } from '../components/homepage/StrategicFocusAreas';
import { JusticeJourney } from '../components/homepage/JusticeJourney';
import { Partners } from '../components/homepage/Partners';
import { Seo } from '../components/Seo';
import { PAGE_SEO } from '../seoConfig';

export const Home: React.FC = () => {
  return (
    <>
      <Seo {...PAGE_SEO.home} />
      <Hero />
      <AboutEJI />
      <StrategicFocusAreas />
      <JusticeJourney />
      <Partners />
      <ImpactStats />
    </>
  );
};
