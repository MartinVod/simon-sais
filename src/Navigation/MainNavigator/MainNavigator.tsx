import React, {useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '~/Firebase/init';

import AuthNavigator from '../AuthNavigator/AuthNavigator';
// import HomeNavigator from '../HomeNavigator/HomeNavigator';
import TabNavigator from '../TabNavigator/TabNavigator';

function MainNavigator() {
  const [authenticated, setAuthenticated] = useState(false);

  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in

      setAuthenticated(true);
      // ...
    } else {
      // User is signed out
      setAuthenticated(false);
    }
  });
  return authenticated ? <TabNavigator /> : <AuthNavigator />;
}

export default MainNavigator;
