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
            <div>
                <Image
                    src={Result}
                    alt="User"
                    width={1439}
                    height={276}
                    className="object-cover w-[1439px] h-[276px]"
                    placeholder='blur'
                    priority
                />
            </div>

            <div className='flex flex-col gap-8 py-12 px-32'>
                <div className='flex justify-end'>
                    <select
                        className="text-primary border font-semibold px-2 py-2 rounded-md w-[10%]"
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

                <div className='flex flex-col gap-8'>
                    <Link href="/resultpage/resultstat" className="py-2 px-8 rounded-lg text-xl bg-primary text-white font-bold space-x-2 ">
                        2024 Governorship election , marion county, florida.
                    </Link>
                    <Link href="/resultpage/resultstat" className="py-2 px-8 rounded-lg text-xl bg-primary text-white font-bold space-x-2 ">
                        2024 Governorship election , marion county, florida.
                    </Link>
                    <Link href="/resultpage/resultstat" className="py-2 px-8 rounded-lg text-xl bg-primary text-white font-bold space-x-2 ">
                        2024 Governorship election , marion county, florida.
                    </Link>
                    <Link href="/resultpage/resultstat" className="py-2 px-8 rounded-lg text-xl bg-primary text-white font-bold space-x-2 ">
                        2024 Governorship election , marion county, florida.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page