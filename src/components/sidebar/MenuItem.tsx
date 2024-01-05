import React from "react";
import Link from "next/link";
import { SideBarItem } from "@/common/types/side-nav-type";
import Image from "next/image";

export const MenuItem = ({ item }: { item: SideBarItem }) => {
  return (
    <div className="cursor-pointer">
      <Link href={item.path}>
        <div className="flex pt-5 items-center">
          <Image src={item.icon} height={24} width={24} alt="" />
          <span className="text-sm font-semibold ml-4">{item.title}</span>
        </div>
      </Link>
    </div>
  );
};
