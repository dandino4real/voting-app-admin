"use client";
import React, { useState } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { MdOutlineHowToVote } from 'react-icons/md';
import { RiUserFill } from 'react-icons/ri';
import { BsBarChartLineFill } from 'react-icons/bs';
import { LuFileSignature } from 'react-icons/lu';
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu and close icons
import Link from 'next/link';

const navLinks = [
  {
    id: 1,
    link: "/dashboard",
    title: "Dashboard",
    icon: RxDashboard,
  },
  {
    id: 2,
    link: "/election",
    title: "Election",
    icon: MdOutlineHowToVote,
  },
  {
    id: 3,
    link: "/users",
    title: "Users",
    icon: RiUserFill,
  },
  {
    id: 4,
    link: "/results",
    title: "Results",
    icon: BsBarChartLineFill,
  },
  {
    id: 5,
    link: "/content",
    title: "Content Management",
    icon: LuFileSignature,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const [activeLink, setActiveLink] = useState(navLinks[0].link); // Set initial active link

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className="relative">
      {/* Toggle Button always visible */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-primary text-white rounded-md shadow-lg">
        {/* Toggle between Menu and Close icon */}
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              onClick={() => setActiveLink(link.link)}
              className={`flex items-center p-2 my-2 rounded-md transition-colors duration-200 
                                ${activeLink === link.link ? 'bg-primary text-white' : 'text-primary hover:bg-gray-100'}`}>
              <link.icon className="mr-2" />
              <span>{link.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
