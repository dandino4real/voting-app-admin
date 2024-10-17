"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineHowToVote } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";
import { LuFileSignature } from "react-icons/lu";

import { useDisclosure, useOnClickOutside } from "@/hooks";
import { dropdownVariant } from "@/utils/variants";
import SidebarLink from "./sidebarLink";

interface MobileNavProps {
  toggle: () => void; // Define toggle prop type
}

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

const MobileNav: React.FC<MobileNavProps> = ({ toggle }) => {
  const { isOpen, close } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, close);

  return (
    <div className="relative" ref={ref}>
      <button
        className="text-2xl text-black focus:outline-none"
        onClick={toggle}
        aria-label="Toggle navigation"
      >
        <AiOutlineMenu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={dropdownVariant}
            initial="initial"
            animate="animate"
            exit="exit" // Added exit animation
            className="bg-primary text-black absolute right-0 top-full z-50 mt-2 rounded-lg p-4 shadow-lg w-48"
          >
            <ul className="flex flex-col text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <SidebarLink {...link} />
                </li>
              ))}
            </ul>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
