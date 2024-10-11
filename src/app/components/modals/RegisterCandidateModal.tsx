import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import Olivia from '../../../../public/olivia.png';
import { MdCameraAlt } from "react-icons/md";



interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-[850px] max-h-[90vh] overflow-y-auto relative">
                {/* Close button */}
                <button className="absolute top-2 right-4 text-xl text-neutral" onClick={onClose}>
                    <MdClose />
                </button>

                {/* Modal title */}
                <div className="flex justify-center items-center mb-6">
                    <p className="text-lg font-bold">Candidate Registration</p>
                </div>

                {/* Image upload section */}
                <div className="flex flex-col items-center mb-6">
                    <div className="relative w-32 h-32 border rounded-full overflow-hidden bg-gray-100 flex justify-center items-center mb-2">
                        <Image
                            src={Olivia}
                            alt="Candidate Placeholder"
                            width={175}
                            height={175}
                        />
                    </div>

                    {/* Custom file input with camera icon */}
                    <label
                        htmlFor="image-upload"
                        className="flex items-center justify-center cursor-pointer p-2 rounded-md w-40 text-gray-500"
                    >
                        <MdCameraAlt className="mr-2 text-xl text-light-green" />
                        <span>Upload Image</span>
                    </label>
                    <input
                        type="file"
                        id="image-upload"
                        className="hidden"
                        accept="image/*"
                    />
                </div>

                {/* Candidate Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Candidate Name</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 border rounded-md"
                        placeholder="Enter candidate name"
                    />
                </div>

                {/* Running Position */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Running Position</label>
                    <input
                        type="text"
                        className="w-full mt-1 p-2 border rounded-md"
                        placeholder="Enter running position"
                    />
                </div>

                {/* Website */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Website</label>
                    <input
                        type="url"
                        className="w-full mt-1 p-2 border rounded-md"
                        placeholder="Enter candidate website"
                    />
                </div>

                {/* Select for Political Party */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Political Party</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                        <option value="">Select political party</option>
                        <option value="party1">Party 1</option>
                        <option value="party2">Party 2</option>
                        <option value="party3">Party 3</option>
                    </select>
                </div>

                {/* Select for Candidate Status */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Candidate Status</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                        <option value="">Select status</option>
                        <option value="running">Running</option>
                        <option value="elected">Elected</option>
                    </select>
                </div>

                {/* Biography */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Biography</label>
                    <textarea
                        className="w-full mt-1 p-2 border rounded-md"
                        rows={4}
                        placeholder="Enter candidate biography"
                    />
                </div>

                {/* Candidate Manifesto */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Candidate Manifesto</label>
                    <textarea
                        className="w-full mt-1 p-2 border rounded-md"
                        rows={6}
                        placeholder="Enter candidate manifesto"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button className="w-[80%] px-6 py-2 bg-primary text-white rounded-lg font-semibold">
                        Save
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Modal;
