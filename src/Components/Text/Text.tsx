import {Text as RNText, StyleSheet, TextStyle} from 'react-native';
import React from 'react';

import {colors} from '~/utils/colors';

interface TextProps {
  children: React.ReactNode;
  variant?: 'title' | 'bold' | 'link' | 'reg';
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
  //   ([
  //     textStyles.reg,
  //     variant === 'bold' && textStyles.bold,
  //     variant === 'title' && textStyles.title,
  //     variant === 'link' && textStyles.link,
  //     color && {color},
  //     align && {textAlign: align},
  //     lineHeight && {lineHeight},
  //   ]);

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
    fontWight: 500,
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
