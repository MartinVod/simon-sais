import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '~/Screens';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
