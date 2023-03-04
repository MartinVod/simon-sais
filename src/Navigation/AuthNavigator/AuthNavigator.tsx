import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '~/Screens/Login/Login';

const Stack = createNativeStackNavigator();

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
    </Stack.Navigator>
  );
}

export default AuthNavigator;
