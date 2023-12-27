"use client";
import DashboardHeader from "../../components/Header/Header";
import SideBar from "../../components/sidebar/SideBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-row justify-start">
        <div >
          <SideBar />
        </div>
        {children}
      </div>
    </div>
  );
}
