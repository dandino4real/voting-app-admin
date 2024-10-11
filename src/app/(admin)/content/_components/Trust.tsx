import React from 'react'
import { MdModeEdit } from 'react-icons/md'

const Countdown = () => {
    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4 shadow">
            <div className="flex justify-between items-center">
                <p className=" font-semibold">Trust Indicators</p>
                <button className="py-2 px-8 border border-primary rounded-lg text-primary font-semibold flex items-center space-x-2">
                    <span>Edit section</span>
                    <MdModeEdit className="inline-block" />
                </button>
            </div>

            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center gap-4 py-1 ">
                    <p className="text-base text-black font-normal">No. of registered voters: </p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md inline-block px-5 py-2">21,000,000</p>
                </div>
                <div className="w-1/2 flex items-center gap-4 py-1 ">
                    <p className="text-base text-black font-normal">Total blockchain transaction :</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md innline-block px-5 py-2">21,000,000</p>
                </div>
            </div>

            <div className="w-full flex items-center justify-between mt-4">
                <div className="w-1/2 flex items-center gap-4 py-1">
                    <p className="text-base text-black font-normal">Total vote cast: </p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md inline-block px-5 py-2">21,000,000</p>
                </div>
                <div className="w-1/2 flex items-center gap-4 py-1 ">
                    <p className="text-base text-black font-normal">Total blockchain confirmation :</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md inline-block px-5 py-2">21,000,000</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown