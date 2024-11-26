import React from 'react';
import Hero from '@/components/Hero';
import Caracteristicas from '@/components/Caracteristicas';
import EntornosAdaptables from '@/components/EntornosAdaptables';
import Servicios from '@/components/Servicios';
import MisionVision from '@/components/MisionVision';

const Page = () => {
  return (
    <div>
      <Hero />
      <Caracteristicas />
      <EntornosAdaptables />
      <Servicios />
      <MisionVision />
    </div>
  );
}

export default Page;
