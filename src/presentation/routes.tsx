import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginPage} from './pages/login';
import {RegisterPage} from './pages/register';

const Stack = createStackNavigator();

export const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="register">
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="register" component={RegisterPage} />
    </Stack.Navigator>
  </NavigationContainer>
);
