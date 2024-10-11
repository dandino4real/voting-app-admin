"use client";
import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';

const Trust = () => {
    const [isEditing, setIsEditing] = useState(false);

    // State variables for the editable fields
    const [registeredVoters, setRegisteredVoters] = useState('21,000,000');
    const [blockchainTransactions, setBlockchainTransactions] = useState('21,000,000');
    const [voteCast, setVoteCast] = useState('21,000,000');
    const [blockchainConfirmations, setBlockchainConfirmations] = useState('21,000,000');

    // Toggle edit mode
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="bg-[#FAFAFA] rounded-lg p-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Trust Indicators</p>
                <button
                    onClick={handleEditToggle}
                    className="py-2 px-8 border border-primary rounded-lg text-primary text-lg font-bold flex items-center space-x-2"
                >
                    <span>{isEditing ? 'Save' : 'Edit section'}</span>
                    <MdModeEdit className="inline-block" />
                </button>
            </div>

            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">No. of registered voters:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            value={registeredVoters}
                            onChange={(e) => setRegisteredVoters(e.target.value)}
                            className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2 border border-primary"
                        />
                    ) : (
                        <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">{registeredVoters}</p>
                    )}
                </div>

                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Total blockchain transactions:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            value={blockchainTransactions}
                            onChange={(e) => setBlockchainTransactions(e.target.value)}
                            className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2 border border-primary"
                        />
                    ) : (
                        <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">{blockchainTransactions}</p>
                    )}
                </div>
            </div>

            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Total votes cast:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            value={voteCast}
                            onChange={(e) => setVoteCast(e.target.value)}
                            className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2 border border-primary"
                        />
                    ) : (
                        <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">{voteCast}</p>
                    )}
                </div>

                <div className="w-1/2 flex items-center gap-4 py-1 px-8">
                    <p className="text-base text-neutral font-normal">Total blockchain confirmations:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            value={blockchainConfirmations}
                            onChange={(e) => setBlockchainConfirmations(e.target.value)}
                            className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2 border border-primary"
                        />
                    ) : (
                        <p className="text-base text-neutral font-semibold text-center bg-white rounded-md w-[265px] py-2">{blockchainConfirmations}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Trust;
