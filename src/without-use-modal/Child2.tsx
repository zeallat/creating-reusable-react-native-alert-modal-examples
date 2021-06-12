import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {AlertModal} from './AlertModal';

export const Child2 = () => {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleAlertConfirm = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setAlertVisible(true)}>
        <Text style={styles.text}>Child 2</Text>
      </TouchableOpacity>
      <AlertModal
        title={'⚠️Alert'}
        message={'Subscription expires in one week'}
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
