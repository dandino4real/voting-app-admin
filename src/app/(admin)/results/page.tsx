"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineRefresh } from "react-icons/hi";
import PartyLogo from '../../../../public/partylogo.png';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

interface PartyResultProps {
    partyName: string;
    candidateName: string;
    votes: string;
}

const PartyResult = ({ partyName, candidateName, votes }: PartyResultProps) => (
    <div className="flex justify-between items-center">
        <div className="flex flex-col">
            <div className="flex gap-2 items-center">
                <Image
                    src={PartyLogo}
                    alt="User"
                    width={16}
                    height={16}
                    className="object-cover w-[16px] h-[16px]"
                />
                <p className="text-lg font-bold text-[#433E3F]">{partyName}</p>
            </div>
            <p className="text-sm font-light text-[#433E3F]">{candidateName}</p>
        </div>
        <p className="text-lg font-bold text-[#433E3F]">
            {votes} <span className="font-normal">votes</span>
        </p>
    </div>
);

export default function Page() {
    const partyResults = [
        { partyName: "Democratic party (DEM)", candidateName: "Olivia Reynolds", votes: "21,578,182" },
        { partyName: "Republican party (REP)", candidateName: "John Doe", votes: "18,456,900" },
        { partyName: "Democratic party (DEM)", candidateName: "Olivia Reynolds", votes: "21,578,182" },
        { partyName: "Republican party (REP)", candidateName: "John Doe", votes: "18,456,900" },
        { partyName: "Democratic party (DEM)", candidateName: "Olivia Reynolds", votes: "21,578,182" },
        { partyName: "Republican party (REP)", candidateName: "John Doe", votes: "18,456,900" },
        { partyName: "Democratic party (DEM)", candidateName: "Olivia Reynolds", votes: "21,578,182" },
    ];

    const data = {
        labels: ['DEM', 'REP', 'GRN', 'IND', 'ACN', 'UN'],
        datasets: [
            {
                label: 'Registered Voters - 25,000,000',
                data: [595000, 1190000, 1785000, 2380000, 2975000, 1785000],
                backgroundColor: '#10b981',
                hoverBackgroundColor: '#3b82f6',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 3400000,
                ticks: {
                    stepSize: 595000,
                    color: '#433E3F',
                },
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#433E3F',
                },
            },
            datalabels: {
                color: '#433E3F',
                anchor: 'end',
                align: 'top',
                font: {
                    weight: 'bold',
                },
                formatter: (value: number) => value.toLocaleString(),
            },
        },
    };

    return (
        <div className="bg-white rounded-lg p-12 flex flex-col gap-12 border">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-lg font-bold text-[#433E3F]">
                        22-09-2024 Gubernatorial Election - Florida
                    </p>
                    <p className="text-base text-gray-500">Last updated time - 11:03 PM</p>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/election/addelection" className="py-2 px-8 rounded-lg text-neutral text-lg font-bold flex items-center space-x-2">
                        <span>Export CSV</span>
                    </Link>
                    <Link href="/election/addelection" className="py-2 px-8 border bg-primary rounded-lg text-white text-lg font-bold flex items-center space-x-2">
                        <span>Refresh</span>
                        <HiOutlineRefresh className="inline-block" />
                    </Link>
                </div>
            </div>

            <div className="w-full flex justify-between h-[163px] items-center bg-[#FAFAFA]">
                {["Results", "Total submitted votes", "Total approved votes", "Total declined votes"].map(
                    (label, index) => (
                        <div
                            key={index}
                            className={`border-r px-4 w-[25%] h-[158px] flex flex-col items-center gap-4 justify-center ${index === 0 ? "h-[163px]" : ""}`}
                        >
                            <p>{label}</p>
                            {index > 0 && <p>2,007,383</p>}
                        </div>
                    )
                )}
            </div>

            <div className="w-full gap-8 flex justify-between items-center">
                <div className="w-1/2 h-[628px] flex flex-col gap-8 bg-[#FAFAFA] rounded-md p-8">
                    <div className="flex flex-col">
                        <p className="text-lg font-bold text-[#433E3F]">Recent results</p>
                        <p className="text-sm font-light text-[#433E3F]">1 min ago</p>
                    </div>

                    {partyResults.map((result, index) => (
                        <PartyResult
                            key={index}
                            partyName={result.partyName}
                            candidateName={result.candidateName}
                            votes={result.votes}
                        />
                    ))}
                </div>

                {/* Bar chart for vote comparison */}
                <div className="w-1/2 h-[628px] flex flex-col justify-center items-center gap-8 bg-[#FAFAFA] rounded-md p-8">
                    <Bar data={data} options={options} className="w-[70%] min-h-[328px]" />
                </div>
            </div>
        </div>
    );
}
