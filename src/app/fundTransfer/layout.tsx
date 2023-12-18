"use client";
import DashboardHeader from "../../components/header/DashboardHeader";
import SideBar from "../../components/sidebar/SideBar";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown, ChevronRight } from "react-feather";
import Card from "@idb-dab/ui-core/dist/components/Card/Card";
import Table from "@idb-dab/ui-core/dist/components/Table/Table";

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
      text: `Initiate from templates`,
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

  const recentTransaction = [
    {
      name: "Prasad Nair",
      transactionDate: "22 May 2023, 6:30pm",
      paymentMode: "IMPS",
      remarks: "Salary",
      paymentType: "credit",
      amount: 50000.0,
    },
    {
      name: "Amazon Inc",
      transactionDate: "22 May 2023, 6:30pm",
      paymentMode: "UPI",
      remarks: "Shopping",
      paymentType: "debt",
      amount: 10000.0,
    },
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
                  />
                </div>
                <div className="col-span-3">
                  <Card.Header className="px-0 flex text-black font-bold items-center text-left text-xl mt-7">
                    Transfer to beneficary
                  </Card.Header>
                  <Card.Body className="px-0 pr-8 text-secondary-400 flex items-center text-left text-lg">
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
                  <Card.Body className="px-0 pr-5 text-secondary-400 flex items-center text-left text-lg">
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
                  <Card.Body className="px-0 pr-12 text-secondary-400 flex items-center text-left text-lg">
                    Transfer money to your own bob accounts
                  </Card.Body>
                </div>
              </div>
            </Card>
            {children}
          </div>
          <div className="h-3/7 flex flex-col mt-12">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-black text-2xl font-bold">Services</h2>
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
              className={`border-2 border-neutral-900 p-4 mt-6 rounded ${
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
                    <p className="text-secondary-300 font-semibold text-xl text-center mt-3 px-3">
                      {item.text}
                    </p>
                  </div>
                ))}
            </div>
            {children}
          </div>
          <div className="h-3/7 flex flex-col mt-14">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-black text-2xl font-bold">
                Recent Transaction
              </h2>
              <button className="flex items-center text-color- rounded-md">
                <span className="ml-2 text-secondary-300 text-xl font-bold ">
                  View all
                </span>
                <ChevronRight size={30} color="#1F3C66" />
              </button>
            </div>
            <Table className="text-black border-2 border-neutral-900 mt-6 px-3">
              <Table.Tbody>
                {recentTransaction.map((transaction, index) => (
                  <Table.Tr key={index}>
                    <Table.Td className="flex flex-row my-4">
                      <div className="mr-4">
                        {transaction.paymentType === "credit" && (
                          <Image
                            src="/assets/images/recent_transaction_credit.svg"
                            height={50}
                            width={50}
                            alt="credit_fund"
                          />
                        )}
                        {transaction.paymentType === "debt" && (
                          <Image
                            src="/assets/images/recent_transaction_debt.svg"
                            height={50}
                            width={50}
                            alt="credit_fund"
                          />
                        )}
                      </div>
                      <div>
                        <text className="text-xl font-semibold">
                          {transaction.name}
                        </text>
                        <br />
                        <div className="text-secondary-500">
                          {transaction.transactionDate}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td>
                      <div className="flex flex-row font-normal text-base">
                        <div className="bg-secondary-800 py-2 px-5 rounded-md mr-2">
                          {transaction.paymentMode}
                        </div>
                        <div className="bg-secondary-1000 py-2 px-5 rounded-md">
                          {transaction.remarks}
                        </div>
                      </div>
                    </Table.Td>
                    <Table.Td
                      className={`text-right ${
                        transaction.paymentType === "credit"
                          ? "text-secondary-600"
                          : "text-secondary-700"
                      }`}
                    >
                      <span className="text-2xl font-bold">
                        {transaction.paymentType === "credit" && "+"}
                        {transaction.paymentType === "debt" && "-"}₹
                        {Math.floor(transaction.amount).toLocaleString("en-US")}
                      </span>
                      .{transaction.amount.toFixed(2).split(".")[1]}
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
