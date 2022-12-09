import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import partnersLogo from '../../assets/images/partners logo.png';

export const Partners = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='container mx-auto mt-40 w-full'>
      <div className='text-center' data-aos='fade-up' data-aos-duration='1000'>
        <h1 className='font-bold lg:text-4xl md:text-4xl text-3xl'>
          Our Tour Partner
        </h1>
        <p className='text-lg font-normal mt-3 w-full'>
          The are many variations of passanges of lorem ipsum available
          <br className='lg:block md:block hidden' />
          but the majority have suffered alteration
        </p>
      </div>

      <img
        src={partnersLogo}
        alt='Partners Logo'
        className='mt-12 mb-20 px-20 '
        data-aos='fade-up'
        data-aos-duration='2000'
      />
    </div>
  );
};
