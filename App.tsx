/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import MainNavigator from './src/Navigation/MainNavigator/MainNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {colors} from '~/utils/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.fill} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        <MainNavigator />
      </ScrollView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fill,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
});

export default App;
