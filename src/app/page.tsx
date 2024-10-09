"use client";

import Image from "next/image";
import { useState } from "react";

import AdminElection from "./component/election";
import Users from "./component/users";
import AdminResult from "./component/result";
import AdminContentManagement from "./component/content";
import AdminDashboard from "./component/dashboard";
import AdminSettings from "./component/settings";
import AdminSupport from "./component/support";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <div className="min-h-screen flex bg-[#F1F6F9]">
      {/* Sidebar */}
      <div className="w-64 bg-[#FFFFFF] text-white fixed top-0 left-0 h-full">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-[#5797B4]">Admin</h1>
        </div>
        <ul className="px-4 text-sm">
          <li className="mb-3">
            <button
              onClick={() => setActiveSection("Dashboard")}
              className={`flex items-center justify-start space-x-2 py-3 px-5 w-full transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === "Dashboard"
                  ? "bg-basecolour text-[#fff] rounded-full"
                  : "text-[#5797B4] hover:bg-gray-100 hover:text-[#333] rounded-full"
              }`}
            >
              <Image
                src={"/admin-dashboard.svg"}
                alt="dashboard"
                width={16}
                height={16}
              />
              <span>Dashboard</span>
            </button>
          </li>

          <li className="mb-3">
            <button
              onClick={() => setActiveSection("Election")}
              className={`flex items-center justify-start space-x-2 py-3 px-5 w-full transition-transform  duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === "Election"
                  ? "bg-basecolour text-[#fff] rounded-full"
                  : "text-[#5797B4] hover:bg-gray-100 hover:text-[#333] rounded-full"
              }`}
            >
              <Image
                src={"/election.svg"}
                alt="election"
                width={16}
                height={16}
              />
              <span>Election</span>
            </button>
          </li>

          <li className="mb-3">
            <button
              onClick={() => setActiveSection("Users")}
              className={`flex items-center justify-start space-x-2 py-3 px-5 w-full transition-transform  duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === "Users"
                  ? "bg-basecolour text-[#fff] rounded-full"
                  : "text-[#5797B4] hover:bg-gray-100 hover:text-[#333] rounded-full"
              }`}
            >
              <Image
                src={"/profile.svg"}
                alt="users"
                width={16}
                height={16}
              />
              <span>Users</span>
            </button>
          </li>

          <li className="mb-3">
            <button
              onClick={() => setActiveSection("Result")}
              className={`flex items-center justify-start space-x-2 py-3 px-5 w-full transition-transform  duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === "Result"
                  ? "bg-basecolour text-[#fff] rounded-full"
                  : "text-[#5797B4] hover:bg-gray-100 hover:text-[#333] rounded-full"
              }`}
            >
              <Image
                src={"/result.svg"}
                alt="result"
                width={16}
                height={16}
              />
              <span>Result</span>
            </button>
          </li>

          <li className="mb-3">
            <button
              onClick={() => setActiveSection("Content")}
              className={`flex items-center justify-start space-x-2 py-3 px-5 w-full transition-transform  duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === "Content"
                  ? "bg-basecolour text-[#fff] rounded-full"
                  : "text-[#5797B4] hover:bg-gray-100 hover:text-[#333] rounded-full"
              }`}
            >
              <Image
                src={"/content.svg"}
                alt="content management"
                width={16}
                height={16}
              />
              <span>Content management</span>
            </button>
          </li>

          <li className="mb-3">
            <button
              onClick={() => setActiveSection("Settings")}
              className={`flex items-center justify-start space-x-2 py-3 px-5 w-full transition-transform  duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === "Settings"
                  ? "bg-basecolour text-[#fff] rounded-full"
                  : "text-[#5797B4] hover:bg-gray-100 hover:text-[#333] rounded-full"
              }`}
            >
              <Image
                src={"/settings-blue.svg"}
                alt="settings"
                width={16}
                height={16}
              />
              <span>Settings</span>
            </button>
          </li>

          <li className="mb-3">
            <button
              onClick={() => setActiveSection("Support")}
              className={`flex items-center justify-start space-x-2 py-3 px-5 w-full transition-transform  duration-300 ease-in-out transform hover:scale-105 ${
                activeSection === "Support"
                  ? "bg-basecolour text-[#fff] rounded-full"
                  : "text-[#5797B4] hover:bg-gray-100 hover:text-[#333] rounded-full"
              }`}
            >
              <Image
                src={"/support.svg"}
                alt="support"
                width={16}
                height={16}
              />
              <span>Support</span>
            </button>
          </li>

          <li className="mt-10">
            <button className="flex items-center justify-start space-x-2 py-3 px-5 w-full text-[#5797B4] transition-transform  duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 hover:text-[#333] rounded-full">
              <Image
                src={"/logout-blue.svg"}
                alt="logout"
                width={16}
                height={16}
              />
              <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-6">
          {activeSection === "Dashboard" && <AdminDashboard/>}
          {activeSection === "Election" && <AdminElection />}
          {activeSection === "Users" && <Users/>}
          {activeSection === "Result" && <AdminResult />}
          {activeSection === "Content" && <AdminContentManagement />}
          {activeSection === "Settings" && <AdminSettings />}
          {activeSection === "Support" && <AdminSupport />}
        </div>
      </div>
    </div>
  );
}
