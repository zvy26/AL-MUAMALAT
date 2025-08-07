import React from 'react';
import HeroImg from '../../../assets/images/HeroImg.png';
import Date from '../../../assets/images/Date.jpg';
import Banner from '../../../assets/images/Banner.png';

const Hero = () => {
  return (
    <header className='bg-teal-600 min-h-147 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='font-medium max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8'>
        
        <div className='text-white max-w-4xl space-y-6'>
          <div className='inline-block'>
            <span className='absolute top-40 bg-white bg-opacity-20 text-xl text-gray-800 font-medium leading-normal px-4 py-2 rounded-md'>
              Seeking Knowledge is an Obligation in Islam
            </span>
            <div className="absolute top-60  text-white lg:text-2xl xl:text-6xl font-bold mt-6 leading-tight">
              Enhance Your<br/>
              Understanding of Islamic<br/>
              Ethics with Al-Muamalat
            </div>
            
            <div className='relative top-35 items-center space-x-4 mt-20'>
              <button className='bg-orange-500 text-white w-40 sm:w-44 md:w-48 lg:w-56 h-10 sm:h-11 md:h-12 lg:h-14 rounded-lg hover:bg-orange-600 transition duration-300 cursor-pointer text-xs sm:text-sm md:text-base font-medium'>
                STUDENTS' OPINION
              </button>
              <img
                src={Banner}
                className="relative bottom-12 scale-122 left-58 w-32 sm:w-36 md:w-40 lg:w-44 -ml-4"
                alt="button decoration"
              />
            </div>
          </div>
        </div>
        
        <div className="relative top-1 scale-105 flex  justify-center lg:justify-end">
          <img
            src={HeroImg}
            className="w-96 h-96 sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] object-cover rounded-2xl transform scale-110"
            alt="Happy Student"
          />
          
          <div className="absolute  w-44 h-14 bg-white rounded-2xl left-20 top-[-5px] p-2">
            <div className="flex items-center space-x-3 h-full">
              <img 
                src={Date}
                className="w-10 h-10"
                alt="Calendar"
              />
              <div>
                <div className="text-2xl text-gray-700">250k</div>
                <div className="text-sm text-gray-600">Assisted Student</div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </header>
  );
};

export default Hero;