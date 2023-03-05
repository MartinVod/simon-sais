import React from 'react';

import {StyleSheet} from 'react-native';
import {Text} from '~/Components';
import {colors} from '~/utils/colors';
import {difficultiesType} from '~/Types';

interface DifficultyProps {
  difficulty: difficultiesType;
  label: difficultiesType;
  setDifficulty: React.Dispatch<React.SetStateAction<difficultiesType>>;
}

const DifficultyButton = ({
  difficulty,
  setDifficulty,
  label,
}: DifficultyProps) => {
  return (
    <Text
      variant="bold"
      style={[
        styles.difficultyButton,
        difficulty === label ? styles.selectedButton : {},
      ]}
      onPress={() => setDifficulty(label)}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  difficultyButton: {
    padding: 13,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.black,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
  selectedButton: {
    backgroundColor: colors.solid,
  },
});

export default DifficultyButton;
