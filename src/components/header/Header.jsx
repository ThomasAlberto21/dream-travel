import home from '../../assets/images/Home.png';
import { BiSearch } from 'react-icons/bi';

export const Header = () => {
  return (
    <section>
      <div className='w-full lg:h-full md:h-full h-[90vh]'>
        <img
          src={home}
          alt='header-image'
          className='object-cover w-full h-full '
        />

        <div className=' text-white top-40 my-auto bottom-0 left-0 right-0 mx-auto w-full absolute'>
          <h1 className='lg:text-7xl md:text-4xl text-4xl font-bold text-center'>
            Exploring The World <br /> In Comfort.
          </h1>
          <p className='lg:text-[18px] md:text-[15px] text-[15px] font-medium text-center mt-4'>
            You do not have the right to remain silent… let us know <br /> what
            it takes to challenge you
          </p>

          {/* search bar*/}
          <div className='mx-auto flex justify-center lg:mt-20 md:mt-8 mt-5 '>
            <div className='relative flex ml-5'>
              <BiSearch className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3' />
              <input
                type='text'
                placeholder='Search Destination'
                className='lg:w-[700px] lg:h-[60px] md:w-[300px] md:h-[40px] h-10 py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-cyan-400-600 '
              />
              <button className='lg:px-10 md:px-6 px-3 text-white bg-cyan-400 hover:bg-cyan-500 transition-all mx-3 rounded-lg'>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
