"use client"
import React from 'react'
// import Image from 'next/image'
import Banner from "../../../../public/banner.png";
import SeniorWoman from "../../../../public/seniorWoman.png";
import SmileyWoman from "../../../../public/SmileyWoman.png";
import Image from 'next/image';

const Page = () => {
    return (
        <div className='flex flex-col gap-8 py-4'>
            <div
                className='flex h-[673px] w-full bg-cover bg-center ' // Set the height, width, and background properties
                style={{ backgroundImage: `url(${Banner.src})` }} // Use the image as the background
            >
                <div className='flex flex-col gap-8 justify-center items-start px-32'>
                    <p className='text-6xl text-primary font-bold w-[55%] leading-1'>Vote for the best candidate</p>
                    <button className='bg-primary text-white rounded-lg text-lg font-semibold px-8 py-2'>View all Candidates</button>
                </div>
            </div>

            <div className='w-full '>
                <p className='text-center px-24 text-3xl font-bold'>Meet olivia reynolds</p>
                <div className='flex justify-center items-center w-full mt-12'>
                    <div className='w-1/2'>
                        <Image
                            src={SeniorWoman}
                            alt="olivia"
                            width={455}
                            height={455}
                            className="object-cover w-[455px] h-[455px]"
                            placeholder='blur'
                        />
                    </div>

                    <div className='flex items-center gap-4 w-1/2'>
                        <div className='flex flex-col gap-8'>
                            <p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur. </p>
                            <p className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur. Turpis dui consequat
                                non sit nisl mauris dictum. Sed auctor iaculis varius viverra
                                in feugiat.Urna nec donec rhoncus rhoncus tincidunt sed mattis
                            </p>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <p className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur. </p>
                            <p className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur. Turpis dui consequat
                                non sit nisl mauris dictum. Sed auctor iaculis varius viverra
                                in feugiat.Urna nec donec rhoncus rhoncus tincidunt sed mattis
                            </p>
                        </div>
                    </div>


                </div>
                <div className='w-full bg-base flex gap-4 justify-center px-24 mt-12 py-8'>
                    <div className='w-1/2 flex flex-col items-center justify-center border-t-2 border-black relative mt-2'>
                        {/* Round p tag positioned on top of the border */}
                        <p className='bg-gray-300 rounded-full flex justify-center items-center mx-auto absolute -top-8 text-5xl font-semibold w-16 h-16 z-10'>
                            &quot;
                        </p>

                        <p className='flex justify-center items-center mx-auto rounded-full text-3xl font-semibold text-center w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum.
                        </p>
                    </div>

                    <div className='w-1/2'>
                        <Image
                            src={SmileyWoman}
                            alt="olivia"
                            width={705}
                            height={455}
                            className="object-cover w-[705px] h-[455px]"
                            placeholder='blur'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
