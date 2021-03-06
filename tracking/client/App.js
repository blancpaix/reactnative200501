import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvier } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

import ResolveAuth from './src/screens/ResolveAuth';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import TrackList from './src/screens/TrackList';
import TrackCreate from './src/screens/TrackCreate';
import TrackDetail from './src/screens/TrackDetail';
import Account from './src/screens/Account';

import { setNavigator } from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  ResolveAuth,
  loginFlow : createStackNavigator({
    Signup,
    Signin
  }),
  mainFlow : createBottomTabNavigator({
    TrackList,
    TrackDetail,
    TrackCreate,
    Account
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvier>
        <AuthProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </AuthProvider>
      </LocationProvier>
    </TrackProvider>
  )
}