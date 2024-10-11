"use client";

import React, { useState } from 'react';
import { MdModeEdit, MdClose } from 'react-icons/md';
import { VscEye } from "react-icons/vsc";
import Link from "next/link";
import Image from 'next/image';
import William from '../../../../../public/william.png';

// Define the type for the data items
interface CandidateItem {
    party: string;
    candidateName: string;
}

// Define the data array using the CandidateItem type
const data: CandidateItem[] = [
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

// Define a type for the role options
type Role = 'admin' | 'user' | 'guest';

const Candidates: React.FC = () => {
    const [role, setRole] = useState<Role>('user'); // Typed 'role' state
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Modal state
    const [selectedCandidate, setSelectedCandidate] = useState<CandidateItem | null>(null); // State for selected candidate

    const openModal = (candidate: CandidateItem) => {
        setSelectedCandidate(candidate); // Set selected candidate to edit
        setIsModalOpen(true); // Open modal
    };

    const closeModal = () => {
        setSelectedCandidate(null); // Reset selected candidate
        setIsModalOpen(false); // Close modal
    };

    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-lg font-bold">Candidates</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="mr-8">
                        <p className="text-base font-normal text-black">Select election:</p>
                    </div>
                    <select
                        className="text-base text-neutral font-semibold text-center px-6 py-2 rounded-md"
                        value={role}
                        onChange={(e) => setRole(e.target.value as Role)} // Ensure value is typed as Role
                    >
                        <option value="admin">florida gubernational 2024</option>
                        <option value="user">florida gubernational 2024</option>
                        <option value="guest">florida gubernational 2024</option>
                    </select>
                </div>
            </div>

            <table className="w-full table-auto">
                <thead>
                    <tr className="">
                        <th className="px-4 py-2 w-1/3 text-left">Political Party</th>
                        <th className="px-4 py-2 w-1/3 text-left">Candidate Name</th>
                        <th className="px-4 py-2 w-1/3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 w-1/3 text-left">{item.party}</td>
                            <td className="px-4 py-2 w-1/3 text-left">{item.candidateName}</td>
                            <td className="px-4 py-2 w-1/3 text-left">
                                <div className="flex gap-2">
                                    <Link href="#" className="bg-secondary text-sm font-semibold rounded-xl text-white px-2 py-2 flex items-center space-x-2">
                                        <VscEye className="inline-block" />
                                        <span>View</span>
                                    </Link>
                                    <button
                                        className="py-2 px-2 border border-primary rounded-lg text-primary text-sm font-bold flex items-center space-x-2"
                                        onClick={() => openModal(item)} // Open modal with selected candidate
                                    >
                                        <span>Edit</span>
                                        <MdModeEdit className="inline-block" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {isModalOpen && selectedCandidate && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-8 w-[500px] relative">
                        <button
                            className="absolute justify-end top-2 right-2 text-xl text-neutral"
                            onClick={closeModal}
                        >
                            <MdClose />
                        </button>

                        <div className='flex justify-center items-center'>
                            <Image
                                src={William}
                                alt='User'
                                width={103}
                                height={103}
                                placeholder='blur'
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Political Party</label>
                                <input
                                    type="text"
                                    value={selectedCandidate.party}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    readOnly // You can make this editable if needed
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Candidate Name</label>
                                <input
                                    type="text"
                                    value={selectedCandidate.candidateName}
                                    className="w-full px-4 py-2 border rounded-lg"
                                    readOnly // You can make this editable if needed
                                />
                            </div>

                            <button
                                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg font-bold"
                                onClick={closeModal}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Candidates;
