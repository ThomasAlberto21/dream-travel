import { explore } from '../../assets/data/data';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon from '../../assets/images/icon.png';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';

export const CardExplore = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='container mx-auto'>
      <div className='lg:text-start text-center mx-10'>
        <span
          className='font-semibold text-indigo-600 text-base lg:text-start'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          About Us
        </span>
        <div className='lg:flex lg:flex-row grid mt-5 mb-10 lg:mx-0 md:mx-0 '>
          <h1
            className='font-bold text-black lg:text-4xl md:text-4xl text-3xl'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            Explore all corners of <br /> the world with us.
          </h1>
          <p
            className='font-normal text-base lg:ml-auto lg:mt-0 mt-4'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            <br className='lg:block hidden' />
            voluptates illo quibusdam eius voluptatibus reprehenderit et est cum
            <br className='lg:block hidden' />
            excepturi quasi esse dolorem iusto eaque.
          </p>
        </div>

        <div
          className='lg:flex md:grid grid '
          data-aos='fade-up'
          data-aos-duration='2000'
        >
          {explore.map((item) => (
            <Card
              className='w-full rounded-lg lg:mx-3 md:mx-3 bg-transparent mt-20 shadow-none'
              key={item.id}
            >
              <CardHeader className='relative h-56'>
                <img
                  src={item.cover}
                  alt='explore image'
                  className='h-full w-full rounded-xl '
                />
                <div className='bg-opacity-40 inset-0 absolute bg-gray-900'></div>
              </CardHeader>

              <CardBody className='text-center py-10 relative bg-white rounded-lg translate-y-[-230px] hover:translate-y-0 transition delay-150 duration-700 ease-in-out cursor-pointer'>
                <div className='bg-white w-20 h-20 rounded-full shadow-lg absolute top-[-45px] left-5'>
                  <img src={Icon} alt='icon' className='w-20 h-20 ' />
                </div>
                <Typography
                  variant='h5'
                  className='mb-2 text-start ml-4 mt-20 font-semibold text-2xl'
                >
                  {item.title}
                </Typography>
                <Typography className='text-start ml-4 font-normal text-base mr-4'>
                  {item.desc}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
