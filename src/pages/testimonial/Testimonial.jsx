import { Card } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { testimonial } from '../../assets/data/data';

export const Testimonial = () => {
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
          Testimonials
        </span>
        <h1 className='font-bold lg:text-4xl md:text-4xl text-3xl my-3'>
          What Our Client Says
        </h1>
        <p className='text-lg font-normal mt-3 w-full '>
          Create a visual identity for your company,
          <br className='lg:block md:block hidden' />
          and an overall brand
        </p>
      </div>

      <div
        className='container lg:flex lg:flex-row md:grid md:grid-cols-2 grid grid-cols-1 mx-auto bg-transparent mt-20'
        data-aos='fade-up'
        data-aos-duration='2000'
      >
        {testimonial.map((item) => (
          <Card
            className='w-[295px] h-[370px] my-10 mx-auto bg-transparent'
            key={item.id}
          >
            <div className='bg-white w-[295px] h-[370px] rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-400 duration-300 cursor-pointer'>
              <div className='-mt-28'>
                <img
                  src={item.cover}
                  alt='testimonial image'
                  className='mx-auto'
                />
              </div>
              <div className='text-center -my-28'>
                <h1 className='font-bold text-2xl'>{item.title}</h1>
                <span>{item.work}</span>
              </div>
              <div className='mt-52'>
                <img
                  src={item.rating}
                  alt='rating'
                  className='w-[93px] h-[16px] mx-6 my-3'
                />
                <p className='text-start text-base mx-6 text-gray-600'>
                  {item.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
