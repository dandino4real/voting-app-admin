"use client";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineHowToVote } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";
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
    activeIcon: BsBarChartLineFill,
    icon: BsBarChartLineFill,
  },
  {
    id: 5, // changed to id 5 to avoid duplicates
    link: "/content",
    title: "Content Management",
    activeIcon: LuFileSignature,
    icon: LuFileSignature,
  },
];

const Navigation = () => {
  const { isOpen, toggle } = useDisclosure(); // Assuming useDisclosure provides isOpen and toggle

  return (
    <nav className={`z-20 flex h-full items-center justify-between bg-white text-primary py-4 md:py-2 lg:flex lg:flex-col lg:w-64 ${isOpen ? 'block' : 'hidden'} md:block`}>

      {/* Mobile Navigation Button */}
      <div className="flex items-center justify-end gap-2 md:hidden">
        <MobileNav toggle={toggle} /> {/* Pass toggle to MobileNav for functionality */}
      </div>

      {/* Sidebar Links */}
      <ul className="flex flex-col h-full w-full text-base font-medium md:flex lg:gap-5 lg:px-6 pt-10">
        {navLinks.map((link) => (
          <li key={link.id}>
            <SidebarLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
