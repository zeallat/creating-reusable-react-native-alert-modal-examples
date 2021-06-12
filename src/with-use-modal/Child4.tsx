import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useLogin} from './useLogin';

export const Child4 = () => {
  const login = useLogin();
  return (
    <TouchableOpacity style={styles.container} onPress={() => login()}>
      <Text style={styles.text}>
        {'Child 4\n(show alert from another hook)'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#e9c46a',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
