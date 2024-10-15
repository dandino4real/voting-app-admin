"use client";

import { PropsWithChildren } from "react";

import { useMediaQuery } from "@/hooks";

const NullResponsiveWrapper = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  if (isMobile) {
    return (
      <div className="text-md flex h-screen w-screen items-center justify-center">
        <p> This Web App can't be viewed on mobile screens.</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default NullResponsiveWrapper;
