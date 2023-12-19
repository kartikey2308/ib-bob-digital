import React from "react";
import Link from "next/link";
import { SideBarItem } from "@/common/types/side-nav-type";
import Image from "next/image";

export const MenuItem = ({
  item,
  toggleCollapse,
}: {
  item: SideBarItem;
  toggleCollapse: boolean;
}) => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap">
      <Link href={item.path}>
        <div className="flex py-3 items-center w-full h-full">
          <Image src={item.icon} height={22} width={22} alt=""/>
          {!toggleCollapse && (
            <span className="text-base font-semibold ml-4">
              {item.title}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};
