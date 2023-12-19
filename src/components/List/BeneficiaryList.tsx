import React from "react";
import { Beneficiaries } from "@/common/constants/Beneficiaries";
import { Beneficiary } from "@/common/types/beneficiary-type";
import Table from "@idb-dab/ui-core/dist/components/Table/Table";
import Image from "next/image";
import { ChevronRight } from "react-feather";

const BeneficiaryList: React.FC = () => {
  return (
    <div className="p-8 mr-2">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-black font-bold text-base">Beneficiary</h1>
        <button className="flex items-center">
          <span className="text-secondary-300 text-sm font-bold ">
            Manage
          </span>
          <ChevronRight size={17} color="#1F3C66" className="mt-1" />
        </button>
      </div>
      <Table className="text-black border rounded-sm border-neutral-900 mt-4">
        <Table.Tbody>
          {Beneficiaries.map((beneficiary: Beneficiary, index: number) => (
            <Table.Tr key={index} className="border-neutral-900">
              <Table.Td className="flex flex-row my-1 ml-2">
                <Image
                  src={beneficiary.icon}
                  height={32}
                  width={32}
                  alt="bank_icon"
                  className="mr-3"
                />
                <div>
                  <text className="text-xs font-semibold">
                    {beneficiary.name}
                  </text>
                  <br />
                  <div className="text-secondary-500 text-[10px] -mt-1">
                    {beneficiary.accountNumber}
                  </div>
                </div>
              </Table.Td>
              <Table.Td className={`text-right`}>
                {beneficiary.favourite === true && (
                  <Image
                    src="/assets/images/favourite_icon.svg"
                    height={20}
                    width={20}
                    alt="favourite_beneficiary"
                  />
                )}
                {beneficiary.favourite === false && (
                  <Image
                    src="/assets/images/unfavourite_icon.svg"
                    height={20}
                    width={20}
                    alt="unfavourite_beneficiary"
                  />
                )}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default BeneficiaryList;
