"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Map from "../../../../../public/map.png";
import ResultStatBarChart from './_components/ResultStatBarChart';


const Page = () => {
    const [role, setRole] = useState('Bar chart');


    return (
        <div className='flex items-center justify-center flex-col gap-8 pb-4'>
            <div className='mt-8 w-[85%] flex flex-col gap-8 bg-[#FAFAFA] py-12'>
                <div>
                    <p className='text-3xl font-bold'>2024 Governorship election, marion county, florida.</p>
                </div>
                <div className='flex gap-8'>
                    <div className='bg-white rounded-xl w-1/2'>
                        <Image
                            src={Map}
                            alt="User"
                            width={612}
                            height={408}
                            className="object-cover w-[612px] h-[408px]"
                            placeholder='blur'
                            priority
                        />
                    </div>
                    <div className='w-1/2 flex gap-4'>
                        <div className='flex flex-col bg-white rounded-xl p-4'>
                            <div className='flex items-center gap-4'>
                                <p className='text-xl font-bold'>Result stats</p>
                                <button className='bg-primary text-lg text-white px-4 py-2 rounded-lg'>Refresh</button>
                            </div>
                            <div className='flex flex-col mt-4 gap-6'>
                                <div className='flex items-start gap-4 border-b border-black flex-col pb-4'>
                                    <p className='text-sm font-semibold'>Total submitted results</p>
                                    <p className='text-2xl font-medium'>167448</p>
                                </div>
                                <div className='flex items-start gap-4 border-b border-black flex-col pb-4'>
                                    <p className='text-sm font-semibold'>Total cancelled results</p>
                                    <p className='text-2xl font-medium'>11,650</p>
                                </div>
                                <div className='flex items-start gap-4 flex-col pb-4'>
                                    <p className='text-sm font-semibold'>Total submitted results</p>
                                    <p className='text-2xl font-medium'>179093</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center gap-2'>
                            <div className="flex justify-center items-center">
                                <select
                                    className=" text-success text-base font-semibold px-8 py-4 rounded-md w-[70%]"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <option value="bar">Bar chart</option>
                                    <option value="pie">Pie chart</option>
                                </select>
                            </div>
                            <ResultStatBarChart />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Page