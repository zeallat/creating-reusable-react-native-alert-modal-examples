import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AlertModal} from './AlertModal';

export const Child1 = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleAlertConfirm = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setAlertVisible(true)}>
        <Text style={styles.text}>Child 1</Text>
      </TouchableOpacity>
      <AlertModal
        title={'Good morning 😊'}
        message={'Have a cup of coffee!'}
        visible={isAlertVisible}
        onConfirm={handleAlertConfirm}
      />
    </>
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
