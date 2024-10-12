"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Voting from "../../../../public/voting.png";
import { faqData, stepsData } from '@/utils/data';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';


const Page = () => {
    const [activeStep, setActiveStep] = useState(0); // Keeps track of the active step
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Manage active accordion item

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the clicked item
    };
    return (
        <div className='flex flex-col gap-8 pb-4'>
            <div>
                <Image
                    src={Voting}
                    alt="User"
                    width={1439}
                    height={276}
                    className="object-cover w-[1439px] h-[276px]"
                    placeholder='blur'
                    priority
                />
            </div>

            <div className='flex flex-col gap-8'>

                <div className='flex flex-col gap-8 bg-white py-6 justify-center items-center '>
                    <p className='text-3xl font-semibold'>
                        How to vote
                    </p>
                    <div className="flex w-full justify-center">
                        {/* Left side with buttons */}
                        <div className="flex flex-col items-start py-4 gap-12 border-r border-black">
                            {stepsData.map((step, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStep(index)} // Change the active step on button click
                                    className={`text-2xl font-semibold text-left ${activeStep === index ? "w-full bg-primary text-white p-8" : "" // Highlight the active step
                                        }`}
                                >
                                    <span className="text-4xl font-semibold">{step.stepNumber}</span>{" "}
                                    {step.title}
                                </button>
                            ))}
                        </div>

                        {/* Right side with dynamic content */}
                        <div className="w-[50%] flex justify-start flex-col gap-4 py-4 px-16">
                            <p className="text-sm font-normal">{stepsData[activeStep].shortTitle}</p>
                            <p className="text-3xl font-semibold text-primary">
                                {stepsData[activeStep].title}
                            </p>
                            <p className="text-xl font-normal">{stepsData[activeStep].description}</p>
                        </div>
                    </div>
                </div>

                <div className='bg-primary text-white w-full flex flex-col gap-4 min-h-[456px] justify-center items-center'>
                    <div className='w-[62%] flex flex-col gap-4'>
                        <p className='text-3xl font-semibold text-center'>Voting requirement and eligibility</p>
                        <p className='text-lg font-normal text-center '>Lorem ipsum dolor sit amet consectetur. Turpis dui consequat  non sit nisl mauris dictum.
                            Sed auctor iaculis varius viverra in feugiat.
                            Urna nec donec rhoncus rhoncus tincidunt sed mattis.
                            Tristique  donec imperdiet turpis neque pellentesque nulla.
                        </p>
                        <p className='text-lg font-normal text-center'>Lorem ipsum dolor sit amet consectetur. Turpis dui consequat  non sit nisl mauris dictum.
                            Sed auctor iaculis varius viverra in feugiat.
                            Urna nec donec rhoncus rhoncus tincidunt sed mattis.
                            Tristique  donec imperdiet turpis neque pellentesque nulla.
                        </p>
                    </div>
                </div>

                <div className='mt-8 flex flex-col gap-8 bg-[#FAFAFA] py-12 justify-center items-center '>

                    <div className="flex w-[70%] justify-center gap-8">
                        {/* Left side with buttons */}
                        <div className="w-[50%] flex flex-col items-start gap-4">
                            <p className='text-3xl font-semibold text-center text-primary'>FAQ</p>
                            <p className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur</p>
                            <p className='text-lg font-normal'>Lorem ipsum dolor sit amet consectetur. Turpis dui consequat  non sit nisl mauris dictum.</p>
                        </div>

                        {/* Right side with dynamic content */}
                        <div className="w-[50%] border-l h-[536px] border-black flex justify-start flex-col gap-4 py-4 px-8">
                            {faqData.map((faq, index) => (
                                <div key={index} className="border-b border-black py-4">
                                    {/* Accordion Header */}
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <p className="text-xl font-semibold">{faq.question}</p>
                                        {activeIndex === index ? (
                                            <FaCaretUp size={30} className="border-black border rounded-full text-xl p-2 text-black" />
                                        ) : (
                                            <FaCaretDown size={30} className="border-black border rounded-full text-xl p-2 text-black" />
                                        )}
                                    </div>

                                    {/* Accordion Content */}
                                    {activeIndex === index && (
                                        <div className="mt-2">
                                            <p className="text-lg font-normal">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page