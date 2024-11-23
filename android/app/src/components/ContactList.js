import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const ContactList = ({ contacts }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.Id}
      renderItem={({ item }) => (
        <View style={styles.contactItem}>
          <Text style={styles.contactName}>{item.Name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contactItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
  },
});

export default ContactList;
