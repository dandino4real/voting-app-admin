"use client";
import { useState, useCallback } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai"; // Back icon
import { SlCloudUpload } from "react-icons/sl";

export default function ImportForm() {
    const [file, setFile] = useState<File | null>(null);
    const [url, setUrl] = useState("");
    const [isValidUrl, setIsValidUrl] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputUrl = event.target.value;
        setUrl(inputUrl);
        // Simple URL validation (you can enhance it as needed)
        setIsValidUrl(/^https?:\/\//.test(inputUrl));
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            setFile(droppedFiles[0]);
        }
    }, []);

    const isUploadDisabled = !file && !isValidUrl;

    return (
        <div className="bg-white rounded-lg">
            {/* Upload CSV Text with Back Icon */}
            <div className="flex items-center mb-6">
                <AiOutlineArrowLeft className="text-primary cursor-pointer" size={24} />
                <h2 className="ml-2 text-lg font-bold">Upload CSV</h2>
            </div>

            {/* Upload Field for CSV File (Drag and Drop) */}
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed text-neutral border-gray-300 rounded-md p-4 mb-4 cursor-pointer h-[337px] flex flex-col items-center justify-center"
            >
                <SlCloudUpload size={70} />
                <p className="text-center text-gray-500">
                    {file ? file.name : "Drag and drop a CSV file here"}
                </p>
                <p className="text-center text-gray-500">
                    {file ? file.name : "Or drag and drop it here"}
                </p>
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="hidden" // Hide the default input
                />
            </div>

            {/* URL Input Field */}
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter URL"
                />
                <button
                    onClick={() => {
                        // Handle the upload logic here
                        console.log('Upload from URL:', url);
                    }}
                    disabled={isUploadDisabled}
                    className={`ml-2 px-4 py-2 rounded-md font-semibold ${isUploadDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white'
                        }`}
                >
                    Upload
                </button>
            </div>
        </div>
    );
}
