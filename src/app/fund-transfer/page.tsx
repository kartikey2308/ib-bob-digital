import BeneficiaryList from "@/components/table/BeneficiaryList";
import RecentTransactionTable from "@/components/table/RecentTransactionTable";
import ServicesCollapsableDiv from "@/components/FundTransferServices/FundTransferServices";
import BobCards from "@/components/BobCards/BobCards";
import Layout from "../dashboard/layout";
import { decryptData, encryptData } from "@/common/utils/cryptoUtils";

export default function Page() {
  // interface RequestData {
  //   // Define your JSON request body structure
  //   customerId: string;
  //   // ... other properties
  // }
  
  // const makeApiCall = async (data: RequestData): Promise<void> => {
  //   try {
  //     // Encrypt the data before sending
  //     const encryptedData = encryptData(JSON.stringify(data));
  
  //     // Make the API call with the encrypted data
  //     const response = await fetch('https://api-gateway.digital.idb-digitallabs.com/beneficiary-management/api/beneficiaries/v1/get', {
  //       method: 'POST',
  //       headers: {
  //         'content-Type': 'application/json',
  //         'request-id': 'request-id',
  //         'correlation-id':'correlation-id',
  //         'channel-id':'IB',
  //         'login-id':'login-id',
  //         'app-version':'1.0.0',
  //         'screen-id':'screen-id',
  //         'session-id':'session-id',
  //         'host-ip':'1.0.0',
  //         'location':'location',
  //         'timezone':'timezone'
  //       },
  //       body: JSON.stringify({ encryptedData }),
  //     });
  
  //     //Handle the response and decrypt if needed
  //     const responseData = await response.json();
  //     const decryptedData = decryptData(responseData.encryptedData);
  
  //     //Use the decrypted data as needed
  //     console.log('Decrypted Data:', JSON.parse(decryptedData));
  //   } catch (error) {
  //     console.error('API Error:', error);
  //   }
  // };
  
  // //Example usage
  // const requestData: RequestData = {
  //   customerId: "123456789",
  //   //... other properties
  // };
  
  // makeApiCall(requestData);
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

