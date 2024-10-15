"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link from next/link
import { VscEye } from "react-icons/vsc";
import { MdModeEdit, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; // Import icons for pagination

const elections = [
    {
        id: "ELX-2024-GEN-001",
        name: "U.S Presidential Election",
        type: "General",
        status: "Upcoming",
    },
    {
        id: "ELX-2024-GEN-002",
        name: "Senate Election",
        type: "Midterm",
        status: "Ongoing",
    },
    {
        id: "ELX-2024-GEN-003",
        name: "State Governor Election",
        type: "Gubernatorial",
        status: "Completed",
    },
    {
        id: "ELX-2024-LOC-004",
        name: "Local Council Election",
        type: "Local",
        status: "Postponed",
    },
    {
        id: "ELX-2024-PRI-005",
        name: "Presidential Primary Election",
        type: "Primary",
        status: "Completed",
    },
    {
        id: "ELX-2024-LOC-006",
        name: "City Mayor Election",
        type: "Local",
        status: "Upcoming",
    },
    {
        id: "ELX-2024-MUN-007",
        name: "Municipal Election",
        type: "Municipal",
        status: "Ongoing",
    },
    {
        id: "ELX-2024-SCH-008",
        name: "School Board Election",
        type: "Special",
        status: "Upcoming",
    },
];

export default function AdminElection() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Set the number of items per page

    // Calculate the indices for slicing the elections array
    const indexOfLastElection = currentPage * itemsPerPage;
    const indexOfFirstElection = indexOfLastElection - itemsPerPage;
    const currentElections = elections.slice(indexOfFirstElection, indexOfLastElection);

    // Calculate the total number of pages
    const totalPages = Math.ceil(elections.length / itemsPerPage);

    // Pagination handlers
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="bg-white rounded-lg p-6 md:p-12 flex flex-col gap-4 shadow w-full">
            <div className="flex justify-between items-center ">
                <p className="text-lg font-semibold text-[#433E3F]">Elections</p>
                <Link href="/election/addelection" className="py-2 px-4 md:px-8 border border-primary rounded-lg text-primary font-bold flex items-center space-x-2 ">
                    <span>Add Election</span>
                    <MdModeEdit className="inline-block" />
                </Link>
            </div>

            <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-8 bg-[#fff]">
                    <thead className="text-xs text-gray-bold uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-4 py-3 md:px-6">Election ID</th>
                            <th scope="col" className="px-4 py-3 md:px-6">Election Name</th>
                            <th scope="col" className="px-4 py-3 md:px-6">Election Type</th>
                            <th scope="col" className="px-4 py-3 md:px-6">Election Status</th>
                            <th scope="col" className="px-4 py-3 md:px-6">View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentElections.map((election, index) => (
                            <tr key={election.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                <th scope="row" className="px-4 py-4 md:px-6 font-medium text-gray-900 whitespace-nowrap">
                                    {election.id}
                                </th>
                                <td className="px-4 py-4 md:px-6">{election.name}</td>
                                <td className="px-4 py-4 md:px-6">{election.type}</td>
                                <td className="px-4 py-4 md:px-6">{election.status}</td>
                                <td>
                                    <Link href={`/election/${election.id}`} className="bg-secondary text-sm font-semibold rounded-xl text-white px-2 py-2 flex items-center space-x-2">
                                        <VscEye className="inline-block" />
                                        <span>View</span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="flex gap-2 md:gap-4 items-center justify-end mt-4">
                    <span className="text-sm">
                        {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`py-2 px-3 md:px-4 border rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary border border-primary'}`}>
                        <MdKeyboardArrowLeft />
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`py-2 px-3 md:px-4 border rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-white bg-primary'}`}>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
