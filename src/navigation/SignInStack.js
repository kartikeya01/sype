import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import userProfileScreen from '../screens/userProfile';

const Stack = createStackNavigator();

export default function SignInStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comments" component={userProfileScreen} />
        <Stack.Screen name="UserProfile" component={userProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
