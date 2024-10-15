import React from 'react';
import Countdown from './_components/Countdown';
import Trust from './_components/Trust';
import NewsUpdates from './_components/NewsUpdates';
import Candidates from './_components/Candidates';
import Featured from './_components/Featured';

const Page = () => {
  return (
    <div className='flex flex-col gap-8 bg-white rounded-lg p-6 md:p-12 shadow-md w-full max-w-screen-lg mx-auto'>
      {/* Header Section */}
      <div className='flex flex-col'>
        <p className='font-semibold text-lg md:text-xl'>Home</p>
        <p className='text-xs md:text-sm text-[#433E3F] font-normal'>
          Edit and view content of all dynamic sections
        </p>
      </div>

      {/* Dynamic Components */}
      <div>
        <Countdown />
      </div>

      <div>
        <Trust />
      </div>

      <div>
        <NewsUpdates />
      </div>

      <div>
        <Candidates />
      </div>

      <div>
        <Featured />
      </div>
    </div>
  );
}

export default Page;
