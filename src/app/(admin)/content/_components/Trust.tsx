import React from 'react'
import { MdModeEdit } from 'react-icons/md'

const Countdown = () => {
    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Trust Indicators</p>
                <button className="py-2 px-8 border border-primary rounded-lg text-primary text-lg font-bold flex items-center space-x-2">
                    <span>Edit section</span>
                    <MdModeEdit className="inline-block" />
                </button>
            </div>

            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">No. of registered voters: </p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">21,000,000</p>
                </div>
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Total blockchain transaction :</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">21,000,000</p>
                </div>
            </div>

            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Total vote cast: </p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">21,000,000</p>
                </div>
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Total blockchain confirmation :</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">21,000,000</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown