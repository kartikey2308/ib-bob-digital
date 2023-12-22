"use client";
import React from "react";
import classNames from "classnames";
import Image from "next/image";
import {
  SIDEBAR_ITEMS,
  SIDEBAR_SERVICES,
} from "@/common/constants/SideBarItems";
import { MenuItem } from "./MenuItem";
import { SideBarItem } from "@/common/types/side-nav-type";

export default function SideBar() {
  const [toggleCollapse, setToggleCollapse] = React.useState<boolean>(true);
  const [isCollapsible, setIsCollapsible] = React.useState<boolean>(true);

  const wrapperClasses = classNames(
    "h-screen pb-4 bg-light flex justify-between flex-col",
    {
      ["w-60 px-10 pt-10"]: !toggleCollapse,
      ["w-20 pl-4 pt-12"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "rounded bg-light-lighter absolute right-190"
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
          <div className="flex items-center">
            {isCollapsible && (
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <Image
                  src="/assets/images/sidebar-accounts.svg"
                  height={22}
                  width={22}
                  alt=""
                />
              </button>
            )}
            <span
              className={classNames(
                " font-semibold text-sm text-textColor-rgba-60 ml-10 ",
                {
                  hidden: toggleCollapse,
                }
              )}
            >
              Accounts
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start mt-1 text-textColor-rgba-60">
          {SIDEBAR_ITEMS.map((item: SideBarItem, index: number) => {
            return (
              <MenuItem
                key={index}
                item={item}
                toggleCollapse={toggleCollapse}
              />
            );
          })}
        </div>
        <hr
          className={`${
            !toggleCollapse ? "mt-5 border-1 border-1 border-neutral-900" : "hidden mt-10"
          }`}
        ></hr>
        <div
          className={`${
            !toggleCollapse
              ? "text-xs mt-6 text-textColor-rgba-60 font-medium"
              : "hidden"
          }`}
        >
          Services
        </div>
        <div className="flex flex-col items-start mt-3 text-textColor-rgba-60">
          {SIDEBAR_SERVICES.map((item: SideBarItem, index: number) => {
            return (
              <MenuItem
                key={index}
                item={item}
                toggleCollapse={toggleCollapse}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
