import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from '../AuthNavigator/AuthNavigator';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="AuthNavigator">
      <Stack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
