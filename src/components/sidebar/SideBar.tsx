"use client";
import React from "react";
import classNames from "classnames";
import CollapseIcon from "../icons/CollapseIcon";
import { SIDEBAR_ITEMS } from "@/common/constants/SideBarItems";
import { MenuItem } from "./MenuItem";
import { SideBarItem } from "@/common/types/side-nav-type";



export default function SideBar() {
  const [toggleCollapse, setToggleCollapse] = React.useState<boolean>(true);
  const [isCollapsible, setIsCollapsible] = React.useState<boolean>(true);



  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-190",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-l ga-p-4">
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <CollapseIcon />
              </button>
            )}
            <span
              className={classNames(" text-xl font-medium text-textColor-rgba-60 ml-12 ", {
                hidden: toggleCollapse,
              })}
            >
              Accounts
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start mt-4 text-textColor-rgba-60">
          {SIDEBAR_ITEMS.map((item:SideBarItem, index: number) => {
            return (
              <MenuItem key={index} item={item} toggleCollapse={toggleCollapse}/>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
