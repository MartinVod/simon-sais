import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {colors} from '~/utils/colors';

interface SubmitButtonProps {
  onPress: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  label: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  containerStyle,
  labelStyle,
  label,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, containerStyle]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.labelText, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: '75%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: colors.solid,
  },
  labelText: {},
});

export default SubmitButton;
