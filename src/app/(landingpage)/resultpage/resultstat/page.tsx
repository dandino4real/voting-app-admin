"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Map from "../../../../../public/map.png";
import ResultStatBarChart from './_components/ResultStatBarChart';

const Page = () => {
    const [role, setRole] = useState('bar');

    return (
        <div className='flex items-center justify-center flex-col gap-8 pb-4'>
            <div className='mt-8 w-[90%] lg:w-[85%] flex flex-col gap-8 bg-[#FAFAFA] py-12'>
                <div>
                    <p className='text-xl md:text-2xl lg:text-3xl font-bold'>
                        2024 Governorship Election, Marion County, Florida
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Map Section */}
                    <div className='bg-white rounded-xl w-full lg:w-1/2'>
                        <Image
                            src={Map}
                            alt="Map of Marion County"
                            width={612}
                            height={408}
                            className="object-cover w-full h-auto"
                            placeholder='blur'
                            priority
                        />
                    </div>

                    {/* Stats Section */}
                    <div className='flex flex-col lg:flex-row gap-4 w-full lg:w-1/2'>
                        <div className='flex flex-col bg-white rounded-xl p-4 w-full'>
                            <div className='flex items-center justify-between gap-4'>
                                <p className='text-lg md:text-xl font-bold'>Result Stats</p>
                                <button className='bg-primary text-base md:text-lg text-white px-4 py-2 rounded-lg'>
                                    Refresh
                                </button>
                            </div>
                            <div className='flex flex-col mt-4 gap-6'>
                                <div className='flex items-start gap-4 border-b border-black flex-col pb-4'>
                                    <p className='text-sm font-semibold'>Total Submitted Results</p>
                                    <p className='text-2xl font-medium'>167448</p>
                                </div>
                                <div className='flex items-start gap-4 border-b border-black flex-col pb-4'>
                                    <p className='text-sm font-semibold'>Total Cancelled Results</p>
                                    <p className='text-2xl font-medium'>11,650</p>
                                </div>
                                <div className='flex items-start gap-4 flex-col pb-4'>
                                    <p className='text-sm font-semibold'>Total Counted Votes</p>
                                    <p className='text-2xl font-medium'>179093</p>
                                </div>
                            </div>
                        </div>

                        {/* Chart Section */}
                        <div className='flex flex-col justify-center gap-2 w-full'>
                            <div className="flex justify-center items-center">
                                <select
                                    className="text-success text-base font-semibold px-4 py-2 rounded-md w-full md:w-[70%]"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="bar">Bar Chart</option>
                                    <option value="pie">Pie Chart</option>
                                </select>
                            </div>

                            {/* Conditionally render the chart based on selected role */}
                            <div className='mt-4'>
                                {role === 'bar' ? (
                                    <ResultStatBarChart />
                                ) : (
                                    <p>Pie chart is not yet implemented.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
