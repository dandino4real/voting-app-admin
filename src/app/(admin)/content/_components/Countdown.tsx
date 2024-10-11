"use client";
import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

const Countdown = () => {
    const [isEditing, setIsEditing] = useState(false);

    // State variables for the editable fields
    const [electionName, setElectionName] = useState('2024 Florida Election');
    const [startDate, setStartDate] = useState('09:00 AM 22nd September 2024');
    const [endDate, setEndDate] = useState('05:00PM 23rd September 2024');

    // Function to handle toggling between view and edit mode
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Countdown Timer</p>
                <button
                    onClick={handleEditToggle}
                    className="py-2 px-8 border border-primary rounded-lg text-primary text-lg font-bold flex items-center space-x-2"
                >
                    <span>{isEditing ? 'Save' : 'Edit section'}</span>
                    <MdModeEdit className="inline-block" />
                </button>
            </div>

            <div className="flex items-center gap-4 py-1 px-8">
                <p className="text-base text-neutral font-normal">Election</p>
                {isEditing ? (
                    <input
                        type="text"
                        value={electionName}
                        onChange={(e) => setElectionName(e.target.value)}
                        className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2 border border-primary"
                    />
                ) : (
                    <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">
                        {electionName}
                    </p>
                )}
            </div>

            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Start date:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2 border border-primary"
                        />
                    ) : (
                        <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">
                            {startDate}
                        </p>
                    )}
                </div>
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">End date:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2 border border-primary"
                        />
                    ) : (
                        <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">
                            {endDate}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Countdown;
