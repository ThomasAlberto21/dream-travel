import { provide } from '../../assets/data/data';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const CardProvide = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='pt-36 pb-10'>
      <div
        className='px-10 text-center'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <h1 className='font-bold lg:text-4xl md:text-4xl text-3xl'>
          We Provide Best
        </h1>
        <p className='text-lg font-normal mt-3 w-full '>
          Take high quality online courses from the best online instrictors
          <br className='lg:block md:block hidden' />
          around the world & develop your skills.
        </p>
      </div>

      {/* Card */}
      <div
        className='container mx-auto lg:flex md:flex grid gap-6 flex-row items-center justify-center py-16'
        data-aos='fade-up'
        data-aos-duration='2000'
      >
        {provide.map((item) => (
          <div
            className='lg:mx-4 md:mx-1 my-5 w-[326px] h-[306px] bg-white rounded-lg transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 active:bg-cyan-400 duration-200 cursor-pointer'
            key={item.id}
          >
            <div className='w-[90px] h-[90px] shadow-lg rounded-lg mt-10 ml-7 relative bg-white'>
              <img
                src={item.cover}
                alt=''
                className='absolute top-0 bottom-0 left-0 right-0 w-[43px] h-[43px] flex items-center justify-center mx-auto my-auto'
              />
            </div>
            <h1 className='font-semibold text-black text-lg mt-10 mb-3 ml-7 '>
              {item.title}
            </h1>
            <p className='text-base font normal text-black mx-7'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
