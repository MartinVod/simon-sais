import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, ScoreboardTable} from '~/Components';
import {colors} from '~/utils/colors';

const Scoreboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <Text variant="title">Leader Board</Text>
        <ScoreboardTable />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fill,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  tableContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default Scoreboard;
