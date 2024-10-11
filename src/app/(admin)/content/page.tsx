import React from 'react'
import Countdown from './_components/Countdown'
import Trust from './_components/Trust'
import NewsUpdates from './_components/NewsUpdates'
import Candidates from './_components/Candidates'
import Featured from './_components/Featured'

const page = () => {
  return (
    <div className='flex flex-col gap-8 bg-white rounded-lg p-12 shadow'>
      <div className='flex flex-col'>
        <p className=' font-semibold'>Home</p>
        <p className='text-sm text-[#433E3F] font-normal'>edit and view  content of  all dynamic sections </p>
      </div>

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
  )
}

export default page