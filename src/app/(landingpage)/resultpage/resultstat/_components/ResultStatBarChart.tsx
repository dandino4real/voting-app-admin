import React, { useRef, useEffect } from 'react';
import {
    Chart,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    BarController,
} from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, BarController);

const BarChart = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        const ctx = chartRef.current?.getContext('2d');

        if (ctx) {
            // If a chart instance already exists, destroy it before creating a new one
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // Total votes and percentage calculation
            const totalVotes = 107443 + 179093;
            const percent167443 = (107443 / totalVotes) * 100;
            const percent179093 = (179093 / totalVotes) * 100;

            // Create the chart instance
            chartInstanceRef.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['107443', '179093'],
                    datasets: [
                        {
                            label: 'Votes',
                            data: [percent167443, percent179093],
                            backgroundColor: ['#418D52', '#91FD9B'], // Primary and Success colors
                            borderRadius: 10,
                            barThickness: 110, // Adjusts the width of the bars
                            barPercentage: 0.5, // Reduces space between bars
                            categoryPercentage: 0.8, // Controls the width of bars relative to category
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                display: false, // Hide grid lines for x-axis
                            },
                            ticks: {
                                display: false, // Hide ticks for x-axis
                            },
                            border: {
                                display: false, // Hide the x-axis border (line)
                            },
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false, // Hide grid lines for y-axis
                            },
                            ticks: {
                                display: false, // Hide ticks for y-axis
                            },
                            border: {
                                display: false, // Hide the y-axis border (line)
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            display: false, // Hide the legend
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const label = context.dataset.label || '';
                                    const value = context.raw as number;
                                    const percentage = value.toFixed(1) + '%';
                                    return `${label}: ${percentage}`;
                                },
                            },
                        },
                    },
                },
            });
        }

        // Cleanup function to destroy the chart instance when the component unmounts
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    // Calculated percentages
    const totalVotes = 107443 + 179093;
    const percent167443 = ((107443 / totalVotes) * 100).toFixed(1);
    const percent179093 = ((179093 / totalVotes) * 100).toFixed(1);

    return (
        <div className="w-[300px] h-[300px] flex flex-col gap-4">
            <canvas ref={chartRef}></canvas>
            <div className="flex gap-24 items-center justify-center w-full">
                <div>
                    <p className="font-bold text-sm">107443</p>
                    <p className="font-normal text-xs">{percent167443}%</p>
                </div>
                <div>
                    <p className="font-bold text-sm">179093</p>
                    <p className="font-normal text-xs">{percent179093}%</p>
                </div>
            </div>
            <div className='flex flex-col px-8'>
                <p className='text-black text-base font-medium'>Last uploaded time</p>
                <p className='text-black text-base font-semibold'>Sep. 13,2024, 9:33:24 AM</p>
            </div>
        </div>
    );
};

export default BarChart;
