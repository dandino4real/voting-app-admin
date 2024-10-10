import React from 'react'
import { MdModeEdit } from 'react-icons/md'

const Countdown = () => {
    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Countdown Timer</p>
                <button className="py-2 px-8 border border-primary rounded-lg text-primary text-lg font-bold flex items-center space-x-2">
                    <span>Edit section</span>
                    <MdModeEdit className="inline-block" />
                </button>
            </div>

            <div className="flex items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Election</p>
                <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">2024 Florida Election</p>
            </div>

            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Start date:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">09:00 AM 22nd September 2024</p>
                </div>
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">End date:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">05:00PM 23rd September 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown