import React from 'react';
import { MdModeEdit } from 'react-icons/md';

const Countdown = () => {
    return (
        <div className="bg-[#FAFAFA] rounded-lg p-4 md:p-8 flex flex-col gap-4 shadow">
            <div className="flex justify-between items-center">
                <p className="font-semibold">Trust Indicators</p>
                <button className="py-2 px-4 md:px-8 border border-primary rounded-lg text-primary font-semibold flex items-center space-x-2">
                    <span>Edit section</span>
                    <MdModeEdit className="inline-block" />
                </button>
            </div>

            <div className="w-full flex flex-col items-start lg:flex-row lg:items-center justify-between">
                <div className="flex items-center gap-4 py-1 w-full lg:w-1/2">
                    <p className="text-base text-black font-normal">No. of registered voters:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md inline-block px-4 py-2">21,000,000</p>
                </div>
                <div className="flex items-center gap-4 py-1 w-full md:w-1/2 mt-4 md:mt-0">
                    <p className="text-base text-black font-normal">Total blockchain transactions:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md inline-block px-4 py-2">21,000,000</p>
                </div>
            </div>

            <div className="w-full flex flex-col items-start lg:flex-row lg:items-center justify-between">
                <div className="flex items-center gap-4 py-1 w-full lg:w-1/2">
                    <p className="text-base text-black font-normal">Total votes cast:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md inline-block px-4 py-2">21,000,000</p>
                </div>
                <div className="flex items-center gap-4 py-1 w-full md:w-1/2 mt-4 md:mt-0">
                    <p className="text-base text-black font-normal">Total blockchain confirmations:</p>
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md inline-block px-4 py-2">21,000,000</p>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
