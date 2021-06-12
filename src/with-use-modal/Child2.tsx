import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAlertModal} from './useAlertModal';

export const Child2 = () => {
  const alertModal = useAlertModal();

  const handlePress = () => {
    const timestamp = Date.now();
    let title = '';
    let message = '';
    if (timestamp % 2 === 0) {
      title = 'even';
      message = `timestamp is even!: ${timestamp}`;
    } else {
      title = 'odd';
      message = `timestamp is odd!: ${timestamp}`;
    }
    alertModal.show({
      title,
      message,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
