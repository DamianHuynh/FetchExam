import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {StatusBar} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './src/components/CustomTabBar/CustomTabBar';
import DummyScreen from './src/screens/DummyScreen';
import HomeScreen from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={DummyScreen} />
        <Tab.Screen name="Card" component={DummyScreen} />
        <Tab.Screen name="Profile" component={DummyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
