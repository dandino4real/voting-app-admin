"use client"
import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { VscEye } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

// Define the type for the data item
interface NewsItem {
    title: string;
    subText: string;
    body: string;
}

const data: NewsItem[] = [
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

const NewsUpdates: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null); // Use NewsItem type or null
    const [title, setTitle] = useState('');
    const [subText, setSubText] = useState('');
    const [body, setBody] = useState('');

    // Handle opening the modal and setting selected item data
    const handleEditClick = (item: NewsItem) => {
        setSelectedItem(item);
        setTitle(item.title);
        setSubText(item.subText);
        setBody(item.body);
        setIsModalOpen(true);
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Featured articles and blogpost</p>
            </div>

            <table className="w-full table-auto">
                <thead>
                    <tr className="">
                        <th className="px-4 py-2 w-1/4 text-left">Title</th>
                        <th className="px-4 py-2 w-1/4 text-left">Sub Text</th>
                        <th className="px-4 py-2 w-1/4 text-left">Body</th>
                        <th className="px-4 py-2 w-1/4 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 w-1/4 text-left">{item.title}</td>
                            <td className="px-4 py-2 w-1/4 text-left">{item.subText}</td>
                            <td className="px-4 py-2 w-1/4 text-left">{item.body}</td>
                            <td className="px-4 py-2 w-1/4 text-left">
                                <div className="flex gap-2">
                                    <Link href="#" className="bg-secondary text-sm font-semibold rounded-xl text-white px-2 py-2 flex items-center space-x-2">
                                        <VscEye className="inline-block" />
                                        <span>View</span>
                                    </Link>
                                    <button
                                        onClick={() => handleEditClick(item)}
                                        className="py-2 px-2 border border-primary rounded-lg text-primary text-sm font-bold flex items-center space-x-2"
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
            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-[500px] p-8 rounded-lg">
                        <div className="flex justify-end items-center mb-4">
                            <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                                <AiOutlineClose size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Sub Text</label>
                                <input
                                    type="text"
                                    value={subText}
                                    onChange={(e) => setSubText(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Body</label>
                                <textarea
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg h-32"
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handleCloseModal}
                                    className="bg-primary text-white py-2 px-4 rounded-lg"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsUpdates;
