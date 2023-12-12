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
                    <span className="ml-2 text-secondary-300 text-xl font-bold ">View Less</span>
                    <ChevronUp size={30} color="#1F3C66"/>
                  </>
                ) : (
                  <>
                    <span className="ml-2 text-secondary-300 text-xl font-bold">View More</span>
                    <ChevronDown size={30} color="#1F3C66"/>
                  </>
                )}
              </button>
            </div>
            <div
              className={`border border-neutral-900 p-4 mt-6 rounded ${
                isExpanded ? "h-80" : "h-40"
              } w-full`}
            ></div>
            {children}
          </div>
          <div className="h-3/7 flex mt-14">
            <h2 className="text-black text-xl font-bold">
              Recent Transaction
            </h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
