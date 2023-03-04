import React, {useState} from 'react';
import {ScrollView, StyleSheet, Image, Alert} from 'react-native';
import * as yup from 'yup';

import {NavigationProp} from '@react-navigation/native';
import {register} from '~/Firebase/actions';

import {Input, SubmitButton, Text} from '~/Components';
import {RootStackParamList} from '~/Navigation/AuthNavigator/AuthNavigator';

import Logo from '~/Assets/Images/Logo.png';
import {colors} from '~/utils/colors';

const registerSchema = yup.object().shape({
  displayName: yup.string().required('Display Name is required'),
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  verifyPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Please confirm your password'),
});

type validatedFormDataType =
  | undefined
  | {
      displayName: string;
      email: string;
      password: string;
      verifyPassword?: string;
    };

type RegisterProps = {
  navigation: NavigationProp<RootStackParamList, 'Login'>;
};

const Register = ({navigation}: RegisterProps) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    verifyPassword: '',
    displayName: '',
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
      // Validate the form data
      const validatedFormData: validatedFormDataType =
        await registerSchema.validate(values, {
          abortEarly: false,
        });

      // Submit the validated form data to Firebase
      if (validatedFormData) {
        await register(validatedFormData);
      }

      //   // Navigate to the main app screen
      //   navigation.navigate('Main');
    } catch (error) {
      // Handle the validation error
      if (error instanceof yup.ValidationError) {
        Alert.alert(`${error.inner[0]?.message}`);
      } else {
        Alert.alert('Conection Error - Please try again later');
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Logo} style={styles.image} resizeMode="contain" />
      <Text variant="title"> Sign Up </Text>

      <Input
        value={values?.displayName}
        onChange={handleInputChange}
        placeholder="Nickname"
        name="displayName"
      />
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
      <Input
        value={values?.verifyPassword}
        onChange={handleInputChange}
        placeholder="Verify Password"
        name="verifyPassword"
        secureTextEntry
      />
      <SubmitButton onPress={handleSubmit} label="Submit" loading={loading} />
      <Text variant="link" lineHeight={40} onPress={navigateToLogin}>
        or login
      </Text>
    </ScrollView>
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

export default Register;
