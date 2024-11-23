import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const FetchButton = ({ onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Fetch Contacts" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
});

export default FetchButton;
