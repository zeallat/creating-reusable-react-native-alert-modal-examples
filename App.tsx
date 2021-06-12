import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ModalProvider} from 'react-native-use-modal';
import {WithUseModalExample} from './src/with-use-modal/WithUseModalExample';
import {WithoutUseModalExample} from './src/without-use-modal/WithUseModalExample';

const App = () => {
  return (
    <ModalProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Without useModal</Text>
        <WithoutUseModalExample />
        <Text style={styles.title}>With useModal</Text>
        <WithUseModalExample />
      </View>
    </ModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    padding: 16,
    marginTop: 16,
  },
});

export default App;
