import React from 'react';
import { Hero } from '../components/homepage/Hero';
import { ImpactStats } from '../components/homepage/ImpactStats';
import { AboutEJI } from '../components/homepage/AboutEJI';
import { StrategicFocusAreas } from '../components/homepage/StrategicFocusAreas';
import { JusticeJourney } from '../components/homepage/JusticeJourney';
import { Partners } from '../components/homepage/Partners';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutEJI />
      <StrategicFocusAreas />
      <JusticeJourney />
      <Partners />
    </>
  );
};
