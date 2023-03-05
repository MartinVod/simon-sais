import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/core';

import Sound from 'react-native-sound';
import {StyleSheet, View} from 'react-native';

import {Text, Spinner} from '~/Components';
import ColorItem from './ColorItem';
import {updateScoreboard} from '~/Firebase/actions';

import {colors as colorPalette} from '~/utils/colors';
import {colorItem, colorObject} from '~/Types';
import {HomeStackParamList} from '~/Navigation/HomeNavigator/HomeNavigator';

interface ColorsContainerProps {
  colors: colorObject;
  round: number;
  setRound: React.Dispatch<React.SetStateAction<number>>;
}

type SoundMapping = Record<string, Sound>;

const ColorsContainer = ({colors, round, setRound}: ColorsContainerProps) => {
  const [currentColor, setCurrentColor] = useState<string | null>(null);
  const [sequence, setSequence] = useState<string[]>([]);
  const [playerSequence, setPlayerSequence] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  Sound.setCategory('Ambient');

  const createSoundClass = useCallback((colorsArray: colorItem[]) => {
    return colorsArray.reduce((soundObject, color) => {
      if (color?.sound) {
        return {
          ...soundObject,
          [color.name]: new Sound(color.sound, Sound.MAIN_BUNDLE, err => {
            if (err) {
              return;
            }
          }),
        };
      } else {
        return {
          ...soundObject,
        };
      }
    }, {});
  }, []);

  const [sounds, setSounds] = useState<SoundMapping>({});

  useEffect(() => {
    if (Object.values(colors)?.length > 0) {
      setSounds(createSoundClass(Object.values(colors)));
    }
    setSequence([]);
    setPlayerSequence([]);
    setRound(0);
  }, [colors, createSoundClass]); //eslint-disable-line react-hooks/exhaustive-deps

  const highlightColor = async (color: string) => {
    if (sounds[color]) {
      sounds[color].play(success => {
        if (success) {
        } else {
        }
      });
    }
    setCurrentColor(color);
    setTimeout(() => {
      setCurrentColor(null);
    }, 400);
  };

  const handleGameOver = async () => {
    try {
      setLoading(true);
      await updateScoreboard(round);
    } catch (error) {
      console.error('error updating scoreboard', error);
    } finally {
      setLoading(false);

      //@ts-ignore
      navigation.navigate('GameOverScreen', {score: round});
    }
  };

  const handleColorPress = async (color: string) => {
    const newPlayerSequence: string[] = [...playerSequence, color];
    await highlightColor(color);
    setPlayerSequence(newPlayerSequence);
    if (!checkSequence(newPlayerSequence)) {
      handleGameOver();
    } else if (newPlayerSequence.length === sequence.length) {
      setRound(round + 1);
      setPlayerSequence([]);
      generateSequence();
    }
  };

  const playSequence = (sequenceToPlay: string[]) => {
    let i = 0;
    const intervalId = setInterval(() => {
      highlightColor(sequenceToPlay[i]);
      i++;
      if (i >= sequenceToPlay.length) {
        clearInterval(intervalId);
      }
    }, 1200);
  };

  const generateSequence = () => {
    let randomIndex = Math.floor(Math.random() * Object.keys(colors)?.length); //*4 //*6 || *9
    //black is placeholder for difficult mode
    if (Object.keys(colors)[randomIndex] !== 'black') {
      const newSequence = [...sequence, Object.keys(colors)[randomIndex]];
      setSequence(newSequence);
      playSequence(newSequence);
    } else {
      generateSequence();
    }
  };

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setRound(1);
    generateSequence();
  };

  const resetGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setRound(0);
  };

  const checkSequence = (newPlayerSequence: string[]) => {
    for (let i = 0; i < newPlayerSequence.length; i++) {
      if (newPlayerSequence[i] !== sequence[i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <View style={styles.colorContainer}>
      {loading ? (
        <>
          <Text variant="title">Game Over</Text>
          <Spinner />
        </>
      ) : (
        Object.values(colors).map(({name, height, width}) => (
          <ColorItem
            {...{name, height, width, currentColor}}
            action={handleColorPress}
            key={name}
          />
        ))
      )}

      <View style={[styles.action, styles.black]}>
        {round === 0 ? (
          <Text style={styles.buttonText} onPress={() => startGame()}>
            Start
          </Text>
        ) : (
          <Text style={styles.buttonText} onPress={() => resetGame()}>
            Reset
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colorPalette.black,
    borderWidth: 10,
    borderStyle: 'solid',
    borderColor: colorPalette.black,
    height: 270,
    width: 270,
    borderRadius: 270,
    overflow: 'hidden',
    position: 'relative',
  },
  action: {
    borderRadius: 50,
    height: '40%',
    width: '40%',
    position: 'absolute',
    marginHorizontal: 'auto',
    left: '30%',
    right: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colorPalette.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  black: {
    backgroundColor: colorPalette.black,
  },
});

export default ColorsContainer;
