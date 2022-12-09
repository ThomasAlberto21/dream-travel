import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { places } from '../../assets/data/data';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CardHeader } from '@material-tailwind/react';

export const CardPlaces = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='container mx-auto px-3 mt-5 mb-10'>
      <div className='text-center' data-aos='fade-up' data-aos-duration='1000'>
        <h1 className='font-bold lg:text-4xl md:text-4xl text-3xl'>
          Featured Tour Places
        </h1>
        <p className='text-lg font-normal mt-3 w-full'>
          The are many variations of passanges of lorem ipsum available,{' '}
          <br className='lg:block md:block hidden' />
          but the majority have suffered alteration
        </p>
      </div>

      {/* card */}
      <div
        className='container lg:flex lg:flex-row md:grid md:grid-cols-2 grid grid-cols-1 mx-auto place-items-center justify-center mt-5'
        data-aos='fade-up'
        data-aos-duration='2000'
      >
        {places.map((item) => (
          <div
            className='bg-white w-[282px] h-[385px] mx-4 rounded-xl mt-10 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 cursor-pointer'
            key={item.id}
          >
            <CardHeader>
              <img
                src={item.cover}
                alt='places image'
                className='w-[250px] h-[263px] mx-auto my-5 rounded-xl'
              />
              <div className='bg-opacity-30 inset-0 absolute bg-gray-900 rounded-xl'></div>
            </CardHeader>
            <div className='mx-4'>
              <h1 className='font-semibold text-2xl'>{item.title}</h1>
              <div className='mt-2 flex flex-row items-center'>
                <AiOutlineClockCircle />
                <p className='font-normal text-sm ml-1'>{item.desc}</p>
                <p className='ml-auto font-semibold text-sm text-yellow-500'>
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
