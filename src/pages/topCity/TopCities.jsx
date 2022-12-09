import { Card, CardHeader } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { populerCities } from '../../assets/data/data';

export const TopCities = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='container mx-auto mt-36 mb-10 bg-transparent'>
      <div
        className='my-10 mx-10 lg:text-start md:text-start text-center'
        data-aos='fade-right'
        data-aos-duration='1000'
      >
        <span className='font-semibold text-indigo-600 text-base lg:text-start'>
          Top Citiys
        </span>
        <h1 className='font-bold lg:text-4xl md:text-4xl text-3xl my-3'>
          Our Popular Cities
        </h1>
        <p className='text-lg font-normal mt-3 w-full '>
          We're a team of humans with the strategy , tools ,
          <br className='lg:block md:block hidden' /> and solutions and digital
          product.
        </p>
      </div>

      <div
        className='container lg:flex lg:flex-row md:grid md:grid-cols-2 grid grid-cols-1 mx-auto mt-5 bg-transparent'
        data-aos='fade-up'
        data-aos-duration='2000'
      >
        {populerCities.map((item) => (
          <Card
            className='relative bg-transparent my-7 mx-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer shadow-none'
            key={item.id}
          >
            <CardHeader>
              <img
                src={item.cover}
                alt='Popular City Image'
                className='h-full rounded-2xl'
              />
              <div className='bg-opacity-30 inset-0 absolute bg-gray-900 rounded-2xl'></div>
              <div className='rounded-2xl bg-white text-white w-[114px] h-[32px] absolute top-9 left-5 text-center opacity-75'>
                <p className='font-semibold text-center my-1 items-center justify-center text-black '>
                  {item.head}
                </p>
              </div>
            </CardHeader>

            <div className='place-items-start text-black mx-10 top-auto bottom-5 absolute'>
              <h1 className='text-white text-4xl font-bold'>{item.title}</h1>
              <p className='text-white font-semiboold text-lg mt-2'>
                {item.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
