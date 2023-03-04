import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {Input, SubmitButton} from '~/Components';

import Logo from '~/Assets/Images/Logo.png';
import {colors} from '~/utils/colors';

const Login = () => {
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
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} resizeMode="contain" />
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
      <SubmitButton onPress={handleSubmit} label="Log In" disabled={loading} />
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
