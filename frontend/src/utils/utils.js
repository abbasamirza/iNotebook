import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import apiResponse from "../constants/apiResponses";

export const getToken = () => {
  return Cookies.get("authToken");
};

export const encryptObject = (value) => {
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  if (value && secretKey) {
    try {
      // Convert objects to a JSON string
      const stringValue =
        typeof value === "object" ? JSON.stringify(value) : value.toString();

      const encryptedValue = CryptoJS.AES.encrypt(
        stringValue,
        secretKey
      ).toString();

      return encryptedValue;
    } catch (error) {
      console.error("Error encrypting object: ", error);

      return null;
    }
  }

  return null;
};

export const decryptObject = (encryptedValue) => {
  const secretKey = process.env.REACT_APP_SECRET_KEY;

  if (encryptedValue && secretKey) {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedValue, secretKey);
      const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);

      // Try to parse JSON if it's a valid object string, otherwise return as a string
      try {
        return JSON.parse(decryptedValue);
      } catch {
        return decryptedValue; // Return as string if not valid JSON
      }
    } catch (error) {
      console.error("Error decrypting object: ", error);

      return null;
    }
  }

  return null;
};

export const createSession = (user, authToken) => {
  const encryptedUser = encryptObject(user);

  if (encryptedUser) {
    Cookies.set("user", encryptedUser);
  }

  if (authToken) {
    Cookies.set("authToken", authToken);
  }
};

export const deleteSession = () => {
  Cookies.remove("user");
  Cookies.remove("authToken");
};

export const unsuccessfulAPIResult = (result) => {
  return !result || result.status !== apiResponse.success;
};

export const isUserLoggedIn = () => {
  return !!getToken();
};
