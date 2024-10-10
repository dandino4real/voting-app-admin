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
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Latest news and updates</p>
            </div>

            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border-b w-1/3 text-left">Political Party</th>
                        <th className="px-4 py-2 border-b w-1/3 text-left">Candidate Name</th>
                        <th className="px-4 py-2 border-b w-1/3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-b w-1/3 text-left">{item.party}</td>
                            <td className="px-4 py-2 border-b w-1/3 text-left">{item.candidateName}</td>
                            <td className="px-4 py-2 border-b w-1/3 text-left">
                                <div className="flex gap-2">
                                    <Link href="#" className="bg-secondary text-sm font-semibold rounded-xl text-white px-2 py-2 flex items-center space-x-2">
                                        <VscEye className="inline-block" />
                                        <span>View</span>
                                    </Link>
                                    <button className="py-2 px-2 border border-primary rounded-lg text-primary text-sm font-bold flex items-center space-x-2">
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
    );
};

export default Candidates;
