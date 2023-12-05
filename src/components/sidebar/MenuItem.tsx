import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { SideBarItem } from "@/common/types/side-nav-type";

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
        <div className="flex py-4 px-3 items-center w-full h-full">
          <div style={{ width: "2.5rem" }}>{item.icon}</div>
          {!toggleCollapse && (
            <span className="text-md  text-text-light font-[Airbnb Cereal App]">
              {item.title}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};
