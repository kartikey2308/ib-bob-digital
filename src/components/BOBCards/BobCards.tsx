"use client";
import IBCard from "ui-lib/dist/components/IBCard/IBCard";

const BobIBCards: React.FC = () => {
    return (
        <div className="flex flex-row">
        <IBCard className="flex-1 bg-secondary-900 h-1/3 w-80" size="sm">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex justify-center mt-4">
              <IBCard.Icon
                src="/assets/images/fund_beneficary.svg"
                alt="fund_beneficary"
              />
            </div>
            <div className="col-span-3">
              <IBCard.Header className="px-0 flex text-black font-bold items-center text-left text-sm mt-6">
                Transfer to beneficary
              </IBCard.Header>
              <IBCard.Body className="px-0 pr-8 text-secondary-400 flex items-center text-left text-xs">
                Transfer money to your added beneficiaries
              </IBCard.Body>
            </div>
          </div>
        </IBCard>
        <IBCard className="flex-1 bg-secondary-900 h-1/3 w-80 ml-3">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex justify-center mt-4">
              <IBCard.Icon
                src="/assets/images/fund_quick_transfer.svg"
                alt="fund_quick_transfer"
                className="h-12 w-12 mt-2 ml-2 mb-0"
              />
            </div>
            <div className="col-span-3">
              <IBCard.Header className="px-0 flex text-black font-bold items-center text-left text-sm mt-6">
                Quick transfer
              </IBCard.Header>
              <IBCard.Body className="px-0 text-secondary-400 flex items-center text-left text-xs">
                Send money to any account, without adding beneficiary
              </IBCard.Body>
            </div>
          </div>
        </IBCard>
        <IBCard className="flex-1 bg-secondary-900 h-1/3 w-80 ml-3">
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex justify-center mt-4">
              <IBCard.Icon
                src="/assets/images/fund_bob_account.svg"
                alt="fund_bob_account"
                className="h-10 w-10 mt-4"
              />
            </div>
            <div className="col-span-3">
              <IBCard.Header className="px-0 flex text-black font-bold items-center text-left text-sm mt-6">
                My bob accounts
              </IBCard.Header>
              <IBCard.Body className="px-0 pr-10 text-secondary-400 flex items-center text-left text-xs">
                Transfer money to your own bob accounts
              </IBCard.Body>
            </div>
          </div>
        </IBCard>
      </div>
    );
  };
  
  export default BobIBCards;