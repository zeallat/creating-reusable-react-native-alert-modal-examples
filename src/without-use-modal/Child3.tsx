import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AlertModal} from './AlertModal';

export const Child3 = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleAlertConfirm = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setAlertVisible(true)}>
        <Text style={styles.text}>Child 3</Text>
      </TouchableOpacity>
      <AlertModal
        title={'Congratulations🎉'}
        message={'Sign up is complete!'}
        visible={isAlertVisible}
        onConfirm={handleAlertConfirm}
      />
    </>
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
