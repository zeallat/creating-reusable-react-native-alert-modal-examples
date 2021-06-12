import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAlertModal} from './useAlertModal';

export const Child3 = () => {
  const alertModal = useAlertModal();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        alertModal.show({
          title: 'Congratulations🎉',
          message: 'Sign up is complete!',
        })
      }>
      <Text style={styles.text}>Child 3</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e76f51',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
