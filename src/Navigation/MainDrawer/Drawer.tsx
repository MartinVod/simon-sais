import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from 'Screens/Login/Login';
import Instructions from 'Screens/Instructions/Instructions';

const Drawer = createDrawerNavigator();

function SideDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{drawerLabel: 'Login'}}
      />
      <Drawer.Screen
        name="Instructions"
        component={Instructions}
        options={{drawerLabel: 'Instructions'}}
      />
    </Drawer.Navigator>
  );
}

export default SideDrawer;
