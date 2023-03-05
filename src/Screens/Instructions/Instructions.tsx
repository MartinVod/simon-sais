import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import Logo from 'Assets/Images/Logo.png';

const Instructions = () => {
  return (
    <View style={styles.container}>
      <Text>Instructions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
});

export default Instructions;
