import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AlertModal} from './AlertModal';

export const Child2 = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleAlertConfirm = () => {
    setAlertVisible(false);
  };

  const handlePress = () => {
    const timestamp = Date.now();
    if (timestamp % 2 === 0) {
      setAlertTitle('even');
      setAlertMessage(`timestamp is even!: ${timestamp}`);
    } else {
      setAlertTitle('odd');
      setAlertMessage(`timestamp is odd!: ${timestamp}`);
    }
    setAlertVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text style={styles.text}>Child 2</Text>
      </TouchableOpacity>
      <AlertModal
        title={alertTitle}
        message={alertMessage}
        visible={isAlertVisible}
        onConfirm={handleAlertConfirm}
      />
    </>
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
