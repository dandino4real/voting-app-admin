import React from 'react'
import Image from "next/image";
import AmericaFlag from "../../../../public/AmericaFlag.png";
import Leonado from "../../../../public/leonado.png";
import Mission from "../../../../public/mission.png";
import Corevalues from "../../../../public/corevalues.png";
import TeamLeads from "../../../../public/teamLeads.png";
import Partners from "../../../../public/partners.png";
import JoinUs from "../../../../public/joinUs.png";

const page = () => {
    return (
        <div className='flex flex-col gap-8 py-8'>
            {/* Flag Image */}
            <div>
                <Image
                    src={AmericaFlag}
                    alt="America Flag"
                    width={1439}
                    height={276}
                    className="object-cover w-full h-[276px] md:h-auto"
                    placeholder='blur'
                    priority
                />
            </div>

            {/* Who We Are Section */}
            <div className='flex flex-col md:flex-row items-center justify-center bg-white py-6 px-8 md:px-32'>
                <div className='md:w-1/2 flex flex-col justify-center gap-4 mt-6 md:mt-24'>
                    <h1 className='text-2xl md:text-3xl font-semibold'>Who We Are</h1>
                    <p className='text-lg md:text-2xl w-full md:w-[92%]'>
                        The Election Commission is an independent body committed to
                        conducting free, fair, and transparent elections. Our mission
                        is to safeguard the democratic process by implementing cutting-edge
                        blockchain technology to ensure the security and integrity of every vote cast.
                    </p>
                </div>
                <div className='md:w-1/2 flex items-center justify-center mt-4 md:mt-0'>
                    <Image
                        src={Leonado}
                        alt="Leonado Image"
                        width={455}
                        height={455}
                        className="object-cover w-[300px] h-[300px] md:w-[455px] md:h-[455px]"
                        placeholder='blur'
                    />
                </div>
            </div>

            {/* Mission Image */}
            <div className='mt-8'>
                <Image
                    src={Mission}
                    alt="Mission"
                    width={1445}
                    height={661}
                    className="object-cover w-full h-auto"
                    placeholder='blur'
                />
            </div>

            {/* Core Values Image */}
            <div className='mt-8'>
                <Image
                    src={Corevalues}
                    alt="Core Values"
                    width={1440}
                    height={626}
                    className="object-cover w-full h-auto"
                    placeholder='blur'
                />
            </div>

            {/* Team Leads Image */}
            <div className='mt-8'>
                <Image
                    src={TeamLeads}
                    alt="Team Leads"
                    width={1440}
                    height={1024}
                    className="object-cover w-full h-auto"
                    placeholder='blur'
                />
            </div>

            {/* Partners Image */}
            <div className='mt-8'>
                <Image
                    src={Partners}
                    alt="Partners"
                    width={1440}
                    height={320}
                    className="object-cover w-full h-auto"
                    placeholder='blur'
                />
            </div>

            {/* Join Us Image */}
            <div className='mt-8'>
                <Image
                    src={JoinUs}
                    alt="Join Us"
                    width={1440}
                    height={528}
                    className="object-cover w-full h-auto"
                    placeholder='blur'
                />
            </div>
        </div>
    )
}

export default page;
