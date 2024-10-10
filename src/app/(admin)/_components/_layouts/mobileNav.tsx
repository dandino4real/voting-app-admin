"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { PiCoinsFill } from "react-icons/pi";
import { PiReceiptFill } from "react-icons/pi";

import { useDisclosure, useOnClickOutside } from "@/hooks";

import { dropdownVariant } from "@/utils/variants";
import SidebarLink from "./sidebarLink";

const navLinks = [
  {
    id: 1,
    link: "/",
    title: "Overview",
    activeIcon: GoHomeFill,
    icon: AiOutlineHome,
  },
  {
    id: 2,
    link: "/transactions",
    title: "Transactions",
    activeIcon: PiReceiptFill,
    icon: PiReceiptFill,
  },
  {
    id: 3,
    link: "/bvndle/transactions",
    title: "Bvndle Coin",
    activeIcon: PiCoinsFill,
    icon: PiCoinsFill,
  },
  {
    id: 4,
    link: "/owners",
    title: "Owners",
    activeIcon: BiSolidContact,
    icon: BiSolidContact,
  },
];

const MobileNav = () => {
  const { isOpen, toggle, close } = useDisclosure();

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, close);

  return (
    <div className="relative w-max" ref={ref}>
      <button className="text-2xl text-white" onClick={toggle}>
        <AiOutlineMenu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={dropdownVariant}
            initial="initial"
            animate="animate"
            className="bg-primary text-white absolute right-0 top-full z-50 mt-5 rounded-lg p-5"
          >
            <ul className="h-full w-full flex-col text-xs font-[500] lg:flex lg:gap-2 lg:pr-6">
              {navLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <SidebarLink {...link} />
                  </li>
                );
              })}
            </ul>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
