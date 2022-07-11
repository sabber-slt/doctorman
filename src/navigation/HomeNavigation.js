import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/root/HomeScreen';
import DetailScreen from '../screens/root/DetailScreen';
import CityScreen from '../screens/root/CityScreen';
import DocProfileScreen from '../screens/root/DocProfileScreen';
import CommentScreen from '../screens/root/CommentScreen';
import MagItemsScreen from '../screens/root/MagItemsScreen';
import MagScreen from '../screens/root/MagScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DocProfile"
        component={DocProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="City"
        component={CityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comment"
        component={CommentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MagItems"
        component={MagItemsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mag"
        component={MagScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
