import {View, TextInput as RNTextInput, StyleSheet} from 'react-native';
import React from 'react';

import {colors} from '~/utils/colors';

interface TextInputProps {
  placeholder: string;
  onChange: ({key, value}: {key: string; value: string}) => void;
  value: string;
  secureTextEntry?: boolean;
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  onChange,
  value,
  secureTextEntry,
  name,
}) => {
  return (
    <View style={styles.inputView}>
      <RNTextInput
        value={value}
        style={styles.TextInput}
        placeholder={placeholder}
        placeholderTextColor={colors.black}
        onChangeText={textValue => onChange({key: name, value: textValue})}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: colors.soft,
    borderRadius: 30,
    width: '75%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    width: '100%',
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default TextInput;
