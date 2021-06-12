import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAlertModal} from './useAlertModal';

export const Child1 = () => {
  const alertModal = useAlertModal();

  const handlePress = () => {
    alertModal.show({
      title: 'Good morning 😊',
      message: 'Have a cup of coffee!',
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
