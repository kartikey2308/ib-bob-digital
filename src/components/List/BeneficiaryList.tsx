import React from "react";
import { Beneficiaries } from "@/common/constants/Beneficiaries";
import { Beneficiary } from "@/common/types/beneficiary-type";
import Table from "@idb-dab/ui-core/dist/components/Table/Table";

const BeneficiaryList: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-black font-bold text-[16px] mt-2">Beneficiary</h1>
      <Table className="text-black border-2 rounded-sm border-neutral-900 mt-5">
        <Table.Tbody>
          {Beneficiaries.map((beneficiary: Beneficiary, index: number) => (
            <Table.Tr key={index} className="border-neutral-900">
              <Table.Td className="flex flex-row my-4">
                <div className="mr-4">Icons</div>
                <div>
                  <text className="text-xl font-semibold">
                    {beneficiary.name}
                  </text>
                  <br />
                  <div className="text-secondary-500">
                    {beneficiary.accountNumber}
                  </div>
                </div>
              </Table.Td>
              <Table.Td className={`text-right`}>
                <span className="text-2xl font-bold">favourite</span>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default BeneficiaryList;
