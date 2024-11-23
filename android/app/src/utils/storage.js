import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataLocally = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log(`Data stored under key: ${key}`);
  } catch (error) {
    console.error(`Error storing data: ${error}`);
  }
};

export const getStoredData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error retrieving data: ${error}`);
  }
};
