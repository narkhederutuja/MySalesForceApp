import { oauth, forceClient } from 'react-native-force';

export const authenticateUser = async () => {
  return new Promise((resolve, reject) => {
    oauth.authenticate(
      (authSuccess) => resolve(authSuccess),
      (authError) => reject(authError)
    );
  });
};

export const fetchSalesforceData = async () => {
  try {
    const soqlQuery = "SELECT Name, Id FROM Contact LIMIT 10";
    const response = await forceClient.query(soqlQuery);
    return response.records;
  } catch (error) {
    console.error("Error fetching Salesforce data:", error);
    throw error;
  }
};
