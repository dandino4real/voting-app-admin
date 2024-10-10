import { AiOutlineArrowLeft } from "react-icons/ai"; // Back icon
import React from 'react'
import Image from 'next/image';
import William from '../../../../../public/william.png';
import { RiDeleteBin6Line } from "react-icons/ri";

const user = {
    name: "William Peter",
    email: "williampeter@gmail.com",
    walletId: "0x5e884898da28047151d0e56f8dc629",
    status: "Pending", // Can be "Approved" or "Pending"
    registrationDate: "09:00 AM 22nd September 2024",
    lastLogin: "09:00 AM 25th September 2024",
    totalVotes: "23174 Votes"
};

const Page = () => {
    return (
        <div className="bg-white rounded-lg p-12 flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <AiOutlineArrowLeft className="text-primary cursor-pointer" size={24} />
                </div>
            </div>
            <div className='flex items-start gap-8'>
                <div>
                    <Image
                        src={William}
                        alt='User'
                        width={396}
                        height={444}
                        placeholder='blur'
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='flex flex-col justify-center gap-4'>
                    <div className='flex items-center gap-4'>
                        <p className="text-base text-neutral font-normal">User Name:</p>
                        <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-[265px] py-2">{user.name}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className="text-base text-neutral font-normal">Email:</p>
                        <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-[265px] py-2">{user.email}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className="text-base text-neutral font-normal">Wallet ID:</p>
                        <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-[265px] py-2">{user.walletId}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className="text-base text-neutral font-normal">Voter verification status:</p>
                        <p className={`px-2 py-2 text-sm font-semibold text-center rounded-xl ${user.status === "Approved"
                            ? "text-green-600 bg-green-100"
                            : "text-yellow-600 bg-yellow-100"
                            }`}>
                            {user.status}
                        </p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className="text-base text-neutral font-normal">Registration date:</p>
                        <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-[265px] py-2">{user.registrationDate}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className="text-base text-neutral font-normal">Last login:</p>
                        <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-[265px] py-2">{user.lastLogin}</p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <p className="text-base text-neutral font-normal">Total Vote cast:</p>
                        <p className="text-base text-neutral font-semibold text-center bg-base rounded-md w-[265px] py-2">{user.totalVotes}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4 items-center">
                <button className='w-[15%] bg-transparent text-neutral p-2 rounded-md text-sm flex items-center justify-center'>
                    Suspend Account
                </button>
                <button className='w-[15%] bg-red text-white p-2 rounded-md text-sm flex items-center justify-center'>
                    Delete
                    <RiDeleteBin6Line className="ml-2" />
                </button>
            </div>
        </div>
    )
}

export default Page;
