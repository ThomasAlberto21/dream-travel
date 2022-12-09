import React from 'react';
import logo from '../../assets/images/Logo.png';
import facebook from '../../assets/images/footer/Facebook.png';
import twitter from '../../assets/images/footer/Twitter.png';
import linkedin from '../../assets/images/footer/Linkedin.png';
import pinterest from '../../assets/images/footer/Pinterest.png';

export const Footer = () => {
  return (
    <footer className=' relative z-10 bg-black text-white pt-20 pb-10 lg:pt-[120px] lg:pb-20 '>
      <div className='container lg:mx-10 ml-3'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 sm:w-2/3 lg:w-3/12'>
            <div className='mb-10 w-full mr-auto'>
              <img src={logo} alt='logo' class='w-[160px]' />
              <p className='text-body-color mb-7 text-base  mt-5'>
                There are many variations of
                <br />
                passages of available
              </p>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-2/12'>
            <div className='w-full'>
              <div className='flex flex-row '>
                <img src={facebook} alt='facebook' className='w-10 h-10' />
                <h4 className='text-dark mb-9 text-lg font-semibold my-1 mx-3'>
                  Facebook
                </h4>
              </div>
              <div className='flex flex-row'>
                <img src={twitter} alt='twitter' className='w-10 h-10' />
                <h4 className='text-dark mb-9 text-lg font-semibold my-1 mx-3'>
                  Twitter
                </h4>
              </div>
            </div>
          </div>
          <div className='w-full px-4 sm:w-1/2 lg:w-2/12 '>
            <div className='w-full'>
              <div className='flex flex-row'>
                <img src={linkedin} alt='linkedin' className='w-10 h-10' />
                <h4 className='text-dark mb-9 text-lg font-semibold my-1 mx-3'>
                  Linkedin
                </h4>
              </div>
              <div className='mb-10 w-full flex flex-row'>
                <img src={pinterest} alt='pinterest' className='w-10 h-10' />
                <h4 className='text-dark mb-9 text-lg font-semibold my-1 mx-3'>
                  Pinterest
                </h4>
              </div>
            </div>
          </div>

          <div className='w-full px-4 sm:w-1/2 lg:w-3/12 ml-auto'>
            <div className='mb-10 w-full'>
              <h4 className='text-dark text-lg font-semibold'>Recent Post</h4>
              <p className='text-body-color mb-7 text-base mt-5'>
                Top 5 Himalayan Treks
                <br />
                May 17,2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
