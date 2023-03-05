import {Text as RNText, StyleSheet, TextStyle} from 'react-native';
import React from 'react';

import {colors} from '~/utils/colors';

interface TextProps {
  children: React.ReactNode;
  variant?: 'title' | 'bold' | 'link' | 'reg' | 'subtitle';
  onPress?: () => void;
  color?: string;
  align?: 'left' | 'center' | 'right';
  style?: TextStyle | TextStyle[];
  lineHeight?: number;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'reg',
  onPress = () => null,
  color = colors.black,
  align,
  style,
  lineHeight,
}) => {
  const textStyle = {
    ...textStyles[variant],
    align,
    color,
    ...(lineHeight && {lineHeight}),
  };

  return (
    <RNText onPress={onPress} style={[textStyle, style]}>
      {children}
    </RNText>
  );
};

const textStyles = StyleSheet.create({
  reg: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'normal',
  },
  bold: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    lineHeight: 34,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 26,
    lineHeight: 30,
    marginVertical: 10,
  },
  link: {
    textDecorationLine: 'underline',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'normal',
  },
});

export default Text;
