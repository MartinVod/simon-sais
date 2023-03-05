import React, {useState, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {GAME_SETUP} from '~/utils/constants';
import DifficultyButton from './DifficultyButton';
import ColorsContainer from './ColorsContainer';
import {difficultiesType, colorObject} from '~/Types';

const Simon = () => {
  const [difficulty, setDifficulty] = useState<difficultiesType>('easy');
  const [round, setRound] = useState(0);

  const colors: colorObject = useMemo(
    () => GAME_SETUP[difficulty],
    [difficulty],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simon Says</Text>
      <View style={styles.difficultyContainer}>
        <DifficultyButton {...{difficulty, setDifficulty, label: 'easy'}} />
        <DifficultyButton {...{difficulty, setDifficulty, label: 'medium'}} />
        <DifficultyButton {...{difficulty, setDifficulty, label: 'hard'}} />
      </View>

      <Text style={styles.subtitle}>Round: {round}</Text>
      <ColorsContainer {...{colors, round, setRound}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'inherit',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default Simon;
