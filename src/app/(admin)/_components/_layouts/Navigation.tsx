"use client";

import { BiSolidContact } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineHowToVote } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";
import { useDisclosure } from "@/hooks";
import MobileNav from "./mobileNav";
import SidebarLink from "./sidebarLink";



const navLinks = [
  {
    id: 1,
    link: "/dashboard",
    title: "Dashboard",
    activeIcon: RxDashboard,
    icon: RxDashboard,
  },
  {
    id: 2,
    link: "/election",
    title: "Election",
    activeIcon: MdOutlineHowToVote,
    icon: MdOutlineHowToVote,
  },
  {
    id: 3,
    link: "/users",
    title: "Users",
    activeIcon: RiUserFill,
    icon: RiUserFill,
  },
  {
    id: 4,
    link: "/results",
    title: "Results",
    activeIcon: BiSolidContact,
    icon: BiSolidContact,
  },
  {
    id: 4,
    link: "/consent",
    title: "Consent Management",
    activeIcon: BiSolidContact,
    icon: BiSolidContact,
  },
  {
    id: 4,
    link: "/settings",
    title: "Settings",
    activeIcon: BiSolidContact,
    icon: BiSolidContact,
  },
  {
    id: 4,
    link: "/Support",
    title: "Support",
    activeIcon: BiSolidContact,
    icon: BiSolidContact,
  },
];

const Navigation = () => {
  useDisclosure();

  return (
    <nav className="z-20 col-span-1 col-start-1 flex h-full items-center justify-between text-primary bg-white py-4 md:py-2 lg:grid lg:grid-cols-1 lg:grid-rows-[auto_1fr] px-2 lg:gap-16 lg:pt-4">

      <div className="flex items-center justify-end gap-2 lg:hidden">
        <MobileNav />
      </div>

      <ul className="hidden h-full w-full flex-col text-base font-medium lg:flex lg:gap-5 lg:px-6 ">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <SidebarLink {...link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
