"use client";
import { useState } from "react";
import Link from "next/link";
import { VscEye } from "react-icons/vsc";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; // Icons for pagination

const users = [
    {
        name: "William peter",
        email: "williampeter@gmail.com",
        id: "0x5e884898da...",
        status: "Approved",
    },
    {
        name: "William peter",
        email: "williampeter@gmail.com",
        id: "0x5e884898da...",
        status: "Pending",
    },
    {
        name: "William peter",
        email: "williampeter@gmail.com",
        id: "0x5e884898da...",
        status: "Approved",
    },
    {
        name: "William peter",
        email: "williampeter@gmail.com",
        id: "0x5e884898da...",
        status: "Pending",
    },
    {
        name: "William peter",
        email: "williampeter@gmail.com",
        id: "0x5e884898da...",
        status: "Approved",
    },
];

export default function Adminuser() {
    const [role, setRole] = useState('user');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Slice users array for pagination
    const indexOfLastuser = currentPage * itemsPerPage;
    const indexOfFirstuser = indexOfLastuser - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstuser, indexOfLastuser);

    // Calculate total pages
    const totalPages = Math.ceil(users.length / itemsPerPage);

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
        <div className="bg-white rounded-lg p-12 flex flex-col gap-4 border">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-lg font-bold">Users</p>
                    <p className="text-base font-normal text-neutral">View and edit users</p>
                </div>
                <select
                    className="text-base text-neutral border font-semibold text-center px-2 py-2 rounded-md"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="guest">Guest</option>
                </select>
            </div>

            {/* Table */}
            <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-8 bg-[#fff]">
                    <thead className="w-[30%] text-xs text-gray-700 capitalize bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">User Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Wallet Id</th>
                            <th scope="col" className="px-6 py-3">Voter Status</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={user.id} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap">
                                    {user.name}
                                </th>
                                <td className="py-2">{user.email}</td>
                                <td className="py-2">{user.id}</td>

                                {/* Status */}
                                <td className={`px-2 py-2 text-sm font-semibold text-center rounded-xl ${user.status === "Approved"
                                    ? "text-success bg-light-green"
                                    : "text-warning bg-light-warning"
                                    }`}>
                                    {user.status}
                                </td>

                                <td>
                                    <Link href={`/users/${user.id}`} className="bg-transparent text-sm font-semibold rounded-xl text-[#3A6B81] px-2 py-2 flex items-center space-x-2">
                                        <VscEye className="inline-block" />
                                        <span>View</span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="flex gap-4 items-center justify-end mt-4">
                    <span className="text-sm">
                        {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`py-2 px-4 border rounded-lg ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary border border-primary'}`}>
                        <MdKeyboardArrowLeft />
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`py-2 px-4 border rounded-lg ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-white bg-primary'}`}>
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
