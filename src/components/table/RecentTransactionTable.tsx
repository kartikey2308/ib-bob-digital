"use client";
import { RecentTransactions } from "@/common/constants/RecentTransaction";
import { RecentTransaction } from "@/common/types/recentTransaction-type";
import Table from "@idb-dab/ui-core/dist/components/Table/Table";
import Image from "next/image";
import { ChevronRight } from "react-feather";

const RecentTransactionTable: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-black text-base font-bold">Recent Transaction</h2>
        <button className="flex items-center">
          <span className="ml-2 text-secondary-300 text-sm font-bold ">
            View all
          </span>
          <ChevronRight size={17} color="#1F3C66" className="mt-1" />
        </button>
      </div>
      <Table className="text-black border rounded-sm border-neutral-900 mt-5 px-3">
        <Table.Tbody>
          {RecentTransactions.map(
            (transaction: RecentTransaction, index: number) => (
              <Table.Tr key={index} className="border-neutral-900">
                <Table.Td className="flex flex-row my-2">
                  <div className="mr-4">
                    {transaction.paymentType === "credit" && (
                      <Image
                        src="/assets/images/recent_transaction_credit.svg"
                        height={37}
                        width={37}
                        alt="credit_fund"
                      />
                    )}
                    {transaction.paymentType === "debt" && (
                      <Image
                        src="/assets/images/recent_transaction_debt.svg"
                        height={37}
                        width={37}
                        alt="credit_fund"
                      />
                    )}
                  </div>
                  <div>
                    <text className="text-sm font-medium">
                      {transaction.name}
                    </text>
                    <br />
                    <div className="text-secondary-500 text-xs">
                      {transaction.transactionDate}
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <div className="flex flex-row text-xs">
                    <div className="bg-secondary-800 py-2 px-5 rounded mr-2">
                      {transaction.paymentMode}
                    </div>
                    <div className="bg-secondary-1000 py-2 px-5 rounded">
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
                  <span className="text-lg font-bold">
                    {transaction.paymentType === "credit" && "+"}
                    {transaction.paymentType === "debt" && "-"}₹
                    {Math.floor(transaction.amount).toLocaleString("en-US")}
                  </span>
                  .
                  <span className="text-xs">{transaction.amount.toFixed(2).split(".")[1]}</span>
                </Table.Td>
              </Table.Tr>
            )
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default RecentTransactionTable;
