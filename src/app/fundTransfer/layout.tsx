"use client";
import DashboardHeader from "../../components/header/DashboardHeader";
import SideBar from "../../components/sidebar/SideBar";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "react-feather";
import Card from "@idb-dab/ui-core/dist/components/Card/Card";
import BeneficiaryList from "@/components/List/BeneficiaryList";
import RecentTransactionTable from "@/components/table/RecentTransactionTable";
import ServicesCollapsableDiv from "@/components/collapsableDiv/ServicesCollapsableDiv";
import BobCards from "@/components/card/BobCards";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardHeader />
      <div className="h-screen w-screen flex flex-row justify-start">
        <div>
          <SideBar />
        </div>
        <div className="bg-white min-h-screen w-3/4 h-1/7 flex-1 flex-col py-4 text-white border-1 border-dashed w-5/12 mt-6 ">
          <BobCards />
          <div className="h-3/7 flex flex-col mt-10">
            <ServicesCollapsableDiv />
          </div>
          <div className="h-3/7 flex flex-col mt-10">
            <RecentTransactionTable />
          </div>
        </div>
        <div className="text-black w-1/4">
          <BeneficiaryList />
        </div>
      </div>
    </div>
  );
}
