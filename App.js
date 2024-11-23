import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactList from './android/app/src/components/ContactList';
import FetchButton from './android/app/src/components/FetchButton';
import { authenticateUser, fetchSalesforceData } from './android/app/src/services/SalesForce';
import { storeDataLocally, getStoredData } from './android/app/src/utils/storage';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loadStoredContacts = async () => {
      const storedContacts = await getStoredData('contacts');
      if (storedContacts) {
        setContacts(storedContacts);
      }
    };
    loadStoredContacts();
  }, []);

  const handleFetchContacts = async () => {
    try {
      await authenticateUser();
      const fetchedContacts = await fetchSalesforceData();
      setContacts(fetchedContacts);
      await storeDataLocally('contacts', fetchedContacts);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FetchButton onPress={handleFetchContacts} />
      <ContactList contacts={contacts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
});

export default App;
