"use client"
import React from 'react';
import Banner from "../../../../public/banner.png";
import SeniorWoman from "../../../../public/seniorWoman.png";
import SmileyWoman from "../../../../public/SmileyWoman.png";
import Phone from "../../../../public/phone.png";
import Campaign from "../../../../public/campaign.png";
import Image from 'next/image';

const Page = () => {
    return (
        <div className='flex flex-col gap-8 py-4'>
            {/* Banner Section */}
            <div
                className='flex h-[300px] sm:h-[400px] md:h-[500px] lg:h-[673px] w-full bg-cover bg-center'
                style={{ backgroundImage: `url(${Banner.src})` }}
            >
                <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-start px-4 sm:px-8 md:px-12 lg:px-32'>
                    <p className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight w-full sm:w-[80%] lg:w-[55%]'>
                        Vote for the best candidate
                    </p>
                    <button className='bg-primary text-white rounded-lg text-xs sm:text-sm md:text-lg font-semibold px-4 sm:px-6 md:px-8 py-2'>
                        View all Candidates
                    </button>
                </div>
            </div>

            {/* Meet Olivia Section */}
            <div className='w-full'>
                <p className='text-center px-4 sm:px-8 md:px-12 lg:px-24 text-xl sm:text-2xl md:text-3xl font-bold'>
                    Meet Olivia Reynolds
                </p>
                <div className='flex flex-col md:flex-row justify-center items-center gap-8 w-full mt-8 md:mt-12 px-4 sm:px-8 lg:px-32'>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <Image
                            src={SeniorWoman}
                            alt="Olivia"
                            width={455}
                            height={455}
                            className="object-cover w-[250px] sm:w-[300px] md:w-[455px] h-[250px] sm:h-[300px] md:h-[455px] rounded-lg"
                            placeholder='blur'
                        />
                    </div>

                    <div className='flex flex-col gap-6 md:w-1/2'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base sm:text-lg md:text-2xl font-semibold'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p className='text-sm sm:text-base md:text-lg font-normal'>
                                Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat. Urna nec donec rhoncus rhoncus tincidunt sed mattis.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base sm:text-lg md:text-2xl font-semibold'>
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                            <p className='text-sm sm:text-base md:text-lg font-normal'>
                                Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat. Urna nec donec rhoncus rhoncus tincidunt sed mattis.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className='w-full bg-base flex flex-col md:flex-row gap-4 justify-center px-4 sm:px-8 md:px-12 lg:px-32 mt-8 md:mt-12 py-8'>
                    <div className='w-full md:w-1/2 flex flex-col items-center justify-center border-t-2 border-black relative mt-2'>
                        <p className='bg-gray-300 rounded-full flex justify-center items-center mx-auto absolute -top-8 text-3xl sm:text-4xl md:text-5xl font-semibold w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 z-10'>
                            &quot;
                        </p>
                        <p className='text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-center w-[80%] md:w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum.
                        </p>
                    </div>

                    <div className='w-full md:w-1/2 flex justify-center'>
                        <Image
                            src={SmileyWoman}
                            alt="Smiley woman"
                            width={455}
                            height={455}
                            className="object-cover w-[250px] sm:w-[300px] md:w-[455px] h-[250px] sm:h-[300px] md:h-[455px] rounded-lg"
                            placeholder='blur'
                        />
                    </div>
                </div>

                {/* Party Platform Section */}
                <div className='w-full bg-light py-8 px-4 sm:px-8 md:px-12 lg:px-32'>
                    <p className='text-center text-xl sm:text-2xl md:text-3xl font-bold'>
                        Party platform and affiliation
                    </p>
                    <div className='flex flex-col md:flex-row gap-8 justify-center items-start w-full mt-8 md:mt-12'>
                        <div className='flex flex-col gap-4 w-full md:w-2/3'>
                            <p className='text-sm sm:text-base md:text-lg font-normal'>
                                Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum. Sed auctor iaculis varius viverra in feugiat.
                            </p>
                            <p className='text-sm sm:text-base md:text-lg font-semibold w-[90%] md:w-[70%]'>
                                Endorsement, campaign funding and financial contribution
                            </p>
                            <p className='text-sm sm:text-base md:text-lg text-black font-normal'>
                                Lorem ipsum dolor sit amet consectetur. Turpis dui consequat non sit nisl mauris dictum.
                            </p>
                        </div>

                        <div className='w-full md:w-1/3 flex justify-center'>
                            <Image
                                src={Phone}
                                alt="Phone"
                                width={455}
                                height={455}
                                className="object-cover w-[250px] sm:w-[300px] md:w-[455px] h-[250px] sm:h-[300px] md:h-[455px] rounded-lg"
                                placeholder='blur'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Campaign Image Section */}
            <div className='w-full bg-base py-8 px-4 sm:px-8 md:px-12 lg:px-32'>
                <p className='text-center text-xl sm:text-2xl md:text-3xl font-bold'>
                    Images from Olivia’s last campaign tour at Marion District
                </p>
                <div className='flex justify-center mt-8 items-start w-full'>
                    <div className='w-full'>
                        <Image
                            src={Campaign}
                            alt="Campaign"
                            width={1161}
                            height={455}
                            className="object-cover rounded-lg w-full h-[200px] sm:h-[300px] md:h-[455px]"
                            placeholder='blur'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
