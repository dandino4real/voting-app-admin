import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { VscEye } from "react-icons/vsc";
import Link from "next/link";

const data = [
    {
        title: 'ELX-2024-GEN-001',
        subText: 'U.S presidential election',
        body: 'Lorem ipsum dolor sit amet consectetur. Turpis dui.',
    },
    {
        title: 'ELX-2024-GEN-002',
        subText: 'European parliamentary election',
        body: 'Lorem ipsum dolor sit amet consectetur. Turpis dui.',
    },
    {
        title: 'ELX-2024-GEN-003',
        subText: 'California Gubernatorial election',
        body: 'Lorem ipsum dolor sit amet consectetur. Turpis dui.',
    },
    {
        title: 'ELX-2024-GEN-004',
        subText: 'New York City Mayoral election',
        body: 'Lorem ipsum dolor sit amet consectetur. Turpis dui.',
    },
];

const NewsUpdates = () => {
    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 overflow-x-auto flex flex-col gap-4 shadow">
            <div className="flex justify-between items-center">
                <p className="text-[#433E3F] font-semibold">Latest news and updates</p>
            </div>

            <table className="w-full table-auto text-sm">
                <thead>
                    <tr className="">
                        <th className="px-4 py-2 border-b w-1/4 text-left">Title</th>
                        <th className="px-4 py-2 border-b w-1/4 text-left">Sub Text</th>
                        <th className="px-4 py-2 border-b w-1/4 text-left">Body</th>
                        <th className="px-4 py-2 border-b w-1/4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-b w-1/4 text-left">{item.title}</td>
                            <td className="px-4 py-2 border-b w-1/4 text-left">{item.subText}</td>
                            <td className="px-4 py-2 border-b w-1/4 text-left">{item.body}</td>
                            <td className="px-4 py-2 border-b w-1/4 text-left">
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

export default NewsUpdates;
