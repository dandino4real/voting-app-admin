"use client";
import { useState } from "react";
import ManualForm from "./_components/ManualForm";
import ImportForm from "./_components/ImportForm";

export default function AdminElection() {
    const [activeTab, setActiveTab] = useState('manual'); // Manage the active tab

    return (
        <div className="bg-white rounded-lg p-12 flex flex-col gap-4 border">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Add Election</p>

                {/* Tabs */}
                <div className="flex space-x-4">
                    <button
                        onClick={() => setActiveTab('manual')}
                        className={`p-2 rounded-lg ${activeTab === 'manual'
                            ? 'text-primary underline underline-offset-4'
                            : 'text-neutral'}`}
                    >
                        Manually
                    </button>
                    <button
                        onClick={() => setActiveTab('csv')}
                        className={`p-2 rounded-lg ${activeTab === 'csv'
                            ? 'text-primary underline underline-offset-4'
                            : 'text-neutral'}`}
                    >
                        Import CSV
                    </button>
                </div>
            </div>

            {/* Render components based on active tab */}
            <div className="mt-8">
                {activeTab === 'manual' ? <ManualForm /> : <ImportForm />}
            </div>
        </div>
    );
}
