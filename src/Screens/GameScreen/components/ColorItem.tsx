import React from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';

interface ColorItemProps {
  name: string;
  height: string;
  width: string;
  currentColor: string | null;
  action: ((color: string) => Promise<void>) | (() => void);
  children?: React.ReactNode;
}

const ColorItem = ({
  name,
  height,
  width,
  action,
  currentColor,
  children,
}: ColorItemProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.color,
        //eslint-disable-next-line react-native/no-inline-styles
        {
          opacity: currentColor === name ? 1 : 0.6,
          height,
          width,
          backgroundColor: name,
        },
      ]}
      onPress={() => action(name)}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  color: {
    width: '45%',
    height: '45%',
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
});

export default ColorItem;
