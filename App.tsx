import React from 'react';
import {ScrollView, StatusBar, StyleSheet} from 'react-native';

import MainNavigator from './src/Navigation/MainNavigator/MainNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {colors} from '~/utils/colors';

import './src/Firebase/init';

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
  },
});

export default App;
