import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAlertModal} from './useAlertModal';

export const Child1 = () => {
  const alertModal = useAlertModal();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        alertModal.show({
          title: 'Good morning 😊',
          message: 'Have a cup of coffee!',
        })
      }>
      <Text style={styles.text}>Child 1</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#264653',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
