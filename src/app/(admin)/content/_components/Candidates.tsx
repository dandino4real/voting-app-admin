import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { VscEye } from "react-icons/vsc";
import Link from "next/link";

const data = [
    {
        party: 'ELX-2024-GEN-001',
        candidateName: 'U.S presidential election',
    },
    {
        party: 'ELX-2024-GEN-002',
        candidateName: 'European parliamentary election',
    },
    {
        party: 'ELX-2024-GEN-003',
        candidateName: 'California Gubernatorial election',
    },
    {
        party: 'ELX-2024-GEN-004',
        candidateName: 'New York City Mayoral election',
    },
];

const Candidates = () => {
    return (
        <div className="bg-[#FAFAFA] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col gap-4 shadow w-full max-w-screen-lg mx-auto">
            <div className="flex justify-between items-center">
                <p className="text-[#433E3F] font-semibold text-base sm:text-lg md:text-xl">Latest news and updates</p>
            </div>

            {/* Table wrapper with overflow for responsiveness */}
            <div className="overflow-x-auto">
                <table className="w-full table-auto text-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-2 sm:px-4 py-2 border-b text-left">Political Party</th>
                            <th className="px-2 sm:px-4 py-2 border-b text-left">Candidate Name</th>
                            <th className="px-2 sm:px-4 py-2 border-b text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="px-2 sm:px-4 py-2 border-b text-left whitespace-nowrap">{item.party}</td>
                                <td className="px-2 sm:px-4 py-2 border-b text-left">{item.candidateName}</td>
                                <td className="px-2 sm:px-4 py-2 border-b text-left">
                                    <div className="flex gap-1 sm:gap-2">
                                        <Link href="#" className="bg-secondary text-xs sm:text-sm font-semibold rounded-xl text-white px-2 py-1 flex items-center space-x-1">
                                            <VscEye className="inline-block" />
                                            <span>View</span>
                                        </Link>
                                        <button className="py-1 px-2 border border-primary rounded-lg text-primary text-xs sm:text-sm font-bold flex items-center space-x-1">
                                            <span>Edit</span>
                                            <MdModeEdit className="inline-block" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Candidates;
