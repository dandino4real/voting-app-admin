"use client"
import React, { useRef } from 'react'
import Image from "next/image";
import Election from "../../../../public/election.png";
import Pollingunit from "../../../../public/pollingunit.png";
import VotingGirl from "../../../../public/votingGirl.png";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";


const Page = () => {
    const scrollRef = useRef<HTMLDivElement>(null); // Reference to the container

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' }); // Scroll left by 420px
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' }); // Scroll right by 420px
        }
    };
    return (
        <div className='flex flex-col gap-8 py-8'>
            <div>
                <Image
                    src={Election}
                    alt="User"
                    width={1439}
                    height={276}
                    className="object-cover w-[1439px] h-[276px]"
                    placeholder='blur'
                    priority
                />
            </div>

            <div className='flex flex-col gap-8'>
                <div className='flex items-center justify-center'>
                    <p className='text-3xl font-semibold'>Election Calendar Timetable</p>
                </div>
                <div className="overflow-x-auto no-scrollbar px-8" ref={scrollRef}>
                    <div className="flex items-center gap-4 w-[calc(520px*3)]">
                        {/* Card 1 */}
                        <div className="flex flex-col px-4 border-black border-l">
                            <p className="text-2xl font-bold">Aug 2024</p>
                            <div className="flex flex-col">
                                <Image
                                    src={Pollingunit}
                                    alt="User"
                                    width={286}
                                    height={213}
                                    className="object-cover w-[286px] h-[213px]"
                                    placeholder="blur"
                                />
                                <p className="text-2xl font-semibold">
                                    2024 Florida Gubernatorial election
                                </p>
                                <p className="text-sm font-normal">
                                    23rd September, 2024 <br /> General election
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col px-4 border-black border-l">
                            <p className="text-2xl font-bold">Aug 2024</p>
                            <div className="flex flex-col">
                                <Image
                                    src={Pollingunit}
                                    alt="User"
                                    width={286}
                                    height={213}
                                    className="object-cover w-[286px] h-[213px]"
                                    placeholder="blur"
                                />
                                <p className="text-2xl font-semibold">
                                    2024 Florida Gubernatorial election
                                </p>
                                <p className="text-sm font-normal">
                                    23rd September, 2024 <br /> General election
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col px-4 border-black border-l">
                            <p className="text-2xl font-bold">Aug 2024</p>
                            <div className="flex flex-col">
                                <Image
                                    src={Pollingunit}
                                    alt="User"
                                    width={286}
                                    height={213}
                                    className="object-cover w-[286px] h-[213px]"
                                    placeholder="blur"
                                />
                                <p className="text-2xl font-semibold">
                                    2024 Florida Gubernatorial election
                                </p>
                                <p className="text-sm font-normal">
                                    23rd September, 2024 <br /> General election
                                </p>
                            </div>
                        </div>

                        {/* Additional cards */}
                        <div className="flex flex-col px-4 border-black border-l">
                            <p className="text-2xl font-bold">Aug 2024</p>
                            <div className="flex flex-col">
                                <Image
                                    src={Pollingunit}
                                    alt="User"
                                    width={286}
                                    height={213}
                                    className="object-cover w-[286px] h-[213px]"
                                    placeholder="blur"
                                />
                                <p className="text-2xl font-semibold">
                                    2024 Florida Gubernatorial election
                                </p>
                                <p className="text-sm font-normal">
                                    23rd September, 2024 <br /> General election
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between items-center px-32 mt-2'>
                    <p className='text-2xl font-bold text-success underline'>
                        View all
                    </p>
                    <div className='hidden md:flex gap-4'>
                        <button
                            onClick={scrollLeft}
                            className='bg-[#FFFFFF33] text-[#1D384D] p-2 rounded-full'
                        >
                            <RiArrowLeftSLine size={40} />
                        </button>

                        <button
                            onClick={scrollRight}
                            className='bg-[#FFFFFF33] text-#1D384D p-2 rounded-full'
                        >
                            <RiArrowRightSLine size={40} />
                        </button>
                    </div>
                </div>

                <div className='bg-[#FAFAFA] py-12 w-full'>
                    <p className='ml-36 text-3xl font-semibold px-16'>Past election winners</p>
                    <div className=' flex flex-col justify-center items-center'>
                        <div className='w-[80%] pl-16 flex justify-between items-center border-b border-black py-8'>
                            <div className='w-[70%]'>
                                <p className='text-2xl font-semibold'>The 2023 Florida Guberntorial election</p>
                                <p className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur.
                                    Nec pellentesque mus at sed tincidunt
                                    amet vulputate sed. Amet neque in eu
                                    pellentesque purus pellentesque.
                                </p>
                            </div>
                            <div className='w-[30%]'>
                                <Image
                                    src={VotingGirl}
                                    alt="User"
                                    width={225}
                                    height={175}
                                    className="object-cover w-[225px] h-[175px]"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                        <div className='w-[80%] pl-16 flex justify-between items-center border-b border-black py-8'>
                            <div className='w-[70%]'>
                                <p className='text-2xl font-semibold'>The 2023 Florida Guberntorial election</p>
                                <p className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur.
                                    Nec pellentesque mus at sed tincidunt
                                    amet vulputate sed. Amet neque in eu
                                    pellentesque purus pellentesque.
                                </p>
                            </div>
                            <div className='w-[30%]'>
                                <Image
                                    src={VotingGirl}
                                    alt="User"
                                    width={225}
                                    height={175}
                                    className="object-cover w-[225px] h-[175px]"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                        <div className='w-[80%] pl-16 flex justify-between items-center border-b border-black py-8'>
                            <div className='w-[70%]'>
                                <p className='text-2xl font-semibold'>The 2023 Florida Guberntorial election</p>
                                <p className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur.
                                    Nec pellentesque mus at sed tincidunt
                                    amet vulputate sed. Amet neque in eu
                                    pellentesque purus pellentesque.
                                </p>
                            </div>
                            <div className='w-[30%]'>
                                <Image
                                    src={VotingGirl}
                                    alt="User"
                                    width={225}
                                    height={175}
                                    className="object-cover w-[225px] h-[175px]"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                        <div className='w-[80%] pl-16 flex justify-between items-center border-b border-black py-8'>
                            <div className='w-[70%]'>
                                <p className='text-2xl font-semibold'>The 2023 Florida Guberntorial election</p>
                                <p className='text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur.
                                    Nec pellentesque mus at sed tincidunt
                                    amet vulputate sed. Amet neque in eu
                                    pellentesque purus pellentesque.
                                </p>
                            </div>
                            <div className='w-[30%]'>
                                <Image
                                    src={VotingGirl}
                                    alt="User"
                                    width={225}
                                    height={175}
                                    className="object-cover w-[225px] h-[175px]"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page