import DashboardHeader from "../../components/header/DashboardHeader"
import SideBar from "../../components/sidebar/SideBar"
import React from 'react';

export default function Layout({ children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
        <DashboardHeader/>
        <div className = "h-screen flex flex-row justify-start">
        <SideBar/>
        <div className ="bg-[#EEFFF6] flex-1 p-4 text-white border-1 border-dashed w-80">
        {children}
        </div>
        </div>
        </div>
    )
}