import { AiOutlineArrowLeft } from "react-icons/ai"; // Back icon
import React from 'react'
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const page = () => {
    return (
        <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between p-4">
                <div className="flex items-center mb-6 sm:mb-0">
                    <AiOutlineArrowLeft className="text-primary cursor-pointer" size={24} />
                    <h2 className="ml-2 text-lg font-bold">Election Details</h2>
                </div>
                <Link href="/election/addelection" className="py-2 px-8 border bg-primary rounded-lg text-white text-lg font-700 flex items-center space-x-2">
                    <span>Edit</span>
                    <MdModeEdit className="inline-block" />
                </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Election Name:</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">U.S.A Presidential election </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Election ID:</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">ELX-2024-GEN-001 </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Election Type:</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">General</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Election Status:</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">Upcoming</p>
            </div>

            <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 py-1 px-8">
                <div className="w-full sm:w-1/2 flex items-center gap-4 py-1">
                    <p className="text-base text-neutral font-normal">Start date:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-full py-2">09:00 AM 22nd September 2024</p>
                </div>
                <div className="w-full sm:w-1/2 flex items-center gap-4 py-1">
                    <p className="text-base text-neutral font-normal">End date:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-full py-2">05:00PM 23rd September 2024</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Candidates:</p>
                <div className="text-base grid gap-2 grid-cols-2 sm:grid-cols-4 justify-items-center bg-base font-semibold text-center rounded-md w-full py-2 px-4">
                    <p className="text-base text-neutral font-semibold text-center px-2 bg-light-blue rounded-md max-w-max py-2">Olivia Reynolds</p>
                    <p className="text-base text-neutral font-semibold text-center px-2 bg-light-blue rounded-md max-w-max py-2">Olivia Reynolds</p>
                    <p className="text-base text-neutral font-semibold text-center px-2 bg-light-blue rounded-md max-w-max py-2">Olivia Reynolds</p>
                    <p className="text-base text-neutral font-semibold text-center px-2 bg-light-blue rounded-md max-w-max py-2">Olivia Reynolds</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Eligibility Parameters:</p>
                <div className="text-base flex gap-2 flex-wrap items-center bg-base font-semibold text-center rounded-md w-full py-2 px-4">
                    <p className="text-base text-neutral font-semibold text-center px-2 bg-light-blue rounded-md max-w-max py-2">18 years and older</p>
                    <p className="text-base text-neutral font-semibold text-center px-2 bg-light-blue rounded-md max-w-max py-2">Citizen of America</p>
                    <p className="text-base text-neutral font-semibold text-center px-2 bg-light-blue rounded-md max-w-max py-2">Registered voter</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Total registered voters:</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">Unavailable</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Total voters Turnout :</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">Unavailable</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Total blockchain transaction:</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">Unavailable</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Election result:</p>
                <p className="text-base text-neutral font-semibold text-center bg-base rounded-md sm:w-[265px] w-full py-2">Unavailable</p>
            </div>

            <div className="flex justify-end items-center mt-4">
                <button className='w-full sm:w-[15%] bg-red-500 text-white p-2 rounded-md text-sm flex items-center justify-center'>
                    Delete
                    <RiDeleteBin6Line />
                </button>
            </div>
        </div>
    )
}

export default page;
