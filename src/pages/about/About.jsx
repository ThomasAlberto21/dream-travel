import React from 'react';
import { CardExplore } from '../../components/cardExplore/CardExplore';
import { CardPlaces } from '../../components/cardPlaces/CardPlaces';
import { Partners } from '../../components/partners/Partners';

export const About = () => {
  return (
    <>
      <CardExplore />
      <CardPlaces />
      <Partners />
    </>
  );
};
