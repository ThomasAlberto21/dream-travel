import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { nav } from '../../assets/data/data';

export const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-4 lg:ml-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:justify-center'>
      {nav.map((link) => (
        <li
          key={link.id}
          className='mx-3 md:ml-3 sm:ml-3 font-medium text-sm hover:text-cyan-400 hover:duration-300 transition-all'
        >
          <Link to={link.url}>{link.text}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Navbar className='mx-auto w-full border-none z-20 shadow-none text-white bg-transparent absolute py-3 px-4 lg:px-14 lg:py-4'>
      <div className='container mx-auto flex items-center justify-between '>
        <Typography
          as='a'
          href='#'
          variant='small'
          className='mr-4 cursor-pointer py-1.5 font-normal'
        >
          <img src={logo} alt='logo' className='w-32' />
        </Typography>
        <div className='hidden lg:block'>{navList}</div>
        <Link to='/create-account'>
          <Button
            variant='gradient'
            size='sm'
            className='hidden lg:inline-block shadow-none border py-4 hover:bg-cyan-400'
          >
            <span className='font-medium text-sm '>Create Account</span>
          </Button>
        </Link>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mr-5 mb-5 '
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6 '
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className='bg-white text-black w-40 h-40 py-1 rounded-lg'>
        {navList}
        <Button
          variant='gradient'
          size='sm'
          fullWidth
          className='border-neutral-800 border cursor-pointer w-25 ml-2  hover:bg-cyan-400'
        >
          <span className='font-medium text-sm py-5 text-black'>Create Account</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};
