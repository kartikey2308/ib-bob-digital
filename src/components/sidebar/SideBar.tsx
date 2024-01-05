"use client";
import React, { useState } from "react";
import {
  SIDEBAR_ITEMS,
  SIDEBAR_SERVICES,
} from "@/common/constants/SideBarItems";
import { MenuItem } from "./MenuItem";
import { SideBarItem } from "@/common/types/side-nav-type";

export default function SideBar() {
  const [activeTab, setActiveTab] = useState<string>('Home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col">
      <div className="pb-4 flex justify-between flex-col w-60 px-10 pt-4 items-start mt-1 text-textColor-rgba-60">
        {SIDEBAR_ITEMS.map((item: SideBarItem, index: number) => {
          return <MenuItem key={index} item={item} />;
        })}
      </div>
      <hr className={"mt-5 ml-4 mr-5 border-neutral-900"}></hr>
      <div className={"flex justify-between flex-col w-60 px-10 items-start text-xs mt-7 text-textColor-rgba-60 font-medium"}>
        Services
      </div>
      <div className="pb-4 flex justify-between flex-col w-60 px-10 items-start text-textColor-rgba-60">
        {SIDEBAR_SERVICES.map((item: SideBarItem, index: number) => {
          return <MenuItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
