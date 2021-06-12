import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

export const AlertModal = ({
  message,
  title,
  visible,
  onConfirm,
}: {
  title: string;
  message: string;
  visible: boolean;
  onConfirm: () => void;
}) => {
  return (
    <Modal isVisible={visible} backdropTransitionOutTiming={0}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.messageText}>{message}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
          <Text style={styles.confirmButtonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
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
