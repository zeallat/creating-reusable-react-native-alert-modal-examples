import {View} from 'react-native';
import {Child1} from './Child1';
import {Child2} from './Child2';
import React from 'react';

export const WithoutUseModalExample = () => {
  return (
    <View>
      <Child1 />
      <Child2 />
    </View>
  );
};
