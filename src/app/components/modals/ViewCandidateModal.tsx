import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import Olivia from '../../../../public/olivia.png';
import PartyLogo from '../../../../public/partylogo.png';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdModeEdit } from "react-icons/md";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-12 w-[850px] relative">
                <button className="absolute top-2 text-xl text-neutral" onClick={onClose}>
                    <MdClose />
                </button>

                <div className="w-full flex gap-8">
                    <div className='w-1/3 flex flex-col gap-4'>

                        <div className='flex justify-center items-center'>
                            <Image
                                src={Olivia}
                                alt='User'
                                width={299}
                                height={299}
                                placeholder='blur'
                            />
                        </div>

                        <div>Olivia Reynolds <span className='bg-light-green p-2 text-success rounded-lg max-w-max'>Running</span></div>
                        <p>U.S.A Presidential Candidate</p>
                        <p>CAND-2024-GEN-001</p>
                        <div className="flex gap-2 items-center">
                            <Image
                                src={PartyLogo}
                                alt="User"
                                width={16}
                                height={16}
                                className="object-cover w-[16px] h-[16px]"
                            />
                            <p className="text-lg font-bold text-[#433E3F]">Democratic Party</p>
                        </div>
                        <p>www.oliviareynolds.com</p>
                        <div className='flex flex-col gap-8'>
                            <p>Total number of votes :</p>
                            <p>16,027,335</p>
                        </div>

                    </div>

                    <div className='w-2/3 flex flex-col gap-4'>
                        <div>
                            <p>Biography</p>
                            <div className=' mt-2 bg-[#F1F6F9] rounded-lg p-4 flex flex-col gap-2'>
                                <p>Lorem ipsum dolor sit amet consectetur. Turpis dui
                                    consequat non sit nisl mauris dictum. Sed auctor
                                    iaculis varius viverra in feugiat.Urna nec donec
                                    rhoncus rhoncus tincidunt sed mattis. Tristique
                                    donec imperdiet turpis neque pellentesque nulla.
                                </p>

                                <p>Lorem ipsum dolor sit amet consectetur. Turpis dui
                                    consequat non sit nisl mauris dictum. Sed auctor
                                    iaculis varius viverra in feugiat.Urna nec donec
                                    rhoncus rhoncus tincidunt sed mattis. Tristique
                                    donec imperdiet turpis neque pellentesque nulla.
                                </p>

                            </div>
                        </div>

                        <div>
                            <p>Campaign manifesto</p>
                            <div className=' mt-2 bg-[#F1F6F9] rounded-lg p-4 flex flex-col gap-2'>
                                <p>Lorem ipsum dolor sit amet consectetur. Turpis dui
                                    consequat non sit nisl mauris dictum. Sed auctor
                                    iaculis varius viverra in feugiat.Urna nec donec
                                    rhoncus rhoncus tincidunt sed mattis. Tristique
                                    donec imperdiet turpis neque pellentesque nulla.
                                </p>

                                <p>Lorem ipsum dolor sit amet consectetur. Turpis dui
                                    consequat non sit nisl mauris dictum. Sed auctor
                                    iaculis varius viverra in feugiat.Urna nec donec
                                    rhoncus rhoncus tincidunt sed mattis. Tristique
                                    donec imperdiet turpis neque pellentesque nulla.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-4 flex justify-end gap-4 items-center">
                    <button className='w-[15%] border border-red text-red py-4 px-2 rounded-md text-sm flex items-center justify-center'>
                        Delete
                        <RiDeleteBin6Line className="ml-2" />
                    </button>
                    <button className='w-[15%] bg-primary text-white py-4 px-2 rounded-md text-sm flex gap-2 items-center justify-center'>
                        Edit
                        <MdModeEdit className="inline-block" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Modal;
