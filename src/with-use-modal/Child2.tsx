import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAlertModal} from './useAlertModal';

export const Child2 = () => {
  const alertModal = useAlertModal();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        alertModal.show({
          title: '⚠️Alert',
          message: 'Subscription expires in one week',
        })
      }>
      <Text style={styles.text}>Child 2</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4a261',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
