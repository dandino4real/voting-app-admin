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
          "flex w-full items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-primary",
          [isActive && " bg-primary py-3 font-semibold md:text-white"],
        )}
      >
        <span className="text-base transition-transform duration-500 group-hover:rotate-45 group-focus-visible:rotate-45">
          {isActive ? <ActiveIcon /> : <Icon />}
        </span>
        <span className="transition-transform  duration-500 group-hover:translate-x-1 group-focus-visible:translate-x-1">
          {title}
        </span>
      </span>
    </Link>
  );
}
