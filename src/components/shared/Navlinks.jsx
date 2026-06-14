"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = ({ href, children }) => {
  const pathname = usePathname();
  console.log(pathname, "Pathname");
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`${isActive && "border-b-2 border-[#3abcd3] text-[#6ad8f1]"}`}
    >
      {children}
    </Link>
  );
};

export default Navlinks;
