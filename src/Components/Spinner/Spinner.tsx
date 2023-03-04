import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

import {colors} from '~/utils/colors';

const Spinner = ({size}: {size?: 'small' | 'large'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
