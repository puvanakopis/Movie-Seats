import React from 'react';
import backgroundImage from '../assets/backgroundImage.png';
import { assets } from '../assets/assets';
import { ArrowRight, Calendar1Icon, Clock10Icon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-start justify-center gap-6 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* ----------- Logo ----------- */}
      <img
        src={assets.marvelLogo}
        alt="Marvel Logo"
        className="mt-20 max-h-11 lg:h-11"
      />

      {/* ----------- Movie Title ----------- */}
      <h1 className="text-5xl md:text-[70px] md:leading-[4rem] font-semibold max-w-[28rem]">
        Guardians <br /> of the Galaxy
      </h1>

      {/* ----------- Movie Info ----------- */}
      <div className="flex items-center gap-6 text-gray-300">
        <span>Action | Adventure | Sci-Fi</span>
        <div className="flex items-center gap-1">
          <Calendar1Icon className="w-5 h-5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <Clock10Icon className="w-5 h-5" /> 2h 8m
        </div>
      </div>

      {/* ----------- Movie Description ----------- */}
      <p className='max-w-md text-gray-300'>
        In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.
      </p>

      {/* ----------- Explore Button ----------- */}
      <button className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </button>
    </div>
  );
};

export default HeroSection;