"use client";
import DashboardHeader from "../../components/header/DashboardHeader";
import SideBar from "../../components/sidebar/SideBar";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "react-feather";
import Card from "@idb-dab/ui-core/dist/components/Card/Card";

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
        <div className="bg-white min-h-screen h-1/7 flex-1 flex-col px-2 py-4 text-white border-1 border-dashed w-5/12 mt-6 mr-80">
          <div className="flex flex-row">
            <Card className="flex-1 bg-secondary-900 h-40 w-75">
              <div className="grid grid-cols-4">
                <div className="col-span-1 flex justify-center mt-5">
                  <Card.Icon
                    src="/assets/images/fund_beneficary.svg"
                    alt="fund_beneficary"
                    className="h-9 w-9 mt-4"
                  />
                </div>
                <div className="col-span-3">
                  <Card.Header className="px-0 flex text-black font-bold items-center text-left text-xl mt-7">
                    Transfer to beneficary
                  </Card.Header>
                  <Card.Body className="px-0 pr-8 text-black flex items-center text-left text-lg">
                    Transfer money to your added beneficiaries
                  </Card.Body>
                </div>
              </div>
            </Card>
            <Card className="flex-1 bg-secondary-900 h-40 w-75 ml-4">
              <div className="grid grid-cols-4">
                <div className="col-span-1 flex justify-center mt-5">
                  <Card.Icon
                    src="/assets/images/fund_quick_transfer.svg"
                    alt="fund_quick_transfer"
                    className="h-12 w-12 mt-2 ml-2 mb-0"
                  />
                </div>
                <div className="col-span-3">
                  <Card.Header className="px-0 flex text-black font-bold items-center text-left text-xl mt-7">
                    Quick transfer
                  </Card.Header>
                  <Card.Body className="px-0 pr-8 text-black flex items-center text-left text-lg">
                    Send money to any account, without adding beneficiary
                  </Card.Body>
                </div>
              </div>
            </Card>
            <Card className="flex-1 bg-secondary-900 h-40 w-75 ml-4">
              <div className="grid grid-cols-4">
                <div className="col-span-1 flex justify-center mt-5">
                  <Card.Icon
                    src="/assets/images/fund_bob_account.svg"
                    alt="fund_bob_account"
                    className="h-10 w-10 mt-4"
                  />
                </div>
                <div className="col-span-3">
                  <Card.Header className="px-0 flex text-black font-bold items-center text-left text-xl mt-7">
                    My bob accounts
                  </Card.Header>
                  <Card.Body className="px-0 pr-12 text-black flex items-center text-left text-lg">
                    Transfer money to your own bob accounts
                  </Card.Body>
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
                      View less
                    </span>
                    <ChevronUp size={30} color="#1F3C66" />
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-secondary-300 text-xl font-bold">
                      View more
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
                  <div
                    key={index}
                    className="w-1/6 flex flex-col items-center mb-5 mt-5"
                  >
                    <Image
                      src={item.icon}
                      height={40}
                      alt="fund_beneficary"
                      width={40}
                    />
                    <p className="text-secondary-300 font-semibold text-lg ml-2 text-center">
                      {item.text}
                    </p>
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
