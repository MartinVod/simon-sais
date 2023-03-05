import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '~/utils/colors';

import Simon from './components/Simon';

const SimonSaysScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <Simon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    backgroundColor: colors.fill,
  },
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default SimonSaysScreen;
