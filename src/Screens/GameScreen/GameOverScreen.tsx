import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '~/Navigation/HomeNavigator/HomeNavigator';
import {Text, ScoreboardTable} from '~/Components';
import {colors} from '~/utils/colors';

type GameOverScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'GameOverScreen'
>;

const GameOverScreen: React.FC<GameOverScreenProps> = ({route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        <Text variant="title">Game Over</Text>
        <Text variant="subtitle">{`Your score: ${
          route?.params?.score || 0
        }`}</Text>
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

export default GameOverScreen;
