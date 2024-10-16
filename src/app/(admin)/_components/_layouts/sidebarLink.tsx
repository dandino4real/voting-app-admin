"use client";

import Link from "next/link";
import { IconType } from "react-icons/lib";
import { cn } from "@/lib/utils";
import useCheckLinkActive from "@/hooks/useCheckLinkActive";

type SidebarLinkProps = {
  activeIcon: IconType;
  icon: IconType;
  link: string;
  title: string;
  index?: boolean;
};

export default function SidebarLink({
  activeIcon: ActiveIcon,
  icon: Icon,
  link,
  title,
  index,
}: SidebarLinkProps) {
  const isActive = useCheckLinkActive(link, link, index);

  return (
    <Link href={link} className="group rounded-lg text-sm font-semibold">
      <span
        className={cn(
          "flex w-full items-center gap-2 rounded-full px-5 py-3 font-semibold",
          isActive ? "bg-primary text-white" : "bg-white text-primary" // Apply styles based on isActive
        )}
      >
        <span
          className={cn(
            "text-base transition-transform duration-500 group-hover:rotate-45 group-focus-visible:rotate-45",
            isActive ? "text-white" : "text-primary" // Change icon color based on isActive
          )}
        >
          {isActive ? <ActiveIcon /> : <Icon />}
        </span>
        <span
          className={cn(
            "transition-transform duration-500 group-hover:translate-x-1 group-focus-visible:translate-x-1",
            isActive ? "text-white" : "text-primary" // Change text color based on isActive
          )}
        >
          {title}
        </span>
      </span>
    </Link>
  );
}
