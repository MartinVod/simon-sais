import React, {useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '~/Firebase/init';

import AuthNavigator from '../AuthNavigator/AuthNavigator';
import HomeNavigator from '../HomeNavigator/HomeNavigator';

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
  return authenticated ? <HomeNavigator /> : <AuthNavigator />;
}

export default MainNavigator;
