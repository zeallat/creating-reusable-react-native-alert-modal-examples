import {View} from 'react-native';
import {Child1} from './Child1';
import {Child2} from './Child2';
import {Child3} from './Child3';
import React from 'react';

export const WithoutUseModalExample = () => {
  return (
    <View>
      <Child1 />
      <Child2 />
      <Child3 />
    </View>
  );
};
