import crypto from 'crypto';
import * as expoRandom from 'expo-crypto';

// Replace this key with a secure one
const secretKey = 'your-secret-key';

// Function to encrypt data
const encryptData = (data: string): string => {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(data, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Function to decrypt data
const decryptData = (encryptedData: string): string => {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};

export { encryptData, decryptData };
