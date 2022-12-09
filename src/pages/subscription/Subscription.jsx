import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Subscription = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className='container mx-auto'
      data-aos='fade-up'
      data-aos-duration='2000'
    >
      <div className='items-center mt-12 mb-10 mx-3 sm:mx-8  px-4 gap-4 md:flex xl:px-8 xl:gap-12 bg-gradient-to-l from-cyan-400 to-cyan-600  py-14 rounded-xl z-10 '>
        <div className='flex-1 space-y-4 text-center md:text-left'>
          <h1 className='text-2xl text-gray-100 font-bold lg:text-4xl'>
            Get Our Pro Offers
          </h1>
          <p className='text-gray-200 text-center text-base md:text-justify md:pr-12 '>
            Create a visual identity for your company,
            <br className='lg:block hidden' />
            and an overall brand
          </p>
        </div>
        <div className='mt-5 md:mt-0 flex-1 px-0 sm:px-4 '>
          <form className='items-center justify-center sm:flex '>
            <input
              type='email'
              placeholder='Type Your Email Here'
              class='text-gray-500 w-full p-2 py-4 rounded-md border outline-none focus:border-green-800'
            />
            <button className='w-full mt-3 px-5 py-4 rounded-md text-white bg-cyan-700 hover:bg-cyan-800 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
