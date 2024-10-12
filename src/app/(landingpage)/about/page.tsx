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
            <div>
                <Image
                    src={AmericaFlag}
                    alt="User"
                    width={1439}
                    height={276}
                    className="object-cover w-[1439px] h-[276px]"
                    placeholder='blur'
                    priority
                />
            </div>

            <div className='flex items-center justify-center bg-white py-6 px-32'>
                <div className='flex items-center justify-center'>
                    <div className='w-1/2 flex flex-col justify-center gap-4 mt-24'>
                        <h1 className='text-3xl font-semibold'>Who We Are</h1>
                        <p className='w-[92%] text-2xl'>
                            The Election Commission is an independent body committed to
                            conducting free, fair, and transparent elections. Our mission
                            is to safeguard the democratic process by implementing cutting-edge
                            blockchain technology to ensure the security and integrity of every vote cast.
                        </p>
                    </div>
                    <div className='w-1/2 bg-red-500 flex items-center justify-center'>
                        <Image
                            src={Leonado}
                            alt="User"
                            width={455}
                            height={455}
                            className="object-cover w-[455px] h-[455px]"
                            placeholder='blur'
                        />
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <Image
                    src={Mission}
                    alt="User"
                    width={1445}
                    height={661}
                    className="object-cover w-[1445px] h-[661px]"
                    placeholder='blur'
                />
            </div>

            <div className='mt-8'>
                <Image
                    src={Corevalues}
                    alt="User"
                    width={1440}
                    height={626}
                    className="object-cover w-[1440px] h-[626px]"
                    placeholder='blur'
                />
            </div>

            <div className='mt-8'>
                <Image
                    src={TeamLeads}
                    alt="User"
                    width={1440}
                    height={1024}
                    className="object-cover w-[1445px] h-[1024px]"
                    placeholder='blur'
                />
            </div>

            <div className=''>
                <Image
                    src={Partners}
                    alt="User"
                    width={1440}
                    height={320}
                    className="object-cover w-[1445px] h-[320px]"
                    placeholder='blur'
                />
            </div>
            <div className=''>
                <Image
                    src={JoinUs}
                    alt="User"
                    width={1440}
                    height={528}
                    className="object-cover w-[1445px] h-[528px]"
                    placeholder='blur'
                />
            </div>
        </div>
    )
}

export default page