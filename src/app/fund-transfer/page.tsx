import BeneficiaryList from "@/components/Table/BeneficiaryList";
import RecentTransactionTable from "@/components/Table/RecentTransactionTable";
import ServicesCollapsableDiv from "@/components/FundTransferServices/FundTransferServices";
import BobCards from "@/components/BOBCards/BobCards";
import Layout from "../dashboard/layout";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Layout>
        <div className="bg-white h-screen w-screen w-2/4 h-1/7 flex-1 flex-col py-4 text-white border-1 border-dashed w-5/12 mt-6 ">
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
      </Layout>
    </div>
  );
}
