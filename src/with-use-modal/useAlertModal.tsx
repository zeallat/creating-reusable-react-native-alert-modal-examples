import {createUseModal} from 'react-native-use-modal';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const useAlertModal = createUseModal<
  void,
  {title: string; message: string}
>(({confirm, param}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{param.title}</Text>
      <Text style={styles.messageText}>{param.message}</Text>
      <TouchableOpacity style={styles.confirmButton} onPress={confirm}>
        <Text style={styles.confirmButtonText}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 14,
  },
  titleText: {
    fontSize: 20,
  },
  messageText: {
    fontSize: 14,
    marginTop: 4,
  },
  confirmButton: {
    alignSelf: 'center',
    backgroundColor: '#2a9d8f',
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginTop: 16,
    borderRadius: 8,
  },
  confirmButtonText: {
    color: '#fff',
  },
});
