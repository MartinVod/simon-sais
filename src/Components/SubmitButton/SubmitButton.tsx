import {TouchableOpacity, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import React from 'react';

import Text from '../Text/Text';
import Spinner from '../Spinner/Spinner';

import {colors} from '~/utils/colors';

interface SubmitButtonProps {
  onPress: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle | TextStyle[];
  label: string;
  disabled?: boolean;
  loading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  containerStyle,
  labelStyle,
  label,
  disabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, containerStyle]}
      disabled={disabled || loading}
      onPress={onPress}>
      <Text
        variant="bold"
        style={[styles.labelText, labelStyle ? labelStyle : {}]}>
        {label}
      </Text>
      {loading && <Spinner />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: '75%',
    borderRadius: 25,
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '4%',
    backgroundColor: colors.solid,
  },
  labelText: {},
});

export default SubmitButton;
