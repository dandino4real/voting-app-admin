"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Result from "../../../../public/results.png";
import Link from 'next/link';
import { americanStates } from '@/utils/data';

const Page = () => {
    const [state, setState] = useState('');

    return (
        <div className='flex flex-col gap-8 pb-4'>
            {/* Banner Image */}
            <div>
                <Image
                    src={Result}
                    alt="Election Results"
                    width={1439}
                    height={276}
                    className="object-cover w-full h-[200px] md:h-[276px]"
                    placeholder='blur'
                    priority
                />
            </div>

            {/* State Selector and Election Links */}
            <div className='flex flex-col gap-8 py-12 px-4 md:px-32'>
                {/* Dropdown for selecting a state */}
                <div className='flex justify-end'>
                    <select
                        className="text-primary border font-semibold px-2 py-2 rounded-md w-[50%] md:w-[20%]"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="" disabled>State</option>
                        {americanStates.map((stateName) => (
                            <option key={stateName} value={stateName}>
                                {stateName}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Election Links */}
                <div className='flex flex-col gap-4'>
                    <Link href="/resultpage/resultstat" className="py-2 px-4 md:px-8 rounded-lg text-lg md:text-xl bg-primary text-white font-bold space-x-2">
                        2024 Governorship election, Marion County, Florida.
                    </Link>
                    <Link href="/resultpage/resultstat" className="py-2 px-4 md:px-8 rounded-lg text-lg md:text-xl bg-primary text-white font-bold space-x-2">
                        2024 Governorship election, Marion County, Florida.
                    </Link>
                    <Link href="/resultpage/resultstat" className="py-2 px-4 md:px-8 rounded-lg text-lg md:text-xl bg-primary text-white font-bold space-x-2">
                        2024 Governorship election, Marion County, Florida.
                    </Link>
                    <Link href="/resultpage/resultstat" className="py-2 px-4 md:px-8 rounded-lg text-lg md:text-xl bg-primary text-white font-bold space-x-2">
                        2024 Governorship election, Marion County, Florida.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page;
