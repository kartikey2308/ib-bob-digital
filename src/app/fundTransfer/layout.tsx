"use client";
import { Card } from "@idb-dab/ui-core";
import DashboardHeader from "../../components/header/DashboardHeader";
import SideBar from "../../components/sidebar/SideBar";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "react-feather";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  const services = [
    {
      text: "Schedule transactions",
      icon: "/assets/images/fund_service_schedule.svg",
    },
    {
      text: "Favorite transactions",
      icon: "/assets/images/fund_service_favourite.svg",
    },
    {
      text: "Manage templates",
      icon: "/assets/images/fund_service_manage.svg",
    },
    {
      text: "Initiate from templates",
      icon: "/assets/images/fund_service_initiate.svg",
    },
    {
      text: "View upcoming transactions",
      icon: "/assets/images/fund_service_upcoming.svg",
    },
    {
      text: "To virtual accounts",
      icon: "/assets/images/fund_service_virtual.svg",
    },
    {
      text: "Institutional fee",
      icon: "/assets/images/fund_service_institutional.svg",
    },
    { text: "MMID transfer", icon: "/assets/images/fund_service_mmid.svg" },
  ];

  return (
    <div>
      <DashboardHeader />
      <div className="h-screen flex flex-row justify-start">
        <SideBar />
        <div className="bg-white min-h-screen h-1/7 flex-1 flex-col p-4 text-white border-1 border-dashed w-5/12 mt-6 mr-80">
          <div className="flex flex-row">
            <Card className="flex-1 bg-secondary-900 border-2 h-40 w-75">
              <div className="grid grid-cols-6">
                <div className="col-span-2 flex items-center justify-center">
                  <Image
                    src="/assets/images/fund_beneficary.svg"
                    height={35}
                    alt="fund_beneficary"
                    width={35}
                  />
                </div>
                <div className="col-span-4">
                  <div className="flex text-black font-bold items-center text-right text-xl mt-10">
                    Transfer to beneficary
                  </div>
                  <div className="text-black flex items-center text-left text-lg">
                    Transfer money to your added beneficiaries
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex-1 bg-secondary-900 border-2 h-40 w-75 ml-5">
              <div className="grid grid-cols-6">
                <div className="col-span-2 flex items-center justify-center">
                  <Image
                    src="/assets/images/fund_quick_transfer.svg"
                    height={35}
                    alt="fund_beneficary"
                    width={35}
                  />
                </div>
                <div className="col-span-4">
                  <div className="flex text-black font-bold items-center text-right text-xl mt-10">
                    Quick transfer
                  </div>
                  <div className="text-black flex items-center text-left text-lg">
                    Send money to any account, without adding beneficiary
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex-1 bg-secondary-900 border-2 h-40 w-75 ml-5">
              <div className="grid grid-cols-6">
                <div className="col-span-2 flex items-center justify-center">
                  <Image
                    src="/assets/images/fund_bob_account.svg"
                    height={35}
                    alt="fund_beneficary"
                    width={35}
                  />
                </div>
                <div className="col-span-4">
                  <div className="flex text-black font-bold items-center text-right text-xl mt-10">
                    My bob accounts
                  </div>
                  <div className="text-black flex items-center text-left text-lg">
                    Transfer money to your own bob accounts
                  </div>
                </div>
              </div>
            </Card>
            {children}
          </div>
          <div className="h-3/7 flex flex-col mt-12">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-black text-xl font-bold">Services</h2>
              <button
                className="flex items-center text-color- rounded-md"
                onClick={handleToggle}
              >
                {isExpanded ? (
                  <>
                    <span className="ml-2 text-secondary-300 text-xl font-bold ">
                      View Less
                    </span>
                    <ChevronUp size={30} color="#1F3C66" />
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-secondary-300 text-xl font-bold">
                      View More
                    </span>
                    <ChevronDown size={30} color="#1F3C66" />
                  </>
                )}
              </button>
            </div>
            <div
              className={`border border-neutral-900 p-4 mt-6 rounded ${
                isExpanded ? "h-70" : "h-35"
              } w-full flex flex-wrap overflow-hidden`}
            >
              {services
                .slice(0, isExpanded ? services.length : 6)
                .map((item, index) => (
                  <div key={index} className="w-1/6 flex flex-col items-center mb-5 mt-5">
                    <Image
                    src={item.icon}
                    height={40}
                    alt="fund_beneficary"
                    width={40}
                  />
                    <p className="text-secondary-300 font-semibold text-lg ml-2 text-center">{item.text}</p>
                  </div>
                ))}
            </div>
            {children}
          </div>
          <div className="h-3/7 flex mt-14">
            <h2 className="text-black text-xl font-bold">Recent Transaction</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
