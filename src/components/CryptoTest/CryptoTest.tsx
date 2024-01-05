// import axios from "axios";

// // Replace this key with a secure one
// const secretKey = "your-secret-key";

// interface RequestData {
//   // Define your JSON request body structure
//   customerId: string;
//   // ... other properties
// }

// const CryptoTest = async (data: RequestData): Promise<void> => {
//   try {
//     // Encrypt the data before sending
//     const encryptedData = encryptData(JSON.stringify(data));

//     // Make the API call with the encrypted data using Axios
//     const response = await axios.post("https://api-gateway.digital.idb-digitallabs.com/beneficiary-management/api/beneficiaries/v1/get", {
//       encryptedData,
//     });

//     // Handle the response and decrypt if needed
//     const responseData = response.data;
//     const decryptedData = decryptData(responseData.encryptedData);

//     // Use the decrypted data as needed
//     console.log("Decrypted Data:", JSON.parse(decryptedData));
//   } catch (error) {
//     console.error("API Error:", error);
//   }
// };

// const requestData: RequestData = {
//     customerId: "123456789"
//     // ... other properties
//   };

// CryptoTest(requestData);

// export default CryptoTest;
