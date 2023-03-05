import React, {useState} from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Input, SubmitButton, Text} from '~/Components';
import {RootStackParamList} from '~/Navigation/AuthNavigator/AuthNavigator';

import Logo from '~/Assets/Images/Logo.png';
import {colors} from '~/utils/colors';

import {handleLogin} from '~/Firebase/actions';

type LoginProps = {
  navigation: NavigationProp<RootStackParamList, 'Login'>;
};

const Login = ({navigation}: LoginProps) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = ({key, value}: {key: string; value: string}) => {
    setValues(oldValues => ({
      ...oldValues,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await handleLogin(values);
    } catch (error: unknown) {
      if (error instanceof Error) {
        Alert.alert(error?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} resizeMode="contain" />
      <Text variant="title"> Login </Text>
      <Input
        value={values?.email}
        onChange={handleInputChange}
        placeholder="Email"
        name="email"
      />
      <Input
        value={values?.password}
        onChange={handleInputChange}
        placeholder="Password"
        name="password"
        secureTextEntry
      />
      <SubmitButton onPress={handleSubmit} label="Submit" loading={loading} />
      <Text variant="link" lineHeight={40} onPress={navigateToSignUp}>
        or sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.fill,
  },
  image: {
    marginBottom: 40,
    height: '20%',
  },
});

export default Login;
