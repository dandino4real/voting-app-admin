"use client";

import Image from "next/image";
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from "react";

export default function AdminDashboard() {
  const [show, setShow] = useState(false);

  return (
    <div className=" px-5  pb-5">
      {!show ? (
        <>
          <div className=" flex justify-between relative ">
            <form className="flex items-center w-[60%] ">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-[#fff] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full ps-10 p-2.5 "
                  placeholder="Search ..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-white bg-basecolour rounded-lg  hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300  "
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>

            <form className=" w-[30%] ">
              <select
                id="celection"
                className="bg-[#E2EDF2] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full p-2.5  "
              >
                <option defaultValue={"Ge"}>Choose Election Type</option>
                <option value="FG">Florida gubernatorial 2024</option>
                <option value="GG">Georgia gubernatorial 2024</option>
                <option value="AG">Atlanta gubernatorial 2024</option>
                <option value="NG">Newyork gubernatorial 2024</option>
              </select>
            </form>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="p-4 rounded-lg shadow bg-[#fff] text-sm ">
              <div className="flex justify-between  items-center ">
                <h3 className=" text-base font-semibold text-black">Total vote turnout</h3>
                <Image
                  src={"/vote-turnout.svg"}
                  alt="vote icon"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </div>
              <h3 className="mt-5">
                <span className="font-semibold">21,578,182</span> votes
              </h3>
              <p className="mt-1 pe-5 text-[#433E3F]">
                +70% successful votes since last hour
              </p>
            </div>

            <div className="flex flex-col items-center bg-[#fff] shadow p-6 rounded-full w-40 h-40 mx-auto border  ">
              <h3 className="text-center">Countdown Timer</h3>
              <div className="flex gap-1 mt-3">
                <div className="space-y-2 text-center">
                  <p className="text-xl font-semibold">5</p>
                  <p>Hrs</p>
                </div>
                <p>:</p>
                <div className="ps-2 space-y-2 text-center">
                  <p className="text-xl font-semibold">19</p>
                  <p>Mins</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg shadow bg-[#fff] text-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-base text-black">
                  Total blockchain Transaction
                </h3>
                <Image
                  src={"/block.svg"}
                  alt="vote icon"
                  width={16}
                  height={16}
                  className="ml-2"
                />
              </div>
              <h3 className="mt-5">
                <span className="font-semibold">21,578,182</span> votes
              </h3>
              <p className="mt-1  text-[#433E3F]">
                +100% successful transactions since last hour
              </p>
            </div>
          </div>
          <div className=" flex justify-between ">
            {/* <div> */}

            <div className="relative overflow-x-auto shadow sm:rounded-lg mt-8 bg-[#fff]">
              <div className=" flex justify-between items-center mb-2 p-4 text-sm">
                <div>
                  <p className="text-base font-semibold">Recent Votes</p>
                  <p className=" mt-2">View all recent votes</p>
                </div>
                <div className=" flex gap-2 items-center justify-center bg-basecolour px-6 py-2 text-[#fff] rounded-lg">
                  <p className=" cursor-pointer " onClick={() => setShow((prev) => !prev)}  >View All</p>
                  <Image
                    src={"/view.svg"}
                    alt="view more"
                    width={12}
                    height={12}
                    sizes="100vw"
                  />
                </div>
              </div>

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Voter ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Transaction ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time of vote
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Vote status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      VTR-7e4a9b68...
                    </th>
                    <td className="px-6 py-4">0x5e884898da...</td>
                    <td className="px-6 py-4">12:56 pm</td>
                    <td className="  ">
                      <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                        Successful
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      VTR-7e4a9b68...
                    </th>
                    <td className="px-6 py-4">0x5e884898da...</td>
                    <td className="px-6 py-4">12:56 pm</td>
                    <td className="  ">
                      <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                        Successful
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-white  even:bg-gray-50   border-b  ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      VTR-7e4a9b68...
                    </th>
                    <td className="px-6 py-4">0x5e884898da...</td>
                    <td className="px-6 py-4">12:56 pm</td>
                    <td className="  ">
                      <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                        Successful
                      </span>
                    </td>
                  </tr>
                  <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      VTR-7e4a9b68...
                    </th>
                    <td className="px-6 py-4">0x5e884898da...</td>
                    <td className="px-6 py-4">12:56 pm</td>
                    <td className="  ">
                      <span className="bg-[#FFA09459] text-[#DE1F05] font-semibold rounded-lg px-10 py-2">
                        Failed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      VTR-7e4a9b68...
                    </th>
                    <td className="px-6 py-4">0x5e884898da...</td>
                    <td className="px-6 py-4">12:56 pm</td>
                    <td className="  ">
                      <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                        Successful
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* </div> */}
            </div>
            <div className=" bg-[#fff] shadow p-4 rounded-lg mt-8 text-sm">
              <div className="flex justify-between mb-8 gap-4 ">
                <div>
                  <p className=" font-semibold">Recent results</p>
                  <p>1 min ago</p>
                </div>
                <div className=" bg-basecolour px-4 py-2 rounded-lg flex justify-center items-center">
                  <Image
                    src={"/recycle.svg"}
                    alt="view more"
                    width={20}
                    height={20}
                    sizes="100vw"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-10">
                <div>
                  <h3 className=" font-semibold">DEM</h3>
                  <p className=" text-[#433E3F] font-thin">Olivia Reynolds</p>
                </div>
                <p>
                  {" "}
                  <span className=" font-semibold">21,578,182</span> votes{" "}
                </p>
              </div>
              <div className="flex justify-between items-center gap-10 mt-4">
                <div>
                  <h3 className=" font-semibold">DEM</h3>
                  <p className=" text-[#433E3F] font-thin">Olivia Reynolds</p>
                </div>
                <p>
                  {" "}
                  <span className=" font-semibold">21,578,182</span> votes{" "}
                </p>
              </div>
              <div className="flex justify-between items-center gap-10 mt-4">
                <div>
                  <h3 className=" font-semibold">DEM</h3>
                  <p className=" text-[#433E3F] font-thin">Olivia Reynolds</p>
                </div>
                <p>
                  {" "}
                  <span className=" font-semibold">21,578,182</span> votes{" "}
                </p>
              </div>
              <div className="flex justify-between items-center gap-10 mt-4">
                <div>
                  <h3 className=" font-semibold">DEM</h3>
                  <p className=" text-[#433E3F] font-thin">Olivia Reynolds</p>
                </div>
                <p>
                  {" "}
                  <span className=" font-semibold">21,578,182</span> votes{" "}
                </p>
              </div>
              <div className="flex justify-between items-center gap-10 mt-4">
                <div>
                  <h3 className=" font-semibold">DEM</h3>
                  <p className=" text-[#433E3F] font-thin">Olivia Reynolds</p>
                </div>
                <p>
                  {" "}
                  <span className=" font-semibold">21,578,182</span> votes{" "}
                </p>
              </div>
              <div className="flex justify-between items-center gap-10 mt-4">
                <div>
                  <h3 className=" font-semibold">DEM</h3>
                  <p className=" text-[#433E3F] font-thin">Olivia Reynolds</p>
                </div>
                <p>
                  {" "}
                  <span className=" font-semibold">21,578,182</span> votes{" "}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className=" relative" >
           <button onClick={() => setShow((prev) => !prev)} className="flex items-center space-x-2 absolute -top-9 left-3">

    <FaArrowLeft />
    <span className=" text-sm">Go Back</span>
  </button>
          <div className=" flex justify-between ">
            <form className="flex items-center w-[60%]  ">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-[#fff] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search ..."
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ms-2 text-sm font-medium text-white bg-basecolour rounded-lg  hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300  "
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>

            <div className=" flex gap-2 w-[30%]">
              <div className=" px-7 py-2 rounded-lg bg-[#fff] font-semibold ">
                5:19
              </div>

              <form className=" w-full">
                <select
                  id="celection"
                  className="bg-[#E2EDF2] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-basecolour focus:border-basecolour block w-full p-2.5  "
                >
                  <option defaultValue={"Ge"}>Choose Election Type</option>
                  <option value="FG">Florida gubernatorial 2024</option>
                  <option value="GG">Georgia gubernatorial 2024</option>
                  <option value="AG">Atlanta gubernatorial 2024</option>
                  <option value="NG">Newyork gubernatorial 2024</option>
                </select>
              </form>
            </div>
          </div>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-8 bg-[#fff]">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Voter ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Time of vote
                </th>
                <th scope="col" className="px-6 py-3">
                  Vote status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                    Successful
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50 border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                    Successful
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                    Successful
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50 border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#FFA09459] text-[#DE1F05] font-semibold rounded-lg px-10 py-2">
                    Failed
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                    Successful
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#FFA09459] text-[#DE1F05] font-semibold rounded-lg px-10 py-2">
                    Failed
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                    Successful
                  </span>
                </td>
              </tr>
              <tr className="odd:bg-white  even:bg-gray-50  border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#FFA09459] text-[#DE1F05] font-semibold rounded-lg px-10 py-2">
                    Failed
                  </span>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  VTR-7e4a9b68...
                </th>
                <td className="px-6 py-4">0x5e884898da...</td>
                <td className="px-6 py-4">12:56 pm</td>
                <td className="  ">
                  <span className="bg-[#A2F6C559] text-[#13B959] font-semibold rounded-lg px-6 py-2">
                    Successful
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
