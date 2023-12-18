import React from "react";
import { Beneficiaries } from "@/common/constants/Beneficiaries";
import { Beneficiary } from "@/common/types/beneficiary-type";
import Table from "@idb-dab/ui-core/dist/components/Table/Table";
import Image from "next/image";
import { ChevronRight } from "react-feather";

const BeneficiaryList: React.FC = () => {
  return (
    <div className="p-8 mr-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-black font-bold text-2xl mt-2">Beneficiary</h1>
        <button className="flex items-center">
          <span className="mt-2 text-secondary-300 text-xl font-bold ">
            Manage
          </span>
          <ChevronRight size={30} color="#1F3C66" className="mt-2" />
        </button>
      </div>
      <Table className="text-black border-2 rounded-sm border-neutral-900 mt-5">
        <Table.Tbody>
          {Beneficiaries.map((beneficiary: Beneficiary, index: number) => (
            <Table.Tr key={index} className="border-neutral-900">
              <Table.Td className="flex flex-row my-3 ml-2">
                <Image
                  src={beneficiary.icon}
                  height={45}
                  width={45}
                  alt="bank_icon"
                  className="mr-3"
                />
                <div>
                  <text className="text-base font-semibold">
                    {beneficiary.name}
                  </text>
                  <br />
                  <div className="text-secondary-500 text-xs">
                    {beneficiary.accountNumber}
                  </div>
                </div>
              </Table.Td>
              <Table.Td className={`text-right`}>
                {beneficiary.favourite === true && (
                  <Image
                    src="/assets/images/favourite_icon.svg"
                    height={25}
                    width={25}
                    alt="favourite_beneficiary"
                  />
                )}
                {beneficiary.favourite === false && (
                  <Image
                    src="/assets/images/unfavourite_icon.svg"
                    height={25}
                    width={25}
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
